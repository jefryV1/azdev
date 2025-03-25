
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDownIcon, Code, Zap, BarChart } from 'lucide-react';

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
      className="min-h-screen flex flex-col justify-center pt-16 mb-10 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-blue-200 filter blur-3xl opacity-30 moving-gradient"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 rounded-full bg-purple-200 filter blur-3xl opacity-30 moving-gradient"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-teal-200 filter blur-3xl opacity-20 moving-gradient"></div>
        
        {/* Animated Tech Icons */}
        <div className="absolute top-1/4 left-1/4 floating-element animate-bounce-subtle">
          <Code className="h-8 w-8 text-primary/30" />
        </div>
        <div className="absolute bottom-1/4 right-1/3 floating-element" style={{ animationDelay: "1s" }}>
          <Zap className="h-10 w-10 text-blue-400/20" />
        </div>
        <div className="absolute top-2/3 right-1/4 floating-element" style={{ animationDelay: "2s" }}>
          <BarChart className="h-12 w-12 text-green-400/20" />
        </div>
        
        {/* Animated Particles */}
        {[...Array(15)].map((_, i) => (
          <div 
            key={i}
            className="particle"
            style={{
              width: `${Math.random() * 8 + 2}px`, 
              height: `${Math.random() * 8 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 20 + 10}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="container mx-auto px-6 flex flex-col justify-center z-10">
        <div className="max-w-4xl">
          <h1 className="hero-title staggered-item text-5xl md:text-7xl font-bold tracking-tight mb-6">
            <span className="block">AI-Driven</span>
            <span className="block text-gradient animate-shimmer">Web Development</span>
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
