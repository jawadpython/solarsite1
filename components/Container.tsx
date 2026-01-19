import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: 'default' | 'narrow' | 'wide';
}

export default function Container({
  children,
  className = '',
  size = 'default',
}: ContainerProps) {
  const sizeClasses = {
    default: 'max-w-container',
    narrow: 'max-w-narrow',
    wide: 'max-w-full',
  };

  return (
    <div
      className={`container-custom ${sizeClasses[size]} ${className}`}
    >
      {children}
    </div>
  );
}
