
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { MenuIcon, XIcon, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 backdrop-blur-md',
        isScrolled ? 'bg-github-darker/90 border-b border-border shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <a href="#hero" className="font-bold flex items-center" aria-label="Home">
          {/* Minimalist single letter logo */}
          <div className="relative w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-github-accent to-github-highlight transition-all duration-300 hover:scale-110 shadow-md">
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="text-white"
            >
              <path 
                d="M12 4L8 20M12 4L16 20M12 4C14.2091 4 16 5.79086 16 8M12 4C9.79086 4 8 5.79086 8 8"
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                'text-sm font-medium hover:text-github-accent transition-colors animated-underline',
                isScrolled ? 'text-foreground' : 'text-foreground'
              )}
            >
              {link.name}
            </a>
          ))}
          <Link to="/resume">
            <Button variant="outline" size="sm" className="gap-2">
              <FileText className="h-4 w-4" />
              Resume
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? (
            <XIcon className="h-6 w-6" />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'md:hidden fixed inset-x-0 top-16 bg-github-darker/95 backdrop-blur-lg transition-all duration-300 ease-in-out shadow-md overflow-hidden border-b border-border',
          mobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <nav className="flex flex-col space-y-4 p-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-foreground font-medium py-2 hover:text-github-accent transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Link 
            to="/resume" 
            className="text-foreground font-medium py-2 hover:text-github-accent transition-colors flex items-center gap-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            <FileText className="h-4 w-4" /> Resume
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
