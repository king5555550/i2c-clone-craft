
import React from 'react';
import { cn } from '@/lib/utils';
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

interface FooterProps {
  className?: string;
}

const footerLinks = [
  {
    title: 'Products',
    links: [
      { name: 'Payment Processing', href: '#' },
      { name: 'Digital Banking', href: '#' },
      { name: 'Card Management', href: '#' },
      { name: 'Fraud Prevention', href: '#' },
      { name: 'API Library', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About Us', href: '#' },
      { name: 'Leadership', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Contact', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Blog', href: '#' },
      { name: 'Case Studies', href: '#' },
      { name: 'Documentation', href: '#' },
      { name: 'Webinars', href: '#' },
      { name: 'Support', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'Security', href: '#' },
      { name: 'Compliance', href: '#' },
    ],
  },
];

const socialLinks = [
  { icon: <Facebook className="h-5 w-5" />, href: '#', label: 'Facebook' },
  { icon: <Twitter className="h-5 w-5" />, href: '#', label: 'Twitter' },
  { icon: <Linkedin className="h-5 w-5" />, href: '#', label: 'LinkedIn' },
  { icon: <Instagram className="h-5 w-5" />, href: '#', label: 'Instagram' },
  { icon: <Youtube className="h-5 w-5" />, href: '#', label: 'YouTube' },
];

export const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer className={cn('bg-accent pt-16 pb-8', className)}>
      <div className="responsive-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          <div className="lg:col-span-2">
            <a href="/" className="text-2xl font-bold inline-block mb-4">
              i2c<span className="text-primary">Inc</span>
            </a>
            <p className="text-muted-foreground mb-6 max-w-md">
              Empowering financial innovators with next-generation payment and banking solutions that drive growth and transform customer experiences worldwide.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
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

          {footerLinks.map((column) => (
            <div key={column.title}>
              <h4 className="font-semibold text-foreground mb-4">{column.title}</h4>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} i2c Inc. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <div className="flex space-x-4 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
