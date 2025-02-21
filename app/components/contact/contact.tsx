"use client";
import { useEffect, useState } from "react";
import FormInput from "@/app/components/Input";
import { ChevronRight } from "lucide-react";
import { Turnstile } from "next-turnstile";
import { submitContactForm } from "./contact.action";

const DrawOutlineButton = ({
  children,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...rest}
      className="group border border-border relative px-4 py-2 font-medium text-foreground transition-colors duration-[400ms] hover:text-primary-hover"
    >
      <span>{children}</span>
      <span className="absolute left-0 top-0 h-[2px] w-0 bg-primary-hover transition-all duration-100 group-hover:w-full" />
      <span className="absolute right-0 top-0 h-0 w-[2px] bg-primary-hover transition-all delay-100 duration-100 group-hover:h-full" />
      <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-primary-hover transition-all delay-200 duration-100 group-hover:w-full" />
      <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-primary-hover transition-all delay-300 duration-100 group-hover:h-full" />
    </button>
  );
};

export default function Contact() {
  const [turnstileToken, setTurnstileToken] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  if (!siteKey) {
    console.error("Turnstile site key is not configured");
    return (
      <div className="text-red-500">
        Error: Turnstile is not properly configured
      </div>
    );
  }

  useEffect(() => {
    document.title = "Contact - Shivam Kumar";
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setIsSubmitting(true);
    setFormStatus({ type: null, message: "" });

    try {
      if (!turnstileToken) {
        throw new Error("Please complete the Turnstile verification");
      }

      const formData = new FormData(form);
      formData.append("turnstileToken", turnstileToken);
      
      const response = await submitContactForm(formData);
      
      if (response.success) {
        setFormStatus({
          type: "success",
          message: response.message
        });
        form.reset();
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      setFormStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Something went wrong"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="container pb-6" id="contact">
      <h1 className="text-2xl font-bold text-foreground">
        Let&apos;s have a Chat !
      </h1>

      <div className="mt-8 space-y-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormInput
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              required
            />

            <FormInput
              type="email"
              id="email"
              name="email"
              placeholder="Email address"
              required
            />
          </div>

          <FormInput
            as="textarea"
            id="message"
            name="message"
            placeholder="Message"
            rows={6}
            required
          />

          <div className="flex flex-col items-end gap-4">
            {formStatus.message && (
              <p
                className={`text-sm ${
                  formStatus.type === "success" ? "text-green-500" : "text-red-500"
                }`}
              >
                {formStatus.message}
              </p>
            )}
            <Turnstile
              siteKey={siteKey}
              onVerify={(token: string) => setTurnstileToken(token)}
              onExpire={() => setTurnstileToken("")}
              id="my-turnstile"
            />
            <DrawOutlineButton type="submit" disabled={isSubmitting}>
              <div className="flex items-center gap-2">
                {isSubmitting ? "Sending..." : "Send Message"}
                <ChevronRight className="w-4 h-4 text-primary-hover opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-5 group-hover:translate-x-0" />
              </div>
            </DrawOutlineButton>
          </div>
        </form>
      </div>
    </section>
  );
}
