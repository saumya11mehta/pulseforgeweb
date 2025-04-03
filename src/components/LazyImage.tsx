'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ImageProps } from 'next/image';

type LazyImageProps = Omit<ImageProps, 'onLoadingComplete'> & {
  preload?: boolean;
};

export default function LazyImage({
  src,
  alt,
  className,
  preload = false,
  priority = false,
  ...props
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    if (preload || priority) {
      setIsVisible(true);
      return;
    }
    
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, {
      rootMargin: '200px',
    });
    
    const element = document.getElementById(`lazy-image-${src}`);
    if (element) observer.observe(element);
    
    return () => observer.disconnect();
  }, [src, preload, priority]);
  
  return (
    <div 
      id={`lazy-image-${src}`}
      className={`relative ${className || ''}`}
      style={props.fill ? { width: '100%', height: '100%' } : undefined}
    >
      {(isVisible || priority) && (
        <Image
          src={src}
          alt={alt}
          className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setIsLoaded(true)}
          priority={priority}
          {...props}
        />
      )}
      {!isLoaded && (isVisible || priority) && (
        <div 
          className="absolute inset-0 bg-gray-200 animate-pulse"
          style={props.fill ? { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 } : undefined}
        />
      )}
    </div>
  );
} 