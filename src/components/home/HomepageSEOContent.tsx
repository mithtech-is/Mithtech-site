"use client";

import React from 'react';
import { ShieldCheck, Server, TrendingUp, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

export function HomepageSEOContent() {
  return (
    <section className="relative w-full px-4 py-20 sm:px-6 md:py-28 lg:px-8">
      <div className="relative mx-auto max-w-5xl">

        <div itemScope itemType="https://schema.org/Organization">
          <meta itemProp="name" content="Mith Tech" />
          <meta itemProp="address" content="Bangalore, India" />
          <meta itemProp="description" content="Mith Tech is India's leading ERPNext implementation partner and expert Frappe developer. Cloud ERP, GST-compliant ERPNext customization, WhatsApp automation, and Frappe custom app development from Bangalore." />

          <div className="text-center mb-16 sm:mb-24">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 mb-6"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#00aaff] animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/40">
                Trusted by Enterprises Across 6 Countries
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1] tracking-tight text-white mb-6 uppercase"
            >
              Drive Revenue. Cut Costs.<br className="hidden sm:block" />
              <span className="text-[#00aaff]">Scale Without Limits.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mx-auto max-w-3xl text-base leading-relaxed text-white/50 sm:text-lg sm:leading-[1.75] italic"
            >
              Mith Tech is India's best ERPNext implementation partner headquartered in Bangalore, delivering cloud ERP solutions, business automation, and Frappe custom app development to enterprises across India, the Middle East, Southeast Asia, and Europe. Whether you need a GST-compliant ERP for manufacturing, a headless commerce platform, or intelligent WhatsApp automation for your business — we replace expensive legacy systems with powerful open-source platforms so you grow faster, spend less, and own every line of your infrastructure.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 sm:mb-20 rounded-2xl sm:rounded-3xl border border-white/[0.06] bg-white/[0.02] p-8 sm:p-12 hover:border-white/10 transition-colors duration-300"
          >
            <h3 className="mb-6 text-2xl sm:text-3xl font-extrabold tracking-tight text-white uppercase">Why Industry Leaders Choose Mithtech for ERPNext Implementation</h3>
            <div className="space-y-6 text-[15px] leading-relaxed text-white/50 sm:text-base sm:leading-[1.8] [&_strong]:text-white/80">
              <p>
                Mith Tech is the #1 rated <strong>ERPNext implementation partner in India</strong> trusted by enterprises across India, the Gulf, and Europe. From manufacturing plants running 24/7 to high-growth SaaS companies scaling globally — we deploy <strong>open source ERP for SMEs</strong> that deliver 40-60% cost savings over proprietary alternatives. Whether you need a powerful <strong>SAP alternative</strong>, a modern <strong>cloud ERP India</strong> solution, or end-to-end <strong>business automation</strong>, our expert ERPNext team delivers results — not just software. Businesses choose us over Odoo because ERPNext offers zero licensing fees and native GST compliance.
              </p>
              <p>
                Legacy ERP vendors trap you with per-seat licensing, rigid modules, and costly upgrades that never end. With Mithtech and the <strong>Frappe development</strong> ecosystem, you get enterprise-grade capability you actually own. Evaluating <strong>ERPNext vs Odoo</strong> or scoping a fresh <strong>ERPNext implementation</strong> for your business? We help you make the right choice. No vendor lock-in. No per-user fees. Just the agility to adapt to any market, any compliance requirement, and any growth stage — backed by a <strong>trusted ERPNext partner</strong> with a 98% client retention rate.
              </p>
            </div>
          </motion.div>

          <div className="my-16 sm:my-20 grid gap-4 sm:grid-cols-2 lg:gap-6">
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
                title: "Own Your Stack. No Vendor Lock-In.",
                body: "Skip per-seat licensing and proprietary upgrades. Deploy ERPNext and the Frappe ecosystem on infrastructure you control, with full source access, complete data ownership, and the freedom to customize every workflow as your business evolves.",
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
                className="rounded-2xl sm:rounded-3xl border border-white/[0.06] bg-white/[0.02] p-8 hover:border-[#00aaff]/20 hover:bg-white/[0.04] transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-[#00aaff]/20 transition-colors duration-300">
                  <Icon className="h-6 w-6 text-[#00aaff]" />
                </div>
                <h4 className="mb-3 text-lg font-extrabold text-white uppercase tracking-tight">{title}</h4>
                <p className="text-sm leading-relaxed text-white/50">{body}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl sm:rounded-3xl border border-white/[0.06] bg-white/[0.02] p-8 sm:p-10"
            >
              <h3 className="mb-6 text-2xl font-extrabold tracking-tight text-white uppercase">Faster Time-to-Value. Guaranteed.</h3>
              <p className="mb-6 text-[15px] leading-relaxed text-white/50 [&_strong]:text-white/80">
                As a proven <strong>Frappe ERPNext consultant</strong> and full-stack <strong>Frappe custom app development</strong> company, our methodology is built for speed, precision, and long-term ROI. Whether you are a 10-person startup evaluating the <strong>best ERP for small business India</strong> or a 500-person enterprise needing <strong>ERPNext customization</strong>, we deliver results on your timeline — not ours.
              </p>
              <ul className="space-y-4 text-[14px] text-white/50 [&_strong]:text-white/80">
                {[
                  ["Workflow Discovery & Optimization:", "We map your existing processes, pinpoint revenue leaks, and architect an ERPNext implementation that eliminates bottlenecks from day one."],
                  ["GST & Global Compliance Built-In:", "Our ERPNext deployments ship with GST e-invoicing, e-way bills, TDS, and TCS configured out of the box — plus VAT and GAAP presets for UAE, GCC, and Western markets."],
                  ["Custom Frappe App Development:", "Need ERPNext API integration or a capability that does not exist out of the box? Our Frappe developer team in India builds production-grade custom apps and ERPNext WhatsApp integrations deployed globally."],
                  ["24/7 Global Support:", "From WhatsApp automation to on-site consulting, we deliver enterprise-grade support across every time zone your business operates in."],
                ].map(([label, desc]) => (
                  <li key={label} className="flex items-start">
                    <div className="mr-3 mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00aaff]/60" />
                    <span><strong>{label}</strong> {desc}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl sm:rounded-3xl border border-white/[0.06] bg-white/[0.02] p-8 sm:p-10"
            >
              <h3 className="mb-6 text-2xl font-extrabold tracking-tight text-white uppercase">A Global Partner. A Local Presence.</h3>
              <div className="space-y-6 text-[15px] leading-relaxed text-white/50 [&_strong]:text-white/80">
                <p>
                  Headquartered in Bangalore — India's technology capital — Mith Tech has delivered enterprise <strong>ERPNext implementation</strong> and <strong>business automation</strong> projects for clients across India, UAE, Saudi Arabia, Singapore, the UK, and the US. Whether you need an <strong>ERPNext partner in Mumbai</strong>, Bangalore, or Delhi NCR, our distributed team structure means you get the responsiveness of a local <strong>trusted ERPNext partner</strong> with the depth of a global <strong>Frappe development</strong> company.
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
