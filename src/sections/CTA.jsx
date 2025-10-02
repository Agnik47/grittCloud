import React, { useEffect } from "react";

const CalEmbed = () => {
  useEffect(() => {
    // Cal.com embed initialization script
    (function (C, A, L) {
      let p = function (a, ar) {
        a.q.push(ar);
      };
      let d = C.document;
      C.Cal =
        C.Cal ||
        function () {
          let cal = C.Cal;
          let ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api = function () {
              p(api, arguments);
            };
            const namespace = ar[1];
            api.q = api.q || [];
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else {
              p(cal, ar);
            }
            return;
          }
          p(cal, ar);
        };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    if (window.Cal) {
      window.Cal("init", "gritt-intro", { origin: "https://app.cal.com" });
      window.Cal.ns["gritt-intro"]("inline", {
        elementOrSelector: "#my-cal-inline-gritt-intro",
        config: { layout: "month_view" },
        calLink: "grittai/gritt-intro",
      });
      window.Cal.ns["gritt-intro"]("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    }
  }, []);

  return (
    <section
      id="contact"
      className="section-anchor relative py-32 bg-ink section-blend"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight mb-8 text-white">
          Schedule your free consultation
        </h2>
        <p className="text-white/70 text-lg leading-relaxed mb-12">
          Book a quick 25-minute call to scope your first automation and uncover
          quick-win opportunities.
        </p>

        {/* Cal.com Widget */}
        <div className="w-full h-[700px] md:h-[800px] rounded-2xl overflow-hidden bg-ink/80 border-none ">
          <div
            style={{ width: "100%", height: "100%", overflow: "auto" }}
            id="my-cal-inline-gritt-intro"
          />
        </div>

        <div className="mt-6 text-[11px] text-white/40">
          We respond inside 1 business day. Zero sales pressure.
        </div>
      </div>
    </section>
  );
};

export default CalEmbed;
