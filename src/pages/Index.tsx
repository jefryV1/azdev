
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScroll';

const Index = () => {
  useScrollAnimation();
  
  useEffect(() => {
    // Set dark theme for the entire site
    document.documentElement.classList.add('dark');
    
    // Smooth scroll to section when clicking on hash links
    const handleHashLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        const targetId = target.getAttribute('href');
        const targetElement = document.querySelector(targetId as string);
        
        if (targetElement) {
          e.preventDefault();
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
            behavior: 'smooth'
          });
        }
      }
    };
    
    // Background particles animation
    const createBackgroundParticles = () => {
      const particlesContainer = document.createElement('div');
      particlesContainer.className = 'fixed inset-0 -z-20 overflow-hidden pointer-events-none';
      document.body.appendChild(particlesContainer);
      
      for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle absolute rounded-full';
        
        // Random size, position and animation duration
        const size = Math.random() * 6 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.opacity = `${Math.random() * 0.3}`;
        particle.style.backgroundColor = `rgba(56, 139, 253, ${Math.random() * 0.2})`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        particle.style.animationDuration = `${Math.random() * 20 + 10}s`;
        
        particlesContainer.appendChild(particle);
      }
    };
    
    document.addEventListener('click', handleHashLinkClick);
    createBackgroundParticles();
    
    return () => {
      document.removeEventListener('click', handleHashLinkClick);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background antialiased overflow-x-hidden">
      <Navbar />
      <HeroSection />
      
      {/* Resume Button (visible on mobile/smaller screens) */}
      <div className="container mx-auto px-6 my-8 flex justify-center md:hidden">
        <Link to="/resume">
          <Button className="w-full gap-2">
            <FileText className="h-4 w-4" /> View My Resume
          </Button>
        </Link>
      </div>
      
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
