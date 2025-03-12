
import React from 'react';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/layout/Footer';
import FadeIn from '@/components/animations/FadeIn';
import { Button } from '@/components/ui/button-custom';
import { Building2, FileText, LayoutDashboard, LineChart, ShieldCheck, Star, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const SolutionCard = ({ 
  title, 
  description, 
  icon 
}: { 
  title: string; 
  description: string; 
  icon: React.ReactNode;
}) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md">
    <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-muted-foreground mb-4">{description}</p>
    <Link to="/signup" className="text-primary font-medium hover:underline flex items-center">
      Learn more
      <svg className="h-4 w-4 ml-1" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </Link>
  </div>
);

const IndustrySection = ({ 
  title, 
  description, 
  icon, 
  benefits 
}: { 
  title: string; 
  description: string; 
  icon: React.ReactNode;
  benefits: string[];
}) => (
  <div className="flex flex-col md:flex-row gap-8 items-start">
    <div className="md:w-1/2">
      <div className="flex items-center gap-3 mb-4">
        <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
          {icon}
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="text-muted-foreground mb-6">{description}</p>
      <ul className="space-y-2">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start">
            <svg className="h-5 w-5 text-primary mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>{benefit}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <Link to="/signup">
          <Button>Get Started</Button>
        </Link>
      </div>
    </div>
    <div className="md:w-1/2 bg-accent rounded-xl p-6">
      <img 
        src="https://placehold.co/600x400/e2e8f0/1e293b?text=Solution+Dashboard" 
        alt="Solution Dashboard" 
        className="rounded-lg w-full shadow-sm"
      />
    </div>
  </div>
);

const Solutions = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-background to-accent/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Solutions Tailored to Your Business</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Discover how our platform can help you solve your unique payment and banking challenges with flexible, scalable solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg">Explore Solutions</Button>
                <Button size="lg" variant="outline">Talk to an Expert</Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Industry Solutions */}
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl font-bold mb-4">Industries We Serve</h2>
                <p className="text-xl text-muted-foreground">
                  Our platform is designed to meet the unique needs of various industries, helping businesses of all types innovate and grow.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <SolutionCard 
                  title="Financial Services"
                  description="Help banks and financial institutions modernize their payment infrastructure and offer innovative digital banking solutions."
                  icon={<Building2 className="h-6 w-6" />}
                />
                <SolutionCard 
                  title="Fintech"
                  description="Provide the tools and infrastructure needed for fintech companies to build and scale their products quickly and securely."
                  icon={<LayoutDashboard className="h-6 w-6" />}
                />
                <SolutionCard 
                  title="Enterprise"
                  description="Enable large organizations to streamline payment processes, reduce costs, and improve efficiency across the business."
                  icon={<LineChart className="h-6 w-6" />}
                />
                <SolutionCard 
                  title="Retail & E-commerce"
                  description="Help retailers offer seamless omnichannel payment experiences that increase conversion and customer satisfaction."
                  icon={<ShieldCheck className="h-6 w-6" />}
                />
                <SolutionCard 
                  title="Healthcare"
                  description="Provide secure, compliant payment solutions for healthcare providers to improve patient experience and reduce admin burden."
                  icon={<FileText className="h-6 w-6" />}
                />
                <SolutionCard 
                  title="Platform Businesses"
                  description="Empower marketplaces and platform businesses with the tools to manage complex payment flows and relationships."
                  icon={<Users className="h-6 w-6" />}
                />
              </div>
            </FadeIn>
          </div>
        </section>
        
        {/* Featured Solutions */}
        <section className="py-16 bg-accent">
          <div className="container px-4 md:px-6">
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl font-bold mb-4">Featured Solutions</h2>
                <p className="text-xl text-muted-foreground">
                  Explore our most popular solutions designed to address common challenges across industries.
                </p>
              </div>
              
              <div className="space-y-16">
                <IndustrySection 
                  title="Digital Banking Platform"
                  description="A comprehensive solution for financial institutions looking to launch or upgrade their digital banking offerings. Provide your customers with a modern, intuitive banking experience across all devices."
                  icon={<LayoutDashboard className="h-5 w-5" />}
                  benefits={[
                    "Fully customizable user interface",
                    "Seamless integration with existing core banking systems",
                    "Comprehensive account management features",
                    "Advanced security and fraud prevention",
                    "Real-time transaction processing"
                  ]}
                />
                
                <IndustrySection 
                  title="Enterprise Payment Hub"
                  description="Centralize and streamline all payment processes across your organization with our Enterprise Payment Hub. Reduce complexity, lower costs, and gain better visibility into your payment operations."
                  icon={<Building2 className="h-5 w-5" />}
                  benefits={[
                    "Unified platform for all payment types",
                    "Automated reconciliation and reporting",
                    "Improved cash flow management",
                    "Reduced payment processing costs",
                    "Enhanced compliance and security"
                  ]}
                />
                
                <IndustrySection 
                  title="Embedded Finance Solution"
                  description="Integrate financial services directly into your product or platform with our Embedded Finance Solution. Offer your customers payment, banking, and lending capabilities without building the infrastructure yourself."
                  icon={<Star className="h-5 w-5" />}
                  benefits={[
                    "Quick and easy integration via APIs",
                    "White-label user experience",
                    "Comprehensive compliance management",
                    "Global payment capabilities",
                    "Flexible monetization options"
                  ]}
                />
              </div>
            </FadeIn>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <div className="bg-primary-foreground rounded-2xl p-8 lg:p-12 shadow-lg border border-primary/10">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-4">Ready to find your perfect solution?</h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Contact our team of experts to discuss your unique requirements and discover how our platform can help you achieve your goals.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link to="/trial-signup">
                    <Button size="lg">Start Free Trial</Button>
                  </Link>
                  <Button size="lg" variant="outline">Schedule Consultation</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Solutions;
