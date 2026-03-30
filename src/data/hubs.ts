export interface HubProduct {
  n: string;
  d: string;
  i: string;
  slug?: string;
}

export interface HubCluster {
  id: string;
  n: string;
  icon: string;
  desc: string;
  longDesc: string;
  chips: string[];
  prods: HubProduct[];
}

export const DEFS: HubCluster[] = [
  {
    id: 'crm', n: 'CRM & Sales', icon: '/assets/crm.svg',
    desc: 'Customer Management & Sales Growth',
    longDesc: 'Mithtech builds powerful CRM systems that centralize customer data, streamline sales processes, and improve conversion rates. By combining automation, insights, and seamless integrations, we help businesses manage relationships and scale revenue efficiently.',
    chips: ['Lead & Pipeline Management', 'Sales Automation', 'Customer Insights'],
    prods: [
      { n: 'ERPNext (CRM)', d: 'Integrated CRM', i: '/assets/erpnext-logo.png' },
      { n: 'Frappe CRM', d: 'Flexible CRM', i: '/assets/FrappeCRM_logo.png' },
      { n: 'Smartflo', d: 'Cloud Telephony', i: '/assets/Smartflo-logo.png' },
      { n: 'Chatwoot', d: 'Customer Support', i: '/assets/chatwoot.png' },
      { n: 'Ding', d: 'Notifications System', i: '/assets/ding-logo.png' }
    ]
  },
  {
    id: 'mktg', n: 'Marketing', icon: '/assets/mktg.svg',
    desc: 'Campaigns, Automation & Growth',
    longDesc: 'Mithtech creates a connected marketing ecosystem that automates campaigns, streamlines workflows, and scales lead generation across multiple channels. By integrating tools and data, we help businesses improve engagement, optimize performance, and achieve measurable growth.',
    chips: ['Campaign Automation', 'Lead Generation Systems', 'Multi-Channel Marketing'],
    prods: [
      { n: 'Polygin WhatsApp', d: 'WhatsApp Automation', i: '/assets/polyg.png' },
      { n: 'Mautic', d: 'Marketing Automation', i: '/assets/Mautic_Logo_LB.png' },
      { n: 'Listmonk', d: 'Email Marketing', i: '/assets/listmonk-logo.png' },
      { n: 'Postiz', d: 'Content Scheduling', i: '/assets/postiz-logo.png' }
    ]
  },
  {
    id: 'ecom', n: 'eCommerce', icon: '/assets/ecom.svg',
    desc: 'High-Performance Commerce Ecosystem',
    longDesc: 'Mithtech builds scalable eCommerce systems that unify storefronts, backend operations, and sales channels into one seamless platform. From product management to order processing and payments, we create high-performance commerce experiences designed to increase conversions, streamline operations, and support business growth.',
    chips: ['Scalable Commerce Architecture', 'Multi-Channel Sales Systems', 'Order & Payment Automation'],
    prods: [
      { n: 'Polygin Store', d: 'Custom Storefront', i: '/assets/polyg.png', slug: 'polygin-wastore' },
      { n: 'Medusa JS', d: 'Headless Commerce Engine', i: '/assets/medusajs-logo.png' },
      { n: 'Medusa B2B', d: 'B2B Commerce System', i: '/assets/medusajs-logo.png' },
      { n: 'Marketplace', d: 'Multi-Vendor Platform', i: '/assets/marketplace-logo.jpg' },
      { n: 'POS Billing', d: 'Retail Billing System', i: '/assets/medusajs-logo.png' }
    ]
  },
  {
    id: 'supp', n: 'Support & Chat', icon: '/assets/supp.svg',
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
    id: 'fin', n: 'Finance & BI', icon: '/assets/fin.svg',
    desc: 'Financial Intelligence & Business Insights',
    longDesc: 'Mithtech builds a unified finance and analytics ecosystem that gives you real-time visibility into cash flow, operational performance, and business health. By integrating accounting, reporting, and dashboards, we enable faster decision-making, accurate forecasting, and complete financial control across your organization.',
    chips: ['Real-Time Financial Tracking', 'Advanced Reporting & Analytics', 'KPI Dashboards & Forecasting'],
    prods: [
      { n: 'ERPNext (Finance)', d: 'ERP Finance Suite', i: '/assets/erpnext-logo.png' },
      { n: 'Frappe Books', d: 'Lightweight Accounting', i: '/assets/frappebooks-logo.png' },
      { n: 'Frappe Insights', d: 'Business Intelligence', i: '/assets/frappe insights-logo.png' },
      { n: 'Frappe Lending', d: 'Loan & Credit System', i: '/assets/frappelending-logo.png' }
    ]
  },
  {
    id: 'auto', n: 'Automation & AI', icon: '/assets/auto.svg',
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

export const getScenes = (defs: HubCluster[]) => {
  const s = [{ r: [0, 0.13], id: 'hero', name: 'Ecosystem', ci: -1 }];
  defs.forEach((d, i) => s.push({ r: [0.13 + i * 0.13, 0.13 + i * 0.13 + 0.1], id: d.id, name: d.n, ci: i }));
  s.push({ r: [0.93, 1.01], id: 'cta', name: 'Full Ecosystem', ci: -1 });
  return s;
};

export const SCENES = getScenes(DEFS);
