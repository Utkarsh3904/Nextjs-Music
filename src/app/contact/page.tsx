"use client";
import React, { useState, useEffect } from "react";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";

/* ── Toast ── */
function Toast({ visible, onClose }: { visible: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!visible) return;
    const t = setTimeout(onClose, 4000);
    return () => clearTimeout(t);
  }, [visible, onClose]);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-2xl border border-white/10 bg-neutral-900 px-5 py-4 shadow-2xl transition-all duration-500 ${
        visible ? "translate-y-0 opacity-100 scale-100" : "translate-y-4 opacity-0 scale-95 pointer-events-none"
      }`}
    >
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M2.5 7l3 3 6-6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div>
        <p className="text-xs font-medium uppercase tracking-widest text-emerald-400">Success</p>
        <p className="text-sm text-neutral-200">Message sent! We'll be in touch soon.</p>
      </div>
      <button onClick={onClose} className="ml-4 text-neutral-500 hover:text-neutral-300 transition-colors">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
}

/* ── Contact Page ── */
export function ContactPage() {
  const [form, setForm] = useState({ email: "", message: "" });
  const [errors, setErrors] = useState<{ email?: string; message?: string }>({});
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(false);

  const validate = () => {
    const e: typeof errors = {};
    if (!form.email) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setForm({ email: "", message: "" });
      setToast(true);
    }, 1400);
  };

  return (
    <>
      <div className="relative flex min-h-screen w-full flex-col items-start justify-start overflow-hidden">
        {/* ← your exact Aceternity component, untouched */}
        <BackgroundRippleEffect />

        {/* Content sits on top, centered — mirrors the demo layout */}
        <div className="mt-40 w-full">
          <h2 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-neutral-800 md:text-4xl lg:text-7xl dark:text-neutral-100">
            Get in Touch
          </h2>
          <p className="relative z-10 mx-auto mt-4 max-w-xl text-center text-neutral-800 dark:text-neutral-500">
            Have something to say? We'd love to hear from you. Fill in the form below and we'll get back to you as soon as possible.
          </p>

          {/* ── Form Card ── */}
          <form
            onSubmit={handleSubmit}
            noValidate
            className="relative z-10 mx-auto mt-10 mb-20 w-full max-w-md rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl dark:bg-neutral-900/60"
          >
            {/* Email */}
            <div className="mb-5">
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-neutral-400">
                Email address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={(e) => { setForm(f => ({ ...f, email: e.target.value })); setErrors(er => ({ ...er, email: "" })); }}
                className={`w-full rounded-xl border bg-white/5 px-4 py-3 text-sm text-neutral-800 placeholder-neutral-500 outline-none transition-all focus:ring-2 dark:text-neutral-100 dark:placeholder-neutral-600 ${
                  errors.email
                    ? "border-red-500 focus:ring-red-500/30"
                    : "border-white/10 focus:border-white/30 focus:ring-white/10"
                }`}
              />
              {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>}
            </div>

            {/* Message */}
            <div className="mb-7">
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-neutral-400">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="What's on your mind?"
                value={form.message}
                onChange={(e) => { setForm(f => ({ ...f, message: e.target.value })); setErrors(er => ({ ...er, message: "" })); }}
                className={`w-full resize-none rounded-xl border bg-white/5 px-4 py-3 text-sm text-neutral-800 placeholder-neutral-500 outline-none transition-all focus:ring-2 dark:text-neutral-100 dark:placeholder-neutral-600 ${
                  errors.message
                    ? "border-red-500 focus:ring-red-500/30"
                    : "border-white/10 focus:border-white/30 focus:ring-white/10"
                }`}
              />
              {errors.message && <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-neutral-800 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-neutral-700 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200"
            >
              {loading ? (
                <>
                  <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeOpacity="0.3" strokeWidth="2.5" />
                    <path d="M12 3a9 9 0 0 1 9 9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                  Sending…
                </>
              ) : (
                <>
                  Send Message
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      <Toast visible={toast} onClose={() => setToast(false)} />
    </>
  );
}

export default ContactPage;