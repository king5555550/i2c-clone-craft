
import React from 'react';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/layout/Footer';
import FadeIn from '@/components/animations/FadeIn';
import { Button } from '@/components/ui/button-custom';
import { ArrowRight, BookOpen, FileText, Headphones, PlayCircle, Users, FileCode } from 'lucide-react';
import { Link } from 'react-router-dom';

const ResourceCard = ({ 
  title, 
  description, 
  icon, 
  tag, 
  link = "#" 
}: { 
  title: string; 
  description: string; 
  icon: React.ReactNode;
  tag: string;
  link?: string;
}) => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md group">
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
          {icon}
        </div>
        <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-accent text-muted-foreground">
          {tag}
        </span>
      </div>
      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <Link to={link} className="text-primary font-medium flex items-center">
        Read more
        <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  </div>
);

const SearchBar = () => (
  <div className="relative max-w-2xl mx-auto">
    <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
      <svg className="h-5 w-5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </div>
    <input
      type="text"
      className="w-full p-4 pl-12 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
      placeholder="Search for resources, articles, guides..."
    />
    <button className="absolute right-2.5 bottom-2.5 px-4 py-2 rounded-md bg-primary text-primary-foreground font-medium">
      Search
    </button>
  </div>
);

const CategoryButton = ({ 
  label, 
  isActive = false 
}: { 
  label: string; 
  isActive?: boolean;
}) => (
  <button
    className={`px-4 py-2 rounded-full text-sm font-medium ${
      isActive 
        ? 'bg-primary text-primary-foreground shadow-sm' 
        : 'bg-accent text-muted-foreground hover:bg-accent/80'
    }`}
  >
    {label}
  </button>
);

const Resources = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-background to-accent/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Resources & Insights</h1>
              <p className="text-xl text-muted-foreground">
                Explore our library of guides, case studies, videos, and more to help you get the most out of our platform.
              </p>
            </div>
            
            <SearchBar />
          </div>
        </section>
        
        {/* Categories Section */}
        <section className="py-8 border-b border-gray-200">
          <div className="container px-4 md:px-6">
            <div className="flex flex-wrap gap-2 justify-center">
              <CategoryButton label="All Resources" isActive />
              <CategoryButton label="Guides" />
              <CategoryButton label="Case Studies" />
              <CategoryButton label="Webinars" />
              <CategoryButton label="API Docs" />
              <CategoryButton label="Blog" />
              <CategoryButton label="Videos" />
            </div>
          </div>
        </section>
        
        {/* Featured Resources */}
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl font-bold mb-4">Featured Resources</h2>
                <p className="text-xl text-muted-foreground">
                  Explore our most popular guides, case studies, and webinars to help you navigate the world of payments and banking.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ResourceCard 
                  title="The Future of Digital Payments"
                  description="Explore the emerging trends and technologies that are shaping the future of digital payments and how businesses can prepare."
                  icon={<BookOpen className="h-5 w-5" />}
                  tag="Guide"
                />
                <ResourceCard 
                  title="How FinBank Increased Conversion by 40%"
                  description="Learn how FinBank leveraged our platform to streamline their payment process and significantly boost conversion rates."
                  icon={<FileText className="h-5 w-5" />}
                  tag="Case Study"
                />
                <ResourceCard 
                  title="Building a Secure Payment Infrastructure"
                  description="Security experts discuss best practices for creating a robust and secure payment infrastructure for your business."
                  icon={<Headphones className="h-5 w-5" />}
                  tag="Webinar"
                />
                <ResourceCard 
                  title="API Integration Best Practices"
                  description="A comprehensive guide to integrating our APIs efficiently and effectively into your existing systems."
                  icon={<FileCode className="h-5 w-5" />}
                  tag="Technical Guide"
                />
                <ResourceCard 
                  title="The State of Global Payments 2023"
                  description="Our annual report on the global payments landscape, highlighting key trends, challenges, and opportunities."
                  icon={<FileText className="h-5 w-5" />}
                  tag="Report"
                />
                <ResourceCard 
                  title="Digital Banking Transformation"
                  description="A video walkthrough of how traditional banks can successfully transform their digital banking offerings."
                  icon={<PlayCircle className="h-5 w-5" />}
                  tag="Video"
                />
              </div>
              
              <div className="text-center mt-12">
                <Button size="lg">View All Resources</Button>
              </div>
            </FadeIn>
          </div>
        </section>
        
        {/* API Documentation Section */}
        <section className="py-16 bg-accent">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold mb-4">Developer Resources</h2>
                <p className="text-xl text-muted-foreground mb-6">
                  Comprehensive documentation, SDKs, and tools to help developers integrate with our platform quickly and easily.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-primary mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <div>
                      <p className="font-medium">API Reference</p>
                      <p className="text-muted-foreground">Detailed documentation for all our API endpoints</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-primary mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <div>
                      <p className="font-medium">SDK Libraries</p>
                      <p className="text-muted-foreground">Client libraries for JavaScript, Python, PHP, Ruby, and more</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-primary mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <div>
                      <p className="font-medium">Code Examples</p>
                      <p className="text-muted-foreground">Sample code for common implementation scenarios</p>
                    </div>
                  </li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button>Explore API Docs</Button>
                  <Button variant="outline">Join Developer Community</Button>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                  <pre className="text-sm overflow-x-auto font-mono bg-black text-green-400 p-4 rounded-lg">
                    <code>{`// Example API request
const response = await fetch('https://api.i2cinc.com/v1/payments', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    amount: 1000,
    currency: 'USD',
    description: 'Payment for Order #12345',
    customer_id: 'cus_12345'
  })
});

const data = await response.json();
console.log(data);`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Community Section */}
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
              <p className="text-xl text-muted-foreground">
                Connect with other users, get support, and share your experiences with our platform.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2">
                  <div className="flex items-center mb-4">
                    <Users className="h-6 w-6 text-primary mr-2" />
                    <h3 className="text-xl font-bold">i2c Community Forum</h3>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Join thousands of developers and business leaders in our community forum to discuss best practices, troubleshoot issues, and share ideas.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <svg className="h-5 w-5 text-primary mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Get answers to your questions</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="h-5 w-5 text-primary mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Share your implementation stories</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="h-5 w-5 text-primary mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Discover new features and use cases</span>
                    </div>
                  </div>
                  <div className="mt-8">
                    <Button>Join the Community</Button>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <img 
                    src="https://placehold.co/600x400/e2e8f0/1e293b?text=Community+Forum" 
                    alt="Community Forum" 
                    className="rounded-lg w-full shadow-sm"
                  />
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

export default Resources;
