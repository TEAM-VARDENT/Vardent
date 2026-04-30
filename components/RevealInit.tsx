'use client';

import { useEffect } from 'react';

export default function RevealInit() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const siblings = Array.from(el.parentElement?.children ?? []);
          const idx = siblings.indexOf(el);
          setTimeout(() => el.classList.add('in'), idx * 90);
          obs.unobserve(el);
        });
      },
      { threshold: 0.1 },
    );

    document.querySelectorAll('.reveal').forEach((el) => obs.observe(el));

    return () => obs.disconnect();
  }, []);

  return null;
}
