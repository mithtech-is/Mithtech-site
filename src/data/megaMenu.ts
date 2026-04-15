import {
    Users,
    Megaphone,
    HelpCircle,
    ShoppingCart,
    Briefcase,
    Calendar,
    Globe,
    MessageSquare,
    BarChart3,
    DollarSign,
    Activity,
    Cpu,
    FileText,
    Smartphone,
    Mail,
    CheckSquare,
    Server,
    LucideIcon
} from "lucide-react";

export interface MegaMenuCategory {
    id: string;
    label: string;
    description: string;
    icon: LucideIcon;
    productSlugs: string[];
}

export const MEGA_MENU_DATA: MegaMenuCategory[] = [
    {
        id: "customer-relationship",
        label: "Customer Relationship",
        description: "Engage leads and manage sales pipelines.",
        icon: Users,
        productSlugs: ["perfex", "frappe-crm", "qu6", "ding", "erpnext-crm", "frappe-helpdesk", "chatwoot"]
    },
    {
        id: "marketing",
        label: "Marketing Automation",
        description: "Automate cross-channel marketing growth.",
        icon: Megaphone,
        productSlugs: ["mautic", "listmonk", "n8n", "postiz"]
    },
    {
        id: "ecommerce",
        label: "eCommerce & Online Selling",
        description: "B2B and B2C commerce solutions.",
        icon: ShoppingCart,
        productSlugs: ["polygin", "medusa-b2b", "medusa-js", "marketplace"]
    },
    {
        id: "operations",
        label: "Operations & Business Management",
        description: "Core ERP and specialized admin tools.",
        icon: Briefcase,
        productSlugs: ["erpnext-finance", "school-management", "marely-health", "frappe-lending", "pos-billing", "shoilms", "lms-frappe"]
    },
    {
        id: "booking",
        label: "Booking & Scheduling",
        description: "Appointments and facility management.",
        icon: Calendar,
        productSlugs: ["schedulr", "hospital-management", "2spa", "property", "apartment", "hostel", "parking"]
    },
    {
        id: "communication",
        label: "Communication & Collaboration",
        description: "Internal and external talk hubs.",
        icon: MessageSquare,
        productSlugs: ["frappe-comm", "mattermost", "focalboard", "chatwoot"]
    },
    {
        id: "analytics",
        label: "Business Intelligence & Analytics",
        description: "Data-driven decision making suites.",
        icon: BarChart3,
        productSlugs: ["frappe-insights", "metabase", "apache-superset", "posthog"]
    },
    {
        id: "finance",
        label: "Finance & Accounting",
        description: "Precision accounting and lending systems.",
        icon: DollarSign,
        productSlugs: ["frappe-books", "erpnext-finance", "frappe-lending"]
    },
    {
        id: "automation",
        label: "Workflow Automation",
        description: "Connect your entire tech stack.",
        icon: Activity,
        productSlugs: ["n8n"]
    },
    {
        id: "ai-agents",
        label: "Automation Tools & AI Agents",
        description: "Smart agents and talent platforms.",
        icon: Cpu,
        productSlugs: ["n8n", "recruitment", "job-board", "qu6"]
    },
    {
        id: "engagement",
        label: "Customer Engagement",
        description: "Telephony and omnichannel messaging.",
        icon: Smartphone,
        productSlugs: ["smartflo", "chatwoot"]
    },
    {
        id: "email",
        label: "Email Infrastructure",
        description: "Private and scalable mail servers.",
        icon: Mail,
        productSlugs: ["mailinabox"]
    },
    {
        id: "project",
        label: "Project & Task Management",
        description: "Organize workflows and teams.",
        icon: CheckSquare,
        productSlugs: ["vikunja"]
    },
    {
        id: "server",
        label: "Server & Infrastructure",
        description: "High-performance hosting control.",
        icon: Server,
        productSlugs: ["cloudpanel", "docuseal"]
    }
];
