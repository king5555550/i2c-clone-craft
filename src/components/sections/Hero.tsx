
import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from '../animations/FadeIn';
import Button from '../ui/Button';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  className?: string;
}

export const Hero: React.FC<HeroProps> = ({ className }) => {
  return (
    <section
      className={cn(
        'relative min-h-screen flex items-center justify-center pt-24 overflow-hidden',
        className
      )}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute w-full h-full bg-gradient-to-b from-background to-transparent opacity-90"></div>
        <div className="absolute top-1/4 -right-24 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl animate-pulse-soft"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-pulse-soft"></div>
      </div>

      <div className="responsive-container relative z-10 pt-10 lg:pt-20">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 lg:pr-8">
            <FadeIn delay={100} direction="up">
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-6">
                Digital Transformation Platform
              </span>
            </FadeIn>
            
            <FadeIn delay={200} direction="up">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
                Powering financial <span className="text-primary">innovation</span> worldwide
              </h1>
            </FadeIn>
            
            <FadeIn delay={300} direction="up">
              <p className="text-xl mb-8 text-muted-foreground">
                Our powerful APIs and microservices platform delivers the next generation of digital payments and Banking-as-a-Service capabilities for fintechs and innovative financial institutions.
              </p>
            </FadeIn>
            
            <FadeIn delay={400} direction="up">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="group">
                  <span>Schedule a Demo</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
            </FadeIn>
            
            <FadeIn delay={500} direction="up">
              <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">500+</span> financial institutions trust our platform
                </p>
              </div>
            </FadeIn>
          </div>
          
          <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
            <FadeIn delay={400} direction="left">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-radial from-primary/20 to-transparent rounded-full filter blur-xl animate-pulse-soft"></div>
                <div className="relative bg-white/30 backdrop-blur-glass border border-white/20 rounded-2xl p-4 shadow-card overflow-hidden">
                  <div className="aspect-video rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white text-opacity-80 text-lg">Payment Processing Demo</span>
                    </div>
                  </div>
                  <div className="mt-4 p-2">
                    <div className="h-6 w-3/4 bg-gray-200 rounded-md animate-pulse mb-2"></div>
                    <div className="h-4 w-1/2 bg-gray-200 rounded-md animate-pulse"></div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
