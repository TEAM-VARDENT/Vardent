import Nav        from '@/components/Nav';
import Hero       from '@/components/Hero';
import StatsBand  from '@/components/StatsBand';
import WhatVardent from '@/components/WhatVardent';
import WhyItExists from '@/components/WhyItExists';
import EarlyAccess from '@/components/EarlyAccess';
import FAQ         from '@/components/FAQ';
import Footer      from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <StatsBand />
        <WhatVardent />
        <WhyItExists />
        <EarlyAccess />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
