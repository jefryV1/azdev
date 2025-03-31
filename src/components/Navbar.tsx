import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Code, FileText, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useScroll } from '@/hooks/useScroll';
import { ThemeToggle } from './ThemeToggle';

const navItems = [
  {
    label: 'Projects',
    href: '#projects',
  },
  {
    label: 'Skills',
    href: '#skills',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY, scrollDirection } = useScroll();
  const [activeSection, setActiveSection] = useState('');

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.querySelector(item.href));
      const visibleSections = sections.filter(section => section !== null).map((section, index) => ({
        id: navItems[index].href.slice(1),
        top: section!.offsetTop,
      }));

      let currentSection = '';
      for (let i = visibleSections.length - 1; i >= 0; i--) {
        if (scrollY >= visibleSections[i].top - 150) {
          currentSection = visibleSections[i].id;
          break;
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check on component mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollY]);
  
  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
      scrollY > 20 ? "bg-background/80 backdrop-blur-md border-github-border" : "bg-transparent border-transparent"
    )}>
      <div className="container flex items-center justify-between h-16 px-6 mx-auto">
        <div className="flex items-center gap-2">
          <Link to="/" className="text-lg font-bold flex items-center gap-2 text-github-accent">
            <Code className="h-5 w-5" />
            <span>Aziz Dhouib</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-github-accent animated-underline",
                activeSection === item.href.slice(1) 
                  ? "text-github-accent" 
                  : "text-muted-foreground"
              )}
            >
              {item.label}
            </a>
          ))}
          
          <ThemeToggle />
          
          <Link to="/resume" className="inline-flex items-center gap-1 text-sm font-medium px-3 py-1.5 rounded-md border border-github-border bg-secondary/40 hover:bg-secondary/60 transition-colors">
            <FileText className="h-3.5 w-3.5 mr-1.5" />
            Resume
          </Link>
        </nav>
        
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={toggleMobileMenu} className="relative">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed top-16 left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-b border-github-border transform transition-all duration-300 origin-top",
        isMobileMenuOpen ? "scale-y-100" : "scale-y-0",
        isMobileMenuOpen ? "visible" : "invisible"
      )}>
        <nav className="flex flex-col p-6 gap-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-github-accent"
            >
              {item.label}
            </a>
          ))}
          <Link to="/resume" className="inline-flex items-center gap-1 text-sm font-medium px-3 py-1.5 rounded-md border border-github-border bg-secondary/40 hover:bg-secondary/60 transition-colors">
            <FileText className="h-3.5 w-3.5 mr-1.5" />
            Resume
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
