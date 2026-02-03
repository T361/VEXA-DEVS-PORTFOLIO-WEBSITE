import React, { useState, useEffect } from 'react';
import { Activity, Database, Cpu, Menu, X, Globe, ShieldCheck, Box } from 'lucide-react';
import CommandCenter from './components/layers/CommandCenter';
import IntelligenceRepository from './components/layers/IntelligenceRepository';
import NeuralNetwork from './components/layers/NeuralNetwork';
import { VEXA_MANIFEST } from './constants';

type PageId = 'COMMAND_CENTER' | 'INTELLIGENCE' | 'NEURAL_NET';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<PageId>('COMMAND_CENTER');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setSidebarOpen(!mobile);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleNavClick = (id: PageId) => {
    setActivePage(id);
    if (isMobile) setSidebarOpen(false);
  };

  const renderContent = () => {
    switch (activePage) {
      case 'COMMAND_CENTER': return <CommandCenter />;
      case 'INTELLIGENCE': return <IntelligenceRepository />;
      case 'NEURAL_NET': return <NeuralNetwork />;
      default: return <CommandCenter />;
    }
  };

  const NavItem = ({ id, label, icon: Icon }: { id: PageId; label: string; icon: any }) => (
    <button
      onClick={() => handleNavClick(id)}
      className={`w-full flex items-center gap-3 px-4 py-3 text-xs tracking-widest font-mono border-l-2 transition-all duration-300 group
        ${activePage === id 
          ? 'border-neon-cobalt bg-neon-cobalt/10 text-white' 
          : 'border-transparent text-gray-500 hover:text-cyber-gray hover:bg-white/5'
        }`}
    >
      <Icon size={16} className={`${activePage === id ? 'text-neon-cobalt' : 'text-gray-600 group-hover:text-gray-400'}`} />
      <span className="uppercase">{label}</span>
      {activePage === id && (
        <span className="ml-auto w-1.5 h-1.5 rounded-full bg-neon-cobalt shadow-[0_0_8px_#3B82F6]"></span>
      )}
    </button>
  );

  return (
    <div className="flex h-screen overflow-hidden bg-carbon text-gray-300 selection:bg-neon-cobalt/30 selection:text-white relative">
      {/* Scanline Overlay */}
      <div className="absolute inset-0 pointer-events-none z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(59,130,246,0.03),rgba(16,185,129,0.01),rgba(59,130,246,0.03))] bg-[length:100%_2px,3px_100%] opacity-20" />
      
      {/* Mobile Backdrop */}
      {isMobile && sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 transition-opacity"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`fixed md:relative z-50 h-full bg-carbon-light border-r border-white/5 transition-transform duration-300 ease-in-out flex flex-col w-64
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:w-16 md:translate-x-0'}
        `}
      >
        <div className="h-16 flex items-center justify-between px-4 border-b border-white/5 shrink-0">
          {sidebarOpen && (
            <div className="flex flex-col animate-fadeIn">
              <span className="text-sm font-bold tracking-[0.2em] text-white truncate">{VEXA_MANIFEST.agency_core.entity}</span>
              <span className="text-[9px] font-mono text-neon-cobalt">EST. {VEXA_MANIFEST.agency_core.founded}</span>
            </div>
          )}
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)} 
            className="p-1 hover:bg-white/5 rounded text-gray-400 ml-auto"
          >
             {sidebarOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>

        <nav className="flex-1 py-6 space-y-1 overflow-y-auto custom-scrollbar">
          <NavItem id="COMMAND_CENTER" label={sidebarOpen ? "Mission Control" : ""} icon={Activity} />
          <NavItem id="INTELLIGENCE" label={sidebarOpen ? "Asset Registry" : ""} icon={Database} />
          <NavItem id="NEURAL_NET" label={sidebarOpen ? "Tech Stream" : ""} icon={Cpu} />
        </nav>

        <div className="p-4 border-t border-white/5 shrink-0">
          <div className={`bg-black/40 border border-white/10 rounded p-3 ${!sidebarOpen && 'hidden'}`}>
             <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded bg-neon-cobalt/20 flex items-center justify-center border border-neon-cobalt/50">
                   <span className="font-mono font-bold text-neon-cobalt text-xs">VX</span>
                </div>
                <div>
                   <div className="text-xs font-bold text-white">SYSTEM STATUS</div>
                   <div className="text-[10px] text-gray-500">{VEXA_MANIFEST.agency_core.global_status}</div>
                </div>
             </div>
             <div className="flex items-center gap-2 text-[10px] text-signal-green">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-signal-green opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-signal-green"></span>
                </span>
                <span>UPLINK ESTABLISHED</span>
             </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full overflow-hidden relative w-full">
         <header className="h-16 flex items-center justify-between px-4 md:px-6 border-b border-white/5 bg-carbon/80 backdrop-blur-sm z-30 shrink-0">
            <div className="flex items-center gap-4">
              {!sidebarOpen && (
                 <button onClick={() => setSidebarOpen(true)} className="md:hidden text-gray-400 p-2 -ml-2 hover:bg-white/5 rounded">
                    <Menu size={20} />
                 </button>
              )}
              <div className="flex flex-col">
                 <h1 className="text-sm font-bold text-white tracking-widest uppercase">{activePage.replace('_', ' ')}</h1>
                 <span className="text-[10px] font-mono text-gray-500">AGENCY PORTFOLIO // PRODUCTION_MODE</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
               <div className="hidden md:flex items-center gap-6 text-[10px] font-mono text-gray-500">
                  <div className="flex items-center gap-2">
                     <Globe size={12} />
                     <span>GLOBAL</span>
                  </div>
                  <div className="flex items-center gap-2">
                     <ShieldCheck size={12} className="text-signal-green" />
                     <span>SECURE</span>
                  </div>
                  <div className="flex items-center gap-2">
                     <Box size={12} />
                     <span>V.2.0.0</span>
                  </div>
               </div>
            </div>
         </header>

         <div className="flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth relative w-full">
            <div className="max-w-7xl mx-auto h-full">
              {renderContent()}
            </div>
         </div>
      </main>
    </div>
  );
};

export default App;