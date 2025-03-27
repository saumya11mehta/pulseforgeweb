'use client';

import React from 'react';

type ButtonProps = {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
};

const Button = ({
  variant = 'primary',
  children,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
}: ButtonProps) => {
  const baseClasses = 'px-4 py-2 rounded-md font-medium transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95';
  
  const variantClasses = {
    primary: 'bg-primary text-primary-on hover:bg-primary/90',
    secondary: 'bg-surface-container text-surface-on hover:bg-surface-container/80',
  };
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${disabled ? 'opacity-50 cursor-not-allowed hover:scale-100 active:scale-100' : ''} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button; 