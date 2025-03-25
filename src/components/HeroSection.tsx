
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDownIcon, Code, Zap, BarChart } from 'lucide-react';
import profilePic from '/lovable-uploads/b276efca-f182-43df-a587-2e3dd7f43573.png';

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
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-github-accent/5 filter blur-3xl opacity-20 moving-gradient"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 rounded-full bg-github-highlight/5 filter blur-3xl opacity-20 moving-gradient"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-muted/10 filter blur-3xl opacity-10 moving-gradient"></div>
        
        {/* Animated Tech Icons */}
        <div className="absolute top-1/4 left-1/4 floating-element animate-bounce-subtle">
          <Code className="h-8 w-8 text-github-accent/30" />
        </div>
        <div className="absolute bottom-1/4 right-1/3 floating-element" style={{ animationDelay: "1s" }}>
          <Zap className="h-10 w-10 text-github-highlight/20" />
        </div>
        <div className="absolute top-2/3 right-1/4 floating-element" style={{ animationDelay: "2s" }}>
          <BarChart className="h-12 w-12 text-muted/20" />
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
      
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between z-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-6 mb-6">
            <div className="relative">
              <img 
                src={profilePic} 
                alt="Aziz Dhouib" 
                className="w-24 h-24 rounded-full border-2 border-github-accent object-cover"
              />
              <div className="absolute inset-0 rounded-full border-2 border-github-accent/30 animate-pulse"></div>
            </div>
            <h1 className="hero-title staggered-item text-4xl md:text-6xl font-bold tracking-tight">
              <span className="block">Aziz Dhouib</span>
              <span className="block text-gradient animate-shimmer text-2xl md:text-3xl mt-2">Data Scientist & Full-Stack Developer</span>
            </h1>
          </div>
          
          <p className="hero-subtitle staggered-item text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl">
            I specialize in full-stack development with AI integration, creating data-driven web applications and automation tools that solve complex business problems. With a strong foundation in React, TypeScript, Node.js, and cloud technologies, I build scalable, interactive platforms that leverage the power of AI to deliver intelligent insights and enhance user experiences.
          </p>
          
          <div className="hero-cta staggered-item flex flex-col sm:flex-row gap-4">
            <a 
              href="#projects" 
              className={cn(
                "inline-flex items-center justify-center px-6 py-3 rounded-md text-base font-medium",
                "bg-github-accent text-white hover:bg-github-accent/90 transition-all",
                "shadow-lg shadow-github-accent/10 hover:shadow-xl hover:shadow-github-accent/20"
              )}
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className={cn(
                "inline-flex items-center justify-center px-6 py-3 rounded-md text-base font-medium",
                "bg-github-darker text-foreground border border-github-border hover:bg-github-darker/80 transition-all",
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
          <ChevronDownIcon className="h-8 w-8 text-github-accent/70" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
