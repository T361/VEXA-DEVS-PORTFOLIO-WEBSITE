import React, { useRef, useState } from 'react';
import { VEXA_MANIFEST } from '../../constants';
import { Move } from 'lucide-react';

const NeuralNetwork: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const nodes = VEXA_MANIFEST.capability_matrix.technical_arsenal;
  
  // Calculate center offsets to center the graph
  const offsetX = 50;
  const offsetY = 50;

  const getNodeColor = (category: string) => {
    switch (category) {
      case 'core': return '#3B82F6'; // neon-cobalt
      case 'backend': return '#10B981'; // signal-green
      case 'data': return '#EF4444'; // alert-red
      case 'cloud': return '#F59E0B'; // amber
      default: return '#9CA3AF';
    }
  };

  return (
    <div className="h-full min-h-[600px] relative overflow-hidden bg-carbon-light/30 border border-white/5 rounded-sm flex flex-col" ref={containerRef}>
      
      {/* Legend - Absolute on top left, persistent */}
      <div className="absolute top-4 left-4 z-20 space-y-2 pointer-events-none bg-black/60 p-2 rounded backdrop-blur-sm border border-white/5">
         <h2 className="text-xl text-white font-mono uppercase tracking-widest">Capability Matrix</h2>
         <div className="flex flex-col gap-1 text-[10px] font-mono text-gray-500">
            <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#3B82F6]"></span> Frontend Core</span>
            <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#10B981]"></span> Backend & API</span>
            <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#EF4444]"></span> Persistence</span>
            <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#F59E0B]"></span> Cloud Infra</span>
         </div>
      </div>

      {/* Scrollable Container */}
      <div className="flex-1 overflow-auto custom-scrollbar relative">
        <div className="min-w-[900px] min-h-[600px] w-full h-full relative">
            <svg className="w-full h-full absolute inset-0 pointer-events-auto">
                {/* Definitions for glow effects */}
                <defs>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                    <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
                </defs>

                {/* Render Connections */}
                <g transform={`translate(${offsetX}, ${offsetY})`}>
                {nodes.map((node) => 
                    node.connections.map((targetId) => {
                    const target = nodes.find(n => n.id === targetId);
                    if (!target) return null;
                    
                    const isHighlighted = hoveredNode === node.id || hoveredNode === targetId;

                    return (
                        <line
                        key={`${node.id}-${targetId}`}
                        x1={node.x}
                        y1={node.y}
                        x2={target.x}
                        y2={target.y}
                        stroke={isHighlighted ? '#ffffff' : '#374151'}
                        strokeWidth={isHighlighted ? 2 : 1}
                        strokeOpacity={isHighlighted ? 0.8 : 0.3}
                        className="transition-all duration-300"
                        />
                    );
                    })
                )}

                {/* Render Nodes */}
                {nodes.map((node) => {
                    const isActive = hoveredNode === node.id;
                    const color = getNodeColor(node.category);

                    return (
                    <g 
                        key={node.id} 
                        transform={`translate(${node.x}, ${node.y})`}
                        onMouseEnter={() => setHoveredNode(node.id)}
                        onMouseLeave={() => setHoveredNode(null)}
                        onTouchStart={() => setHoveredNode(node.id === hoveredNode ? null : node.id)}
                        className="cursor-pointer transition-all duration-300"
                        style={{ opacity: hoveredNode && hoveredNode !== node.id && !node.connections.includes(hoveredNode) && !nodes.find(n => n.id === hoveredNode)?.connections.includes(node.id) ? 0.2 : 1 }}
                    >
                        {/* Outer Ring Pulse */}
                        <circle 
                        r={isActive ? 30 : 20} 
                        fill={color} 
                        fillOpacity={0.1}
                        className="animate-pulse-fast"
                        />
                        
                        {/* Core Node */}
                        <circle 
                        r={6} 
                        fill={color} 
                        filter="url(#glow)"
                        stroke="#fff"
                        strokeWidth={isActive ? 2 : 0}
                        />

                        {/* Label Background */}
                        <rect 
                        x={12} 
                        y={-10} 
                        width={node.label.length * 8 + 10} 
                        height={20} 
                        fill="#0A0B0D" 
                        fillOpacity={0.8}
                        rx={2}
                        className={`${isActive ? 'opacity-100' : 'opacity-60'} transition-opacity`}
                        />

                        {/* Text Label */}
                        <text
                        x={16}
                        y={4}
                        fill="#fff"
                        fontSize={12}
                        fontFamily="JetBrains Mono, monospace"
                        className="select-none pointer-events-none"
                        >
                        {node.label}
                        </text>
                    </g>
                    );
                })}
                </g>
            </svg>
        </div>
      </div>
      
      {/* Interactive Overlay Hint */}
      <div className="absolute bottom-4 right-4 text-xs text-gray-600 font-mono animate-pulse flex items-center gap-2 pointer-events-none z-20">
        <Move size={12} />
        <span className="hidden md:inline">HOVER NODES TO REVEAL DEPENDENCIES</span>
        <span className="md:hidden">PAN TO EXPLORE • TAP NODES</span>
      </div>
    </div>
  );
};

export default NeuralNetwork;