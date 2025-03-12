
import React from 'react';
import { Button } from '@/components/ui/button-custom';
import { Link } from 'react-router-dom';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/layout/Footer';
import FadeIn from '@/components/animations/FadeIn';
import SectionHeading from '@/components/ui/SectionHeading';

const PricingTier = ({ 
  title, 
  price, 
  features, 
  recommended = false,
  buttonText = "Get Started",
  buttonLink = "/trial-signup" 
}: { 
  title: string; 
  price: string; 
  features: string[]; 
  recommended?: boolean;
  buttonText?: string;
  buttonLink?: string;
}) => (
  <div className={`relative rounded-2xl p-6 border ${recommended ? 'border-primary shadow-lg bg-primary/5' : 'border-border'} flex flex-col h-full`}>
    {recommended && (
      <div className="absolute -top-3 left-0 right-0 mx-auto w-fit bg-primary text-white px-4 py-1 rounded-full text-xs font-bold">
        Recommended
      </div>
    )}
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <div className="mb-4">
      <span className="text-3xl font-bold">{price}</span>
      {price !== 'Custom' && <span className="text-muted-foreground">/month</span>}
    </div>
    <ul className="space-y-3 mb-8 flex-grow">
      {features.map((feature, i) => (
        <li key={i} className="flex items-start">
          <svg
            className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <Link to={buttonLink} className="mt-auto">
      <Button className={`w-full ${recommended ? 'bg-primary hover:bg-primary/90' : ''}`}>
        {buttonText}
      </Button>
    </Link>
  </div>
);

const Pricing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="py-16 md:py-24 container mx-auto px-4">
          <FadeIn>
            <SectionHeading 
              title="Flexible Pricing Plans" 
              subtitle="Choose the plan that fits your business needs"
              centered
            />
            
            <div className="mt-12 grid md:grid-cols-3 gap-8">
              <PricingTier
                title="Starter"
                price="$499"
                features={[
                  "Basic API access",
                  "Up to 10,000 transactions/month",
                  "Email support",
                  "Basic analytics",
                  "2 user accounts"
                ]}
              />
              
              <PricingTier
                title="Professional"
                price="$999"
                features={[
                  "Full API access",
                  "Up to 50,000 transactions/month",
                  "Priority email & phone support",
                  "Advanced analytics",
                  "Team management",
                  "5 user accounts",
                  "Developer tools"
                ]}
                recommended={true}
              />
              
              <PricingTier
                title="Enterprise"
                price="Custom"
                buttonText="Contact Sales"
                buttonLink="/contact"
                features={[
                  "Unlimited API access",
                  "Unlimited transactions",
                  "24/7 dedicated support",
                  "Custom integrations",
                  "Advanced security",
                  "Unlimited user accounts",
                  "SLA guarantees",
                  "Dedicated account manager"
                ]}
              />
            </div>
            
            <div className="mt-16 text-center bg-background/50 border border-border p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Need a custom solution?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                We understand that every business has unique needs. Contact our sales team for a
                customized solution tailored to your specific requirements.
              </p>
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  Contact Our Sales Team
                </Button>
              </Link>
            </div>
            
            <div className="mt-16">
              <h3 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    q: "Can I change plans later?",
                    a: "Yes, you can upgrade or downgrade your plan at any time. Changes to your subscription will be prorated."
                  },
                  {
                    q: "Is there a free trial available?",
                    a: "Yes, we offer a 14-day free trial on all our plans. No credit card required to start."
                  },
                  {
                    q: "What payment methods do you accept?",
                    a: "We accept all major credit cards, PayPal, and wire transfers for enterprise customers."
                  },
                  {
                    q: "Is there a setup fee?",
                    a: "No, there are no setup fees for any of our plans."
                  }
                ].map((faq, i) => (
                  <div key={i} className="border border-border rounded-lg p-6">
                    <h4 className="font-bold mb-2">{faq.q}</h4>
                    <p className="text-muted-foreground">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Pricing;
