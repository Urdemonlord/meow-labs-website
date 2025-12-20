"use client";

import React, { useEffect, useState } from "react";
import Snowfall from "react-snowfall";

export default function SnowfallEffect() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      width: '100vw', 
      height: '100vh', 
      pointerEvents: 'none', 
      zIndex: 1,
      overflow: 'hidden'
    }}>
      <Snowfall
        color="white"
        snowflakeCount={150}
      />
    </div>
  );
}
