'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  IconArrowRight,
  IconPlayerPlay,
  IconBolt,
} from '@tabler/icons-react';
import { Button } from '@/components/ui/button';
import { formatCurrency } from '@/lib/format';

type HeroStats = {
  total_users?: number;
  total_amount_raised?: number;
  lives_impacted?: number;
  total_ngos?: number;
  partnerships_formed?: number;
};

type HeroProps = {
  heroStats?: HeroStats | null;
};

export function Hero({ heroStats }: HeroProps) {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="text-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          {heroStats?.total_users != null && (
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
              <IconBolt className="h-4 w-4 mr-2" />
              Trusted by {heroStats.total_users.toLocaleString()}+ organizations worldwide
            </span>
          )}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Small businesses.{' '}
            <span className="text-primary">Big connections.</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Lattice connects small businesses to larger enterprises. One multi-tenant platform
            for partnerships, growth, and scale.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <Link href="/register">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-4 h-auto">
              Get Started
              <IconArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Button size="lg" variant="outline" className="text-lg px-8 py-4 h-auto border-border text-foreground hover:bg-muted">
            <IconPlayerPlay className="mr-2 h-5 w-5" />
            Watch Demo
          </Button>
        </motion.div>

        {heroStats &&
          (heroStats.total_amount_raised != null ||
            heroStats.lives_impacted != null ||
            heroStats.total_ngos != null ||
            heroStats.partnerships_formed != null) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
          >
            {heroStats.total_amount_raised != null && (
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {formatCurrency(heroStats.total_amount_raised, 'USD').replace('.00', '')}
                </div>
                <div className="text-sm text-muted-foreground">Total Funds Raised</div>
              </div>
            )}
            {heroStats.lives_impacted != null && (
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {heroStats.lives_impacted.toLocaleString()}
                </div>
                <div className="text-sm text-muted-foreground">Lives Impacted</div>
              </div>
            )}
            {heroStats.total_ngos != null && (
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {heroStats.total_ngos.toLocaleString()}
                </div>
                <div className="text-sm text-muted-foreground">Verified NGOs</div>
              </div>
            )}
            {heroStats.partnerships_formed != null && (
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {heroStats.partnerships_formed.toLocaleString()}
                </div>
                <div className="text-sm text-muted-foreground">Partnerships</div>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}
