
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDownIcon, Code, Zap, BarChart, BrainCircuit, Database, LineChart, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="min-h-screen flex flex-col justify-center pt-16 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-github-accent/5 filter blur-3xl opacity-20 moving-gradient"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 rounded-full bg-github-accent/5 filter blur-3xl opacity-20 moving-gradient"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-muted/10 filter blur-3xl opacity-10 moving-gradient"></div>
      </div>
      
      <div className="container mx-auto px-6 flex flex-col justify-center items-start z-10 h-full">
        <motion.div 
          className="max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="block text-white">Data Scientist &</span>
            <span className="block text-white">Full-Stack Developer</span>
          </motion.h1>
          
          <motion.div 
            className="mb-10 max-w-3xl space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <p className="text-xl md:text-2xl text-muted-foreground">
              Strong background in AI, automation, and data-driven platforms with extensive experience
              in Node.js, React, Supabase, Python, and machine learning.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
              <motion.div 
                className="flex items-start space-x-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <div className="p-2 rounded-md bg-github-accent/10 text-github-accent mt-1">
                  <BrainCircuit className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium text-white">AI Integration</h3>
                  <p className="text-muted-foreground text-sm">Building intelligent applications with advanced AI capabilities</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start space-x-3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <div className="p-2 rounded-md bg-github-accent/10 text-github-accent mt-1">
                  <LineChart className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium text-white">Predictive Modeling</h3>
                  <p className="text-muted-foreground text-sm">Developing data-driven insights and forecasting models</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start space-x-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <div className="p-2 rounded-md bg-github-accent/10 text-github-accent mt-1">
                  <Database className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium text-white">Scalable Applications</h3>
                  <p className="text-muted-foreground text-sm">Building robust platforms that grow with your business</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start space-x-3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
              >
                <div className="p-2 rounded-md bg-github-accent/10 text-github-accent mt-1">
                  <Terminal className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium text-white">Tech Leadership</h3>
                  <p className="text-muted-foreground text-sm">Driving innovation and leading development teams</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.5 }}
          >
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
                "bg-secondary text-foreground border hover:bg-secondary/80 transition-all",
                "shadow-sm hover:shadow-md"
              )}
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          opacity: { delay: 1.2, duration: 0.5 },
          y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" }
        }}
      >
        <a href="#projects" aria-label="Scroll to projects">
          <ChevronDownIcon className="h-8 w-8 text-github-accent/70" />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
