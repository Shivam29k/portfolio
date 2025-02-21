"use server";

import { validateTurnstileToken } from "next-turnstile";
import { v4 } from "uuid";
import sendMail from "./email.action";

interface CloudflareTurnstileResponse {
    success: boolean;
    'error-codes'?: string[];
    challenge_ts?: string;
    hostname?: string;
    action?: string;
    cdata?: string;
    messages?: string[];
    metadata?: {
        result_with_testing_key?: boolean;
    };
}

export async function submitContactForm(formData: FormData) {
  try {
    // 1. Get form data
    const { name, email, message, turnstileToken } = Object.fromEntries(formData);
    
    // 2. Verify Turnstile token
    if (!turnstileToken) {
      return {
        success: false,
        message: "Verification token is required."
      };
    }

    if (!process.env.TURNSTILE_SECRET_KEY) {
      return {
        success: false,
        message: "Turnstile secret key is not configured"
      };
    }

    const result = await validateTurnstileToken({
      token: turnstileToken as string,
      secretKey: process.env.TURNSTILE_SECRET_KEY,
      idempotencyKey: v4(),
    }) as CloudflareTurnstileResponse;

    if (!result.success) {
      console.log("Turnstile verification failed");
      console.log(result)
      if (result['error-codes']?.includes("timeout-or-duplicate")) {
        console.log("Timeout or duplicate");
        return {
          success: false,
          message: "Verification failed due to timeout or duplicate, please refresh the page and try again",
        };
      }
      return {
        success: false,
        message: "Turnstile verification failed"
      };
    }

    // 3. Send email
    console.log("Sending email with:", { name, email, message });
    await sendMail(name as string, email as string, message as string);

    return {
      success: true,
      message: "Message sent successfully"
    };

  } catch (error) {
    console.error("Form submission error:", error);
    return {
      success: false,
      message: error instanceof Error ? error.message : "Something went wrong"
    };
  }
} 