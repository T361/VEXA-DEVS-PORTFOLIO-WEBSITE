import React from 'react';

export interface VexaManifest {
  agency_core: {
    entity: string;
    tagline: string;
    professional_profile: string;
    founded: string;
    global_status: 'ONLINE' | 'OFFLINE' | 'BUSY';
  };
  system_ui_config: {
    layout: {
      grid_columns: number;
      gap_unit: string;
      density_factor: number;
    };
    motion: {
      mechanical_ease: number[];
      scanline_velocity: string;
    };
    theme: {
      background: string;
      accent: string;
      surface: string;
    };
  };
  strategic_protocol: {
    mission_directive: string;
    operational_pillars: Array<{
      id: string;
      title: string;
      desc: string;
    }>;
    execution_policy: string[];
  };
  capability_matrix: {
    technical_arsenal: TechNode[];
    deployment_targets: string[];
  };
  freelance_asset_registry: Record<string, ProjectAsset>;
  professional_logs: Array<{
    id: string;
    entity: string;
    role: string;
    duration: string;
    highlights: string[];
  }>;
  terminal_dictionary: Record<string, { output: React.ReactNode }>;
}

export interface ProjectAsset {
  id: string;
  public_name: string;
  codename: string;
  status: 'PRODUCTION' | 'STAGING' | 'MVP';
  asset_links: {
    repo: string;
    demo?: string;
    video?: string;
  };
  stack: string[]; // High level summary
  architecture_specs: {
    complexity_rating: string;
    layer_breakdown: string[];
    core_features: string[];
  };
  technical_deep_dive: {
    frontend: {
      framework: string;
      ui_library: string;
      state_management: string;
    };
    backend: {
      runtime: string;
      database: string;
      caching?: string;
    };
  };
}

export interface TechNode {
  id: string;
  label: string;
  category: 'core' | 'backend' | 'cloud' | 'data';
  x: number;
  y: number;
  connections: string[];
}