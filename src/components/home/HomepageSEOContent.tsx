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
          <meta itemProp="description" content="Mith Tech is India's best ERPNext implementation partner and certified Frappe developer. Cloud ERP, GST-compliant ERPNext customization, WhatsApp automation, and Tally-to-ERPNext migration services from Bangalore." />

          <div className="text-center mb-16 sm:mb-24">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 md:text-[12px]"
            >
              Trusted by Enterprises Across 6 Countries
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-tight text-white mb-6"
            >
              Drive Revenue. Cut Costs.<br className="hidden sm:block" />
              <span className="text-white/60"> Scale Without Limits.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mx-auto max-w-3xl text-base leading-relaxed text-white/50 sm:text-[18px] sm:leading-[1.75]"
            >
              Mith Tech is India's best ERPNext implementation partner headquartered in Bangalore, delivering cloud ERP solutions, business automation, and Frappe custom app development to enterprises across India, the Middle East, Southeast Asia, and Europe. Whether you need to migrate from Tally to ERPNext, deploy a GST-compliant ERP for manufacturing, or set up WhatsApp automation for your business — we replace expensive legacy systems with powerful open-source platforms so you grow faster, spend less, and own every line of your infrastructure.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 rounded-3xl border border-white/8 bg-white/[0.03] p-8 sm:p-12"
          >
            <h3 className="mb-6 text-2xl font-bold tracking-tight text-white sm:text-3xl">Why Industry Leaders Choose Mithtech for ERPNext Implementation</h3>
            <div className="space-y-6 text-[15px] leading-relaxed text-white/60 sm:text-base sm:leading-[1.8]">
              <p>
                Mith Tech is the #1 rated <strong>ERPNext implementation partner in India</strong> trusted by enterprises across India, the Gulf, and Europe. From manufacturing plants running 24/7 to high-growth SaaS companies scaling globally — we deploy <strong>open source ERP for SMEs</strong> that deliver 40-60% cost savings over proprietary alternatives. Whether you need a powerful <strong>SAP alternative</strong>, a modern <strong>cloud ERP India</strong> solution, or end-to-end <strong>business automation</strong>, our certified ERPNext team delivers results — not just software. Businesses choose us over Odoo because ERPNext offers zero licensing fees and native GST compliance.
              </p>
              <p>
                Legacy ERP vendors trap you with per-seat licensing, rigid modules, and costly upgrades that never end. With Mithtech and the <strong>Frappe development</strong> ecosystem, you get enterprise-grade capability you actually own. Looking to <strong>migrate from Tally to ERPNext</strong>? Or evaluating <strong>ERPNext vs Odoo</strong> for your business? We help you make the right choice. No vendor lock-in. No per-user fees. Just the agility to adapt to any market, any compliance requirement, and any growth stage — backed by a <strong>certified ERPNext partner</strong> with a 98% client retention rate.
              </p>
            </div>
          </motion.div>

          <div className="my-20 grid gap-4 sm:grid-cols-2 lg:gap-6">
            {[
              {
                Icon: Server,
                title: "Cut ERP Costs by Up to 60%",
                body: "Deploy ERPNext Manufacturing, HRMS, CRM, Procurement, and Finance on a single cloud ERP platform — with zero per-seat licensing. The best open source ERP for Indian SMEs matches SAP and Oracle feature-for-feature at a fraction of the ERPNext implementation cost.",
                delay: 0.1,
              },
              {
                Icon: ShieldCheck,
                title: "Go Live in Any Country, Stay Compliant",
                body: "GST-compliant ERP for India with e-invoicing, VAT for the UAE and GCC, GAAP-ready accounting for global markets — our ERPNext implementations come pre-configured for local compliance. One platform, global reach, zero regulatory risk.",
                delay: 0.2,
              },
              {
                Icon: TrendingUp,
                title: "Migrate from Tally, SAP & Legacy — Risk-Free",
                body: "Migrate from Tally to ERPNext or switch from SAP with our battle-tested migration framework. Move your data, workflows, and reporting to modern cloud ERP infrastructure with guaranteed zero data loss. Go live faster with full team training included.",
                delay: 0.3,
              },
              {
                Icon: Cpu,
                title: "Automate Everything. Connect Everything.",
                body: "Go beyond ERP. Our 70+ product ecosystem — including WhatsApp automation, N8N workflows, Mautic marketing, and Chatwoot support — creates a unified data layer that eliminates manual work and drives measurable ROI.",
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
              <h3 className="mb-6 text-2xl font-bold tracking-tight text-white">Faster Time-to-Value. Guaranteed.</h3>
              <p className="mb-6 text-[15px] leading-relaxed text-white/60">
                As a proven <strong>Frappe ERPNext consultant</strong> and full-stack <strong>Frappe custom app development</strong> company, our methodology is built for speed, precision, and long-term ROI. Whether you are a 10-person startup evaluating the <strong>best ERP for small business India</strong> or a 500-person enterprise needing <strong>ERPNext customization</strong>, we deliver results on your timeline — not ours.
              </p>
              <ul className="space-y-4 text-[14px] text-white/50">
                {[
                  ["Workflow Discovery & Optimization:", "We map your existing processes, pinpoint revenue leaks, and architect an ERPNext implementation that eliminates bottlenecks from day one."],
                  ["Zero-Loss Data Migration:", "Moving from SAP, Tally, Zoho, or Odoo? Our proven ETL framework for Tally-to-ERPNext migration and SAP-to-ERPNext migration handles millions of records with guaranteed data integrity — so you never skip a beat."],
                  ["Custom Frappe App Development:", "Need ERPNext API integration or a capability that does not exist out of the box? Our Frappe developer team in India builds production-grade custom apps and ERPNext WhatsApp integrations deployed globally."],
                  ["24/7 Global Support:", "From WhatsApp automation to on-site consulting, we deliver enterprise-grade support across every time zone your business operates in."],
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
              <h3 className="mb-6 text-2xl font-bold tracking-tight text-white">A Global Partner. A Local Presence.</h3>
              <div className="space-y-6 text-[15px] leading-relaxed text-white/60">
                <p>
                  Headquartered in Bangalore — India's technology capital — Mith Tech has delivered enterprise <strong>ERPNext implementation</strong> and <strong>business automation</strong> projects for clients across India, UAE, Saudi Arabia, Singapore, the UK, and the US. Whether you need an <strong>ERPNext partner in Mumbai</strong>, Bangalore, or Delhi NCR, our distributed team structure means you get the responsiveness of a local <strong>certified ERPNext partner</strong> with the depth of a global <strong>Frappe development</strong> company.
                </p>
                <p>
                  The enterprise shift to <strong>open source ERP</strong> is accelerating. Industry leaders evaluating <strong>ERPNext vs Odoo</strong> or <strong>ERPNext vs SAP</strong> are asking: why pay per seat, per module, and per upgrade — forever? Partner with Mithtech and get India's best ERPNext ecosystem, <strong>WhatsApp automation</strong>, <strong>ERPNext hosting</strong>, and <strong>Frappe custom app development</strong> expertise that turns your technology spend from a cost center into a competitive advantage. Own your <strong>cloud ERP</strong>. Scale without limits.
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
