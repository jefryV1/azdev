
import React from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { ChevronRight, Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-enhanced-border bg-enhanced-darker relative overflow-hidden">
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDUgTCAyMCA1IE0gNSAwIEwgNSAyMCIgc3Ryb2tlPSIjMzAzMDUwIiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIgLz48L3N2Zz4=')] opacity-10"></div>
      
      {/* Background accents */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-enhanced-accent/10 rounded-full filter blur-3xl"></div>
      <div className="absolute top-0 left-0 w-64 h-64 bg-enhanced-accent2/10 rounded-full filter blur-3xl"></div>
      
      <div className="container px-6 mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-bold text-2xl text-gradient enhanced-glow mb-4">PORTFOLIO</h3>
            <p className="text-muted-foreground text-sm max-w-xs">
              Specializing in full-stack AI-driven applications that combine elegant interfaces with powerful data science.
            </p>
            
            <div className="flex space-x-4 mt-6">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                className="p-2 rounded-full border border-enhanced-border hover:border-enhanced-accent hover:bg-enhanced-accent/10 transition-colors">
                <Github className="h-5 w-5 text-enhanced-accent" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
                className="p-2 rounded-full border border-enhanced-border hover:border-enhanced-accent hover:bg-enhanced-accent/10 transition-colors">
                <Twitter className="h-5 w-5 text-enhanced-accent" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                className="p-2 rounded-full border border-enhanced-border hover:border-enhanced-accent hover:bg-enhanced-accent/10 transition-colors">
                <Linkedin className="h-5 w-5 text-enhanced-accent" />
              </a>
              <a href="mailto:contact@example.com" 
                className="p-2 rounded-full border border-enhanced-border hover:border-enhanced-accent hover:bg-enhanced-accent/10 transition-colors">
                <Mail className="h-5 w-5 text-enhanced-accent" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-base mb-4 uppercase tracking-wider text-enhanced-accent">Quick Links</h3>
            <nav className="flex flex-col space-y-3">
              {['Home', 'Projects', 'Skills', 'Contact'].map((link) => (
                <a 
                  key={link}
                  href={`#${link.toLowerCase()}`} 
                  className="text-sm text-muted-foreground hover:text-enhanced-accent transition-colors flex items-center group"
                >
                  <ChevronRight className="h-3 w-3 mr-1 text-enhanced-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                  {link}
                </a>
              ))}
            </nav>
          </div>
          
          <div>
            <h3 className="font-bold text-base mb-4 uppercase tracking-wider text-enhanced-accent">Newsletter</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Subscribe to receive updates on new projects and tech insights.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email"
                className="bg-enhanced-muted text-sm border border-enhanced-border rounded-l-md px-3 py-2 focus:outline-none focus:border-enhanced-accent"
              />
              <button className="bg-enhanced-accent px-4 py-2 rounded-r-md text-sm text-white hover:bg-enhanced-accent/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-enhanced-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {currentYear} Portfolio. All rights reserved.
          </p>
          
          <Link to="/privacy-policy" className="text-sm text-muted-foreground hover:text-enhanced-accent transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
