'use client';

import { useEffect } from 'react';
import Script from 'next/script';

interface ScriptLoaderProps {
  strategy?: 'beforeInteractive' | 'afterInteractive' | 'lazyOnload';
  src: string;
  id?: string;
  onLoad?: () => void;
}

export default function ScriptLoader({
  strategy = 'lazyOnload',
  src,
  id,
  onLoad
}: ScriptLoaderProps) {
  useEffect(() => {
    return () => {
      // Clean up script if needed
      if (id && document.getElementById(id)) {
        const scriptElement = document.getElementById(id);
        if (scriptElement?.parentNode) {
          scriptElement.parentNode.removeChild(scriptElement);
        }
      }
    };
  }, [id]);

  return (
    <Script
      id={id}
      src={src}
      strategy={strategy}
      onLoad={onLoad}
    />
  );
} 