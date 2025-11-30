import { Sun, Wind, Zap, Leaf } from 'lucide-react';

export function PremiumBackground() {
  return (
    <>
      {/* Liquid Crystal Base Background */}
      <div className="fixed inset-0 -z-50 liquid-crystal-bg" />
      
      {/* Holographic Overlay Layer */}
      <div className="fixed inset-0 -z-40 overflow-hidden opacity-30">
        <div className="absolute inset-0 holographic-gradient" />
      </div>
      
      {/* Iridescent Liquid Orbs */}
      <div className="fixed inset-0 -z-30 overflow-hidden pointer-events-none">
        {/* Large central orb */}
        <div 
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-3xl liquid-bubble"
          style={{
            background: 'radial-gradient(circle, rgba(180, 190, 210, 0.25), rgba(160, 170, 190, 0.15), transparent)',
            animationDelay: '0s'
          }}
        />
        
        {/* Top right holographic orb */}
        <div 
          className="absolute -top-20 right-20 w-[500px] h-[500px] rounded-full blur-3xl liquid-bubble"
          style={{
            background: 'radial-gradient(circle, rgba(200, 210, 225, 0.25), rgba(180, 195, 215, 0.15), transparent)',
            animationDelay: '1s'
          }}
        />
        
        {/* Bottom left cyan orb */}
        <div 
          className="absolute bottom-10 left-10 w-[550px] h-[550px] rounded-full blur-3xl liquid-bubble"
          style={{
            background: 'radial-gradient(circle, rgba(170, 185, 205, 0.25), rgba(190, 205, 220, 0.15), transparent)',
            animationDelay: '2s'
          }}
        />
        
        {/* Bottom right purple orb */}
        <div 
          className="absolute -bottom-32 -right-32 w-[650px] h-[650px] rounded-full blur-3xl liquid-bubble"
          style={{
            background: 'radial-gradient(circle, rgba(160, 175, 195, 0.3), rgba(180, 190, 210, 0.2), transparent)',
            animationDelay: '1.5s'
          }}
        />
        
        {/* Middle floating orbs */}
        <div 
          className="absolute top-1/2 right-1/3 w-[400px] h-[400px] rounded-full blur-3xl liquid-bubble"
          style={{
            background: 'radial-gradient(circle, rgba(190, 200, 220, 0.2), rgba(180, 190, 210, 0.12), transparent)',
            animationDelay: '0.5s'
          }}
        />
        
        <div 
          className="absolute bottom-1/3 left-1/2 w-[450px] h-[450px] rounded-full blur-3xl liquid-bubble"
          style={{
            background: 'radial-gradient(circle, rgba(170, 180, 200, 0.2), rgba(190, 200, 215, 0.12), transparent)',
            animationDelay: '2.5s'
          }}
        />
      </div>
      
      {/* Liquid Crystal Grid Pattern */}
      <div className="fixed inset-0 -z-20 opacity-10">
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="liquidGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a0b0c8" stopOpacity="0.6">
                <animate attributeName="stop-color" values="#a0b0c8;#b0c0d0;#c0cce0;#a0b0c8" dur="4s" repeatCount="indefinite" />
              </stop>
              <stop offset="50%" stopColor="#b0c0d0" stopOpacity="0.4">
                <animate attributeName="stop-color" values="#b0c0d0;#c0cce0;#a8b8cc;#b0c0d0" dur="4s" repeatCount="indefinite" />
              </stop>
              <stop offset="100%" stopColor="#c0cce0" stopOpacity="0.3">
                <animate attributeName="stop-color" values="#c0cce0;#d0d8e8;#a0b0c8;#c0cce0" dur="4s" repeatCount="indefinite" />
              </stop>
            </linearGradient>
            
            <linearGradient id="liquidGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#b8c8d8" stopOpacity="0.6">
                <animate attributeName="stop-color" values="#b8c8d8;#c8d0e0;#d0d8e8;#b8c8d8" dur="5s" repeatCount="indefinite" />
              </stop>
              <stop offset="100%" stopColor="#d0d8e8" stopOpacity="0.3">
                <animate attributeName="stop-color" values="#d0d8e8;#a0b0c8;#b8c8d8;#d0d8e8" dur="5s" repeatCount="indefinite" />
              </stop>
            </linearGradient>
            
            <radialGradient id="crystalGlow">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#b0c0d8" stopOpacity="0.4" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </radialGradient>
          </defs>
          
          {/* Flowing liquid waves */}
          <path 
            d="M0,150 Q250,100 500,150 T1000,150 L1000,0 L0,0 Z" 
            fill="url(#liquidGradient1)"
            opacity="0.3"
          >
            <animate attributeName="d" 
              values="M0,150 Q250,100 500,150 T1000,150 L1000,0 L0,0 Z;
                      M0,130 Q250,180 500,130 T1000,130 L1000,0 L0,0 Z;
                      M0,150 Q250,100 500,150 T1000,150 L1000,0 L0,0 Z"
              dur="8s" 
              repeatCount="indefinite" 
            />
          </path>
          
          <path 
            d="M0,900 Q250,850 500,900 T1000,900 L1000,1000 L0,1000 Z" 
            fill="url(#liquidGradient2)"
            opacity="0.3"
          >
            <animate attributeName="d" 
              values="M0,900 Q250,850 500,900 T1000,900 L1000,1000 L0,1000 Z;
                      M0,880 Q250,930 500,880 T1000,880 L1000,1000 L0,1000 Z;
                      M0,900 Q250,850 500,900 T1000,900 L1000,1000 L0,1000 Z"
              dur="10s" 
              repeatCount="indefinite" 
            />
          </path>
          
          {/* Crystal grid lines */}
          <g opacity="0.15" stroke="url(#liquidGradient1)" strokeWidth="1">
            {Array.from({ length: 15 }).map((_, i) => (
              <line
                key={`h-${i}`}
                x1="0"
                y1={i * 70}
                x2="2000"
                y2={i * 70}
                strokeDasharray="10,10"
              >
                <animate 
                  attributeName="stroke-dashoffset" 
                  from="0" 
                  to="20" 
                  dur="2s" 
                  repeatCount="indefinite" 
                />
              </line>
            ))}
          </g>
          
          <g opacity="0.15" stroke="url(#liquidGradient2)" strokeWidth="1">
            {Array.from({ length: 20 }).map((_, i) => (
              <line
                key={`v-${i}`}
                x1={i * 100}
                y1="0"
                x2={i * 100}
                y2="2000"
                strokeDasharray="10,10"
              >
                <animate 
                  attributeName="stroke-dashoffset" 
                  from="0" 
                  to="20" 
                  dur="2.5s" 
                  repeatCount="indefinite" 
                />
              </line>
            ))}
          </g>
          
          {/* Glowing crystal particles */}
          {Array.from({ length: 30 }).map((_, i) => {
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            const duration = 3 + Math.random() * 4;
            const delay = Math.random() * 2;
            
            return (
              <circle
                key={`particle-${i}`}
                cx={`${x}%`}
                cy={`${y}%`}
                r="2"
                fill="url(#crystalGlow)"
              >
                <animate
                  attributeName="opacity"
                  values="0;1;0"
                  dur={`${duration}s`}
                  begin={`${delay}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="r"
                  values="1;3;1"
                  dur={`${duration}s`}
                  begin={`${delay}s`}
                  repeatCount="indefinite"
                />
              </circle>
            );
          })}
        </svg>
      </div>
      
      {/* Holographic Energy Icons */}
      <div className="fixed inset-0 -z-15 overflow-hidden pointer-events-none">
        {/* Solar icon with holographic glow */}
        <div 
          className="absolute top-20 right-32 opacity-8"
          style={{
            filter: 'drop-shadow(0 0 20px rgba(160, 180, 200, 0.4))',
            animation: 'liquidBubble 6s ease-in-out infinite'
          }}
        >
          <Sun className="w-24 h-24 text-slate-400" style={{ filter: 'hue-rotate(0deg)', animation: 'iridescent 8s linear infinite' }} />
        </div>
        
        {/* Wind icon */}
        <div 
          className="absolute top-1/3 left-24 opacity-8"
          style={{
            filter: 'drop-shadow(0 0 20px rgba(180, 190, 210, 0.4))',
            animation: 'liquidBubble 7s ease-in-out infinite',
            animationDelay: '1s'
          }}
        >
          <Wind className="w-28 h-28 text-slate-400" style={{ filter: 'hue-rotate(0deg)', animation: 'iridescent 8s linear infinite' }} />
        </div>
        
        {/* Lightning icon */}
        <div 
          className="absolute bottom-1/4 right-40 opacity-8"
          style={{
            filter: 'drop-shadow(0 0 20px rgba(170, 185, 205, 0.4))',
            animation: 'liquidBubble 5s ease-in-out infinite',
            animationDelay: '2s'
          }}
        >
          <Zap className="w-20 h-20 text-slate-300" style={{ filter: 'hue-rotate(0deg)', animation: 'iridescent 8s linear infinite' }} />
        </div>
        
        {/* Leaf icon */}
        <div 
          className="absolute bottom-32 left-1/4 opacity-8"
          style={{
            filter: 'drop-shadow(0 0 20px rgba(180, 195, 215, 0.4))',
            animation: 'liquidBubble 6.5s ease-in-out infinite',
            animationDelay: '0.5s'
          }}
        >
          <Leaf className="w-32 h-32 text-slate-300" style={{ filter: 'hue-rotate(0deg)', animation: 'iridescent 8s linear infinite' }} />
        </div>
        
        {/* Additional smaller icons */}
        <div 
          className="absolute top-1/2 right-1/4 opacity-5"
          style={{
            filter: 'drop-shadow(0 0 15px rgba(160, 170, 190, 0.3))',
            animation: 'liquidBubble 8s ease-in-out infinite',
            animationDelay: '1.5s'
          }}
        >
          <Sun className="w-16 h-16 text-slate-300" style={{ filter: 'hue-rotate(0deg)', animation: 'iridescent 8s linear infinite' }} />
        </div>
        
        <div 
          className="absolute top-2/3 left-1/3 opacity-5"
          style={{
            filter: 'drop-shadow(0 0 15px rgba(180, 190, 210, 0.3))',
            animation: 'liquidBubble 7.5s ease-in-out infinite',
            animationDelay: '2.5s'
          }}
        >
          <Leaf className="w-20 h-20 text-slate-400" style={{ filter: 'hue-rotate(0deg)', animation: 'iridescent 8s linear infinite' }} />
        </div>
      </div>
      
      {/* Chromatic aberration effect overlay */}
      <div 
        className="fixed inset-0 -z-10 pointer-events-none mix-blend-soft-light opacity-15"
        style={{
          background: 'radial-gradient(circle at 30% 40%, rgba(180, 190, 210, 0.15), transparent 60%), radial-gradient(circle at 70% 60%, rgba(160, 180, 200, 0.15), transparent 60%)'
        }}
      />
      
      {/* Top liquid gradient fade */}
      <div className="fixed top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#e8eaf0]/80 via-[#e8eaf0]/50 to-transparent -z-5 pointer-events-none" />
      
      {/* Bottom liquid gradient fade */}
      <div className="fixed bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#e8eaf0]/85 via-[#d4d8e3]/60 to-transparent -z-5 pointer-events-none" />
    </>
  );
}
