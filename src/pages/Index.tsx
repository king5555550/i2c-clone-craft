import React, { useEffect } from 'react';
import Navbar from '@/components/navigation/Navbar';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';
import FadeIn from '@/components/animations/FadeIn';
import { Zap, Code, Share2, BarChart3 } from 'lucide-react';
import AnimatedCard from '@/components/ui/AnimatedCard';
import SectionHeading from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/button-custom';

const Index = () => {
  // Smooth scroll for anchor links
  useEffect(() => {
    const handleAnchorLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (
        anchor && 
        anchor.hash && 
        anchor.href.includes(window.location.pathname)
      ) {
        e.preventDefault();
        
        const targetElement = document.querySelector(anchor.hash);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY - 100,
            behavior: 'smooth'
          });
        }
      }
    };
    
    document.addEventListener('click', handleAnchorLinkClick);
    return () => document.removeEventListener('click', handleAnchorLinkClick);
  }, []);
  
  // Products section data
  const products = [
    {
      title: 'Agile Processing',
      description: 'Flexible payment processing platform that adapts to your business needs with speed and efficiency.',
      icon: <Zap className="h-6 w-6" />,
    },
    {
      title: 'Developer APIs',
      description: 'Comprehensive API suite for seamless integration with our payment and banking infrastructure.',
      icon: <Code className="h-6 w-6" />,
    },
    {
      title: 'Digital Banking',
      description: 'End-to-end digital banking solution with customizable features and user experiences.',
      icon: <Share2 className="h-6 w-6" />,
    },
    {
      title: 'Data Insights',
      description: 'Powerful analytics and reporting tools to drive informed business decisions and growth.',
      icon: <BarChart3 className="h-6 w-6" />,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Products Section */}
        <section id="products" className="section relative overflow-hidden">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"></div>
          </div>
          
          <div className="responsive-container relative z-10">
            <SectionHeading
              title="Our Products"
              subtitle="Discover our comprehensive suite of payment and banking solutions designed to power financial innovation."
              centered
            />
            
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
              {products.map((product, index) => (
                <AnimatedCard
                  key={product.title}
                  title={product.title}
                  description={product.description}
                  icon={product.icon}
                  delay={index * 100}
                  className="h-full"
                />
              ))}
            </div>
            
            <FadeIn delay={400}>
              <div className="mt-12 text-center">
                <Button size="lg">
                  Explore All Products
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>
        
        <Services />
        
        {/* Platform Section */}
        <section className="section relative bg-gradient-subtle">
          <div className="responsive-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <FadeIn direction="right">
                <div className="bg-white/30 backdrop-blur-glass p-4 sm:p-6 rounded-2xl shadow-card border border-white/20 overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg overflow-hidden relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-primary text-xl font-medium">Platform Overview</span>
                    </div>
                  </div>
                </div>
              </FadeIn>
              
              <div>
                <SectionHeading 
                  title="The i2c Digital Transformation Platform"
                  subtitle="A single platform for issuing, processing, and servicing that drives innovative payment and banking experiences."
                />
                
                <FadeIn delay={200}>
                  <ul className="mt-6 space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="rounded-full p-1 bg-primary/10 text-primary mt-1">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium">Highly Configurable</h4>
                        <p className="text-muted-foreground">Customize all aspects of your program with our flexible configurations.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="rounded-full p-1 bg-primary/10 text-primary mt-1">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium">API-First Architecture</h4>
                        <p className="text-muted-foreground">Simple integration with our comprehensive API library.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="rounded-full p-1 bg-primary/10 text-primary mt-1">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium">Real-Time Processing</h4>
                        <p className="text-muted-foreground">Instant transaction processing and account updates.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="rounded-full p-1 bg-primary/10 text-primary mt-1">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium">Global Reach</h4>
                        <p className="text-muted-foreground">Multi-currency support with localized payment options.</p>
                      </div>
                    </li>
                  </ul>
                </FadeIn>
                
                <FadeIn delay={300}>
                  <div className="mt-8">
                    <Button>Schedule a Demo</Button>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>
        
        <About />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
