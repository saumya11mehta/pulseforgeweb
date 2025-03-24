import React from 'react';

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-surface-container text-surface-on rounded-lg p-4 shadow-md ${className}`}>
      {children}
    </div>
  );
} 