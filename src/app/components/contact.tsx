"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

function Form() {
  const [state, handleSubmit] = useForm("mjkvlkgk");

  if (state.succeeded) {
    return (
      <motion.p 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        className="text-center text-xl md:text-2xl text-green-400 drop-shadow-[0_0_10px_rgba(74,222,128,0.5)] bg-green-500/10 p-8 rounded-2xl border border-green-500/20"
      >
        Thanks for reaching out! We&apos;ll get back to you soon.
      </motion.p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="tracking-widest space-y-6 w-full max-w-2xl px-6 py-8 bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
      <div>
        <label htmlFor="email" className="block text-lg md:text-xl font-medium text-gray-200 mb-2">
          Email <span className="text-orange-500 text-shadow-glow">Address</span>
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          className="p-3 text-white bg-white/5 font-sans block w-full rounded-lg border border-white/10 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/50 transition-all shadow-inner outline-none"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <div>
        <label htmlFor="message" className="block text-lg md:text-xl font-medium text-gray-200 mb-2">
          Your <span className="text-orange-500 text-shadow-glow">Message</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          className="p-3 h-48 text-white bg-white/5 font-sans block w-full rounded-lg border border-white/10 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/50 transition-all shadow-inner outline-none resize-none"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>
      <Button 
        type="submit" 
        disabled={state.submitting} 
        className="w-full text-lg bg-orange-500 hover:bg-orange-600 text-black py-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-[0_0_15px_rgba(249,115,22,0.4)] disabled:opacity-50 disabled:hover:scale-100"
      >
        {state.submitting ? 'Sending...' : 'Submit'}
      </Button>
    </form>
  );
}

export default function ContactForm() {
  return (
    <section
      id="form"
      className="min-h-screen flex flex-col items-center justify-center p-4 py-16 relative"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-center gap-12"
      >
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-7xl uppercase font-bold tracking-wider mb-6">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600 drop-shadow-[0_0_10px_rgba(234,88,12,0.8)]">Contact</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl font-sans max-w-md mx-auto md:mx-0">
            Have a question or want to make a reservation? Send us a message and we will get back to you as soon as possible.
          </p>
        </div>
        <div className="flex-1 w-full flex justify-center">
          <Form />
        </div>
      </motion.div>
    </section>
  );
}
