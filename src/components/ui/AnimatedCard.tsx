
import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from '../animations/FadeIn';

interface AnimatedCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
  contentClassName?: string;
  href?: string;
  delay?: number;
}

export const AnimatedCard: React.FC<AnimatedCardProps> = ({
  title,
  description,
  icon,
  className,
  contentClassName,
  href,
  delay = 0,
}) => {
  const content = (
    <div 
      className={cn(
        'group relative flex flex-col p-6 transition-all duration-300',
        'rounded-xl border bg-card shadow-subtle',
        'hover:shadow-card-hover hover:border-primary/20',
        className
      )}
    >
      {icon && (
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary/20">
          {icon}
        </div>
      )}
      <div className={cn("space-y-2", contentClassName)}>
        <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <FadeIn delay={delay}>
        <a href={href} className="block h-full">
          {content}
        </a>
      </FadeIn>
    );
  }

  return <FadeIn delay={delay}>{content}</FadeIn>;
};

export default AnimatedCard;
