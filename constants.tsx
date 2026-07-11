import React from 'react';
import { VexaManifest } from './types';

export const VEXA_MANIFEST: VexaManifest = {
  agency_core: {
    entity: "VEXA DEVS",
    tagline: "DESIGN | BUILD | DEPLOY",
    professional_profile: "Specializing in MERN Stack, Scalable SaaS, and Custom CRMs. We deliver live products, not just files.",
    founded: "2024",
    global_status: "ONLINE"
  },
  system_ui_config: {
    layout: {
      grid_columns: 12,
      gap_unit: "16px",
      density_factor: 0.95
    },
    motion: {
      mechanical_ease: [0.23, 1, 0.32, 1],
      scanline_velocity: "8s"
    },
    theme: {
      background: "#020203",
      accent: "#3B82F6",
      surface: "#0A0B0F"
    }
  },
  strategic_protocol: {
    mission_directive: "We do not merely write code; we engineer digital sovereignty. VEXA DEVS operates at the intersection of high-fidelity design and fault-tolerant systems architecture. Our mandate is absolute: Deliver production-grade assets that survive the rigors of real-world scale.",
    operational_pillars: [
      {
        id: "OP_01",
        title: "PRECISION ENGINEERING",
        desc: "Every component is treated as a critical system. We reject bloat. We prioritize atomic design principles and type-safe architectures to ensure long-term maintainability."
      },
      {
        id: "OP_02",
        title: "VELOCITY & MOMENTUM",
        desc: "Rapid deployment cycles utilizing modern CI/CD pipelines. From local host to global edge networks, our delivery pipeline is automated, tested, and secure."
      },
      {
        id: "OP_03",
        title: "SCALABLE INFRASTRUCTURE",
        desc: "Building for tomorrow's load, today. Utilizing sharded databases, edge caching, and serverless compute to handle exponential growth without architectural refactors."
      }
    ],
    execution_policy: [
      "Zero Technical Debt Tolerance",
      "Mobile-First Responsive Mandate",
      "Secure-By-Design Auth Protocols",
      "Performance Budget < 100ms TTI"
    ]
  },
  capability_matrix: {
    deployment_targets: ["Vercel", "Railway", "AWS EC2", "Render", "DigitalOcean"],
    technical_arsenal: [
      { id: 'next', label: 'Next.js 14', category: 'core', x: 300, y: 100, connections: ['react', 'tailwind', 'vercel', 'supabase'] },
      { id: 'react', label: 'React', category: 'core', x: 150, y: 150, connections: ['next'] },
      { id: 'tailwind', label: 'Tailwind CSS', category: 'core', x: 450, y: 150, connections: ['next'] },
      { id: 'node', label: 'Node.js', category: 'backend', x: 300, y: 300, connections: ['mongo', 'express', 'socket', 'heroku'] },
      { id: 'express', label: 'Express', category: 'backend', x: 150, y: 350, connections: ['node'] },
      { id: 'mongo', label: 'MongoDB', category: 'data', x: 450, y: 350, connections: ['node'] },
      { id: 'supabase', label: 'Supabase', category: 'data', x: 600, y: 300, connections: ['next'] },
      { id: 'firebase', label: 'Firebase', category: 'cloud', x: 600, y: 150, connections: ['react'] },
      { id: 'vercel', label: 'Vercel', category: 'cloud', x: 300, y: 50, connections: ['next'] },
      { id: 'socket', label: 'Socket.io', category: 'backend', x: 150, y: 250, connections: ['node'] },
      { id: 'cloudinary', label: 'Cloudinary', category: 'cloud', x: 750, y: 200, connections: ['react', 'node'] },
      { id: 'railway', label: 'Railway', category: 'cloud', x: 450, y: 50, connections: ['node'] },
      { id: 'render', label: 'Render', category: 'cloud', x: 600, y: 50, connections: ['node'] },
      { id: 'heroku', label: 'Heroku', category: 'cloud', x: 750, y: 100, connections: ['node'] }
    ]
  },
  freelance_asset_registry: {
    "playistan_booking": {
      id: "playistan_booking",
      public_name: "Playistan",
      codename: "ARENA_OPS",
      status: "PRODUCTION",
      asset_links: {
        repo: "https://github.com/vexadevs-ship-it/Playistan-ISE",
        video: "https://youtube.com/@VexaDevs"
      },
      stack: ["MERN Stack", "Socket.io", "JWT", "Cloudinary"],
      architecture_specs: {
        complexity_rating: "High - Full Stack ISE",
        layer_breakdown: [
          "Real-time Socket Communication",
          "JWT Auth with OTP (Nodemailer)",
          "Admin Dashboard (Glass & Steel UI)"
        ],
        core_features: [
          "Manual Payment Verification (Screenshots)",
          "Real-time Slot Availability",
          "City-based Ground Filtering",
          "Community Chat (Text/Media)"
        ]
      },
      technical_deep_dive: {
        frontend: {
          framework: "React 19 (Vite)",
          ui_library: "Glassmorphism (CSS Vars)",
          state_management: "Context API"
        },
        backend: {
          runtime: "Node.js (Express)",
          database: "MongoDB (Mongoose)"
        }
      }
    },
    "you_gram_social": {
      id: "you_gram_social",
      public_name: "You-Gram",
      codename: "SOCIAL_GRID",
      status: "STAGING",
      asset_links: {
        repo: "https://github.com/vexadevs-ship-it/You-Gram",
        demo: "https://you-gram.vercel.app",
        video: "https://youtube.com/@VexaDevs"
      },
      stack: ["MERN Stack", "Cloudinary", "Multer", "JWT"],
      architecture_specs: {
        complexity_rating: "High",
        layer_breakdown: [
          "MongoDB Aggregation Pipelines",
          "Secure Auth (Bcrypt/JWT)",
          "Image Optimization (Cloudinary)"
        ],
        core_features: [
          "Dynamic Feed Generation",
          "Image Uploads via Multer",
          "Follow/Unfollow Graph",
          "Real-time Like/Comment"
        ]
      },
      technical_deep_dive: {
        frontend: {
          framework: "React.js",
          ui_library: "Tailwind CSS",
          state_management: "Redux Toolkit"
        },
        backend: {
          runtime: "Node.js (Express)",
          database: "MongoDB Atlas"
        }
      }
    },
    "facebook_clone_monorepo": {
      id: "facebook_clone_monorepo",
      public_name: "Mini Facebook",
      codename: "META_FORGE",
      status: "MVP",
      asset_links: {
        repo: "https://github.com/vexadevs-ship-it/MINI-FB-CLONE-MONOREPO",
        demo: "https://minifacebookclone.vercel.app/",
        video: "https://youtube.com/@VexaDevs"
      },
      stack: ["Next.js", "Express", "MongoDB", "TypeScript"],
      architecture_specs: {
        complexity_rating: "Medium",
        layer_breakdown: [
          "Monorepo Structure",
          "Zod Data Validation",
          "JWT Authentication"
        ],
        core_features: [
          "Full-Stack Type Safety",
          "Post CRUD Operations",
          "Responsive Tailwind UI",
          "Dual Deployment (Vercel/Railway)"
        ]
      },
      technical_deep_dive: {
        frontend: {
          framework: "Next.js",
          ui_library: "Tailwind CSS",
          state_management: "React Hooks"
        },
        backend: {
          runtime: "Express.js",
          database: "MongoDB (Mongoose)"
        }
      }
    },
    "campus_onestop": {
      id: "campus_onestop",
      public_name: "Campus OneStop",
      codename: "STUDENT_HUB",
      status: "MVP",
      asset_links: {
        repo: "https://github.com/vexadevs-ship-it/Campus-OneStop",
        video: "https://youtube.com/@VexaDevs"
      },
      stack: ["MERN Stack", "Vite", "Tailwind", "JWT"],
      architecture_specs: {
        complexity_rating: "Institutional",
        layer_breakdown: [
          "Role-Based Access Control (RBAC)",
          "Modular Architecture",
          "Secure JWT Auth"
        ],
        core_features: [
          "Student Complaint System",
          "Teacher Approval Workflows",
          "Admin Status Management",
          "Centralized Campus Requests"
        ]
      },
      technical_deep_dive: {
        frontend: {
          framework: "React (Vite)",
          ui_library: "Tailwind CSS",
          state_management: "Context API"
        },
        backend: {
          runtime: "Node.js (Express)",
          database: "MongoDB"
        }
      }
    },
    "chatwalrus_dashboard": {
      id: "chatwalrus_dashboard",
      public_name: "ChatWalrus Dashboard",
      codename: "WALRUS_OPS",
      status: "PRODUCTION",
      asset_links: {
        repo: "https://github.com/T361/CHATWALRUS",
        demo: "https://chatwalrus.vercel.app"
      },
      stack: ["Next.js 16", "Supabase", "TypeScript", "Zod", "Recharts"],
      architecture_specs: {
        complexity_rating: "High - Client Delivery (Trilles AI)",
        layer_breakdown: [
          "Thinkific + Zoom Data Sync Pipelines",
          "Scheduled Cron Jobs (CRON_SECRET auth)",
          "Milestone/Alert Engine"
        ],
        core_features: [
          "Per-Company Cohort Dashboards",
          "Learner Progress & Assessment Tracking",
          "Gamified Leaderboards",
          "CSV/JSON Exports"
        ]
      },
      technical_deep_dive: {
        frontend: {
          framework: "Next.js 16 (App Router)",
          ui_library: "Tailwind CSS + Recharts",
          state_management: "Server Components"
        },
        backend: {
          runtime: "Next.js Route Handlers",
          database: "Supabase (Postgres)"
        }
      }
    },
    "fast_roadmap": {
      id: "fast_roadmap",
      public_name: "FAST Roadmap",
      codename: "EMERGENT_ATLAS",
      status: "PRODUCTION",
      asset_links: {
        repo: "https://github.com/T361/ROADMAP-APP"
      },
      stack: ["Next.js 14", "MongoDB", "Three.js", "Framer Motion"],
      architecture_specs: {
        complexity_rating: "Medium - Community Platform",
        layer_breakdown: [
          "Atomic Design Component System",
          "3D Cyber Background (react-three-fiber)",
          "Jest + Playwright Test Suite"
        ],
        core_features: [
          "Curated Per-Course Learning Resources",
          "Senior's Advice / Community Wisdom Feed",
          "Curriculum Progress Tracking",
          "Mobile-First Navigation"
        ]
      },
      technical_deep_dive: {
        frontend: {
          framework: "Next.js 14 (App Router)",
          ui_library: "Tailwind CSS",
          state_management: "React Hooks"
        },
        backend: {
          runtime: "Next.js API Routes",
          database: "MongoDB"
        }
      }
    },
    "tashi_tech_website": {
      id: "tashi_tech_website",
      public_name: "Tashi Technologies",
      codename: "ARCHITECTURE_OF_TRUTH",
      status: "PRODUCTION",
      asset_links: {
        repo: "https://github.com/T361/tashitechwebsite",
        demo: "https://tashitechwebsite.vercel.app"
      },
      stack: ["Next.js 14", "TypeScript", "FastAPI Chatbot"],
      architecture_specs: {
        complexity_rating: "Medium - Corporate Platform",
        layer_breakdown: [
          "Swiss-Style High-Contrast Design System",
          "FastAPI-Powered AI Chatbot Microservice",
          "Zero-Downtime CI/CD"
        ],
        core_features: [
          "Corporate Digital Identity / Landing",
          "Verifiable AI & Identity (DID) Messaging",
          "Embedded AI Chatbot"
        ]
      },
      technical_deep_dive: {
        frontend: {
          framework: "Next.js 14",
          ui_library: "Custom Design System",
          state_management: "React Hooks"
        },
        backend: {
          runtime: "Python (FastAPI)",
          database: "N/A"
        }
      }
    },
    "airtable_webflow_sync": {
      id: "airtable_webflow_sync",
      public_name: "Airtable-Webflow Sync",
      codename: "SYNC_BRIDGE",
      status: "MVP",
      asset_links: {
        repo: "https://github.com/T361/airtable-webflow-sync"
      },
      stack: ["Node.js", "Airtable API", "Webflow v2 API"],
      architecture_specs: {
        complexity_rating: "Low - Integration Tooling",
        layer_breakdown: [
          "Airtable → Webflow Field Mapping",
          "Create/Update/Publish Pipeline"
        ],
        core_features: [
          "Automatic Create-or-Update per Record",
          "Batch Publish to Webflow CMS",
          "Schema Inspection CLI"
        ]
      },
      technical_deep_dive: {
        frontend: {
          framework: "N/A",
          ui_library: "N/A",
          state_management: "N/A"
        },
        backend: {
          runtime: "Node.js (ESM)",
          database: "Airtable / Webflow CMS"
        }
      }
    },
    "frontend_project_planner": {
      id: "frontend_project_planner",
      public_name: "Frontend Project Planner AI",
      codename: "ATOMIC_PLANNER",
      status: "PRODUCTION",
      asset_links: {
        repo: "https://github.com/T361/frontend-project-planner-ai",
        demo: "https://frontend-project-planner-ai.vercel.app"
      },
      stack: ["Next.js 16", "Supabase", "Groq", "TypeScript"],
      architecture_specs: {
        complexity_rating: "Medium - AI Tooling",
        layer_breakdown: [
          "Atomic Design Plan Generation (Atoms/Molecules/Organisms)",
          "Supabase RLS + Google OAuth",
          "Groq LLM Inference"
        ],
        core_features: [
          "Brief-to-Plan-Tree Generation",
          "Lazy Node Expansion (Drill Into Any Page)",
          "Edit/Accept/Reject/Regenerate Per Node",
          "Export to Markdown, JSON, or Scaffolding Prompt"
        ]
      },
      technical_deep_dive: {
        frontend: {
          framework: "Next.js 16 (App Router, Turbopack)",
          ui_library: "shadcn/ui + Tailwind CSS v4",
          state_management: "React Hooks"
        },
        backend: {
          runtime: "Next.js Route Handlers",
          database: "Supabase (Postgres, RLS)"
        }
      }
    },
    "legalgram_chatbot": {
      id: "legalgram_chatbot",
      public_name: "Legalgram Chatbot Service",
      codename: "LG_BRAIN",
      status: "PRODUCTION",
      asset_links: {
        repo: "https://github.com/T361/legalgramchatbotbackend"
      },
      stack: ["Python", "FastAPI"],
      architecture_specs: {
        complexity_rating: "Medium - AI Microservice",
        layer_breakdown: [
          "FastAPI Inference Service",
          "Integrated into Legalgram's Super App"
        ],
        core_features: [
          "AI Legal Assistant Chat",
          "Contextual, Real-Time Responses"
        ]
      },
      technical_deep_dive: {
        frontend: {
          framework: "N/A",
          ui_library: "N/A",
          state_management: "N/A"
        },
        backend: {
          runtime: "Python (FastAPI)",
          database: "N/A"
        }
      }
    },
    "star_sitters_backend": {
      id: "star_sitters_backend",
      public_name: "Star Sitters Backend",
      codename: "SITTER_CORE",
      status: "PRODUCTION",
      asset_links: {
        repo: "https://github.com/T361/starsitters-backend"
      },
      stack: ["PL/pgSQL", "Supabase", "Deno Edge Functions", "Firebase Cloud Messaging"],
      architecture_specs: {
        complexity_rating: "High - Marketplace Backend",
        layer_breakdown: [
          "Row-Level Security Policy Set",
          "SECURITY DEFINER RPCs",
          "Deno Edge Functions (Push, Guardian Consent Email)"
        ],
        core_features: [
          "Two-Sided Marketplace (Sitters + Families)",
          "Guardian Consent + Admin Certification Flow",
          "Job Lifecycle State Machine",
          "Clock-In/Out Wage Calculation"
        ]
      },
      technical_deep_dive: {
        frontend: {
          framework: "N/A",
          ui_library: "N/A",
          state_management: "N/A"
        },
        backend: {
          runtime: "Supabase Edge (Deno)",
          database: "PostgreSQL (Supabase, RLS)"
        }
      }
    },
    "star_sitters_core": {
      id: "star_sitters_core",
      public_name: "Star Sitters Core",
      codename: "SITTER_MOBILE_CORE",
      status: "PRODUCTION",
      asset_links: {
        repo: "https://github.com/T361/star_sitters_core"
      },
      stack: ["Dart", "Flutter"],
      architecture_specs: {
        complexity_rating: "Medium - Shared Mobile Package",
        layer_breakdown: [
          "Shared Models & Services Across Flutter Apps"
        ],
        core_features: [
          "Consumed by Star Sitters Mobile Apps"
        ]
      },
      technical_deep_dive: {
        frontend: {
          framework: "Flutter",
          ui_library: "N/A",
          state_management: "N/A"
        },
        backend: {
          runtime: "N/A",
          database: "N/A"
        }
      }
    },
    "smart_disaster_response": {
      id: "smart_disaster_response",
      public_name: "Smart Disaster Response MIS",
      codename: "RESPONSE_GRID",
      status: "PRODUCTION",
      asset_links: {
        repo: "https://github.com/T361/Smart-Disaster-Response-MIS"
      },
      stack: ["Next.js", "MS SQL Server", "T-SQL"],
      architecture_specs: {
        complexity_rating: "High - Group Database Project",
        layer_breakdown: [
          "Raw T-SQL (No ORM) via mssql npm Package",
          "Triggers, Views, Indexes, ACID Transactions",
          "RBAC + Approval Workflows"
        ],
        core_features: [
          "Incident Reporting & Rescue Team Dispatch",
          "Warehouse Inventory & Resource Allocation",
          "Hospital Coordination",
          "Financial Tracking & Analytics"
        ]
      },
      technical_deep_dive: {
        frontend: {
          framework: "Next.js (App Router)",
          ui_library: "Tailwind CSS",
          state_management: "React Hooks"
        },
        backend: {
          runtime: "Next.js Route Handlers",
          database: "Microsoft SQL Server"
        }
      }
    },
    "intellicase": {
      id: "intellicase",
      public_name: "IntelliCase — FBI Ops Management",
      codename: "CASE_FILE",
      status: "PRODUCTION",
      asset_links: {
        repo: "https://github.com/T361/IntelliCase-FBI-Operations-Management-System"
      },
      stack: ["Java", "JavaFX", "SQLite", "Maven"],
      architecture_specs: {
        complexity_rating: "High - Group Desktop Application",
        layer_breakdown: [
          "4-Tier Layered Architecture",
          "GRASP & GoF Design Patterns",
          "Offline SQLite Persistence"
        ],
        core_features: [
          "Case & Operations Management",
          "Role-Based Use Cases",
          "Offline-First Desktop Client"
        ]
      },
      technical_deep_dive: {
        frontend: {
          framework: "JavaFX 21",
          ui_library: "Custom Layered SPA",
          state_management: "N/A"
        },
        backend: {
          runtime: "Java 17+",
          database: "SQLite"
        }
      }
    },
    "legalgram_enterprise": {
      id: "legalgram_enterprise",
      public_name: "Legalgram",
      codename: "LG_PRIME",
      status: "PRODUCTION",
      asset_links: {
        repo: "https://github.com/vexadevs-ship-it/Legalgram",
        demo: "https://legalgram.co",
        video: "https://youtube.com/@VexaDevs"
      },
      stack: ["Next.js 14", "Supabase", "TypeScript", "Tailwind"],
      architecture_specs: {
        complexity_rating: "Heavy Industry Grade",
        layer_breakdown: [
          "Row Level Security (RLS)",
          "Real-time Subscriptions",
          "Edge Functions",
          "Vector Embeddings"
        ],
        core_features: [
          "Automated Legal Document Filing",
          "Secure Lawyer-Client Chat",
          "Community Forums",
          "AI Legal Assistant"
        ]
      },
      technical_deep_dive: {
        frontend: {
          framework: "Next.js 14 (App Router)",
          ui_library: "Shadcn/UI",
          state_management: "Zustand"
        },
        backend: {
          runtime: "Supabase Edge",
          database: "PostgreSQL (Supabase)",
          caching: "Supabase Realtime"
        }
      }
    }
  },
  professional_logs: [
    {
      id: "log_00a",
      entity: "Prompt to Flow",
      role: "Summer Intern — AI Product Developer & Engineer",
      duration: "Jul 2026 - Present",
      highlights: [
        "Leading system design and architecture for an AI-native workflow automation platform at NIC Islamabad.",
        "Designing agentic AI / LLM pipeline workflows integrated into the core product.",
        "Overseeing Git workflows, code review standards, and deployment pipelines across the engineering team."
      ]
    },
    {
      id: "log_00b",
      entity: "Energytech Cypher",
      role: "Intern (Remote, Houston TX)",
      duration: "Jun 2026 - Present",
      highlights: [
        "Building and testing Agentic AI automation projects for climate-tech operational workflows.",
        "Integrating internal systems to streamline technical operations."
      ]
    },
    {
      id: "log_00c",
      entity: "Pixoraft Solution",
      role: "Back End Developer (Remote, Birmingham UK)",
      duration: "Apr 2026 - Present",
      highlights: [
        "Engineered scalable architecture and optimized relational schemas for production workflows.",
        "Deployed Edge Functions via Render and Railway; integrated Supabase for real-time sync and auth.",
        "Implemented Firebase Cloud Messaging (FCM) for cross-platform push notifications."
      ]
    },
    {
      id: "log_00d",
      entity: "Trilles AI",
      role: "Full Stack Engineer",
      duration: "Jun 2026 - Jul 2026",
      highlights: [
        "Spearheaded end-to-end development of the ChatWalrus admin dashboard for e-learning cohort analytics.",
        "Architected the full frontend/backend for course progress, assessments, milestones, and alerts."
      ]
    },
    {
      id: "log_01",
      entity: "Tashi Tech Corporation",
      role: "MERN Stack Developer",
      duration: "Jan 2026 - Feb 2026",
      highlights: [
        "Architected scalable microservices for enterprise clients using Node.js.",
        "Optimized aggregate queries in MongoDB, reducing report generation time by 40%.",
        "Led the migration of legacy PHP systems to modern Next.js architectures."
      ]
    },
    {
      id: "log_02",
      entity: "RainMakerz",
      role: "Software Engineering Intern",
      duration: "Nov 2025 - Jan 2026",
      highlights: [
        "Implemented CI/CD pipelines using GitHub Actions for automated deployment.",
        "Developed custom CRM modules for the real-estate vertical."
      ]
    },
    {
      id: "log_03",
      entity: "Nayatel",
      role: "Web Dev Intern",
      duration: "June 2025 - July 2025",
      highlights: [
        "Developed full-stack internal dashboard modules using Next.js, React, and Express.",
        "Assisted in database schema design and RESTful API integration."
      ]
    }
  ],
  terminal_dictionary: {
    help: {
      output: (
        <div className="space-y-2">
           <div className="text-neon-cobalt">AVAILABLE COMMANDS:</div>
           <div className="grid grid-cols-[100px_1fr] gap-x-2 gap-y-1 text-xs">
              <span className="text-white">about</span><span className="text-gray-500">Agency profile</span>
              <span className="text-white">stack</span><span className="text-gray-500">Tech capabilities</span>
              <span className="text-white">projects</span><span className="text-gray-500">Project directory</span>
              <span className="text-white">contact</span><span className="text-gray-500">Comms channel</span>
              <span className="text-white">clear</span><span className="text-gray-500">Reset buffer</span>
           </div>
        </div>
      )
    },
    about: {
      output: "VEXA DEVS [EST. 2024] // Specialized in high-performance web applications, complex UI systems, and scalable backend architectures."
    },
    stack: {
        output: (
            <div className="text-xs space-y-1">
                <div className="text-gray-500">CORE ARCHITECTURE:</div>
                <div className="pl-2 border-l border-neon-cobalt/50">
                    <div>Frontend: Next.js 14, React, Tailwind, Framer Motion</div>
                    <div>Backend: Node.js, Express, Socket.io</div>
                    <div>Data: MongoDB Atlas, Redis, Supabase</div>
                    <div>Infra: Vercel, AWS, Docker</div>
                </div>
            </div>
        )
    },
    projects: {
        output: (
            <div className="space-y-1 text-xs">
               <div className="flex justify-between w-64 border-b border-gray-800 pb-1 mb-1">
                  <span className="text-gray-500">CODENAME</span>
                  <span className="text-gray-500">STATUS</span>
               </div>
               <div className="flex justify-between w-64"><span className="text-neon-cobalt">LEGALGRAM</span><span className="text-signal-green">PROD</span></div>
               <div className="flex justify-between w-64"><span className="text-neon-cobalt">PLAYISTAN</span><span className="text-signal-green">PROD</span></div>
               <div className="flex justify-between w-64"><span className="text-neon-cobalt">WALRUS_OPS</span><span className="text-signal-green">PROD</span></div>
               <div className="flex justify-between w-64"><span className="text-neon-cobalt">EMERGENT_ATLAS</span><span className="text-signal-green">PROD</span></div>
               <div className="flex justify-between w-64"><span className="text-neon-cobalt">ARCHITECTURE_OF_TRUTH</span><span className="text-signal-green">PROD</span></div>
               <div className="flex justify-between w-64"><span className="text-neon-cobalt">YOU_GRAM</span><span className="text-yellow-500">STAGING</span></div>
               <div className="flex justify-between w-64"><span className="text-neon-cobalt">META_FORGE</span><span className="text-gray-400">MVP</span></div>
               <div className="flex justify-between w-64"><span className="text-neon-cobalt">STUDENT_HUB</span><span className="text-gray-400">MVP</span></div>
               <div className="flex justify-between w-64"><span className="text-neon-cobalt">SYNC_BRIDGE</span><span className="text-gray-400">MVP</span></div>
            </div>
        )
    },
    init: {
        output: "System initialized. Welcome to VEXA_OS."
    }
  }
};