
import React from 'react';
import { cn } from '@/lib/utils';
import { Button as ShadcnButton } from '@/components/ui/button';
import { type ButtonProps as ShadcnButtonProps } from '@/components/ui/button';

interface ButtonProps extends ShadcnButtonProps {
  withArrow?: boolean;
  className?: string;
  animatedHover?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  withArrow = false,
  animatedHover = true,
  ...props
}) => {
  return (
    <ShadcnButton
      className={cn(
        'rounded-md font-medium transition-all duration-300',
        'shadow-sm hover:shadow-md',
        animatedHover && 'button-hover-translate',
        className
      )}
      {...props}
    >
      <span className="flex items-center justify-center gap-2">
        {children}
        {withArrow && (
          <svg
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        )}
      </span>
    </ShadcnButton>
  );
};

export default Button;
