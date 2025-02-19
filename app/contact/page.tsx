"use client";
import { useEffect } from "react";
import FormInput from "@/app/components/Input";
import { ChevronRight } from "lucide-react";
import Socials from "../components/Socials";

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
  useEffect(() => {
    document.title = "Contact - Shivam Kumar";
  }, []);

  return (
    <section className="container py-6 pt-24">
      <h1 className="text-3xl md:text-4xl font-bold text-foreground">
        Let&apos;s have a Chat !
      </h1>

      <div className="mt-12 space-y-6">
        <form className="space-y-6">
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

          <div className="flex justify-end">
            <DrawOutlineButton type="submit">
              <div className="flex items-center gap-2">
                Send Message
                <ChevronRight className="w-4 h-4 text-primary-hover opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-5 group-hover:translate-x-0" />
              </div>
            </DrawOutlineButton>
          </div>
        </form>

        <div className="w-full flex justify-center pt-24">
          <Socials />
        </div>
      </div>
    </section>
  );
}
