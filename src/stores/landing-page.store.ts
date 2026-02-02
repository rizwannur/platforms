import { create } from 'zustand';
import type { LandingData, HeroStats, Testimonial } from '@/types/landing-page.types';

type LandingPageState = {
  landingData: LandingData | null;
  heroStats: HeroStats | null;
  testimonials: Testimonial[];
  mobileMenuOpen: boolean;
  setLandingData: (data: LandingData | null) => void;
  setHeroStats: (stats: HeroStats | null) => void;
  setTestimonials: (items: Testimonial[]) => void;
  setMobileMenuOpen: (open: boolean) => void;
  toggleMobileMenu: () => void;
};

export const useLandingPageStore = create<LandingPageState>((set) => ({
  landingData: null,
  heroStats: null,
  testimonials: [],
  mobileMenuOpen: false,
  setLandingData: (data) => set({ landingData: data }),
  setHeroStats: (stats) => set({ heroStats: stats }),
  setTestimonials: (items) => set({ testimonials: items }),
  setMobileMenuOpen: (open) => set({ mobileMenuOpen: open }),
  toggleMobileMenu: () => set((s) => ({ mobileMenuOpen: !s.mobileMenuOpen })),
}));
