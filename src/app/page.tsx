'use client';

import React from 'react';
import { Navbar } from '@/components/landing/layout/Navbar';
import { Footer } from '@/components/landing/layout/Footer';
import { Hero } from '@/components/landing/sections/Hero';
import { Features } from '@/components/landing/sections/Features';
import { Partners } from '@/components/landing/sections/Partners';
import { TrendingCampaigns } from '@/components/landing/sections/TrendingCampaigns';
import { Impact } from '@/components/landing/sections/Impact';
import { Testimonials } from '@/components/landing/sections/Testimonials';
import { TrustSecurity } from '@/components/landing/sections/TrustSecurity';
import { Cta } from '@/components/landing/sections/Cta';
import { useLandingPageStore } from '@/stores/landing-page.store';

export default function HomePage() {
  const {
    landingData,
    heroStats,
    testimonials,
    mobileMenuOpen,
    toggleMobileMenu,
  } = useLandingPageStore();

  return (
    <div className="min-h-screen bg-background">
      <Navbar
        mobileMenuOpen={mobileMenuOpen}
        onMobileMenuToggle={toggleMobileMenu}
      />
      <Hero heroStats={heroStats} />
      <Features />
      <Partners featuredNgos={landingData?.featured_ngos} />
      <TrendingCampaigns campaigns={landingData?.trending_data?.trending_campaigns} />
      <Impact heroStats={heroStats} />
      <Testimonials testimonials={testimonials} />
      <TrustSecurity />
      <Cta />
      <Footer />
    </div>
  );
}
