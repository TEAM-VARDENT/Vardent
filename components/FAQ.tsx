'use client';

import { useState } from 'react';
import { site } from '@/content/site';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Fallback data in case 'faq' is missing or named differently in site.ts
  const faqData = (site as any).faq || {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "How does Vardent verify green claims?",
        answer: "We use a data-driven protocol to verify supply chain transparency, carbon-mitigation metrics, and structural sustainability certifications."
      },
      {
        question: "Is the onboarding process difficult for new brands?",
        answer: "Not at all. Our team assists you through the initial climate-data integrations to ensure a smooth configuration."
      }
    ]
  };

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="font-display text-4xl font-bold text-center text-vardent-ink mb-12">
          {faqData.title || "Frequently Asked Questions"}
        </h2>
        
        <div className="space-y-4">
          {faqData.items?.map((item: FAQItem, index: number) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="border border-[rgba(15,94,61,0.12)] rounded-xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center px-6 py-5 text-left font-body font-semibold text-lg text-vardent-ink hover:bg-vardent-bg/30 transition-colors"
                >
                  <span>{item.question}</span>
                  <span className={`transform transition-transform duration-200 text-xl ${isOpen ? 'rotate-180' : ''}`}>
                    ✕
                  </span>
                </button>
                
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="px-6 pb-6 pt-2 font-body text-vardent-ink3 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}