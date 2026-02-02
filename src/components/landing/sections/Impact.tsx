'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { IconUsers, IconWorld, IconTarget } from '@tabler/icons-react';

type HeroStats = {
  lives_impacted?: number;
  communities_served?: number;
  projects_completed?: number;
  partnerships_formed?: number;
};

type ImpactProps = {
  heroStats?: HeroStats | null;
};

export function Impact({ heroStats }: ImpactProps) {
  if (!heroStats) return null;

  return (
    <section id="impact" className="py-20 bg-footer-bg text-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Real Impact, Real Results
          </h2>
          <p className="text-xl text-background/80 max-w-2xl mx-auto">
            Our platform has facilitated meaningful change across communities worldwide
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <IconUsers className="h-8 w-8 text-primary" />
            </div>
            <div className="text-3xl font-bold text-primary mb-2">
              {heroStats.lives_impacted?.toLocaleString() ?? '—'}
            </div>
            <div className="text-background/80">Lives Impacted</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <IconWorld className="h-8 w-8 text-primary" />
            </div>
            <div className="text-3xl font-bold text-primary mb-2">
              {heroStats.communities_served?.toLocaleString() ?? '—'}
            </div>
            <div className="text-background/80">Communities Served</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <IconTarget className="h-8 w-8 text-primary" />
            </div>
            <div className="text-3xl font-bold text-primary mb-2">
              {heroStats.projects_completed?.toLocaleString() ?? '—'}
            </div>
            <div className="text-background/80">Projects Completed</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <IconUsers className="h-8 w-8 text-primary" />
            </div>
            <div className="text-3xl font-bold text-primary mb-2">
              {heroStats.partnerships_formed?.toLocaleString() ?? '—'}
            </div>
            <div className="text-background/80">Partnerships Formed</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
