import { useEffect, useRef, useState } from 'react';

export function RobotCursorTracker() {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isIdle, setIsIdle] = useState(false);
  const robotRef = useRef<HTMLDivElement>(null);
  const idleTimeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!robotRef.current) return;

      const rect = robotRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;

      const angleY = (deltaX / window.innerWidth) * 45;
      const angleX = -(deltaY / window.innerHeight) * 45;

      setRotation({ x: angleX, y: angleY });
      setIsIdle(false);

      clearTimeout(idleTimeoutRef.current);
      idleTimeoutRef.current = setTimeout(() => setIsIdle(true), 2000);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(idleTimeoutRef.current);
    };
  }, []);

  return (
    <div
      ref={robotRef}
      className="relative w-48 h-48 mx-auto"
      style={{
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      <div className={`relative w-full h-full ${isIdle ? 'animate-pulse' : ''}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg blur-xl"></div>

        <div className="relative bg-black border-2 border-purple-500 rounded-lg p-4 shadow-[0_0_30px_rgba(139,92,246,0.5)]">
          <div className="flex justify-between mb-3">
            <div className="w-3 h-3 rounded-full bg-pink-500 animate-pulse shadow-[0_0_10px_rgba(236,72,153,0.8)]"></div>
            <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_rgba(6,182,212,0.8)]" style={{ animationDelay: '0.2s' }}></div>
          </div>

          <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full mb-4 shadow-[0_0_15px_rgba(139,92,246,0.6)]"></div>

          <div className="grid grid-cols-3 gap-2 mb-3">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="h-1 bg-cyan-400/50 rounded-full animate-pulse"
                style={{ animationDelay: `${i * 0.01}s` }}
              ></div>
            ))}
          </div>

          <div className="w-full h-16 bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded border border-purple-500/50 flex items-center justify-center">
            <div
              className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 shadow-[0_0_20px_rgba(139,92,246,0.8)]"
              style={{
                transform: `translate(${rotation.y * 0.3}px, ${-rotation.x * 0.3}px)`,
                transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            ></div>
          </div>

          <div className="mt-3 flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-1 h-4 bg-gradient-to-t from-pink-500 to-transparent rounded-full animate-pulse"
                style={{ animationDelay: `${i * 0.15}s` }}
              ></div>
            ))}
          </div>
        </div>

        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-purple-500/30 blur-md"></div>
      </div>
    </div>
  );
}