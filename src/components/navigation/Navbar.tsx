
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import Button from '../ui/Button';

const navItems = [
  { name: 'Products', href: '#products' },
  { name: 'Services', href: '#services' },
  { name: 'Company', href: '#company' },
  { name: 'Resources', href: '#resources' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/80 backdrop-blur-glass shadow-sm py-4'
          : 'bg-transparent py-6'
      )}
    >
      <div className="responsive-container">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="text-2xl font-bold text-foreground z-20">
            i2c<span className="text-primary">Inc</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm font-medium text-foreground/90 hover:text-primary transition-colors link-underline"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <Button>Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-20 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Mobile Menu */}
          <div
            className={cn(
              'fixed inset-0 bg-background md:hidden z-10 transform transition-transform duration-300 ease-in-out',
              isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            )}
          >
            <div className="flex flex-col p-10 pt-24 h-full">
              <ul className="space-y-6">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-lg font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button className="w-full">Get Started</Button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
