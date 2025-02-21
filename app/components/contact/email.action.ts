"use server";
import React from "react";
import { Resend } from "resend";
import { EmailTemplate } from "./email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

const sendMail = async (name: string, email: string, message: string) => {
  try {
    const { data, error } = await resend.emails.send({
      from: `${name} <portfolio@shivamk.tech>`,
      to: ["skumarshivam50@gmail.com", "shivamkg29@gmail.com"],
      subject: "Hello world!",
      react: EmailTemplate({ name, email, message }) as React.ReactNode,
    });
    if (error) {
      console.error(error);
      throw new Error("Failed to send email");
    }
    console.log(data);
  } catch (error) {
    console.error(error);
    throw new Error("Failed to send email");
  }
};

export default sendMail;


