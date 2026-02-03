import React, { useState, useRef, useEffect } from 'react';
import { VEXA_MANIFEST } from '../../constants';
import { ChevronRight, Terminal } from 'lucide-react';

const TerminalLogs: React.FC = () => {
  const terminalLogic = VEXA_MANIFEST.terminal_dictionary;
  
  const [history, setHistory] = useState<Array<{ cmd: string, res: any }>>([
    { cmd: 'init', res: 'VEXA DEVS AGENCY CORE [Initialized]...' },
    { cmd: 'auth', res: 'Access Granted: Guest User' },
    { cmd: 'help', res: terminalLogic['help'].output }
  ]);
  const [input, setInput] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleContainerClick = () => {
    inputRef.current?.focus();
  };

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedInput = input.trim().toLowerCase();
    
    if (!trimmedInput) return;

    if (trimmedInput === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }

    const commandObj = terminalLogic[trimmedInput];
    let response;

    if (commandObj) {
      response = commandObj.output;
    } else if (trimmedInput === 'contact') {
      response = (
        <div className="text-neon-cobalt">
           > INITIATING CONTACT PROTOCOL...<br/>
           > Use "The Forge" module for secure transmissions.<br/>
        </div>
      );
    } else {
      response = <span className="text-alert-red">Error: Command '{trimmedInput}' not found. Type 'help'.</span>;
    }

    setHistory(prev => [...prev, { cmd: input, res: response }]);
    setInput('');
  };

  return (
    <div 
      className="h-full flex flex-col bg-black border border-white/10 rounded-sm font-mono text-sm shadow-[0_0_20px_rgba(0,0,0,0.5)] overflow-hidden"
      onClick={handleContainerClick}
    >
       <div className="bg-white/5 px-4 py-2 border-b border-white/5 flex justify-between items-center select-none backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <Terminal size={14} className="text-gray-400" />
            <span className="text-gray-500 text-xs tracking-wider">VEXA_TERM // V.2.0</span>
          </div>
          <div className="flex gap-1.5">
             <div className="w-2.5 h-2.5 rounded-full bg-alert-red/50 border border-alert-red/30"></div>
             <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50 border border-yellow-500/30"></div>
             <div className="w-2.5 h-2.5 rounded-full bg-signal-green/50 border border-signal-green/30"></div>
          </div>
       </div>
       
       <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar font-mono text-sm">
          {history.map((entry, i) => (
             <div key={i} className="group">
                <div className="flex items-center gap-2 text-gray-400 mb-1">
                   <ChevronRight size={14} className="text-neon-cobalt" />
                   <span className="opacity-75">guest@vexa:~$</span>
                   <span className="text-white">{entry.cmd}</span>
                   <span className="text-[10px] text-gray-600 ml-auto opacity-0 group-hover:opacity-100">{new Date().toLocaleTimeString()}</span>
                </div>
                <div className="pl-6 text-gray-300 leading-relaxed whitespace-pre-wrap">
                   {entry.res}
                </div>
             </div>
          ))}
          <div ref={bottomRef} />
       </div>

       <form onSubmit={handleCommand} className="p-3 bg-white/[0.02] border-t border-white/5 flex items-center gap-2">
          <span className="text-neon-cobalt font-bold animate-pulse">❯</span>
          <input 
            ref={inputRef}
            type="text" 
            value={input} 
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none text-white font-mono placeholder-gray-700 caret-neon-cobalt"
            placeholder="Enter command..."
            autoFocus
            autoComplete="off"
            spellCheck="false"
          />
       </form>
    </div>
  );
};

export default TerminalLogs;