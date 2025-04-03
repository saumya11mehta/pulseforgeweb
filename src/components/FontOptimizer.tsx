'use client';

import { useEffect } from 'react';

export default function FontOptimizer() {
  useEffect(() => {
    // Add font preloading for critical fonts
    const preloadLinks = [
      { href: '/fonts/font1.woff2', type: 'font/woff2', as: 'font', crossOrigin: 'anonymous' },
      { href: '/fonts/font2.woff2', type: 'font/woff2', as: 'font', crossOrigin: 'anonymous' }
    ];

    preloadLinks.forEach(linkData => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = linkData.href;
      link.as = linkData.as;
      link.type = linkData.type;
      link.crossOrigin = linkData.crossOrigin;
      document.head.appendChild(link);
    });

    // Add font-display: swap to ensure text remains visible during webfont load
    const style = document.createElement('style');
    style.textContent = `
      @font-face {
        font-family: 'CustomFont';
        font-display: swap;
      }
    `;
    document.head.appendChild(style);

    return () => {
      // Cleanup if needed
    };
  }, []);

  return null;
} 