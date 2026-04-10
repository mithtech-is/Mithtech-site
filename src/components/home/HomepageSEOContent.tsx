"use client";

import React from 'react';
import { ShieldCheck, Server, TrendingUp, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

export function HomepageSEOContent() {
  return (
    <section className="relative w-full px-4 py-24 sm:px-6 md:py-32 lg:px-8">
      <div className="relative mx-auto max-w-5xl">

        <div itemScope itemType="https://schema.org/Organization">
          <meta itemProp="name" content="Mith Tech" />
          <meta itemProp="address" content="Bangalore, India" />
          <meta itemProp="description" content="Mith Tech is a global ERPNext implementation partner headquartered in Bangalore, delivering open-source ERP, automation, and digital transformation solutions to businesses worldwide." />

          <div className="text-center mb-16 sm:mb-24">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 md:text-[12px]"
            >
              Global Enterprise Transformation
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-tight text-white mb-6"
            >
              Open Source ERP &amp; Automation<br className="hidden sm:block" />
              <span className="text-white/60"> For Businesses Worldwide</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mx-auto max-w-3xl text-base leading-relaxed text-white/50 sm:text-[18px] sm:leading-[1.75]"
            >
              Mith Tech is headquartered in Bangalore and works with businesses across India, the Middle East, Southeast Asia, Europe, and beyond. We help organizations break free from expensive proprietary software and move to flexible, scalable open-source platforms — without compromising on power or compliance.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 rounded-3xl border border-white/8 bg-white/[0.03] p-8 sm:p-12"
          >
            <h3 className="mb-6 text-2xl font-bold tracking-tight text-white sm:text-3xl">Why Businesses Globally Choose Frappe ERPNext</h3>
            <div className="space-y-6 text-[15px] leading-relaxed text-white/60 sm:text-base sm:leading-[1.8]">
              <p>
                Mith Tech is a premier <strong>ERPNext Implementation Partner</strong> trusted by enterprises across multiple countries. From manufacturing units in India to retail chains in the Gulf, and SaaS companies in Europe — we deploy open-source business systems that give organizations complete ownership of their data and workflows. Whether you need a powerful <strong>SAP alternative</strong>, a modern <strong>cloud-based ERP</strong>, or a fully customized automation stack, our engineering team delivers.
              </p>
              <p>
                Proprietary ERP vendors lock you into long contracts, rigid modules, and expensive upgrades. We believe your business software should evolve with you. ERPNext and the Frappe ecosystem are built to be adopted, extended, and owned — giving you the agility to adapt to any market, any compliance requirement, and any growth stage, anywhere in the world.
              </p>
            </div>
          </motion.div>

          <div className="my-20 grid gap-4 sm:grid-cols-2 lg:gap-6">
            {[
              {
                Icon: Server,
                title: "Enterprise ERP Without Lock-in",
                body: "Deploy a full-featured ERP — covering Manufacturing, HRMS, CRM, Procurement, and Finance — without massive licensing fees or vendor dependency. ERPNext matches premium proprietary systems feature-for-feature, and you own every line of it.",
                delay: 0.1,
              },
              {
                Icon: ShieldCheck,
                title: "Multi-Country Compliance Ready",
                body: "Our deployments are adapted for local compliance requirements — GST for India, VAT for the UAE and GCC, and standard accounting frameworks for international markets. One platform, global reach.",
                delay: 0.2,
              },
              {
                Icon: TrendingUp,
                title: "Replace Tally, SAP & Legacy Tools",
                body: "Migrating from desktop-bound accounting tools or aging ERP systems? We handle zero-loss data migrations, rebuild your workflows on modern infrastructure, and train your team for a smooth handover.",
                delay: 0.3,
              },
              {
                Icon: Cpu,
                title: "Full Automation Ecosystem",
                body: "Beyond ERPNext, we build connected ecosystems with N8N, Mautic, Chatwoot, and more. Automate marketing, customer support, billing, and internal workflows — all linked under one unified data layer.",
                delay: 0.4,
              },
            ].map(({ Icon, title, body, delay }) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay }}
                className="rounded-3xl border border-white/8 bg-white/[0.03] p-8"
              >
                <Icon className="mb-6 h-8 w-8 text-white/40" />
                <h4 className="mb-3 text-xl font-bold text-white">{title}</h4>
                <p className="text-[14px] leading-relaxed text-white/50">{body}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="mb-6 text-2xl font-bold tracking-tight text-white">Our Implementation Approach</h3>
              <p className="mb-6 text-[15px] leading-relaxed text-white/60">
                As a global <strong>Frappe ERPNext consultant</strong>, our methodology prioritizes fast time-to-value, minimal disruption, and long-term maintainability. Whether you're a 10-person startup or a 500-person enterprise, we tailor delivery to your scale.
              </p>
              <ul className="space-y-4 text-[14px] text-white/50">
                {[
                  ["Business Process Mapping:", "We analyze your existing workflows, identify bottlenecks, and design a Frappe-native implementation that fits how you actually work."],
                  ["Data Migration & Standardization:", "We handle migrations from SAP, Tally, Zoho, Odoo, and legacy systems — using battle-tested ETL scripts to ensure zero data loss."],
                  ["Custom Frappe Development:", "If a module doesn't exist out of the box, we build it. We're a full-fledged Frappe development company with apps deployed for clients globally."],
                  ["Remote & On-site Support:", "We work across time zones — offering both remote delivery and on-site consulting wherever your team is located."],
                ].map(([label, desc]) => (
                  <li key={label} className="flex items-start">
                    <div className="mr-3 mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/30" />
                    <span><strong>{label}</strong> {desc}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="mb-6 text-2xl font-bold tracking-tight text-white">Serving Clients Globally</h3>
              <div className="space-y-6 text-[15px] leading-relaxed text-white/60">
                <p>
                  Based in Bangalore — India's technology capital — Mith Tech has delivered open-source ERP and automation projects for clients in India, UAE, Saudi Arabia, Singapore, the UK, and the US. Our distributed team structure allows us to work closely with businesses regardless of geography, providing the same quality of implementation and support across every engagement.
                </p>
                <p>
                  The shift to open-source enterprise software is happening now. More businesses are asking: why pay per seat, per module, and per upgrade forever? Partner with Mith Tech to move to a platform you actually own — and get the implementation expertise, ongoing support, and custom development to make it work exactly the way your business demands.
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
