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
    "legalgram_enterprise": {
      id: "legalgram_enterprise",
      public_name: "Legalgram",
      codename: "LG_PRIME",
      status: "PRODUCTION",
      asset_links: {
        repo: "https://github.com/vexadevs-ship-it/legalgram-core",
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
    },
    "playistan_booking": {
      id: "playistan_booking",
      public_name: "Playistan",
      codename: "ARENA_OPS",
      status: "PRODUCTION",
      asset_links: {
        repo: "https://github.com/vexadevs-ship-it/Playistan-ISE",
        video: "https://youtube.com/@VexaDevs"
      },
      stack: ["MERN Stack", "Google Maps API", "Stripe"],
      architecture_specs: {
        complexity_rating: "High",
        layer_breakdown: [
          "Geo-Spatial Query Engine",
          "Concurrency Booking Locks",
          "Vendor Dashboard Logic"
        ],
        core_features: [
          "Real-time Ground Availability",
          "Team Matchmaking Algorithms",
          "Integrated Payment Gateway",
          "Automated SMS Alerts"
        ]
      },
      technical_deep_dive: {
        frontend: {
          framework: "React (Vite)",
          ui_library: "MUI v5",
          state_management: "Redux Toolkit"
        },
        backend: {
          runtime: "Express.js API",
          database: "MongoDB (GeoJSON)"
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
        video: "https://youtube.com/@VexaDevs"
      },
      stack: ["MERN Stack", "Cloudinary", "Socket.io"],
      architecture_specs: {
        complexity_rating: "High",
        layer_breakdown: [
          "Media Transcoding Pipeline",
          "Feed Aggregation Algorithm",
          "Story Expiration Workers"
        ],
        core_features: [
          "High-Res Image Uploads (Cloudinary)",
          "Infinite Scroll Feeds",
          "Real-time Notification Fan-out",
          "24h Story Logic"
        ]
      },
      technical_deep_dive: {
        frontend: {
          framework: "React",
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
      public_name: "Facebook Clone",
      codename: "META_FORGE",
      status: "MVP",
      asset_links: {
        repo: "https://github.com/vexadevs-ship-it/MINI-FB-CLONE-MONOREPO",
        video: "https://youtube.com/@VexaDevs"
      },
      stack: ["Next.js", "MongoDB", "Express", "Tailwind"],
      architecture_specs: {
        complexity_rating: "High Fidelity",
        layer_breakdown: [
          "Social Graph Logic (Aggregations)",
          "Complex Data Modeling",
          "O-Auth Integration"
        ],
        core_features: [
          "Complex Recursive Comment Threads",
          "Friend Recommendation Engine",
          "Live Post Reactions",
          "Dark Mode Native"
        ]
      },
      technical_deep_dive: {
        frontend: {
          framework: "Next.js 13",
          ui_library: "Tailwind CSS",
          state_management: "Recoil"
        },
        backend: {
          runtime: "Node.js (Express)",
          database: "MongoDB"
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
      stack: ["MERN Stack", "React", "Node.js", "Express"],
      architecture_specs: {
        complexity_rating: "Institutional",
        layer_breakdown: [
          "RBAC (Student/Teacher/Admin)",
          "Academic Record Digitization",
          "Assignment Submission Pipeline"
        ],
        core_features: [
          "Centralized Student Profile",
          "Real-time Attendance Tracking",
          "Course Material Repository",
          "Grade Dissemination System"
        ]
      },
      technical_deep_dive: {
        frontend: {
          framework: "React",
          ui_library: "Tailwind CSS",
          state_management: "Redux"
        },
        backend: {
          runtime: "Node.js",
          database: "MongoDB"
        }
      }
    }
  },
  professional_logs: [
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
               <div className="flex justify-between w-64"><span className="text-neon-cobalt">YOU_GRAM</span><span className="text-yellow-500">STAGING</span></div>
               <div className="flex justify-between w-64"><span className="text-neon-cobalt">META_FORGE</span><span className="text-gray-400">MVP</span></div>
               <div className="flex justify-between w-64"><span className="text-neon-cobalt">STUDENT_HUB</span><span className="text-gray-400">MVP</span></div>
            </div>
        )
    },
    init: {
        output: "System initialized. Welcome to VEXA_OS."
    }
  }
};