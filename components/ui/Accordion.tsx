'use client';

import { useState, useRef } from 'react';

interface AccordionItem {
  question: string;
  answer:   string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const answerRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggle = (idx: number) => {
    setOpenIdx((prev) => (prev === idx ? null : idx));
  };

  return (
    <div>
      {items.map((item, idx) => {
        const isOpen = openIdx === idx;
        const height = isOpen ? (answerRefs.current[idx]?.scrollHeight ?? 0) : 0;

        return (
          <div
            key={idx}
            className={`border-b border-[rgba(15,94,61,0.10)] ${idx === 0 ? 'border-t' : ''}`}
          >
            <button
              type="button"
              onClick={() => toggle(idx)}
              className={[
                'w-full bg-transparent border-none',
                'py-6 flex items-center justify-between gap-4',
                'cursor-pointer text-left',
                'font-body text-[17px] font-medium transition-colors duration-200',
                isOpen ? 'text-vardent-g2' : 'text-vardent-ink hover:text-vardent-g2',
              ].join(' ')}
              aria-expanded={isOpen}
            >
              <span>{item.question}</span>
              <span
                className={[
                  'w-6 h-6 rounded-full border flex-shrink-0',
                  'flex items-center justify-center',
                  'transition-all duration-300',
                  isOpen
                    ? 'bg-vardent-g2 border-vardent-g2'
                    : 'border-[rgba(15,94,61,0.10)]',
                ].join(' ')}
                aria-hidden
              >
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}
                >
                  <path
                    d="M5 2v6M2 5h6"
                    stroke={isOpen ? '#ffffff' : '#0F5E3D'}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </button>

            <div
              className="faq-answer overflow-hidden transition-all duration-[450ms]"
              style={{ maxHeight: height }}
            >
              <div
                ref={(el) => { answerRefs.current[idx] = el; }}
                className="pb-6 font-body text-[17px] text-vardent-ink3 leading-[1.75] max-w-[600px]"
              >
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
