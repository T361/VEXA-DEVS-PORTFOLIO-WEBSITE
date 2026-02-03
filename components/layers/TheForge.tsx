import React from 'react';
import { Send, CheckCircle, AlertTriangle, GitCommit, ArrowRight, Wifi } from 'lucide-react';

const TheForge: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
      {/* Contact Section */}
      <div className="flex flex-col gap-6">
        <div className="bg-carbon-light/50 border border-white/5 p-6 rounded-sm relative overflow-hidden backdrop-blur-md">
           <div className="absolute top-0 left-0 w-1 h-full bg-neon-cobalt"></div>
           <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-light text-white uppercase tracking-widest">Signal Intercept</h2>
              <div className="text-[10px] font-mono text-neon-cobalt border border-neon-cobalt/30 px-2 py-1 rounded bg-neon-cobalt/5">
                ENCRYPTED_CHANNEL
              </div>
           </div>
           
           <p className="text-gray-400 text-sm mb-6 border-l border-white/10 pl-4">
              Initiate secure communication protocol for project inquiries, collaboration requests, or system diagnostics.
           </p>
           
           <form className="space-y-5">
              <div className="space-y-1 group">
                 <label className="text-[10px] font-mono text-gray-500 uppercase group-focus-within:text-neon-cobalt transition-colors">Identity Designation</label>
                 <input 
                    type="text" 
                    className="w-full bg-black/40 border border-white/10 rounded-sm px-4 py-3 text-white font-mono text-sm focus:border-neon-cobalt/50 focus:bg-neon-cobalt/5 focus:outline-none transition-all" 
                    placeholder="Name or Organization ID" 
                 />
              </div>
              <div className="space-y-1 group">
                 <label className="text-[10px] font-mono text-gray-500 uppercase group-focus-within:text-neon-cobalt transition-colors">Comms Frequency (Email)</label>
                 <input 
                    type="email" 
                    className="w-full bg-black/40 border border-white/10 rounded-sm px-4 py-3 text-white font-mono text-sm focus:border-neon-cobalt/50 focus:bg-neon-cobalt/5 focus:outline-none transition-all" 
                    placeholder="return_path@domain.com" 
                 />
              </div>
              <div className="space-y-1 group">
                 <label className="text-[10px] font-mono text-gray-500 uppercase group-focus-within:text-neon-cobalt transition-colors">Data Packet (Message)</label>
                 <textarea 
                    rows={4} 
                    className="w-full bg-black/40 border border-white/10 rounded-sm px-4 py-3 text-white font-mono text-sm focus:border-neon-cobalt/50 focus:bg-neon-cobalt/5 focus:outline-none transition-all resize-none" 
                    placeholder="Transmit project specs, budget parameters, and timeline..." 
                 />
              </div>
              <button className="w-full bg-neon-cobalt/10 border border-neon-cobalt/50 hover:bg-neon-cobalt hover:text-white text-neon-cobalt py-3 rounded-sm font-mono text-xs font-bold tracking-[0.2em] uppercase transition-all flex items-center justify-center gap-3 group relative overflow-hidden">
                 <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                 <Send size={14} className="group-hover:translate-x-1 transition-transform" />
                 <span>Transmit Data</span>
              </button>
           </form>
        </div>

        <div className="bg-carbon-light/30 border border-white/5 p-4 rounded-sm flex items-center justify-between backdrop-blur-sm">
           <div className="flex items-center gap-3">
              <div className="relative">
                 <div className="w-2 h-2 rounded-full bg-signal-green"></div>
                 <div className="absolute inset-0 w-2 h-2 rounded-full bg-signal-green animate-ping opacity-75"></div>
              </div>
              <div className="flex flex-col">
                 <span className="text-xs font-mono text-white tracking-wider">AVAILABILITY STATUS</span>
                 <span className="text-[10px] text-gray-500">LAST UPDATED: T-MINUS 2H</span>
              </div>
           </div>
           <div className="flex items-center gap-2 px-3 py-1 bg-signal-green/5 text-signal-green border border-signal-green/20 rounded-sm text-xs font-mono">
              <Wifi size={12} />
              <span>OPEN FOR WORK (30h/w)</span>
           </div>
        </div>
      </div>

      {/* Pipeline Visualization */}
      <div className="flex flex-col gap-6">
         <div className="bg-carbon-light/50 border border-white/5 p-6 rounded-sm h-full flex flex-col relative overflow-hidden">
            {/* Background Decorator */}
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-neon-cobalt/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="flex items-center justify-between mb-8">
               <h3 className="text-sm font-mono text-gray-400 uppercase tracking-widest flex items-center gap-2">
                  <GitCommit size={14} />
                  Deployment Pipeline
               </h3>
               <span className="text-[10px] font-mono text-signal-green animate-pulse">● ACTIVE</span>
            </div>
            
            <div className="flex-1 space-y-8 relative pl-2">
               {/* Vertical Line */}
               <div className="absolute left-[19px] top-2 bottom-4 w-px bg-gradient-to-b from-signal-green via-neon-cobalt to-gray-800"></div>

               {/* Step 1: Complete */}
               <div className="relative pl-12 group">
                  <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-carbon border border-signal-green flex items-center justify-center z-10 shadow-[0_0_10px_rgba(0,230,118,0.2)]">
                     <CheckCircle size={16} className="text-signal-green" />
                  </div>
                  <div className="mb-1 flex items-center justify-between">
                     <span className="text-white font-medium text-sm group-hover:text-signal-green transition-colors">Requirement Analysis</span>
                     <span className="text-[10px] text-signal-green font-mono border border-signal-green/20 px-1.5 py-0.5 rounded bg-signal-green/5">COMPLETE</span>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">
                     System architecture mapped. Database schema finalized. API contracts defined.
                  </p>
               </div>

               {/* Step 2: In Progress */}
               <div className="relative pl-12 group">
                  <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-carbon border-2 border-neon-cobalt flex items-center justify-center z-10 shadow-[0_0_15px_rgba(46,91,255,0.3)]">
                     <div className="w-3 h-3 bg-neon-cobalt rounded-[1px] animate-spin" />
                  </div>
                  <div className="mb-1 flex items-center justify-between">
                     <span className="text-white font-medium text-sm group-hover:text-neon-cobalt transition-colors">Core Development</span>
                     <span className="text-[10px] text-neon-cobalt font-mono border border-neon-cobalt/20 px-1.5 py-0.5 rounded bg-neon-cobalt/5 animate-pulse">EXECUTING</span>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed mb-3">
                     React/Next.js frontend implementation. Component library integration.
                  </p>
                  
                  {/* Micro Progress Bar */}
                  <div className="w-full bg-black/50 h-1.5 rounded-full overflow-hidden border border-white/5">
                     <div className="h-full bg-neon-cobalt w-[75%] relative">
                        <div className="absolute inset-0 bg-white/20 animate-[shimmer_2s_infinite] skew-x-12"></div>
                     </div>
                  </div>
                  <div className="text-[10px] text-right text-gray-500 mt-1 font-mono">75% COMPLETE</div>
               </div>

               {/* Step 3: Pending */}
               <div className="relative pl-12 opacity-60">
                  <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-carbon border border-white/20 flex items-center justify-center z-10">
                     <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                  </div>
                  <div className="mb-1 flex items-center justify-between">
                     <span className="text-gray-300 font-medium text-sm">Testing & QA</span>
                     <span className="text-[10px] text-gray-500 font-mono">PENDING</span>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">
                     Unit testing coverage > 80%. Integration verification. Performance profiling.
                  </p>
               </div>

               {/* Step 4: Pending */}
               <div className="relative pl-12 opacity-40">
                  <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-carbon border border-white/10 flex items-center justify-center z-10">
                     <div className="w-2 h-2 rounded-full bg-gray-700"></div>
                  </div>
                  <div className="mb-1 flex items-center justify-between">
                     <span className="text-gray-400 font-medium text-sm">Production Deploy</span>
                     <span className="text-[10px] text-gray-600 font-mono">QUEUED</span>
                  </div>
               </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 grid grid-cols-2 gap-4">
               <div className="bg-black/20 p-3 rounded border border-white/5 text-center">
                  <div className="text-[10px] text-gray-500 mb-1 font-mono uppercase">Deploy Success Rate</div>
                  <div className="text-xl font-mono text-signal-green">98.5%</div>
               </div>
               <div className="bg-black/20 p-3 rounded border border-white/5 text-center">
                  <div className="text-[10px] text-gray-500 mb-1 font-mono uppercase">Avg Build Time</div>
                  <div className="text-xl font-mono text-neon-cobalt">4m 12s</div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default TheForge;