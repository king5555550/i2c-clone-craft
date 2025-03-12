
import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from '../animations/FadeIn';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  subtitleClassName?: string;
  fadeIn?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  centered = false,
  className,
  subtitleClassName,
  fadeIn = true,
}) => {
  const content = (
    <div className={cn(
      'max-w-3xl',
      centered ? 'mx-auto text-center' : 'text-left',
      className
    )}>
      <div className="inline-block">
        <span className="inline-block pb-1 mb-1 text-xs font-medium uppercase tracking-wider text-primary">
          {'//'}
        </span>
      </div>
      
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>
      
      {subtitle && (
        <p className={cn(
          'mt-4 text-base md:text-lg text-muted-foreground',
          subtitleClassName
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );

  if (fadeIn) {
    return <FadeIn>{content}</FadeIn>;
  }

  return content;
};

export default SectionHeading;
