
import React from 'react';
import { cn } from '@/lib/utils';
import SectionHeading from '../ui/SectionHeading';
import AnimatedCard from '../ui/AnimatedCard';
import { CreditCard, Globe, LockKeyholeOpen, Wallet, Zap, Database } from 'lucide-react';

interface ServicesProps {
  className?: string;
}

export const Services: React.FC<ServicesProps> = ({ className }) => {
  const services = [
    {
      title: 'Payment Processing',
      description: 'End-to-end payment processing solutions that simplify complexity and enhance customer experience.',
      icon: <CreditCard className="h-6 w-6" />,
    },
    {
      title: 'Global Reach',
      description: 'Expand your business with our globally compliant payment infrastructure and local expertise.',
      icon: <Globe className="h-6 w-6" />,
    },
    {
      title: 'Secure & Compliant',
      description: 'Top-tier security and compliance standards ensuring your data and transactions are always protected.',
      icon: <LockKeyholeOpen className="h-6 w-6" />,
    },
    {
      title: 'Digital Wallets',
      description: 'Modern wallet solutions with flexible funding options and seamless integration capabilities.',
      icon: <Wallet className="h-6 w-6" />,
    },
    {
      title: 'Fast Integration',
      description: 'Quick and easy API integration allowing you to go to market faster with minimal development.',
      icon: <Zap className="h-6 w-6" />,
    },
    {
      title: 'Data Analytics',
      description: 'Comprehensive analytics and reporting tools to help you make data-driven business decisions.',
      icon: <Database className="h-6 w-6" />,
    },
  ];

  return (
    <section id="services" className={cn('section py-24 relative', className)}>
      <div className="responsive-container">
        <SectionHeading 
          title="Our Services"
          subtitle="We provide comprehensive payment and banking solutions to power the next generation of financial services."
          centered
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <AnimatedCard 
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
