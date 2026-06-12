import { useState, useRef, useEffect, FormEvent } from 'react';
import PageMeta from '@/components/feature/PageMeta';

/* ─── EmailJS config ───────────────────────────────────────
   Replace YOUR_PUBLIC_KEY with your EmailJS public key
   (found in EmailJS dashboard → Account → General)
   ──────────────────────────────────────────────────────── */
const EMAILJS_PUBLIC_KEY = 'fDgvdA3LWH9pU-uQm';
const EMAILJS_SERVICE_ID = 'service_bwhrn6k';
const EMAILJS_TEMPLATE_ADMIN = 'template_fnnieq8';
const EMAILJS_TEMPLATE_AUTOREPLY = 'template_5u5fj4e';

/* EmailJS browser SDK is loaded via CDN in index.html */
declare const emailjs: {
  init: (publicKey: string) => void;
  send: (
    serviceId: string,
    templateId: string,
    params: Record<string, string>
  ) => Promise<{ status: number; text: string }>;
};

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { el.classList.add('visible'); observer.unobserve(el); }
      },
      { threshold: 0.10 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [charCount, setCharCount] = useState(0);
  const headerRef = useReveal();
  const formRef = useReveal();

  // Init EmailJS once
  useEffect(() => {
    try {
      if (typeof emailjs !== 'undefined') {
        emailjs.init(EMAILJS_PUBLIC_KEY);
      }
    } catch {
      /* SDK not yet loaded */
    }
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get('name') as string;
    const email = data.get('email') as string;
    const message = data.get('message') as string;

    const templateParams: Record<string, string> = { name, email, message, to_email: 'nrossclark@gmail.com' };

    try {
      if (typeof emailjs === 'undefined') {
        throw new Error('EmailJS not loaded');
      }

      // Fire both templates in parallel
      await Promise.all([
        emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ADMIN, templateParams),
        emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_AUTOREPLY, templateParams),
      ]);

      setStatus('success');
      form.reset();
      setCharCount(0);
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
      setErrorMsg(
        'Something went wrong. Please try again or email nrossclark@gmail.com directly.'
      );
    }
  };

  return (
    <div className="bg-background-50">
      <PageMeta
        title="Contact | Nathan Clark Tenor | Book a Performance in Texas"
        description="Book Nathan Clark, a professional tenor in Texas. Available for opera performances, church services, choral concerts, and events in Waco, Houston, and across Texas. Contact for bookings and inquiries."
        canonical="/contact"
      />

      <section className="pt-28 md:pt-36 pb-20 md:pb-28 px-4 md:px-6">
        <div className="max-w-3xl mx-auto">

          {/* Header */}
          <div ref={headerRef} className="reveal text-center mb-12 md:mb-16">
            <p className="text-accent-600 font-label text-xs tracking-[0.22em] uppercase mb-3">
              Bookings &amp; Inquiries
            </p>
            <h1 className="font-heading text-4xl md:text-5xl text-foreground-950 font-semibold">
              Get in Touch
            </h1>
            <div className="mt-5 w-16 h-0.5 bg-accent-500 mx-auto rounded-full" />
            <p className="mt-5 text-foreground-600 text-sm md:text-base max-w-xl mx-auto">
              Interested in booking Nathan Clark for an opera performance, church service, choral concert, or special event in Waco, Houston, or across Texas? Fill out the form below.
            </p>
          </div>

          {/* Form card */}
          <div ref={formRef} className="reveal bg-background-50 rounded-lg border border-background-200/70 p-6 md:p-10">
            {status === 'success' ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 flex items-center justify-center mx-auto rounded-full bg-primary-100 mb-5">
                  <i className="ri-check-line text-3xl text-primary-600" />
                </div>
                <h2 className="font-heading text-xl md:text-2xl text-foreground-900 font-semibold mb-2">
                  Message Sent
                </h2>
                <p className="text-foreground-600 text-sm md:text-base mb-1">
                  Thank you for reaching out. I&rsquo;ll respond as soon as possible.
                </p>
                <p className="text-foreground-500 text-xs mb-6">
                  A confirmation has been sent to your email address.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="inline-flex items-center gap-2 px-6 py-2 bg-accent-500 hover:bg-accent-400 text-primary-950 font-medium text-sm rounded-md transition-all duration-200 cursor-pointer whitespace-nowrap"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                data-readdy-form
                className="space-y-6"
              >
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground-700 mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 text-sm border border-background-300 rounded-md bg-background-50 text-foreground-900 placeholder:text-foreground-400 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-accent-400 transition-all"
                    placeholder="Your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground-700 mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 text-sm border border-background-300 rounded-md bg-background-50 text-foreground-900 placeholder:text-foreground-400 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-accent-400 transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground-700 mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    maxLength={500}
                    rows={6}
                    onChange={(e) => setCharCount(e.target.value.length)}
                    className="w-full px-4 py-3 text-sm border border-background-300 rounded-md bg-background-50 text-foreground-900 placeholder:text-foreground-400 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-accent-400 transition-all resize-none"
                    placeholder="Tell me about your event or inquiry..."
                  />
                  <p className={`text-xs mt-1 ${charCount >= 480 ? 'text-red-500' : 'text-foreground-400'}`}>
                    {charCount}/500 characters
                  </p>
                </div>

                {/* Error */}
                {status === 'error' && (
                  <div className="p-3 rounded-md bg-red-50 border border-red-200 text-sm text-red-700">
                    {errorMsg}
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-3 bg-primary-500 hover:bg-primary-600 disabled:bg-primary-400 text-background-50 font-medium text-sm rounded-md transition-all duration-200 cursor-pointer whitespace-nowrap"
                >
                  {status === 'sending' ? (
                    <>
                      <i className="ri-loader-4-line animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <i className="ri-send-plane-line" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Direct email link */}
          <div className="mt-10 text-center">
            <p className="text-sm text-foreground-500 mb-2">Or reach out directly:</p>
            <a
              href="mailto:nrossclark@gmail.com"
              className="inline-flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700 dark:text-primary-400 transition-colors cursor-pointer font-medium"
            >
              <i className="ri-mail-line" />
              nrossclark@gmail.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
