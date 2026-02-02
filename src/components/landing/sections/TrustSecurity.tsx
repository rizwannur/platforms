'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { IconShield } from '@tabler/icons-react';
import { Card } from '@/components/ui/card';

export function TrustSecurity() {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="p-8 border-border shadow-xl">
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <IconShield className="h-12 w-12 text-primary mr-4" />
                <h3 className="text-3xl font-bold text-foreground">Trusted & Secure</h3>
              </div>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                All NGOs undergo comprehensive verification. Every donation is tracked transparently
                with detailed impact reporting and secure payment processing.
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
