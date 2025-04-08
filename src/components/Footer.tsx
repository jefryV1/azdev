
import React from 'react';
import { cn } from '@/lib/utils';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-enhanced-border bg-enhanced-darker">
      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="font-bold text-xl text-gradient enhanced-glow mb-4">Portfolio</h3>
            <p className="text-muted-foreground text-sm max-w-xs">
              Specializing in full-stack AI-driven applications that combine elegant interfaces with powerful data science.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-base mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <a href="#hero" className="text-sm text-muted-foreground hover:text-enhanced-accent transition-colors">
                Home
              </a>
              <a href="#projects" className="text-sm text-muted-foreground hover:text-enhanced-accent transition-colors">
                Projects
              </a>
              <a href="#skills" className="text-sm text-muted-foreground hover:text-enhanced-accent transition-colors">
                Skills
              </a>
              <a href="#contact" className="text-sm text-muted-foreground hover:text-enhanced-accent transition-colors">
                Contact
              </a>
            </nav>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-enhanced-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {currentYear} Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
