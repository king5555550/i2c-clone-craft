
import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from '../animations/FadeIn';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

interface ContactProps {
  className?: string;
}

export const Contact: React.FC<ContactProps> = ({ className }) => {
  return (
    <section id="contact" className={cn('section relative', className)}>
      <div className="responsive-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <SectionHeading
              title="Get in Touch"
              subtitle="Have questions about our platform? Contact us today and one of our experts will get back to you shortly."
            />
            
            <FadeIn delay={200}>
              <div className="mt-8 space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-5 w-5 text-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium">Global Headquarters</h4>
                    <p className="text-muted-foreground">
                      595 Market Street, Suite 2000<br />
                      San Francisco, CA 94105<br />
                      United States
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="h-5 w-5 text-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-muted-foreground">+1 (888) 895-8441</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Mail className="h-5 w-5 text-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-muted-foreground">info@i2cinc.com</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
          
          <FadeIn direction="left">
            <div className="bg-background rounded-xl p-6 lg:p-8 shadow-card border border-border">
              <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-2 border border-border rounded-md focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-2 border border-border rounded-md focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-border rounded-md focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-1">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-2 border border-border rounded-md focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    placeholder="Your company name"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-border rounded-md focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                
                <Button className="w-full group">
                  <span>Send Message</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Contact;
