
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, User } from 'lucide-react';
import Button from '../ui/button-custom';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

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
  const { isAuthenticated, user } = useAuth();

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
            
            {isAuthenticated ? (
              <Link to="/profile">
                <Button variant="ghost" className="gap-2">
                  <User size={18} />
                  {user?.name?.split(' ')[0]}
                </Button>
              </Link>
            ) : (
              <div className="flex space-x-2">
                <Link to="/login">
                  <Button variant="outline">Login</Button>
                </Link>
                <Link to="/signup">
                  <Button>Sign Up</Button>
                </Link>
              </div>
            )}
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
              <div className="mt-8 space-y-4">
                {isAuthenticated ? (
                  <Link to="/profile" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button className="w-full gap-2">
                      <User size={18} />
                      My Profile
                    </Button>
                  </Link>
                ) : (
                  <>
                    <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button variant="outline" className="w-full">Login</Button>
                    </Link>
                    <Link to="/signup" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button className="w-full">Sign Up</Button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
