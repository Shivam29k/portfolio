import { InputHTMLAttributes } from "react";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  as?: "input" | "textarea";
  rows?: number;
}

export default function FormInput({ 
  as = "input", 
  className = "", 
  rows = 6,
  ...props 
}: FormInputProps) {
  const ClassName = "w-full px-4 py-3 bg-transparent/5 border-b border-accent/30 focus:border-primary outline-none transition-colors duration-200 text-foreground placeholder:text-foreground-secondary";
  
  if (as === "textarea") {
    return (
      <textarea
        {...(props as InputHTMLAttributes<HTMLTextAreaElement>)}
        rows={rows}
        className={`${ClassName} ${className}`}
      />
    );
  }

  return (
    <input
      {...(props as InputHTMLAttributes<HTMLInputElement>)}
      className={`${ClassName} ${className}`}
    />
  );
} 