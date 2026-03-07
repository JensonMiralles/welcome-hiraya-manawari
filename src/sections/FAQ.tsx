import { useState } from "react";

export function FAQ() {
  return (
    <section id="faq" className="relative overflow-hidden px-6 py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-midnight via-midnight-300/50 to-midnight" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(212,175,122,0.02)_0%,transparent_60%)]" />

      <div className="relative mx-auto max-w-3xl">
        <div className="flex flex-col items-center text-center">
          <div className="h-px w-16 bg-gradient-to-r from-champagne/20 via-champagne/50 to-champagne/20" />
          <h2 className="mt-8 font-serif text-3xl font-light tracking-wide text-ivory sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-warm-gray">
            Everything you need to know about creating your digital wedding
            invitation in the Philippines.
          </p>
        </div>

        <div className="mt-16 flex flex-col gap-3">
          {faqItems.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`border transition-all duration-500 ${
        isOpen
          ? "border-champagne/25 bg-gradient-to-br from-champagne/[0.06] to-midnight-200/60"
          : "border-white/[0.06] bg-gradient-to-br from-midnight-100/60 to-midnight-200/40 hover:border-champagne/15"
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-4 p-6 text-left"
      >
        <h3 className="font-serif text-sm font-medium tracking-wide text-ivory sm:text-base">
          {question}
        </h3>
        <span
          className={`flex h-6 w-6 shrink-0 items-center justify-center text-champagne/60 transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="h-4 w-4"
          >
            <path d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-6 text-sm leading-relaxed text-warm-gray">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

const faqItems = [
  {
    question: "What is a digital wedding invitation?",
    answer:
      "A digital wedding invitation is a beautifully designed online invitation that you can share with your guests via link, QR code, or messaging apps like Viber, Messenger, and WhatsApp. Instead of printed cards, your guests receive a personal wedding website with all the details — RSVP, venue, entourage, dress code, and more.",
  },
  {
    question: "How much does a digital wedding invitation cost in the Philippines?",
    answer:
      "Hiraya Manawari plans start at just ₱999 — a fraction of the cost of traditional printed invitations. All plans are one-time payments with no subscriptions or hidden fees. You can design your invitation for free and only pay when you're ready to publish.",
  },
  {
    question: "Why choose a digital invitation over a printed one?",
    answer:
      "Digital invitations are more affordable, eco-friendly, and convenient. You can update details anytime, track RSVPs in real-time, and share instantly with guests anywhere in the Philippines or abroad. Plus, your guests get an interactive experience with maps, countdowns, and photo galleries.",
  },
  {
    question: "Can I manage my guest list and RSVPs online?",
    answer:
      "Absolutely. Every plan includes advanced RSVP management where guests can confirm attendance, indicate the number of guests, select meal preferences, note dietary restrictions, and leave personal messages. You can export your guest list as a CSV file anytime.",
  },
  {
    question: "Do I need any technical skills to create my invitation?",
    answer:
      "Not at all. Hiraya Manawari features an intuitive drag-and-drop visual editor. You can customize fonts, colors, layouts, photos, and content without any coding. If you can use Facebook, you can build your wedding invitation.",
  },
  {
    question: "Can my guests view the invitation on their phones?",
    answer:
      "Yes! Every Hiraya Manawari invitation is fully responsive and optimized for mobile, tablet, and desktop. Since most Filipino guests will open invitations on their phones via Messenger or Viber, we prioritize the mobile experience.",
  },
  {
    question: "How do I share my digital wedding invitation?",
    answer:
      "You'll get a personal link like juanandmaria.hirayaweddings.com that you can share via text, Viber, Messenger, WhatsApp, email, or even as a QR code on printed save-the-dates. The Bespoke plan also supports custom domains.",
  },
];
