"use client";
import React, { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setError(null);

    // Simple validation
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Please fill in all fields.");
      setStatus("idle");
      return;
    }
    // Simulate async send (replace with real API)
    try {
      await new Promise(res => setTimeout(res, 900));
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <main className="max-w-lg mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-blue-700 mb-2">Contact</h1>
      <p className="text-gray-600 mb-4 text-base">
        Reach us at <a href="mailto:info@artistly.com" className="text-blue-600 underline">info@artistly.com</a>
      </p>
      <form
        className="card-glass p-5 space-y-3"
        onSubmit={handleSubmit}
        aria-busy={status === "loading"}
        autoComplete="off"
      >
        <div className="flex gap-2">
          <input
            className="border rounded px-3 py-2 w-1/2"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            disabled={status === "loading"}
            required
            aria-label="Your Name"
          />
          <input
            className="border rounded px-3 py-2 w-1/2"
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            disabled={status === "loading"}
            required
            aria-label="Your Email"
          />
        </div>
        <textarea
          className="border rounded px-3 py-2 w-full"
          name="message"
          rows={3}
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          disabled={status === "loading"}
          required
          aria-label="Your Message"
        />
        {error && <div className="text-red-600 text-sm">{error}</div>}
        {status === "success" && (
          <div className="text-green-600 text-sm">Message sent! We'll reply soon.</div>
        )}
        <button
          type="submit"
          className="btn-modern w-full justify-center"
          disabled={status === "loading"}
        >
          {status === "loading" ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"/>
              </svg>
              Sending...
            </span>
          ) : (
            "Send"
          )}
        </button>
      </form>
      <div className="mt-6 text-xs text-gray-500 text-center">
        <span>Artistly HQ · Mumbai, India</span>
      </div>
      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center text-sm text-gray-600">
        <a href="https://twitter.com/artistly" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">Twitter</a>
        <a href="https://instagram.com/artistly" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">Instagram</a>
        <a href="https://www.linkedin.com/company/artistly" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition">LinkedIn</a>
      </div>
    </main>
  );
}