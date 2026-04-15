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
    customFaqs?: { question: string; answer: string; }[];
}

export const products: Product[] = [
    {
        slug: "polygin",
        title: "Polygin WhatsApp Automation",
        icon: "/assets/polyg.png",
        description: "WhatsApp Marketing Automation",
        longDescription: "Polygin is Mith Tech's proprietary WhatsApp automation platform built for bulk marketing, lead nurturing, and customer engagement at scale. Send broadcast campaigns to opted-in contacts, automate multi-step message flows, capture inbound leads, and manage all conversations from a single dashboard — without needing technical WhatsApp API knowledge.",
        features: [
            "Bulk WhatsApp Broadcast Campaigns",
            "Automated Message Flows & Drip Sequences",
            "Lead Capture & CRM Sync",
            "WhatsApp Bot Builder",
            "Campaign Analytics & Delivery Reports"
        ],
        externalHref: "https://polyg.in/",
        category: "Marketing",
        type: "proprietary",
        useCase: "D2C brands and real estate companies use Polygin to send targeted WhatsApp broadcast campaigns to thousands of opted-in contacts, automating follow-up sequences based on user responses — converting cold leads into warm prospects on autopilot.",
        processHref: "#process",
        customFaqs: [
            {
                question: "How does Polygin compare to WATI, AiSensy, or Interakt?",
                answer: "WATI, AiSensy, and Interakt are third-party platforms that charge per message and per user on top of WhatsApp API costs. Polygin is Mith Tech's proprietary platform — deployed on your own infrastructure with no per-message platform fees. You pay once for setup and own the system outright. For high-volume senders (10,000+ messages/month), this results in significant cost savings compared to SaaS WhatsApp tools."
            },
            {
                question: "Can Polygin send bulk WhatsApp messages to large contact lists?",
                answer: "Yes. Polygin is designed for scale — it handles broadcast campaigns to tens of thousands of opted-in contacts using the official WhatsApp Business API. Messages are sent through approved Message Templates, ensuring compliance with WhatsApp's policies. Mith Tech configures your WhatsApp Business API account, gets your message templates approved, and manages the full deployment."
            },
            {
                question: "Is Polygin compliant with WhatsApp's messaging policies?",
                answer: "Yes. Polygin operates exclusively on the official WhatsApp Business API, which means all outbound campaigns use pre-approved Message Templates and only reach contacts who have opted in. This keeps your account in good standing with Meta and ensures deliverability. Mith Tech handles the business verification, API setup, and template approval process as part of onboarding."
            },
            {
                question: "What types of businesses use WhatsApp automation?",
                answer: "WhatsApp automation is most impactful for businesses with high customer touch-points: real estate (lead follow-ups and site visit reminders), D2C brands (order updates, cart recovery, re-engagement), healthcare (appointment reminders and prescription alerts), financial services (payment reminders and loan updates), and education (admission follow-ups and fee notifications). Polygin is production-deployed across all these sectors."
            }
        ]
    },
    {
        slug: "polygin-wastore",
        title: "Polygin WaStore",
        icon: "/assets/polyg.png",
        description: "WhatsApp Commerce Store",
        longDescription: "Polygin WaStore turns WhatsApp into a fully functional sales channel — customers browse your product catalogue, place orders, and make payments entirely within WhatsApp chat. No app downloads, no website redirects. The entire buying journey happens inside the conversation your customers are already in.",
        features: [
            "WhatsApp Product Catalogue",
            "Chat-Based Order Flow & Checkout",
            "Automated Order Confirmation & Tracking",
            "Payment Collection via WhatsApp",
            "Inventory & Order Management Dashboard"
        ],
        externalHref: "https://polyg.in/",
        category: "eCommerce",
        type: "proprietary",
        useCase: "Retail and D2C businesses use Polygin WaStore to let customers browse products, add to cart, and pay — entirely within WhatsApp, with automated order confirmations and delivery updates sent back to the same chat thread.",
        processHref: "#process",
        customFaqs: [
            {
                question: "How is Polygin WaStore different from a regular WhatsApp catalogue?",
                answer: "WhatsApp's native catalogue is a static product listing — customers can view items but cannot add to cart, check out, or pay within the app. Polygin WaStore adds a full commerce layer on top: dynamic cart, guided order conversation, integrated payment collection, and automated post-purchase updates. It turns a passive catalogue into an active sales channel."
            },
            {
                question: "Can customers actually pay inside WhatsApp with WaStore?",
                answer: "Yes. Polygin WaStore integrates with Indian payment gateways (Razorpay, PayU, Cashfree) to generate payment links sent directly in the WhatsApp conversation. Customers pay without leaving the chat. Once payment is confirmed, an automated order confirmation and estimated delivery message is sent — the complete purchase cycle happens inside WhatsApp."
            },
            {
                question: "Is Polygin WaStore suitable for businesses without a website?",
                answer: "Yes, that is one of its primary use cases. Businesses that rely on WhatsApp for sales but lack a formal website or app can use WaStore as their primary selling channel. You get a full product catalogue, order management dashboard, payment processing, and customer communication — all without building a website. Mith Tech sets up the entire system and syncs it with your inventory."
            }
        ]
    },
    {
        slug: "erpnext",
        title: "ERPNext",
        icon: "/assets/erpnext-logo.png",
        description: "Worlds No.1 Open Source ERP",
        longDescription: "ERPNext is a comprehensive enterprise resource planning system that helps businesses manage accounting, inventory, CRM, HR, and more in a single unified platform. Known as the best ERP for SMBs in India, it stands proudly as a highly scalable, cost-effective SAP alternative. Whether you need seamless ERPNext eCommerce integration or are seeking the best ERP for manufacturing in India, ERPNext offers unparalleled small business ERP benefits through maximum open-source flexibility.",
        features: ["Accounting", "Inventory Management", "CRM & Sales", "HR & Payroll", "Manufacturing"],
        externalHref: "https://erpnext.com",
        category: "Operations",
        type: "service",
        useCase: "Thousands of businesses worldwide use ERPNext to streamline their operations and manage all departments from a single source of truth.",
        customFaqs: [
            {
                question: "How does ERPNext compare to SAP or Odoo in India?",
                answer: "ERPNext offers a full-suite ERP covering accounting, inventory, HR, CRM, and manufacturing — matching SAP feature-for-feature at a fraction of the ERPNext implementation cost. Compared to Odoo, ERPNext is 100% open source with no per-user licensing fees, making it a stronger fit for growing Indian SMBs that need complete ownership and predictable costs."
            },
            {
                question: "Does ERPNext completely support GST billing and setup?",
                answer: "Yes, ERPNext GST compliance is built-in out of the box for Indian tax regulations. We easily handle GST billing in ERPNext, including e-invoicing and e-way bill generation. Mithtech provides a holistic ERPNext GST setup guide as part of our integration suite to streamline your monthly tax returns."
            },
            {
                question: "Why is ERPNext the best ERP for manufacturing and small businesses in India?",
                answer: "ERPNext fundamentally changes small business operations, making it the best ERP for manufacturing in India. From Bill of Materials to complex capacity planning and job cards, the small business ERP benefits are immediate—streamlining shop-floor bottlenecks and expanding capacity."
            },
            {
                question: "What is the expected ERPNext implementation cost?",
                answer: "Because it relies on an open-source framework, the baseline ERP cost in India is entirely disruptive. You never pay software licensing seat-costs—your only ERPNext implementation cost with Mithtech focuses on meticulous cloud infrastructure deployment, workflow tailoring, and team onboarding."
            }
        ]
    },
    {
        slug: "shoilms",
        title: "Shoi LMS",
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
        processHref: "#process",
        customFaqs: [
            {
                question: "Can n8n replace Zapier or Make (Integromat)?",
                answer: "Yes. n8n covers everything Zapier and Make do — triggers, multi-step workflows, conditional logic, and 400+ app integrations — but without per-task pricing. On Zapier or Make, costs scale with every execution. n8n self-hosted has no per-workflow or per-execution fees, making it significantly cheaper at scale. The trade-off is that n8n requires a hosted server, which Mith Tech sets up and manages for you."
            },
            {
                question: "Is n8n really free?",
                answer: "n8n's core is open source and free to self-host. There is no cost per workflow, per execution, or per node. You pay only for server hosting — typically INR 2,000-5,000/month depending on workflow volume. Mith Tech deploys n8n on your own cloud infrastructure, making the total cost significantly lower than Zapier Pro or Make Business plans at equivalent usage levels."
            },
            {
                question: "Does n8n support AI and LLM integrations?",
                answer: "Yes. n8n has native nodes for OpenAI, Anthropic Claude, Google Gemini, and Ollama (for local, private LLMs). You can build AI agents that read emails, query your database, classify content, generate responses, and trigger follow-up actions — entirely without backend code. Mith Tech specializes in building AI-powered n8n workflows for document processing, lead qualification, and intelligent support automation."
            },
            {
                question: "How many apps can n8n connect to?",
                answer: "n8n has over 400 native integrations including ERPNext, Salesforce, HubSpot, Slack, Google Workspace, PostgreSQL, WhatsApp Business API, and Stripe. It also connects to any REST API, SOAP service, or webhook-based platform through its HTTP Request node — meaning it can integrate with virtually any software your business uses. Mith Tech builds custom n8n nodes for internal tools that lack standard integrations."
            }
        ]
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
        processHref: "#process",
        customFaqs: [
            {
                question: "Is Mautic better than HubSpot or Mailchimp?",
                answer: "Mautic matches HubSpot's core marketing automation features — email campaigns, lead scoring, behavioral segmentation, landing pages, and drip sequences — with zero per-contact fees. HubSpot Marketing Hub charges INR 4,000-40,000/month scaled to your contact list size; Mautic self-hosted has no such costs. The difference is ownership: Mautic runs on your server, so your lead data is never held by a third-party platform."
            },
            {
                question: "How many contacts can Mautic handle?",
                answer: "Mautic scales to millions of contacts on properly configured infrastructure. Performance depends on server specs and database tuning. Mith Tech configures Mautic with optimised caching, dedicated mail servers for high deliverability, and database indexing — clients typically manage 100,000 to 2 million contacts without performance issues. There are no artificial subscriber limits like HubSpot or Mailchimp impose."
            },
            {
                question: "Does Mautic support WhatsApp and SMS marketing?",
                answer: "Yes. Mautic supports multi-channel campaigns including email, SMS, and push notifications natively. WhatsApp marketing is achievable by connecting Mautic's webhook and API triggers to the WhatsApp Business API. Mith Tech builds these integrations as part of every Mautic implementation — enabling WhatsApp drip campaigns, behavioral lead nurturing, and transactional messaging from a single platform."
            },
            {
                question: "Is Mautic GDPR and India DPDP compliant?",
                answer: "Yes. Mautic gives you full control over subscriber data — stored entirely on infrastructure you own. It supports double opt-in, consent tracking, unsubscribe management, and data deletion requests out of the box. For Indian businesses, self-hosting Mautic means customer data stays within India's borders, directly supporting compliance with India's Digital Personal Data Protection Act (DPDP 2023)."
            }
        ]
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
        icon: "/assets/mithtech-white-logo.png",
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
        icon: "/assets/frappebooks-logo.png",
        description: "Lightweight Accounting",
        longDescription: "A lightweight yet powerful accounting solution designed for managing invoices, expenses, and financial records with simplicity. It enables businesses to maintain accurate bookkeeping, streamline financial tracking, and operate efficiently without complex systems.",
        features: ["Invoice & Expense Tracking", "Offline Accounting System", "Simple Financial Management"],
        externalHref: "",
        category: "Finance",
        type: "service",
        useCase: "Small businesses use Frappe Books for simple, offline-first accounting without complexity."
    },
    {
        slug: "frappe-insights",
        title: "Frappe Insights",
        icon: "/assets/frappe insights-logo.png",
        description: "Business Intelligence",
        longDescription: "We build custom dashboards that transform raw business data into clear, actionable insights. Monitor KPIs, track performance trends, and gain real-time visibility across departments to support smarter, data-driven decision-making.",
        features: ["Real-Time Data Visualization", "KPI Monitoring", "Performance Analytics"],
        externalHref: "",
        category: "Finance",
        type: "service",
        useCase: "Executives use BI dashboards to track real-time KPIs and operational health."
    },
    {
        slug: "metabase",
        title: "Metabase",
        icon: "/assets/metabase-logo.png",
        description: "Open Source BI Tool",
        longDescription: "Metabase is the easy, open-source way for everyone in your company to ask questions and learn from data.",
        features: ["Visual Query Builder", "Interactive Dashboards", "Automated Reporting"],
        externalHref: "",
        category: "Analytics",
        type: "service",
        useCase: "Data analysts use Metabase to create shared dashboards for various departments."
    },
    {
        slug: "apache-superset",
        title: "Apache Superset",
        icon: "/assets/apache-superset-logo.png",
        description: "Modern Data Exploration",
        longDescription: "A modern, enterprise-ready business intelligence web application that is fast, lightweight, intuitive, and loaded with options that make it easy for users of all skill sets to explore and visualize their data.",
        features: ["Rich Data Visualizations", "Granular Security Model", "Direct SQL Lab"],
        externalHref: "",
        category: "Analytics",
        type: "service",
        useCase: "Enterprises use Apache Superset for large-scale data exploration and visualization across varied databases."
    },
    {
        slug: "posthog",
        title: "Posthog",
        icon: "/assets/posthog -logo.png",
        description: "Product Analytics Suite",
        longDescription: "The only all-in-one product platform you'll ever need. PostHog provides product analytics, session recording, feature flags, heatmaps, and more.",
        features: ["Product Analytics", "Session Recording", "Feature Flags"],
        externalHref: "",
        category: "Analytics",
        type: "service",
        useCase: "Product managers use Posthog to understand user behavior and optimize product flows."
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
        useCase: "Support teams use Chatwoot to handle WhatsApp, Email, and Website chat in one place.",
        customFaqs: [
            {
                question: "How does Chatwoot compare to Intercom or Zendesk?",
                answer: "Chatwoot provides omnichannel support — WhatsApp, Email, Website Chat, Instagram, Telegram — with shared inbox, automation rules, CSAT surveys, and agent performance reports. These are the same core features as Intercom and Zendesk, which charge $55-139 per agent per month. Chatwoot self-hosted is free in licensing. Mith Tech deploys Chatwoot with WhatsApp Business API, ERPNext CRM sync, and custom automation flows included."
            },
            {
                question: "Does Chatwoot support WhatsApp Business API?",
                answer: "Yes. Chatwoot integrates directly with the WhatsApp Business API, allowing your support team to receive, respond to, and manage WhatsApp conversations from a shared inbox. Multiple agents can handle the same WhatsApp number simultaneously, with full message history, conversation labels, and assignment workflows. Mith Tech handles the WhatsApp Business API application and full Chatwoot integration as part of deployment."
            },
            {
                question: "Can Chatwoot be self-hosted to keep customer data private?",
                answer: "Yes. Chatwoot is fully open source (MIT license) and designed for self-hosted deployment. Mith Tech installs Chatwoot on your cloud server — AWS, DigitalOcean, Azure, or any VPS — and configures your domain, SSL, email channels, and messaging integrations. All customer conversation data stays on your infrastructure. No third-party platform has access to your support history."
            },
            {
                question: "How many agents and conversations can Chatwoot handle?",
                answer: "Chatwoot scales horizontally to support hundreds of concurrent agents and millions of stored conversations. With proper server sizing, it handles 10,000+ active conversations simultaneously. Mith Tech tunes the database, Redis job queues, and background workers for high-volume operations — typically serving enterprise clients managing 500+ daily customer interactions across WhatsApp, email, and web chat."
            }
        ]
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
        icon: "/assets/focalboard-logo.png",
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
        useCase: "Developers and brands use Medusa JS for a highly customizable and scalable commerce engine.",
        customFaqs: [
            {
                question: "Is Medusa JS better than Shopify for custom commerce?",
                answer: "For businesses with custom requirements, Medusa JS offers significantly more flexibility than Shopify. Shopify locks down checkout customization, imposes API rate limits, and charges 0.5-2% transaction fees on non-Shopify Payments. Medusa is fully open source and API-first — your storefront, checkout, pricing rules, and integrations are entirely customizable with no transaction fees. Shopify works well for standard storefronts; Medusa is the right choice for complex B2B, multi-region, or ERP-integrated commerce."
            },
            {
                question: "Can Medusa JS handle B2B commerce?",
                answer: "Yes. Medusa supports B2B commerce with company accounts, tiered pricing, quote management, net payment terms, and custom approval workflows. Mith Tech implements Medusa B2B for wholesale distributors and manufacturers who need complex pricing rules, customer-specific catalogues, and deep ERPNext integration that platforms like Shopify and WooCommerce cannot support."
            },
            {
                question: "Is Medusa JS free?",
                answer: "Yes. Medusa JS is fully open source under the MIT license — zero licensing fees, no transaction fees, and no limits on products, orders, or customers. Your only costs are server hosting and optional implementation support. Mith Tech deploys Medusa on scalable cloud infrastructure and handles all frontend development, custom plugins, and third-party integrations."
            },
            {
                question: "Does Medusa integrate with ERPNext for inventory and order management?",
                answer: "Yes. Mith Tech builds Medusa-to-ERPNext integrations that sync orders, inventory, customers, and financial data in real time. When an order is placed in Medusa, it automatically creates a sales order in ERPNext, updates stock levels, and triggers the fulfillment workflow — eliminating duplicate data entry between your commerce platform and ERP. This is one of Mith Tech's most-deployed integration patterns."
            }
        ]
    },
    {
        slug: "medusa-b2b",
        title: "B2B",
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
        slug: "marley-health",
        title: "Marley Health",
        icon: "/assets/marley-healthcare-logo.png",
        description: "Healthcare Operations ERP",
        longDescription: "A specialized healthcare ERP designed for managing clinics, patient records, and hospital operations with clinical precision.",
        features: ["Patient Records", "Lab Integration", "Clinic Management"],
        externalHref: "",
        category: "Operations",
        type: "service",
        useCase: "Healthcare providers use Marley Health to digitize patient journeys and automate clinical reporting."
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
        icon: "/assets/doctor&hosiptal-logo.png",
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
        icon: "/assets/mithtech-white-logo.png",
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
        icon: "/assets/property-management.png",
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
        icon: "/assets/aparment-logo.png",
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
        icon: "/assets/hostel-logo.png",
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
        icon: "/assets/parking-logo.png",
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
        icon: "/assets/mithtech-white-logo.png",
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
        icon: "/assets/mithtech-white-logo.png",
        description: "Directory & Marketplace",
        longDescription: "Build powerful directory and listing websites for real estate, cars, or any service marketplace.",
        features: ["Advanced Search", "User Submissions", "Map Integration"],
        externalHref: "",
        category: "Digital Presence",
        type: "service",
        useCase: "Agencies use our listing solutions to showcase thousands of items with filtered search."
    },
    {
        slug: "automation-ai",
        title: "Automation Tools & AI Agents",
        icon: "/assets/automation&ai-logo.png",
        description: "Custom AI & Automation Solutions",
        longDescription: "We build bespoke automation workflows and intelligent AI agents that eliminate manual tasks and optimize business intelligence using tools like n8n and LLMs.",
        features: ["Bespoke AI Agents", "Workflow Engineering", "Process Optimization", "LLM Integration", "Autonomous Task Execution"],
        externalHref: "",
        category: "Automation",
        type: "service",
        useCase: "Modern enterprises deploy AI agents to handle routine customer inquiries and automate complex data entry across multiple legacy systems."
    },
    {
        slug: "frappe-comm",
        title: "Communication Tools (Frappe)",
        icon: "/assets/communicationtools-logo.png",
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
        title: "HRMS",
        icon: "/assets/hrms-logo.png",
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
        icon: "/assets/jobboard-logo.png",
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
        icon: "/assets/vikunja.png",
        description: "Open Task Management",
        longDescription: "The open-source to-do app to organize your life. Manage tasks, projects, and teams with ease.",
        features: ["Kanban Boards", "List Views", "Team Collaboration"],
        externalHref: "",
        category: "Project",
        type: "service",
        useCase: "Teams use Vikunja to visualize workflows and track daily task progress."
    },
    {
        slug: "lms-frappe",
        title: "LMS (Frappe)",
        icon: "/assets/frappelms-logo.png",
        description: "Frappe Learning Suite",
        longDescription: "A comprehensive learning management system built on the Frappe framework for enterprise training.",
        features: ["Internal Training", "Certification", "Collaborative Learning"],
        externalHref: "",
        category: "Education",
        type: "service",
        useCase: "HR departments use Frappe LMS to automate employee onboarding."
    },
    {
        slug: "docuseal",
        title: "Docuseal",
        icon: "/assets/docuseal-logo.png",
        description: "Open Source Document Signing",
        longDescription: "Docuseal is an open source platform for digital document signing and automation. It provides a secure and legally binding way to sign documents online.",
        features: ["Digital Signatures", "Document Automation", "Legally Binding"],
        externalHref: "",
        category: "Infrastructure",
        type: "service",
        useCase: "Legal teams use Docuseal to automate contract signing and management."
    }
];
