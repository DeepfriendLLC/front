// components/Smartlook.tsx
import { useEffect } from 'react';
import Script from 'next/script';

declare global {
  interface Window {
    smartlook?: (...args: any[]) => void;
    smartlookQueue?: any[][];
  }
}

const Smartlook = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    window.smartlook = window.smartlook || function (...args: any[]) {
      if (!window.smartlookQueue) {
        window.smartlookQueue = [];
      }
      window.smartlookQueue.push(args);
    };
  }, []);

  return (
    <Script
      id="smartlook-script"
      strategy="afterInteractive"
      src="https://web-sdk.smartlook.com/recorder.js"
      onLoad={() => {
        // Procesar cola de comandos si existe
        if (window.smartlookQueue) {
          window.smartlookQueue.forEach(args => {
            window.smartlook?.(...args);
          });
          window.smartlookQueue = undefined;
        }

        // Inicializar Smartlook
        window.smartlook?.('init', 'd86960369b790ad8d566b0c1e58264987756c8e2', { region: 'eu' });
        console.log("Smartlook runing");
      }}
    />
  );
};

export default Smartlook;