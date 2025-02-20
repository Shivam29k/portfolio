"use server";

import { validateTurnstileToken } from "next-turnstile";
import { v4 } from "uuid";

export async function submitContactForm(formData: FormData) {
  try {
    // 1. Get form data
    const { name, email, message, turnstileToken } = Object.fromEntries(formData);
    
    // 2. Verify Turnstile token
    if (!turnstileToken) {
      return {
        success: false,
        message: "Turnstile token is required"
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
    });

    if (!result.success) {
      return {
        success: false,
        message: "Turnstile verification failed"
      };
    }

    // 3. Send email
    console.log("Sending email with:", { name, email, message });

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