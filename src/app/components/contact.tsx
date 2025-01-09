"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Button } from "@/components/ui/button";

function Form() {
  const [state, handleSubmit] = useForm("mjkvlkgk");

  if (state.succeeded) {
    return <p className="text-center text-lg md:text-xl">Thanks for reaching out! We&apos;ll get back to you soon.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="tracking-widest space-y-4 w-full max-w-2xl px-4">
      <div>
        <label htmlFor="email" className="block text-lg md:text-xl font-medium text-white">
          Email <span className="text-orange-400">Address</span>
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          className="p-2 mt-1 text-black font-sans italic block w-full rounded-md shadow-sm"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <div>
        <label htmlFor="message" className="block text-lg md:text-xl font-medium text-white">
          Your <span className="text-orange-400">Message</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          className="p-2 mt-1 h-48 text-black font-sans italic block w-full rounded-md border-orange-400 focus:border-orange-600 focus:ring-orange-600"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>
      <Button type="submit" disabled={state.submitting} className="bg-orange-500 hover:bg-orange-600 text-black">Submit</Button>
    </form>
  );
}

export default function ContactForm() {
  return (
    <section
      id="form"
      className="min-h-screen flex flex-col md:flex-row overflow-x-hidden items-center justify-center p-4 gap-8"
    >
      <h1 className="text-center text-3xl md:text-4xl lg:text-6xl uppercase">
        Get in <span className="text-orange-500">Contact</span>
      </h1>
      <Form />
    </section>
  );
}
