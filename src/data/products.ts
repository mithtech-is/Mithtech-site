export interface Product {
    slug: string;
    title: string;
    icon: string;
    description: string;
    longDescription: string;
    features: string[];
    externalHref: string;
    category: string;
    type: 'proprietary' | 'service';
    useCase: string;
    processHref?: string;
}

export const products: Product[] = [
    {
        slug: "polygin",
        title: "Polygin WhatsApp Automation",
        icon: "/assets/polyg.png",
        description: "Custom Storefront",
        longDescription: "Automate your marketing, sales, and customer support on WhatsApp. Capture leads, run campaigns, and manage conversations from one unified platform built for business growth.",
        features: ["Custom UI/UX Storefront", "High-Speed Performance", "Conversion Optimization"],
        externalHref: "https://polyg.in/",
        category: "Marketing",
        type: "proprietary",
        useCase: "Modern eCommerce businesses use Polygin Store to deliver high-performance, custom-tailored shopping experiences.",
        processHref: "#process"
    },
    {
        slug: "polygin-wastore",
        title: "Polygin WaStore",
        icon: "/assets/polyg.png",
        description: "Custom Storefront",
        longDescription: "Polygin WaStore turns WhatsApp into a powerful sales channel, enabling businesses to showcase products, automate conversations, and close orders seamlessly in chat.",
        features: ["Custom UI/UX Storefront", "High-Speed Performance", "Conversion Optimization"],
        externalHref: "https://polyg.in/",
        category: "eCommerce",
        type: "proprietary",
        useCase: "Modern eCommerce businesses use Polygin Store to deliver high-performance, custom-tailored shopping experiences.",
        processHref: "#process"
    },
    {
        slug: "shoilms",
        title: "shoiLMS",
        icon: "/assets/shoiclean.png",
        description: "Modern Learning Management System.",
        longDescription: "shoiLMS is a powerful, flexible learning management system designed for modern educators and corporate trainers. It provides a clean, intuitive interface for course creation, student management, and assessment tracking.",
        features: [
            "Dynamic Course Builder",
            "Student Progress Analytics",
            "Interactive Quizzes & Assignments",
            "Certificate Generation",
            "Mobile-Friendly Learning"
        ],
        externalHref: "https://shoi.in",
        category: "Education",
        type: "proprietary",
        useCase: "Educational institutions and corporate HR departments use shoiLMS to deploy internal training modules and track employee certification progress automatically.",
        processHref: "#process"
    },
    {
        slug: "n8n",
        title: "n8n",
        icon: "/assets/n8n-logo.png",
        description: "Visual Workflow Automation.",
        longDescription: "Mithtech specializes in designing and deploying advanced workflow automation using n8n. We connect your entire tech stack into a unified system that automates processes, reduces manual effort, and enables scalable, efficient business operations.",
        features: [
            "Visual Automation Builder",
            "Boundless Integration Stack",
            "Intelligent Event Triggers",
            "Developer-Friendly Custom Logic",
            "Secure Self-Hosted Deployment"
        ],
        externalHref: "",
        category: "Automation",
        type: "service",
        useCase: "Enterprises use n8n to sync data between their CRM, ERP, and communication tools, automating multi-step lead processing and financial reporting cycles.",
        processHref: "#process"
    },
    {
        slug: "mautic",
        title: "Mautic",
        icon: "/assets/Mautic_Logo_LB.png",
        description: "Advanced Marketing Automation.",
        longDescription: "We implement Mautic to automate marketing campaigns, segment audiences, and manage customer journeys. This allows businesses to deliver personalized experiences, improve engagement, and convert leads more effectively.",
        features: [
            "Strategic Campaign Orchestration",
            "Behavioral Lead Scoring",
            "Advanced Growth Segmentation",
            "Omni-channel Engagement Hub",
            "Real-time Content Personalization"
        ],
        externalHref: "",
        category: "Marketing",
        type: "service",
        useCase: "B2B companies use Mautic to nurture leads through personalized email journeys based on user behavior on their website, significantly increasing conversion rates.",
        processHref: "#process"
    },
    {
        slug: "perfex",
        title: "Perfex",
        icon: "/assets/perfex.png",
        description: "Enterprise CRM Implementation.",
        longDescription: "Mithtech delivers end-to-end implementation and customization of Perfex CRM tailored to your business workflows. We ensure seamless integration between sales, projects, and billing, enabling efficient operations and better client management.",
        features: [
            "Custom Workflow Architecture",
            "Advanced Module Development",
            "Automated Project Management",
            "Seamless Financial Integration",
            "Staff Training & Support"
        ],
        externalHref: "",
        category: "CRM",
        type: "service",
        useCase: "Service-based agencies use Perfex to manage their entire client lifecycle, from initial lead through project delivery and automated recurring invoicing.",
        processHref: "#process"
    },
    {
        slug: "schedulr",
        title: "Schedulr",
        icon: "/assets/icon-schedulr.png",
        description: "Automated Service Booking.",
        longDescription: "Mithtech implements Schedulr to automate your entire service booking and payment lifecycle. We provide a smooth, professional booking experience that syncs perfectly with your business operations.",
        features: [
            "Intelligent Booking Systems",
            "Seamless Calendar & Zoom Sync",
            "Automated Payment Lifecycles",
            "Enterprise Schedule Management",
            "Custom Field & Form Design"
        ],
        externalHref: "",
        category: "Booking",
        type: "service",
        useCase: "Healthcare providers and service consultants use Schedulr to let clients book appointments 24/7, with automatic Zoom links and payment processing.",
        processHref: "#process"
    },
    {
        slug: "qu6",
        title: "Qu6.in",
        icon: "/assets/qu6_logo.png",
        description: "Comprehensive Workspace SaaS.",
        longDescription: "Qu6.in is an all-in-one workspace platform that brings together project management, team collaboration, and custom dashboards into a single, unified experience.",
        features: [
            "Project Management",
            "Team Collaboration",
            "Custom Dashboards",
            "Time Tracking",
            "File Sharing"
        ],
        externalHref: "https://qu6.in",
        category: "Workspace",
        type: "proprietary",
        useCase: "Operational teams use Qu6 to centralize their internal communications and project trackers, replacing scattered spreadsheets with unified dashboards.",
        processHref: "#process"
    },
    {
        slug: "socialpuff",
        title: "Socialpuff.in",
        icon: "/assets/mithtech-black-logo.png",
        description: "Smart Social Media Automation.",
        longDescription: "Socialpuff.in helps you put your social media marketing on autopilot. Schedule posts, analyze performance, and manage multiple networks from one place.",
        features: [
            "Smart Scheduling",
            "Bulk Posting",
            "Multi-Network Management",
            "Performance Analytics",
            "Content Curation"
        ],
        externalHref: "https://socialpuff.in",
        category: "Marketing",
        type: "proprietary",
        useCase: "Marketing agencies use Socialpuff to manage social media presence for multiple clients simultaneously, scheduling content weeks in advance across all platforms.",
        processHref: "#process"
    },
    // Finance Subnodes
    {
        slug: "erpnext-finance",
        title: "ERPNext (Finance)",
        icon: "/assets/erpnext-logo.png",
        description: "ERP Finance Suite",
        longDescription: "We implement and customize ERPNext to manage accounting, taxation, and financial workflows with precision. From daily transactions to compliance reporting, the system ensures accuracy, automation, and complete financial control across all business operations.",
        features: ["Automated Accounting", "Tax & Compliance Management", "Financial Workflow Automation"],
        externalHref: "",
        category: "Finance",
        type: "service",
        useCase: "Enterprises use ERPNext Finance to unify their global accounting standards and automate tax compliance."
    },
    {
        slug: "frappe-books",
        title: "Frappe Books",
        icon: "/assets/erpnext-logo.png",
        description: "Lightweight Accounting",
        longDescription: "A lightweight yet powerful accounting solution designed for managing invoices, expenses, and financial records with simplicity. It enables businesses to maintain accurate bookkeeping, streamline financial tracking, and operate efficiently without complex systems.",
        features: ["Invoice & Expense Tracking", "Offline Accounting System", "Simple Financial Management"],
        externalHref: "",
        category: "Finance",
        type: "service",
        useCase: "Small businesses use Frappe Books for simple, offline-first accounting without complexity."
    },
    {
        slug: "bi-dashboard",
        title: "BI Dashboard",
        icon: "/assets/mithtech-black-logo.png",
        description: "Business Intelligence",
        longDescription: "We build custom dashboards that transform raw business data into clear, actionable insights. Monitor KPIs, track performance trends, and gain real-time visibility across departments to support smarter, data-driven decision-making.",
        features: ["Real-Time Data Visualization", "KPI Monitoring", "Performance Analytics"],
        externalHref: "",
        category: "Finance",
        type: "service",
        useCase: "Executives use BI dashboards to track real-time KPIs and operational health."
    },
    {
        slug: "loan-management",
        title: "Loan Management",
        icon: "/assets/frappelending-logo.png",
        description: "Loan & Credit System",
        longDescription: "We design loan management systems that handle repayment tracking, interest calculations, and financial records with precision. This ensures transparency, reduces manual errors, and provides complete control over lending and credit operations.",
        features: ["Loan Lifecycle Tracking", "Interest Automation", "Financial Transparency"],
        externalHref: "",
        category: "Finance",
        type: "service",
        useCase: "Financial institutions use our systems to manage thousands of active loans with automated interest cycles."
    },
    // Marketing Subnodes
    {
        slug: "listmonk",
        title: "Listmonk",
        icon: "/assets/listmonk-logo.png",
        description: "Email Marketing",
        longDescription: "A high-performance email marketing system designed to manage large-scale campaigns with speed and reliability. It helps businesses handle subscriber data, automate communication, and ensure consistent email delivery.",
        features: ["Bulk Email Campaigns", "Subscriber Management", "High Deliverability"],
        externalHref: "",
        category: "Marketing",
        type: "service",
        useCase: "Content creators use Listmonk to send million-scale newsletters with zero per-email costs."
    },
    {
        slug: "postiz",
        title: "Postiz",
        icon: "/assets/postiz-logo.png",
        description: "Content Scheduling",
        longDescription: "A social media automation tool that helps businesses manage posting, engagement, and analytics across platforms. It ensures consistent communication while reducing manual effort in day-to-day social operations. Businesses can manage posts, track engagement, and maintain a streamlined content workflow.",
        features: ["Social Scheduling", "Content Planning", "Engagement Tracking"],
        externalHref: "",
        category: "Marketing",
        type: "service",
        useCase: "Social media managers use Postiz to orchestrate multi-platform content calendars."
    },
    // CRM Subnodes
    {
        slug: "frappe-crm",
        title: "Frappe CRM",
        icon: "/assets/FrappeCRM_logo.png",
        description: "Flexible CRM",
        longDescription: "A flexible CRM solution designed to manage leads, customer interactions, and sales pipelines efficiently. It provides the tools needed to track opportunities, improve engagement, and maintain strong customer relationships.",
        features: ["Lead Tracking", "Sales Pipeline", "Customer Management"],
        externalHref: "",
        category: "CRM",
        type: "service",
        useCase: "Sales teams use Frappe CRM for a modern, fast interface to track every deal."
    },
    {
        slug: "smartflo",
        title: "Smartflo",
        icon: "/assets/Smartflo-logo.png",
        description: "Cloud Telephony",
        longDescription: "A cloud telephony platform that enhances communication through call tracking, IVR systems, and analytics. It helps businesses improve response times, manage calls efficiently, and gain insights into customer interactions.",
        features: ["Call Automation", "IVR Systems", "Communication Analytics"],
        externalHref: "",
        category: "CRM",
        type: "service",
        useCase: "Support centers integrate Smartflo with their CRM to track every customer call automatically."
    },
    {
        slug: "chatwoot",
        title: "Chatwoot",
        icon: "/assets/chatwoot.png",
        description: "Omnichannel Support",
        longDescription: "An open-source customer support platform that centralizes conversations across channels. It enables faster responses, better organization, and improved customer experience through a unified communication system.",
        features: ["Omnichannel Support", "Shared Inbox", "Conversation Tracking"],
        externalHref: "",
        category: "Support",
        type: "service",
        useCase: "Support teams use Chatwoot to handle WhatsApp, Email, and Website chat in one place."
    },
    {
        slug: "ding",
        title: "Ding",
        icon: "/assets/ding-logo.png",
        description: "Notifications System",
        longDescription: "A real-time notification system designed to deliver instant alerts and updates across your platform. It ensures timely communication, improves responsiveness, and keeps users and teams informed at all times.",
        features: ["Instant Alerts", "Event-Based Messaging", "System Notifications"],
        externalHref: "",
        category: "CRM",
        type: "service",
        useCase: "System admins use Ding to trigger automated alerts for critical business events."
    },
    {
        slug: "erpnext-crm",
        title: "ERPNext (CRM)",
        icon: "/assets/erpnext-logo.png",
        description: "Integrated CRM",
        longDescription: "An integrated CRM system within ERPNext that connects customer management with operations and finance. It ensures unified data flow, improved coordination, and streamlined business processes.",
        features: ["Unified Customer Data", "Sales Integration", "Workflow Automation"],
        externalHref: "",
        category: "CRM",
        type: "service",
        useCase: "Enterprises use ERPNext CRM to bridge the gap between their sales front-end and operational back-end."
    },
    // Support Subnodes
    {
        slug: "frappe-helpdesk",
        title: "Frappe Helpdesk",
        icon: "/assets/frappehelpdesk_logo.png",
        description: "Ticket Management",
        longDescription: "A modern ticketing system for issue tracking and SLA management across support teams.",
        features: ["Ticket Management", "Issue Tracking", "SLA Management"],
        externalHref: "",
        category: "Support",
        type: "service",
        useCase: "Service departments use Frappe Helpdesk to ensure every customer issue is resolved within SLA."
    },
    {
        slug: "botpress",
        title: "Botpress",
        icon: "/assets/botpress-logo.png",
        description: "AI Chatbot Builder",
        longDescription: "Custom AI chatbots that transform customer support with automated logic and natural language processing.",
        features: ["AI Chatbot Builder", "Conversational Automation", "NLP Integration"],
        externalHref: "",
        category: "Support",
        type: "service",
        useCase: "Enterprises use Botpress to automate up to 80% of routine support inquiries."
    },
    {
        slug: "mattermost",
        title: "Mattermost",
        icon: "/assets/mattermost-logo.png",
        description: "Team Messaging",
        longDescription: "Secure, self-hosted team communication and collaboration platform for sensitive data.",
        features: ["Team Messaging", "Secure Communication", "Collaboration Tools"],
        externalHref: "",
        category: "Support",
        type: "service",
        useCase: "Tech-heavy teams use Mattermost for internal devops communication and incident response."
    },
    {
        slug: "focalboard",
        title: "Focalboard",
        icon: "/assets/mithtech-black-logo.png",
        description: "Task Management",
        longDescription: "Open-source project management alternative to Trello, Notion, and Asana.",
        features: ["Task Management", "Project Tracking", "Workflow Organization"],
        externalHref: "",
        category: "Support",
        type: "service",
        useCase: "Project managers use Focalboard to visualize workflows and track project milestones."
    },
    // Automation Subnodes
    {
        slug: "documenso",
        title: "Documenso",
        icon: "/assets/documenso-icon-logo.png",
        description: "Digital Signatures",
        longDescription: "Secure, open-source document signing automation for legally binding contracts.",
        features: ["Digital Signatures", "Document Automation", "Secure Signing"],
        externalHref: "",
        category: "Automation",
        type: "service",
        useCase: "Leagal and HR teams use Documenso to automate contract signing cycles."
    },
    {
        slug: "cloudpanel",
        title: "CloudPanel",
        icon: "/assets/cloudpanel-icon.png",
        description: "Server Management",
        longDescription: "Fast and secure server management panel designed for high-performance hosting.",
        features: ["Server Management", "Hosting Control", "Infrastructure Automation"],
        externalHref: "",
        category: "Automation",
        type: "service",
        useCase: "Developers use CloudPanel to deploy and manage high-traffic applications with ease."
    },
    {
        slug: "mailinabox",
        title: "Mail-in-a-Box",
        icon: "/assets/Mail-in-a-Box-logo.png",
        description: "Email Infrastructure",
        longDescription: "Taking back control of your email with a self-hosted, all-in-one mail server.",
        features: ["Email Infrastructure", "Self-Hosted Email", "Mail Server Control"],
        externalHref: "",
        category: "Automation",
        type: "service",
        useCase: "Privacy-conscious organizations use Mail-in-a-Box to host their own private email servers."
    },
    // eCommerce Subnodes
    {
        slug: "medusa-js",
        title: "Medusa JS",
        icon: "/assets/medusajs-logo.png",
        description: "Headless Commerce Engine",
        longDescription: "We implement Medusa JS as a flexible backend for managing products, orders, and customers. Its headless architecture allows seamless integrations and complete control over your commerce operations.",
        features: ["Headless Architecture", "API-First Commerce", "Scalable Backend System"],
        externalHref: "",
        category: "eCommerce",
        type: "service",
        useCase: "Developers and brands use Medusa JS for a highly customizable and scalable commerce engine."
    },
    {
        slug: "medusa-b2b",
        title: "Medusa B2B",
        icon: "/assets/medusajs-logo.png",
        description: "B2B Commerce System",
        longDescription: "We build B2B commerce solutions with advanced pricing, bulk ordering, and customer-specific workflows. Designed for wholesalers and enterprise sales operations.",
        features: ["Bulk Ordering System", "Custom Pricing Logic", "B2B Workflow Automation"],
        externalHref: "",
        category: "eCommerce",
        type: "service",
        useCase: "Wholesalers and enterprises use our B2B systems to manage high-volume ordering and complex pricing structures."
    },
    {
        slug: "marketplace",
        title: "Marketplace",
        icon: "/assets/marketplace-logo.jpg",
        description: "Multi-Vendor Platform",
        longDescription: "We create marketplace platforms that connect multiple vendors, manage listings, and handle transactions in a unified system. Ideal for scaling product ecosystems and expanding revenue streams.",
        features: ["Multi-Vendor Management", "Vendor Dashboards", "Commission & Payout System"],
        externalHref: "",
        category: "eCommerce",
        type: "service",
        useCase: "Companies looking to scale their product ecosystem use our marketplace solutions to onboard third-party vendors."
    },
    {
        slug: "pos-billing",
        title: "POS Billing",
        icon: "/assets/medusajs-logo.png",
        description: "Retail Billing System",
        longDescription: "We implement POS systems that integrate with your eCommerce backend, enabling seamless offline and online sales synchronization. Manage billing, inventory, and transactions in real time.",
        features: ["Real-Time Billing", "Inventory Sync", "Omni-Channel Sales"],
        externalHref: "",
        category: "eCommerce",
        type: "service",
        useCase: "Retailers use our POS solutions to unify their physical store sales with their online inventory and order management."
    },
    // Operations & Business Management additions
    {
        slug: "marely-health",
        title: "marely Health",
        icon: "/assets/mithtech-black-logo.png",
        description: "Healthcare Operations ERP",
        longDescription: "A specialized healthcare ERP designed for managing clinics, patient records, and hospital operations with clinical precision.",
        features: ["Patient Records", "Lab Integration", "Clinic Management"],
        externalHref: "",
        category: "Operations",
        type: "service",
        useCase: "Healthcare providers use marely Health to digitize patient journeys and automate clinical reporting."
    },
    {
        slug: "frappe-lending",
        title: "Frappe Lending",
        icon: "/assets/frappelending-logo.png",
        description: "Credit & Lending Suite",
        longDescription: "Automate the entire loan lifecycle from application to disbursement and recovery with Frappe Lending.",
        features: ["Loan Origination", "Collection Management", "Credit Scoring"],
        externalHref: "",
        category: "Finance",
        type: "service",
        useCase: "Financial institutions use Frappe Lending to manage scalable credit operations."
    },
    {
        slug: "hospital-management",
        title: "Doctors & Hospital Management",
        icon: "/assets/mithtech-black-logo.png",
        description: "Comprehensive Care ERP",
        longDescription: "Manage doctors, appointments, and hospital infrastructure in a unified platform designed for healthcare excellence.",
        features: ["Doctor Scheduling", "Emergency Management", "Hospital Admin"],
        externalHref: "",
        category: "Healthcare",
        type: "service",
        useCase: "Hospitals use this ERP to optimize resource allocation and patient care workflows."
    },
    {
        slug: "2spa",
        title: "2spa.in",
        icon: "/assets/mithtech-black-logo.png",
        description: "Wellness Booking Platform",
        longDescription: "A dedicated booking and management system for salons, spas, and wellness centers.",
        features: ["Online Booking", "Staff Scheduling", "Member Loyalty"],
        externalHref: "https://2spa.in",
        category: "Booking",
        type: "proprietary",
        useCase: "Wellness businesses use 2spa to offer 24/7 web booking to their clients."
    },
    {
        slug: "property",
        title: "Property & Facility Management",
        icon: "/assets/mithtech-black-logo.png",
        description: "Real Estate ERP",
        longDescription: "End-to-end management for residential and commercial properties, including maintenance and tenant tracking.",
        features: ["Lease Management", "Maintenance Requests", "Tenant Portal"],
        externalHref: "",
        category: "Operations",
        type: "service",
        useCase: "Property managers use our ERP to automate rent collection and maintenance cycles."
    },
    {
        slug: "apartment",
        title: "Apartment Management",
        icon: "/assets/mithtech-black-logo.png",
        description: "Community Living App",
        longDescription: "A communication and management platform for gated communities and apartment complexes.",
        features: ["Visitor Management", "Bill Payments", "Community Feed"],
        externalHref: "",
        category: "Operations",
        type: "service",
        useCase: "Society committees use our app to manage gate security and utility billing."
    },
    {
        slug: "hostel",
        title: "Hostel Setup",
        icon: "/assets/mithtech-black-logo.png",
        description: "Student Housing System",
        longDescription: "Complete management for hostels, including room allocation, mess management, and student records.",
        features: ["Room Allocation", "Mess Billing", "Student IDs"],
        externalHref: "",
        category: "Operations",
        type: "service",
        useCase: "Hostel wardens use our system to track occupancy and automate mess billing."
    },
    {
        slug: "parking",
        title: "Parking",
        icon: "/assets/mithtech-black-logo.png",
        description: "Smart Parking Solutions",
        longDescription: "Automate parking lot operations with real-time tracking, digital ticketing, and payment integration.",
        features: ["Digital Ticketing", "Real-Time Occupancy", "Payment Gateway Sync"],
        externalHref: "",
        category: "Operations",
        type: "service",
        useCase: "Mall and office managers use our parking system to reduce congestion and automate exit payments."
    },
    {
        slug: "custom-websites",
        title: "Custom Websites & Landing Pages",
        icon: "/assets/mithtech-black-logo.png",
        description: "Bespoke Digital Presence",
        longDescription: "We design and build high-performance, custom-coded websites tailored to your brand's unique identity.",
        features: ["Custom Design", "SEO Optimized", "Blazing Fast Performance"],
        externalHref: "",
        category: "Digital Presence",
        type: "service",
        useCase: "Brands looking for a unique identity use our custom web development services."
    },
    {
        slug: "listing-sites",
        title: "Listing Sites",
        icon: "/assets/mithtech-black-logo.png",
        description: "Directory & Marketplace",
        longDescription: "Build powerful directory and listing websites for real estate, cars, or any service marketplace.",
        features: ["Advanced Search", "User Submissions", "Map Integration"],
        externalHref: "",
        category: "Digital Presence",
        type: "service",
        useCase: "Agencies use our listing solutions to showcase thousands of items with filtered search."
    },
    {
        slug: "frappe-comm",
        title: "Communication Tools (Frappe)",
        icon: "/assets/mithtech-black-logo.png",
        description: "Unified Team Talk",
        longDescription: "A unified platform for team communication, emails, and notifications built on the Frappe framework.",
        features: ["Shared Inboxes", "Team Channels", "Notification Hub"],
        externalHref: "",
        category: "Communication",
        type: "service",
        useCase: "Teams use Frappe Communication to keep all internal talk in one searchable hub."
    },
    {
        slug: "recruitment",
        title: "Recruitment & Job Platforms",
        icon: "/assets/mithtech-black-logo.png",
        description: "Talent Acquisition Suite",
        longDescription: "Streamline your hiring process with automated job posting, applicant tracking, and scheduling.",
        features: ["Applicant Tracking", "Job Board Integration", "Interview Manager"],
        externalHref: "",
        category: "HR",
        type: "service",
        useCase: "HR teams use our recruitment platforms to cut hiring time by 50%."
    },
    {
        slug: "job-board",
        title: "Job Board",
        icon: "/assets/mithtech-black-logo.png",
        description: "Enterprise Job List",
        longDescription: "A dedicated platform for showcasing job openings and managing internal talent pools.",
        features: ["Candidate Profiles", "Easy Apply", "Employer Dashboards"],
        externalHref: "",
        category: "HR",
        type: "service",
        useCase: "Large corporations use our Job Board solutions to host their own careers portal."
    },
    {
        slug: "vikunja",
        title: "Vikunja",
        icon: "/assets/mithtech-black-logo.png",
        description: "Open Task Management",
        longDescription: "The open-source to-do app to organize your life. Manage tasks, projects, and teams with ease.",
        features: ["Kanban Boards", "List Views", "Team Collaboration"],
        externalHref: "",
        category: "Project",
        type: "service",
        useCase: "Teams use Vikunja to visualize workflows and track daily task progress."
    },
    {
        slug: "lms-wp",
        title: "LMS (WordPress)",
        icon: "/assets/mithtech-black-logo.png",
        description: "WordPress Learning",
        longDescription: "Leverage the power of WordPress and LearnDash to create a scalable e-learning platform.",
        features: ["Course Management", "Quiz System", "User Dashboards"],
        externalHref: "",
        category: "Education",
        type: "service",
        useCase: "Training companies use WordPress LMS to deliver hybrid learning experiences."
    },
    {
        slug: "lms-frappe",
        title: "LMS (Frappe)",
        icon: "/assets/mithtech-black-logo.png",
        description: "Frappe Learning Suite",
        longDescription: "A comprehensive learning management system built on the Frappe framework for enterprise training.",
        features: ["Internal Training", "Certification", "Collaborative Learning"],
        externalHref: "",
        category: "Education",
        type: "service",
        useCase: "HR departments use Frappe LMS to automate employee onboarding."
    },
    {
        slug: "shoilms-v2",
        title: "School Management System",
        icon: "/assets/mithtech-black-logo.png",
        description: "Academic ERP",
        longDescription: "Manage students, teachers, exams, and fees in one unified system designed for schools.",
        features: ["Student Lifecycle", "Exam Management", "Fee Collection"],
        externalHref: "",
        category: "Education",
        type: "service",
        useCase: "Schools use this ERP to automate their entire administrative workflow."
    }
];
