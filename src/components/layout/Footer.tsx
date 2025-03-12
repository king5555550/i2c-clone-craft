
import React from 'react';
import { cn } from '@/lib/utils';
import { Facebook, Twitter, Linkedin, Instagram, Youtube, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button-custom';

interface FooterProps {
  className?: string;
}

const companyInfo = {
  description: 'Empowering financial innovators with next-generation payment and banking solutions that drive growth and transform customer experiences worldwide.',
  socials: [
    { icon: <Facebook className="h-5 w-5" />, href: '#', label: 'Facebook' },
    { icon: <Twitter className="h-5 w-5" />, href: '#', label: 'Twitter' },
    { icon: <Linkedin className="h-5 w-5" />, href: '#', label: 'LinkedIn' },
    { icon: <Instagram className="h-5 w-5" />, href: '#', label: 'Instagram' },
    { icon: <Youtube className="h-5 w-5" />, href: '#', label: 'YouTube' },
  ]
};

export const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer className={cn('bg-accent pt-16 pb-8', className)}>
      <div className="responsive-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 mb-12">
          <div className="lg:col-span-2">
            <Link to="/" className="text-2xl font-bold inline-block mb-4">
              i2c<span className="text-primary">Inc</span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md">
              {companyInfo.description}
            </p>
            <div className="flex space-x-4">
              {companyInfo.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <address className="not-italic text-muted-foreground space-y-2">
              <p>123 Finance Street</p>
              <p>San Francisco, CA 94103</p>
              <p>support@i2cinc.com</p>
              <p>+1 (800) 555-1234</p>
            </address>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  Compliance
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  System Status
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 mb-8 border border-primary/10 bg-primary/5 rounded-xl overflow-hidden">
          <div className="p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold">Ready to transform your financial ecosystem?</h3>
              <p className="text-muted-foreground mt-2 max-w-2xl">
                Start your free trial today and experience the full power of i2c's platform.
              </p>
            </div>
            <Link to="/trial-signup">
              <Button size="lg" className="whitespace-nowrap gap-2">
                Start Free Trial
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} i2c Inc. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Cookies
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
