"use client";
import { useState } from "react";

interface LeadFormProps {
  onSuccess: () => void;
}

export default function LeadForm({ onSuccess }: LeadFormProps) {
  const [form, setForm] = useState({ name: "", phone: "", reason: "" });
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async () => {
    if (!form.name || !form.phone || !form.reason) return;
    setStatus("loading");

    const res = await fetch("/api/submit-lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      localStorage.setItem("nextin_access", "true");
      onSuccess();
    } else {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-surface">
      <div className="bg-surface-container-lowest p-8 rounded-2xl border border-surface-container-highest/15 w-full max-w-md">
        <h2 className="font-serif text-3xl text-foreground mb-2">Welcome to Nextin</h2>
        <p className="text-foreground/50 mb-6 text-sm font-sans">
          Please fill in your details to continue
        </p>

        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="border border-surface-container-highest/20 bg-surface rounded-xl px-4 py-3 text-foreground font-sans focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="border border-surface-container-highest/20 bg-surface rounded-xl px-4 py-3 text-foreground font-sans focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
          <textarea
            placeholder="Why are you visiting today?"
            value={form.reason}
            onChange={(e) => setForm({ ...form, reason: e.target.value })}
            rows={3}
            className="border border-surface-container-highest/20 bg-surface rounded-xl px-4 py-3 text-foreground font-sans focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
          />
          <button
            onClick={handleSubmit}
            disabled={status === "loading"}
            className="bg-primary text-surface-container-lowest py-3 rounded-xl font-sans font-semibold uppercase tracking-widest text-sm hover:-translate-y-1 disabled:opacity-50 transition-all duration-500"
          >
            {status === "loading" ? "Please wait..." : "Continue →"}
          </button>
        </div>

        {status === "error" && (
          <p className="mt-4 text-red-500 text-sm text-center font-sans">
            Something went wrong. Please try again.
          </p>
        )}
      </div>
    </div>
  );
}