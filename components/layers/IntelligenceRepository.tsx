import React from 'react';
import { ExternalLink, Github, Layers, FileText, Server, Code, PlayCircle, Terminal, Database, Cpu, LayoutGrid, ArrowRight } from 'lucide-react';
import { VEXA_MANIFEST } from '../../constants';
import { ProjectAsset } from '../../types';
import { WavyBackground } from '../ui/WavyBackground';

const ProjectCard: React.FC<{ project: ProjectAsset }> = ({ project }) => (
  <div className="group relative bg-carbon-light/50 border border-white/5 hover:border-neon-cobalt/50 transition-all duration-300 rounded-sm overflow-hidden flex flex-col h-full">
    {/* Header Status Bar */}
    <div className="h-1 w-full bg-gray-800">
       <div className={`h-full ${project.status === 'PRODUCTION' ? 'bg-signal-green' : project.status === 'STAGING' ? 'bg-neon-cobalt' : 'bg-yellow-500'} w-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
    </div>

    <div className="p-4 md:p-6 flex-1 flex flex-col">
       <div className="flex items-start justify-between mb-4">
          <div>
             <div className="text-[10px] font-mono text-neon-cobalt mb-1">{project.codename}</div>
             <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-neon-cobalt transition-colors">{project.public_name}</h3>
          </div>
          <div className={`px-2 py-1 rounded text-[10px] font-mono font-bold border ${project.status === 'PRODUCTION' ? 'border-signal-green/30 text-signal-green bg-signal-green/10' : 'border-gray-700 text-gray-500'}`}>
             {project.status}
          </div>
       </div>

       {/* Stack Chips */}
       <div className="flex flex-wrap gap-2 mb-6">
          {project.stack.map((tech, i) => (
             <span key={i} className="px-2 py-0.5 bg-white/5 border border-white/10 rounded text-[10px] text-gray-400 font-mono">
                {tech}
             </span>
          ))}
       </div>

       {/* Architecture Specs */}
       <div className="bg-black/40 rounded border border-white/10 p-3 mb-6 font-mono text-[10px] text-gray-400 space-y-2">
          <div className="text-gray-600 border-b border-white/5 pb-1 flex items-center gap-2">
             <Cpu size={10} />
             ARCH_SPECS // {project.architecture_specs.complexity_rating}
          </div>
          <ul className="space-y-1">
            {project.architecture_specs.core_features.slice(0, 3).map((feat, i) => (
               <li key={i} className="flex gap-2">
                  <span className="text-neon-cobalt">➜</span>
                  <span className="truncate">{feat}</span>
               </li>
            ))}
          </ul>
       </div>

       {/* Technical Deep Dive Grid */}
       <div className="grid grid-cols-2 gap-4 mt-auto mb-6">
          <div className="space-y-1">
             <div className="text-[10px] text-gray-500 uppercase font-mono flex items-center gap-1">
                <LayoutGrid size={10} /> Frontend
             </div>
             <div className="text-xs text-white">{project.technical_deep_dive.frontend.framework}</div>
             <div className="text-[10px] text-gray-500 truncate">{project.technical_deep_dive.frontend.ui_library}</div>
          </div>
          <div className="space-y-1">
             <div className="text-[10px] text-gray-500 uppercase font-mono flex items-center gap-1">
                <Database size={10} /> Backend
             </div>
             <div className="text-xs text-white">{project.technical_deep_dive.backend.runtime}</div>
             <div className="text-[10px] text-gray-500 truncate">{project.technical_deep_dive.backend.database}</div>
          </div>
       </div>

       <div className="flex flex-col md:flex-row gap-3 mt-auto">
          <a href={project.asset_links.repo} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-2 py-2 text-xs font-mono bg-white/5 hover:bg-neon-cobalt hover:text-white transition-all border border-white/10 hover:border-neon-cobalt rounded-sm">
             <Github size={14} />
             <span>SOURCE</span>
          </a>
          {project.asset_links.demo && (
             <a href={project.asset_links.demo} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-2 py-2 text-xs font-mono bg-white/5 hover:bg-white/10 transition-all border border-white/10 rounded-sm">
                <ExternalLink size={14} />
                <span>LIVE DEMO</span>
             </a>
          )}
           {project.asset_links.video && !project.asset_links.demo && (
             <a href={project.asset_links.video} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-2 py-2 text-xs font-mono bg-white/5 hover:bg-white/10 transition-all border border-white/10 rounded-sm">
                <PlayCircle size={14} />
                <span>WATCH</span>
             </a>
          )}
       </div>
    </div>
  </div>
);

const IntelligenceRepository: React.FC = () => {
  const projects = Object.values(VEXA_MANIFEST.freelance_asset_registry);

  return (
    <div className="relative pb-12">
      {/* Background container that spans the full height implicitly via absolute positioning within a relative parent if needed, 
          but here we want it to flow naturally or sit behind. 
          Given the layout, we'll wrap the top section or the whole thing. 
          For consistency with CommandCenter, let's just make the header cool. */}
      
      <div className="space-y-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <h2 className="text-xl md:text-2xl font-light text-white tracking-widest uppercase flex items-center gap-3">
              <Layers className="text-neon-cobalt" />
              Asset Registry
          </h2>
          <div className="flex gap-2">
              <span className="px-3 py-1 bg-white/5 rounded text-xs text-gray-400 font-mono">TOTAL: {projects.length}</span>
              <span className="px-3 py-1 bg-white/5 rounded text-xs text-gray-400 font-mono">STATUS: ACTIVE</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* YouTube Channel Uplink replacing Case Study */}
        <div className="mt-12 bg-carbon-light border border-white/10 rounded-sm p-1 overflow-hidden relative">
          <WavyBackground 
              className="p-6 md:p-8 flex flex-col items-center justify-center text-center gap-4 hover:bg-[#FF0000]/10 transition-colors group cursor-pointer" 
              containerClassName=""
              colors={['#FF0000', '#990000']}
              backgroundFill="#0A0B0F"
              waveOpacity={0.2}
              onClick={() => window.open('https://youtube.com/@VexaDevs', '_blank')}
          >
              <div className="w-16 h-16 rounded-full bg-[#FF0000] flex items-center justify-center text-white shadow-[0_0_20px_rgba(255,0,0,0.4)] group-hover:scale-110 transition-transform">
                <PlayCircle size={32} fill="currentColor" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">INCOMING TRANSMISSION // VEXA DEVS</h3>
                <p className="text-gray-400 font-mono text-sm">Watch the full architectural breakdown of our shipping logs on YouTube.</p>
              </div>
              <div className="flex items-center gap-2 text-[#FF0000] font-mono text-xs tracking-widest border-b border-[#FF0000] pb-0.5">
                <span>ACCESS CHANNEL</span>
                <ArrowRight size={12} />
              </div>
          </WavyBackground>
        </div>
      </div>
    </div>
  );
};

export default IntelligenceRepository;