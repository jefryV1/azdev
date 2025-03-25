
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDownIcon } from 'lucide-react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const title = document.querySelector('.hero-title');
          const subtitle = document.querySelector('.hero-subtitle');
          const cta = document.querySelector('.hero-cta');
          
          if (title) title.classList.add('active');
          if (subtitle) subtitle.classList.add('active', 'delay-300');
          if (cta) cta.classList.add('active', 'delay-600');
        }
      },
      { threshold: 0.1 }
    );
    
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="min-h-screen flex flex-col justify-center pt-16 mb-10 relative"
    >
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-blue-100 filter blur-3xl opacity-30" />
        <div className="absolute top-1/2 -left-40 w-96 h-96 rounded-full bg-blue-200 filter blur-3xl opacity-30" />
      </div>
      
      <div className="container mx-auto px-6 flex flex-col justify-center">
        <div className="max-w-4xl">
          <h1 className="hero-title staggered-item text-5xl md:text-7xl font-bold tracking-tight mb-6">
            <span className="block">AI-Driven</span>
            <span className="block text-gradient">Web Development</span>
          </h1>
          
          <p className="hero-subtitle staggered-item text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl">
            Specializing in full-stack AI applications that merge data science and elegant interfaces for powerful, 
            intuitive user experiences.
          </p>
          
          <div className="hero-cta staggered-item flex flex-col sm:flex-row gap-4">
            <a 
              href="#projects" 
              className={cn(
                "inline-flex items-center justify-center px-6 py-3 rounded-md text-base font-medium",
                "bg-primary text-white hover:bg-primary/90 transition-all",
                "shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
              )}
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className={cn(
                "inline-flex items-center justify-center px-6 py-3 rounded-md text-base font-medium",
                "bg-white text-foreground border hover:bg-secondary transition-all",
                "shadow-sm hover:shadow-md"
              )}
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#projects" aria-label="Scroll to projects">
          <ChevronDownIcon className="h-8 w-8 text-primary/70" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
