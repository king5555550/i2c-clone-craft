
import React from 'react';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/layout/Footer';
import FadeIn from '@/components/animations/FadeIn';
import { Button } from '@/components/ui/button-custom';
import { CheckCircle2, CreditCard, Globe, LineChart, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductFeature = ({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) => (
  <div className="flex gap-4">
    <div className="mt-1 flex-shrink-0">
      <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
        {icon}
      </div>
    </div>
    <div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  </div>
);

const Products = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-background to-primary/5">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2 space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Powering the Next Generation of Payment Solutions
                </h1>
                <p className="text-xl text-muted-foreground">
                  Our best-in-class API platform provides the tools and infrastructure for digital-first payment and banking experiences.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button size="lg">Explore Products</Button>
                  <Button size="lg" variant="outline">Request Demo</Button>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                  <img 
                    src="https://placehold.co/600x400/e2e8f0/1e293b?text=Platform+Dashboard" 
                    alt="Product Dashboard" 
                    className="rounded-lg w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Main Products Section */}
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl font-bold mb-4">Our Core Products</h2>
                <p className="text-xl text-muted-foreground">
                  Comprehensive solutions designed to help financial institutions transform how they acquire, activate, and accelerate customer relationships.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Product Card 1 */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md">
                  <div className="p-6">
                    <div className="h-14 w-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                      <CreditCard className="h-7 w-7" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Payment Processing</h3>
                    <p className="text-muted-foreground mb-4">
                      End-to-end payment processing solutions with global reach, covering all major payment methods and currencies.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                        <span>Secure transaction processing</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                        <span>Multiple payment methods</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                        <span>Real-time reporting</span>
                      </li>
                    </ul>
                    <Link to="/signup">
                      <Button className="w-full">Learn More</Button>
                    </Link>
                  </div>
                </div>
                
                {/* Product Card 2 */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md">
                  <div className="p-6">
                    <div className="h-14 w-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                      <Globe className="h-7 w-7" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Digital Banking</h3>
                    <p className="text-muted-foreground mb-4">
                      Comprehensive digital banking solutions allowing financial institutions to offer modern banking experiences.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                        <span>Account management</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                        <span>P2P transfers</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                        <span>Customizable UX</span>
                      </li>
                    </ul>
                    <Link to="/signup">
                      <Button className="w-full">Learn More</Button>
                    </Link>
                  </div>
                </div>
                
                {/* Product Card 3 */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md">
                  <div className="p-6">
                    <div className="h-14 w-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                      <LineChart className="h-7 w-7" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Data Analytics</h3>
                    <p className="text-muted-foreground mb-4">
                      Advanced analytics and reporting tools to help you understand customer behavior and optimize performance.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                        <span>Customizable dashboards</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                        <span>Predictive analytics</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                        <span>Automated reporting</span>
                      </li>
                    </ul>
                    <Link to="/signup">
                      <Button className="w-full">Learn More</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 bg-accent">
          <div className="container px-4 md:px-6">
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl font-bold mb-4">Key Features</h2>
                <p className="text-xl text-muted-foreground">
                  Our platform is designed with flexibility and performance in mind, enabling you to build the solutions your customers need.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                <ProductFeature 
                  title="Global Reach"
                  description="Process payments in 180+ countries with multi-currency support and localized payment methods."
                  icon={<Globe className="h-5 w-5" />}
                />
                <ProductFeature 
                  title="Enterprise-Grade Security"
                  description="Bank-level security with PCI-DSS Level 1 compliance and advanced fraud prevention tools."
                  icon={<Shield className="h-5 w-5" />}
                />
                <ProductFeature 
                  title="Fast Integration"
                  description="Developer-friendly APIs with comprehensive documentation for quick and easy integration."
                  icon={<Zap className="h-5 w-5" />}
                />
                <ProductFeature 
                  title="Real-Time Processing"
                  description="Instant payment processing and settlement with real-time notifications and webhooks."
                  icon={<LineChart className="h-5 w-5" />}
                />
              </div>
            </FadeIn>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-primary/5">
          <div className="container px-4 md:px-6">
            <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 border border-gray-100">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="lg:max-w-2xl">
                  <h2 className="text-3xl font-bold mb-4">Ready to transform your payment experience?</h2>
                  <p className="text-xl text-muted-foreground">
                    Start your 30-day free trial today and discover how our platform can help you grow your business.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/trial-signup">
                    <Button size="lg">Start Free Trial</Button>
                  </Link>
                  <Button size="lg" variant="outline">Contact Sales</Button>
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

export default Products;
