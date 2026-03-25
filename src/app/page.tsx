"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from 'react';
import { CustomCanvas } from '@/components/home/CustomCanvas';
import { Hero } from '@/components/home/Hero';
import { InfoPanel } from '@/components/home/InfoPanel';
import { CTA } from '@/components/home/CTA';
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { ArrowRight, X } from "lucide-react";

const DEFS = [
  {
    id: 'crm', n: 'CRM & Sales', icon: 'crm',
    desc: 'Customer Management & Sales Growth',
    longDesc: 'Mithtech builds powerful CRM systems that centralize customer data, streamline sales processes, and improve conversion rates. By combining automation, insights, and seamless integrations, we help businesses manage relationships and scale revenue efficiently.',
    chips: ['Lead & Pipeline Management', 'Sales Automation', 'Customer Insights'],
    prods: [
      { n: 'Frappe CRM', d: 'Flexible CRM', i: '/assets/FrappeCRM_logo.png' },
      { n: 'ERPNext (CRM)', d: 'Integrated CRM', i: '/assets/erpnext-logo.png' },
      { n: 'Smartflo', d: 'Cloud Telephony', i: '/assets/Smartflo-logo.png' },
      { n: 'Chatwoot', d: 'Customer Support', i: '/assets/chatwoot.png' },
      { n: 'Ding', d: 'Notifications System', i: '/assets/Ding_logo_(2025).png' }
    ]
  },
  {
    id: 'mktg', n: 'Marketing', icon: 'mktg',
    desc: 'Campaigns, Automation & Growth',
    longDesc: 'Mithtech creates a connected marketing ecosystem that automates campaigns, streamlines workflows, and scales lead generation across multiple channels. By integrating tools and data, we help businesses improve engagement, optimize performance, and achieve measurable growth.',
    chips: ['Campaign Automation', 'Lead Generation Systems', 'Multi-Channel Marketing'],
    prods: [
      { n: 'Mautic', d: 'Marketing Automation', i: '/assets/mautic-logo.png' },
      { n: 'Listmonk', d: 'Email Marketing', i: '/assets/listmonk-logo.png' },
      { n: 'Postiz', d: 'Content Scheduling', i: '/assets/postiz-logo.png' },
      { n: 'Polygin', d: 'Custom Storefront', i: '/assets/polyg.png' }
    ]
  },
  {
    id: 'ecom', n: 'eCommerce', icon: 'ecom',
    desc: 'High-Performance Commerce Ecosystem',
    longDesc: 'Mithtech builds scalable eCommerce systems that unify storefronts, backend operations, and sales channels into one seamless platform. From product management to order processing and payments, we create high-performance commerce experiences designed to increase conversions, streamline operations, and support business growth.',
    chips: ['Scalable Commerce Architecture', 'Multi-Channel Sales Systems', 'Order & Payment Automation'],
    prods: [
      { n: 'Polygin Store', d: 'Custom Storefront', i: '/assets/polyg.png' },
      { n: 'Medusa JS', d: 'Headless Commerce Engine', i: '/assets/medusa-logo.png' },
      { n: 'Medusa B2B', d: 'B2B Commerce System', i: '/assets/medusa-logo.png' },
      { n: 'Marketplace', d: 'Multi-Vendor Platform', i: '/assets/marketplace-logo.jpg' },
      { n: 'POS Billing', d: 'Retail Billing System', i: '/assets/medusa-logo.png' }
    ]
  },
  {
    id: 'supp', n: 'Support & Chat', icon: 'supp',
    desc: 'Omnichannel Support & Communication',
    longDesc: 'Mithtech builds integrated support systems that combine chat, ticketing, and collaboration tools into one unified platform. This enables faster response times, improved customer satisfaction, and seamless communication across all channels.',
    chips: ['Omnichannel Support', 'AI Chatbots', 'Team Collaboration'],
    prods: [
      { n: 'Chatwoot', d: 'Omnichannel Messaging', i: '/assets/chatwoot.png' },
      { n: 'Frappe Helpdesk', d: 'Ticket Management', i: '/assets/frappehelpdesk_logo.png' },
      { n: 'Botpress', d: 'AI Chatbot Builder', i: '/assets/botpress-logo.png' },
      { n: 'Mattermost', d: 'Team Messaging', i: '/assets/mattermost-logo.png' }
    ]
  },
  {
    id: 'fin', n: 'Finance & BI', icon: 'fin',
    desc: 'Financial Intelligence & Business Insights',
    longDesc: 'Mithtech builds a unified finance and analytics ecosystem that gives you real-time visibility into cash flow, operational performance, and business health. By integrating accounting, reporting, and dashboards, we enable faster decision-making, accurate forecasting, and complete financial control across your organization.',
    chips: ['Real-Time Financial Tracking', 'Advanced Reporting & Analytics', 'KPI Dashboards & Forecasting'],
    prods: [
      { n: 'ERPNext (Finance)', d: 'ERP Finance Suite', i: '/assets/erpnext-logo.png' },
      { n: 'Frappe Books', d: 'Lightweight Accounting', i: '/assets/erpnext-logo.png' },
      { n: 'Frappe Insights', d: 'Business Intelligence', i: '/assets/frappe insights-logo.png' },
      { n: 'Frappe Lending', d: 'Loan & Credit System', i: '/assets/frappelending-logo.png' }
    ]
  },
  {
    id: 'auto', n: 'Automation & AI', icon: 'auto',
    desc: 'Automation & Intelligent Systems',
    longDesc: 'Mithtech develops intelligent automation systems that eliminate repetitive tasks and connect your tools into a unified workflow. By leveraging AI and no-code automation, we help businesses scale operations efficiently and reduce manual dependency.',
    chips: ['Workflow Automation', 'AI Agents', 'System Integration'],
    prods: [
      { n: 'n8n', d: 'Workflow Automation', i: '/assets/n8n-logo.png' },
      { n: 'Documenso', d: 'Digital Signatures', i: '/assets/documenso-icon-logo.png' },
      { n: 'CloudPanel', d: 'Server Management', i: '/assets/cloudpanel-icon.png' },
      { n: 'Mail-in-a-Box', d: 'Email Infrastructure', i: '/assets/Mail-in-a-Box-logo.png' }
    ]
  },
];

