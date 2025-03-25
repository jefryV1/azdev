import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { 
  ArrowRightIcon, 
  Layers, 
  Database, 
  LineChart, 
  Globe, 
  FileText, 
  PieChart
} from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface ProjectCardProps {
  icon: React.ReactNode;
  category: string;
  title: string;
  description: string;
  tech: string[];
  imageSrc: string;
  delay?: string;
}

const ProjectCard = ({ 
  icon, 
  category, 
  title, 
  description, 
  tech, 
  imageSrc, 
  delay = 'delay-0' 
}: ProjectCardProps) => {
  return (
    <div className={cn(
      "staggered-item project-card overflow-hidden rounded-xl border border-github-border",
      "transition-all duration-300 bg-github-darker", 
      delay
    )}>
      <div className="image-card">
        <AspectRatio ratio={16/9}>
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        </AspectRatio>
        <div className="image-card-overlay bg-gradient-to-t from-github-darker to-transparent">
          <div className="text-sm font-medium mb-1 text-github-highlight">{category}</div>
          <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {tech.slice(0, 3).map((item, index) => (
              <span 
                key={index} 
                className="text-xs font-medium bg-github-dark border border-github-border text-white/90 px-3 py-1 rounded-full"
              >
                {item}
              </span>
            ))}
            {tech.length > 3 && (
              <span className="text-xs font-medium bg-github-dark border border-github-border text-white/90 px-3 py-1 rounded-full">
                +{tech.length - 3} more
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="p-6 bg-github-darker shadow-lg">
        <div className="mb-4 p-3 inline-block rounded-lg bg-github-accent/10 text-github-accent">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
        <p className="text-muted-foreground mb-6">{description}</p>
        <a 
          href="#" 
          className="inline-flex items-center text-sm font-medium text-github-accent animated-underline"
        >
          View Details <ArrowRightIcon className="ml-1 h-4 w-4" />
        </a>
      </div>
    </div>
  );
};

const projects = [
  {
    icon: <Layers className="h-6 w-6" />,
    category: "Data Science & AI",
    title: "Advanced Data Cleaning and Visualization Tool",
    description: "An interactive application built with Streamlit to automate data cleaning processes, including handling missing values, outlier detection, and standardization.",
    tech: ["Streamlit", "Python", "Pandas", "Plotly", "Seaborn", "Data Preprocessing"],
    imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop"
  },
  {
    icon: <Database className="h-6 w-6" />,
    category: "Data Science & AI",
    title: "AI Resume Optimizer",
    description: "An AI-powered tool using Streamlit and SpaCy for analyzing and optimizing resumes, automating keyword extraction and ATS optimization.",
    tech: ["Streamlit", "Python", "OpenAI", "SpaCy", "NLP", "Resume Analysis"],
    imageSrc: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2874&auto=format&fit=crop"
  },
  {
    icon: <LineChart className="h-6 w-6" />,
    category: "Data Science & AI",
    title: "Bike-Sharing Demand Prediction",
    description: "A machine learning model using TidyModels to forecast hourly bike-sharing demand based on weather conditions and historical patterns.",
    tech: ["R", "TidyModels", "Python", "ML", "Weather API", "Time Series"],
    imageSrc: "https://images.unsplash.com/photo-1476990789491-712b869b91a5?q=80&w=2940&auto=format&fit=crop"
  },
  {
    icon: <PieChart className="h-6 w-6" />,
    category: "Data Automation",
    title: "Job Application Automation Tool",
    description: "An automated system that scrapes job postings and integrates AI tools like OpenAI GPT-3 for filtering job descriptions and matching candidate profiles.",
    tech: ["BeautifulSoup", "Python", "OpenAI GPT", "SQLite", "Automation"],
    imageSrc: "https://images.unsplash.com/photo-1586473219010-2ffc57b0d282?q=80&w=2874&auto=format&fit=crop"
  },
  {
    icon: <FileText className="h-6 w-6" />,
    category: "Data Visualization",
    title: "Advanced Stock Analysis Dashboard",
    description: "A real-time financial analytics dashboard built with Streamlit using financial data from Yahoo Finance API, implementing RSI and MACD indicators.",
    tech: ["Streamlit", "Python", "Yahoo Finance API", "RSI", "MACD", "Financial Analysis"],
    imageSrc: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2940&auto=format&fit=crop"
  },
  {
    icon: <Globe className="h-6 w-6" />,
    category: "Full-Stack Development",
    title: "E-Biking Weather Dashboard",
    description: "An interactive R Shiny dashboard that visualizes real-time demand and weather trends for bike-sharing services, enhancing operational decisions.",
    tech: ["R Shiny", "Data Wrangling", "Visualization", "Weather API", "Time Series"],
    imageSrc: "https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=2940&auto=format&fit=crop"
  }
];

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const title = entry.target.querySelector('.section-title');
            const subtitle = entry.target.querySelector('.section-subtitle');
            const items = entry.target.querySelectorAll('.staggered-item');
            
            if (title) title.classList.add('active');
            if (subtitle) subtitle.classList.add('active', 'delay-300');
            
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('active');
              }, 300 + index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-20 relative overflow-hidden bg-github-dark">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="fancy-blob w-96 h-96 bottom-0 left-0 bg-github-accent/5"></div>
        <div className="fancy-blob w-80 h-80 top-1/4 right-10 bg-github-highlight/5"></div>
        <div className="fancy-blob w-64 h-64 bottom-1/4 right-1/4 bg-github-accent/5"></div>
        
        {[...Array(8)].map((_, i) => (
          <div 
            key={i}
            className="particle"
            style={{
              width: `${Math.random() * 20 + 5}px`, 
              height: `${Math.random() * 20 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${Math.random() * 10 + 15}s`,
              backgroundColor: `rgba(46, 160, 67, ${Math.random() * 0.2})` // GitHub green particles
            }}
          ></div>
        ))}
      </div>
      
      <div className="container px-6 mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title staggered-item text-gradient">Featured Projects</h2>
          <p className="section-subtitle staggered-item mx-auto">
            A selection of my recent work combining data science and AI technologies
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              {...project} 
              delay={`delay-${(index + 1) * 100}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
