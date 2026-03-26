export interface NavProduct {
  title: string;
  slug?: string;
  href?: string;
  description?: string;
}

export interface UseCase {
  id: string;
  title: string;
  products: NavProduct[];
}

export const USE_CASES: UseCase[] = [
  {
    id: "customer-relationship",
    title: "Customer Relationship",
    products: [
      { title: "ERPNext", slug: "erpnext-crm" },
      { title: "Perfex CRM", slug: "perfex" },
      { title: "CRM (Frappe)", slug: "frappe-crm" },
      { title: "Qu6", slug: "qu6" },
      { title: "Ding", slug: "ding" },
      { title: "Helpdesk (Frappe)", slug: "frappe-helpdesk" },
      { title: "Chatwoot", slug: "chatwoot" },
    ],
  },
  {
    id: "marketing",
    title: "Marketing Automation",
    products: [
      { title: "Polygin WhatsApp Automation", slug: "polygin" },
      { title: "Mautic", slug: "mautic" },
      { title: "Listmonk", slug: "listmonk" },
      { title: "n8n", slug: "n8n" },
      { title: "Postiz", slug: "postiz" },
    ],
  },
  {
    id: "ecommerce",
    title: "eCommerce & Online Selling",
    products: [
      { title: "Polygin WaStore", slug: "polygin-wastore" },
      { title: "B2B", slug: "medusa-b2b" },
      { title: "Medusa js", slug: "medusa-js" },
      { title: "Marketplace", slug: "marketplace" },
    ],
  },
  {
    id: "operations",
    title: "Operations & Business Management",
    products: [
      { title: "ERPNext", slug: "erpnext" },
      { title: "School Management System", slug: "shoilms-v2" },
      { title: "Marely Health", slug: "marely-health" },
      { title: "Frappe Lending", slug: "frappe-lending" },
      { title: "POS Billing", slug: "pos-billing" },
      { title: "Shoi LMS", slug: "shoilms" },
      { title: "LMS (Frappe)", slug: "lms-frappe" },
      { title: "Booking & Scheduling", slug: "schedulr" },
      { title: "Doctors & Hospital Management", slug: "hospital-management" },
      { title: "Property & Facility Management", slug: "property" },
      { title: "Apartment Management", slug: "apartment" },
      { title: "Hostel Setup", slug: "hostel" },
      { title: "Parking", slug: "parking" },
    ],
  },

  {
    id: "communication",
    title: "Communication & Collaboration",
    products: [
      { title: "Communication Tools (Frappe)", slug: "frappe-comm" },
      { title: "Mattermost", slug: "mattermost" },
      { title: "Focalboard", slug: "focalboard" },
      { title: "Chatwoot", slug: "chatwoot" },
    ],
  },
  {
    id: "analytics",
    title: "Business Intelligence & Analytics",
    products: [
      { title: "Frappe Insights", slug: "frappe-insights" },
      { title: "Metabase", slug: "metabase" },
      { title: "Apache Superset", slug: "apache-superset" },
      { title: "Posthog", slug: "posthog" },
    ],
  },
  {
    id: "finance",
    title: "Finance & Accounting",
    products: [
      { title: "Frappe Books", slug: "frappe-books" },
      { title: "ERPNext", slug: "erpnext" },
      { title: "Frappe Lending", slug: "frappe-lending" },
    ],
  },
  {
    id: "workflow-ai",
    title: "Workflow Automation & AI",
    products: [
      { title: "n8n", slug: "n8n" },
      { title: "Automation Tools & AI Agents", description: "Custom AI implementation" },
    ],
  },
  {
    id: "hr",
    title: "HR & Recruitment",
    products: [
      { title: "HRMS", slug: "recruitment" },
      { title: "Job Board", slug: "job-board" },
      { title: "Qu6", slug: "qu6" },
    ],
  },

  {
    id: "messaging",
    title: "Customer Engagement & Messaging",
    products: [
      { title: "Smartflo", slug: "smartflo" },
      { title: "Chatwoot", slug: "chatwoot" },
    ],
  },
  {
    id: "infrastructure",
    title: "Infrastructure & Security",
    products: [
      { title: "Mailinabox", slug: "mailinabox" },
      { title: "CloudPanel", slug: "cloudpanel" },
      { title: "Docuseal", slug: "docuseal" },
    ],
  },
  {
    id: "project-mgmt",
    title: "Project & Task Management",
    products: [
      { title: "Vikunja", slug: "vikunja" },
    ],
  },
];

export const PLATFORMS = [
  { title: "Frappe & ERPNext", href: "/solutions/frappe" },
  { title: "eCommerce", href: "/solutions/commerce" },
  { title: "Analytics & BI", href: "/solutions/analytics" },
  { title: "Marketing Automation", href: "/solutions/marketing-automation" },
  { title: "Education & LMS", href: "/solutions/lms" },
  { title: "Customer Support", href: "/solutions/customer-support" },
];

export const SOLUTIONS = [
  { title: "Enterprise Implementation", href: "/solutions/enterprise" },
  { title: "Custom Development", href: "/solutions/custom" },
  { title: "Consulting", href: "/solutions/consulting" },
  { title: "Cloud Hosting", href: "/solutions/hosting" },
];
