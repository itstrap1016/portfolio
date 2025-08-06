// components/SpotlightEffect.tsx
import { motion } from "framer-motion";
import { useState } from "react";

function LightEffect({ children }: { children: React.ReactNode }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  return (
    <div className="relative min-h-screen" onMouseMove={handleMouseMove}>
      <motion.div
        className="fixed inset-0 pointer-events-none z-10 max-lg:hidden"
        style={{
          background: `radial-gradient(500px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(36, 99, 188, 0.2), rgba(36, 99, 188, 0.1) 40%, transparent 80%)`,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      <div
        className="fixed inset-0 pointer-events-none z-10 hidden max-lg:block"
        style={{
          background: `radial-gradient(600px circle at 0px 0px, rgba(36, 99, 188, 0.2), rgba(36, 99, 188, 0.1) 40%, transparent 80%)`,
        }}
      />
      {children}
    </div>
  );
}

export default LightEffect;
