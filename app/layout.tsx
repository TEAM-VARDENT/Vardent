import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { site } from '@/content/site';
import RevealInit from '@/components/RevealInit';

const inter = Inter({
  subsets:  ['latin'],
  weight:   ['400', '500', '600', '700', '800'],
  variable: '--font-inter',
  display:  'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets:  ['latin'],
  weight:   ['400', '500'],
  variable: '--font-mono',
  display:  'swap',
});

export const metadata: Metadata = {
  title: 'Vardent — Verified Sustainable Commerce',
  description: 'Every product independently audited. Every claim blockchain-anchored.',
  verification: {
    google:  content= "ZXsVjgvFRDLw_5KUoBFkO5WpXJLS2qGIIcNfmX8SdYs",
   content="ZXsVjgvFRDLw_5KUoBFkO5WpXJLS2qGIIcNfmX8SdYs" />
  }

  openGraph: {
    title:       site.seo.ogTitle,
    description: site.seo.ogDescription,
    url:         site.seo.ogUrl,
    images:      [{ url: site.seo.ogImage }],
    type:        'website',
  },
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <RevealInit />
        {children}
      </body>
    </html>
  );
}
