import React from 'react';
import { Target, Shield, Zap, Hexagon, ArrowRight, Briefcase, Award, Terminal } from 'lucide-react';
import { VEXA_MANIFEST } from '../../constants';
import { WavyBackground } from '../ui/WavyBackground';

const CommandCenter: React.FC = () => {
  const { strategic_protocol, agency_core, professional_logs } = VEXA_MANIFEST;

  return (
    <div className="flex flex-col gap-8 pb-12 relative">
      
      {/* Strategic Initiative Header */}
      <section className="relative rounded-sm overflow-hidden border border-white/5">
         <WavyBackground 
            className="py-12 px-4 md:px-0" 
            containerClassName="bg-carbon-light/30"
            colors={['#3B82F6', '#10B981', '#3B82F6']}
            backgroundFill="#0A0B0F"
            waveOpacity={0.3}
         >
            <div className="max-w-4xl mx-auto text-center relative z-10">
                <div className="flex items-center justify-center gap-2 mb-4">
                <Hexagon size={16} className="text-neon-cobalt animate-pulse" />
                <span className="text-xs font-mono text-neon-cobalt tracking-[0.3em] uppercase">Strategic Initiative</span>
                <Hexagon size={16} className="text-neon-cobalt animate-pulse" />
                </div>
                <h1 className="text-3xl md:text-6xl font-sans font-bold text-white tracking-tight mb-6 leading-tight">
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600">ENGINEERING</span>
                <span className="block text-white">DIGITAL SOVEREIGNTY</span>
                </h1>
                <p className="text-sm md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light border-l-2 border-neon-cobalt pl-4 text-left md:text-center md:border-l-0 md:pl-0">
                {strategic_protocol.mission_directive}
                </p>
            </div>
         </WavyBackground>
      </section>

      {/* Operational Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         {strategic_protocol.operational_pillars.map((pillar, idx) => (
            <div key={pillar.id} className="group bg-carbon-light/50 border border-white/5 p-6 md:p-8 relative overflow-hidden hover:border-neon-cobalt/30 transition-colors">
               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <h4 className="text-6xl font-bold font-mono text-white">{`0${idx + 1}`}</h4>
               </div>
               <div className="mb-6 text-neon-cobalt">
                  {idx === 0 && <Target size={32} />}
                  {idx === 1 && <Zap size={32} />}
                  {idx === 2 && <Shield size={32} />}
               </div>
               <h3 className="text-lg md:text-xl font-bold text-white mb-3 font-mono uppercase tracking-wider">{pillar.title}</h3>
               <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                  {pillar.desc}
               </p>
               <div className="mt-6 flex items-center gap-2 text-xs font-mono text-gray-500 group-hover:text-neon-cobalt transition-colors">
                  <div className="w-full h-px bg-white/10 group-hover:bg-neon-cobalt/30" />
                  <span>PROTOCOL_ACTIVE</span>
               </div>
            </div>
         ))}
      </div>

      {/* Execution Policy (List) & Professional History */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-4">
         
         {/* Left: Execution Policy */}
         <div className="lg:col-span-7 bg-black/40 border border-white/5 p-6 md:p-8 rounded-sm">
            <div className="flex items-center gap-3 mb-8">
               <Terminal size={18} className="text-signal-green" />
               <h3 className="text-sm font-mono text-white uppercase tracking-widest">Execution Policy</h3>
            </div>
            <div className="space-y-4">
               {strategic_protocol.execution_policy.map((policy, i) => (
                  <div key={i} className="flex items-center justify-between group border-b border-white/5 pb-3 last:border-0 last:pb-0 hover:bg-white/[0.02] transition-colors pl-2 -ml-2 rounded">
                     <div className="flex items-center gap-4">
                        <span className="text-xs font-mono text-gray-600 group-hover:text-neon-cobalt">{`P_0${i+1}`}</span>
                        <span className="text-xs md:text-sm text-gray-300 font-medium tracking-wide">{policy}</span>
                     </div>
                     <div className="w-2 h-2 rounded-full bg-signal-green shadow-[0_0_8px_#10B981]" />
                  </div>
               ))}
            </div>
            <div className="mt-8 pt-6 border-t border-white/5">
                <div className="flex justify-between items-center text-xs font-mono text-gray-500">
                    <span>AGENCY STATUS</span>
                    <span className="px-2 py-1 bg-signal-green/10 text-signal-green border border-signal-green/20 rounded">
                        LOCKED_IN
                    </span>
                </div>
            </div>
         </div>

         {/* Right: History Log (Compact) */}
         <div className="lg:col-span-5 bg-carbon-light/50 border border-white/5 p-6 md:p-8 rounded-sm">
            <div className="flex items-center gap-3 mb-8">
               <Award size={18} className="text-yellow-500" />
               <h3 className="text-sm font-mono text-white uppercase tracking-widest">Operational History</h3>
            </div>
            <div className="space-y-6 relative">
               {/* Timeline Line */}
               <div className="absolute left-[7px] top-2 bottom-2 w-px bg-white/10" />
               
               {professional_logs.map((log) => (
                  <div key={log.id} className="relative pl-8 group">
                     <div className="absolute left-0 top-1.5 w-3.5 h-3.5 bg-carbon border border-gray-600 rounded-full group-hover:border-neon-cobalt group-hover:bg-neon-cobalt/20 transition-colors z-10" />
                     <div className="flex flex-col">
                        <span className="text-xs font-mono text-gray-500 mb-1">{log.duration}</span>
                        <h4 className="text-white font-bold text-sm leading-tight mb-0.5">{log.entity}</h4>
                        <span className="text-xs text-neon-cobalt font-mono mb-2 block">{log.role}</span>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>

    </div>
  );
};

export default CommandCenter;