// components/VisibleTracker.tsx
'use client'

import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export default function VisibleTracker({ onVisible }: { onVisible: () => void }) {
  const { ref, inView } = useInView({
    threshold: 0.1, // 10% visible
    triggerOnce: false // Para disparar cada vez que entra/sale
  });

  useEffect(() => {
    if (inView) {
      onVisible();
    }
  }, [inView, onVisible]);

  return <div ref={ref} style={{ height: '1px', width: '100%' }} />;
}