
import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from '../animations/FadeIn';
import SectionHeading from '../ui/SectionHeading';
import { CheckCircle2, TrendingUp, Users, Clock } from 'lucide-react';

interface AboutProps {
  className?: string;
}

const stats = [
  { label: 'Financial Institutions', value: '500+', icon: <Users className="h-5 w-5" /> },
  { label: 'Countries Served', value: '40+', icon: <Globe className="h-5 w-5" /> },
  { label: 'Transactions Processed', value: '$300B+', icon: <TrendingUp className="h-5 w-5" /> },
  { label: 'Years of Innovation', value: '20+', icon: <Clock className="h-5 w-5" /> },
];

const features = [
  'Flexible API-first platform',
  'End-to-end payment processing',
  'Comprehensive program management',
  'Scalable cloud architecture',
  'Robust security & compliance',
  'Real-time data analytics',
];

export const About: React.FC<AboutProps> = ({ className }) => {
  return (
    <section id="company" className={cn('section relative bg-accent', className)}>
      <div className="responsive-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading
              title="About i2c Inc."
              subtitle="We're a global provider of highly-configurable payment and banking solutions. In an era of shifting consumer habits, we empower financial institutions to create and deliver innovations that consumers want to use now."
            />

            <FadeIn delay={200}>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature) => (
                  <div key={feature} className="flex items-start space-x-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          <FadeIn direction="left">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-background rounded-xl p-6 shadow-subtle transition-all duration-300 hover:shadow-md"
                >
                  <div className="flex items-center space-x-2 text-primary mb-2">
                    {stat.icon}
                    <span className="text-sm font-medium uppercase tracking-wide">
                      {stat.label}
                    </span>
                  </div>
                  <div className="text-3xl font-bold">{stat.value}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

// Required import for the Globe icon
import { Globe } from 'lucide-react';

export default About;
