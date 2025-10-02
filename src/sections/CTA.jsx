import { useState } from "react";

export default function CTA() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const myForm = e.target;
    const formData = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        setIsSubmitted(true);
        setIsSubmitting(false);
        myForm.reset();
      })
      .catch((error) => {
        alert(`Error: ${error.message}`);
        setIsSubmitting(false);
      });
  };

  return (
  <section id="contact" className="section-anchor relative py-32 bg-ink section-blend">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight mb-8">
          Scope your first automation.
        </h2>
        <p className="text-white/70 text-lg leading-relaxed mb-10">
          We run a free 25‑minute diagnostic call to understand your process
          friction & quantify a quick‑win candidate.
        </p>
        
        {isSubmitted ? (
          <div className="mx-auto max-w-xl p-8 rounded-xl bg-accent/10 border border-accent/30">
            <p className="text-accent text-lg font-medium mb-2">Thank you for your submission!</p>
            <p className="text-white/70">We'll get back to you within 1 business day.</p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="mt-4 text-sm text-accent hover:text-accent2 underline"
            >
              Submit another request
            </button>
          </div>
        ) : (
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit}
            className="mx-auto max-w-xl grid gap-4 md:grid-cols-5 text-left"
          >
            <input type="hidden" name="form-name" value="contact" />
            <input
              required
              name="firstName"
              placeholder="First name"
              type="text"
              className="md:col-span-2 px-5 py-4 rounded-xl bg-ink/80 border border-white/15 focus:outline-none focus:ring-2 focus:ring-accent/60 placeholder:text-white/30 text-sm text-white"
            />
            <input
              required
              name="email"
              placeholder="Work email"
              type="email"
              className="md:col-span-3 px-5 py-4 rounded-xl bg-ink/80 border border-white/15 focus:outline-none focus:ring-2 focus:ring-accent/60 placeholder:text-white/30 text-sm text-white"
            />
            <input
              required
              name="company"
              placeholder="Company"
              className="md:col-span-3 px-5 py-4 rounded-xl bg-ink/80 border border-white/15 focus:outline-none focus:ring-2 focus:ring-accent/60 placeholder:text-white/30 text-sm text-white"
            />
            <select
              required
              name="interest"
              className="md:col-span-2 px-5 py-4 rounded-xl bg-ink/80 border border-white/15 focus:outline-none focus:ring-2 focus:ring-accent/60 text-sm text-white/80"
              defaultValue=""
            >
              <option value="" disabled>
                Select interest
              </option>
              <option value="agentic">Agentic business operation</option>
              <option value="marketing">Marketing with AI</option>
            </select>
            <button 
              type="submit"
              disabled={isSubmitting}
              className="md:col-span-5 mt-2 px-6 py-4 rounded-xl bg-accent hover:bg-accent2 text-sm font-medium tracking-wide disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
            >
              {isSubmitting ? "Submitting..." : "Request Diagnostic"}
            </button>
          </form>
        )}
        
        <div className="mt-6 text-[11px] text-white/40">
          We respond inside 1 business day. Zero sales pressure.
        </div>
      </div>
    </section>
  );
}