const SCENES = (() => {
  const s = [{ r: [0, 0.13], id: 'hero', name: 'Ecosystem', ci: -1 }];
  DEFS.forEach((d, i) => s.push({ r: [0.13 + i * 0.13, 0.13 + i * 0.13 + 0.1], id: d.id, name: d.n, ci: i }));
  s.push({ r: [0.93, 1.01], id: 'cta', name: 'Full Ecosystem', ci: -1 });
  return s;
})();

export default function Home() {
  const homeSectionRef = React.useRef<HTMLDivElement>(null);
  const [scrollProg, setScrollProg] = useState(0);
  const [curScene, setCurScene] = useState('hero');
  const [curCI, setCurCI] = useState(-1);
  const [selectedProduct, setSelectedProduct] = useState<{
    type: "product" | "cluster";
    title: string;
    description: string;
    longDescription: string;
    icon: string;
    category: string;
    features: string[];
  } | null>(null);

  const productAliases: Record<string, string> = {
    "polygin store": "polygin",
    "polygin": "polygin",
    "perfex crm": "perfex",
    "socialpuffin": "socialpuff",
    "socialpuff": "socialpuff",
    "qu6": "qu6",
    "n8n": "n8n",
    "mautic": "mautic",
    "shoilms": "shoilms",
    "schedulr": "schedulr",
    "medusa js": "medusa-js",
    "medusa b2b": "medusa-b2b",
    "marketplace": "marketplace",
    "pos billing": "pos-billing",
    "erpnext (finance)": "erpnext-finance",
    "erpnext (crm)": "erpnext-finance",
    "frappe books": "frappe-books",
    "bi dashboard": "bi-dashboard",
    "loan management": "loan-management",
    "listmonk": "listmonk",
    "postiz": "postiz",
    "frappe crm": "frappe-crm",
    "smartflo": "smartflo",
    "chatwoot": "chatwoot",
    "ding": "ding",
    "frappe helpdesk": "frappe-helpdesk",
    "botpress": "botpress",
    "mattermost": "mattermost",
    "focalboard": "focalboard",
    "documenso": "documenso",
    "cloudpanel": "cloudpanel",
    "mail-in-a-box": "mailinabox",
    "mailinabox": "mailinabox"
  };

  useEffect(() => {
    const handleScroll = () => {
      const homeHeight = homeSectionRef.current?.offsetHeight ?? 0;
      const maxScroll = Math.max(homeHeight - window.innerHeight, 0);
      const boundedScroll = Math.min(window.scrollY, maxScroll);
      const prog = maxScroll > 0 ? boundedScroll / maxScroll : 0;
      setScrollProg(prog);
      for (const sc of SCENES) {
        if (prog >= sc.r[0] && prog < sc.r[1]) {
          setCurScene(sc.id);
          setCurCI(sc.ci);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!selectedProduct) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProduct(null);
      }
    };

    window.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [selectedProduct]);

  const handleProductSelect = ({
    productName,
    productDescription,
    icon: canvasIcon,
  }: {
    clusterId: string;
    productName: string;
    productDescription: string;
    icon: string;
  }) => {
    const normalizedName = productName.trim().toLowerCase();
    const slug = productAliases[normalizedName];
    const matchedProduct = slug ? products.find((product) => product.slug === slug) : undefined;

    if (matchedProduct) {
      setSelectedProduct({
        type: "product",
        title: matchedProduct.title,
        description: matchedProduct.description,
        longDescription: matchedProduct.longDescription,
        icon: canvasIcon || matchedProduct.icon,
        category: matchedProduct.category,
        features: matchedProduct.features.slice(0, 3),
      });
      return;
    }

    setSelectedProduct({
      type: "product",
      title: productName,
      description: productDescription,
      longDescription: productDescription,
      icon: canvasIcon || "/assets/mithtech-black-logo.png",
      category: "Mithtech Product",
      features: ["Tailored implementation", "Deployment support", "Workflow customization"],
    });
  };

  const handleClusterSelect = ({
    clusterId,
    clusterName,
    clusterDescription,
    icon: canvasIcon,
    products: clusterProducts,
  }: {
    clusterId: string;
    clusterName: string;
    clusterDescription: string;
    icon: string;
    products: { name: string; description: string }[];
  }) => {
    const clusterDef = DEFS.find(d => d.id === clusterId);

    setSelectedProduct({
      type: "cluster",
      title: clusterName,
      description: clusterDescription,
      longDescription: (clusterDef as any)?.longDesc || `${clusterName} brings together ${clusterProducts.length} connected tools that Mithtech can implement, customize, and support for your business workflows.`,
      icon: canvasIcon,
      category: "Ecosystem Cluster",
      features: (clusterDef as any)?.chips || clusterProducts.map((product) => `${product.name}: ${product.description}`),
    });
  };

  const infoData = curCI !== -1 ? {
    num: `0${curCI + 1} / 06`,
    title: DEFS[curCI].n,
    desc: DEFS[curCI].desc,
    prods: DEFS[curCI].prods
  } : null;

  return (
    <div
      ref={homeSectionRef}
      className="relative w-full overflow-x-hidden border-b border-white/10 bg-[#080808] shadow-[0_24px_80px_rgba(0,0,0,0.45)]"
    >
      <div className="fixed inset-0 z-0 hidden md:block">
        <CustomCanvas
          onProductSelect={handleProductSelect}
          onClusterSelect={handleClusterSelect}
        />
      </div>
      <div className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_45%)] md:hidden" />

      {/* Main Overlays */}
      <div className="relative z-10 min-h-screen">
        <Hero isVisible={curScene === 'hero'} />
        <InfoPanel isVisible={curCI !== -1} data={infoData} />
      </div>

      {/* Indicators and Hints */}
      <div className={`fixed bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-3 transition-all duration-500 sm:bottom-12 ${curScene === 'hero' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
        <div className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/20">Scroll to explore</div>
        <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent sh-l" />
      </div>

      <div className="fixed bottom-8 left-4 z-20 hidden transition-all duration-500 sm:bottom-12 sm:left-6 lg:block xl:left-12">
        <div className="text-[10px] font-bold tracking-[0.25em] uppercase text-white/20 mb-3">
          {SCENES.find(s => s.id === curScene)?.name}
        </div>
        <div className="w-20 h-[1px] bg-white/5 overflow-hidden">
          <div
            className="h-full bg-white/50 transition-all duration-300"
            style={{
              width: `${((scrollProg - (SCENES.find(s => s.id === curScene)?.r[0] || 0)) / ((SCENES.find(s => s.id === curScene)?.r[1] || 1) - (SCENES.find(s => s.id === curScene)?.r[0] || 0))) * 100}%`
            }}
          />
        </div>
      </div>

      <div className="fixed right-4 top-1/2 z-20 hidden -translate-y-1/2 flex-col gap-3 md:right-6 md:flex lg:right-10 lg:gap-4">
        {SCENES.map((sc, i) => (
          <button
            key={i}
            className={`w-[4px] h-[4px] rounded-full transition-all duration-500 ${sc.id === curScene ? 'scale-[2.5] bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]' : 'bg-white/20 hover:bg-white/40'}`}
            title={sc.name}
            onClick={() => {
              const homeHeight = homeSectionRef.current?.offsetHeight ?? 0;
              const maxScroll = Math.max(homeHeight - window.innerHeight, 0);
              window.scrollTo({
                top: ((sc.r[0] + sc.r[1]) / 2) * maxScroll,
                behavior: 'smooth',
              });
            }}
          />
        ))}
      </div>

      <div className="fixed bottom-12 right-8 z-20 hidden text-[10px] font-bold uppercase tracking-[0.2em] text-white/15 xl:right-12 xl:block">
        Hold & drag nodes to rearrange
      </div>

      {/* Spacer for Scrolling */}
      <div id="spacer" className="pointer-events-none h-[620vh] sm:h-[720vh] md:h-[820vh]" />

      <div className="relative z-10 flex min-h-screen items-center justify-center bg-transparent">
        <CTA />
      </div>

      {selectedProduct && (
        <div
          className="fixed inset-0 z-40 flex items-center justify-center bg-black/70 px-4 py-6 backdrop-blur-sm"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="relative w-full max-w-2xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#111111] p-6 text-white shadow-2xl sm:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close product details"
              className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:bg-white/10 hover:text-white"
              onClick={() => setSelectedProduct(null)}
            >
              <X className="h-4 w-4" />
            </button>

            <div className="mb-6 flex items-start gap-4 pr-12 sm:gap-5">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-3 sm:h-20 sm:w-20">
                <Image
                  src={selectedProduct.icon}
                  alt={selectedProduct.title}
                  width={56}
                  height={56}
                  className="h-auto w-auto max-h-12 object-contain sm:max-h-14"
                />
              </div>
              <div className="min-w-0">
                <div className="mb-2 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">
                  {selectedProduct.category}
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  {selectedProduct.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-white/55 sm:text-base">
                  {selectedProduct.description}
                </p>
              </div>
            </div>

            <p className="text-sm leading-7 text-white/70 sm:text-base">
              {selectedProduct.longDescription}
            </p>

            <div className={`mt-6 grid gap-3 ${selectedProduct.type === "cluster" ? "sm:grid-cols-2" : "sm:grid-cols-3"}`}>
              {selectedProduct.features.map((feature) => (
                <div
                  key={feature}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/75"
                >
                  {feature}
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild className="h-12 min-h-[48px] w-full rounded-full bg-white text-black hover:bg-white/90 sm:w-auto">
                <Link href="/contact">
                  Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                type="button"
                variant="outline"
                className="h-12 min-h-[48px] w-full rounded-full border-white/15 bg-transparent text-white hover:bg-white/5 hover:text-white sm:w-auto"
                onClick={() => setSelectedProduct(null)}
              >
                Continue Exploring
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
