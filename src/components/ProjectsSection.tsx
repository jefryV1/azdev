
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { ArrowRightIcon, Layers, Database, LineChart, Globe, FileText, PieChart } from 'lucide-react';

interface ProjectCardProps {
  icon: React.ReactNode;
  category: string;
  title: string;
  description: string;
  tech: string[];
  delay?: string;
}

const ProjectCard = ({ icon, category, title, description, tech, delay = 'delay-0' }: ProjectCardProps) => {
  return (
    <div className={cn(
      "staggered-item project-card glass-card rounded-xl p-6 md:p-8",
      "hover:shadow-xl transition-all duration-300", 
      delay
    )}>
      <div className="mb-6 p-3 inline-block rounded-lg bg-primary/10 text-primary">
        {icon}
      </div>
      <div className="text-sm font-medium mb-2 text-primary">{category}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground mb-6">{description}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {tech.map((item, index) => (
          <span 
            key={index} 
            className="text-xs font-medium bg-secondary px-3 py-1 rounded-full"
          >
            {item}
          </span>
        ))}
      </div>
      <a 
        href="#" 
        className="inline-flex items-center text-sm font-medium text-primary animated-underline"
      >
        View Details <ArrowRightIcon className="ml-1 h-4 w-4" />
      </a>
    </div>
  );
};

const projects = [
  {
    icon: <Layers className="h-6 w-6" />,
    category: "Full-Stack Web App",
    title: "AI Business Analyzer",
    description: "An intelligent business analytics platform that provides AI-driven insights for financial and operational performance.",
    tech: ["React", "Node.js", "TypeScript", "Tailwind CSS", "Supabase", "OpenAI"]
  },
  {
    icon: <Database className="h-6 w-6" />,
    category: "Full-Stack Web App",
    title: "Ethical Checker for Social Media",
    description: "A platform that analyzes the credibility of influencer and brand partnerships through sentiment analysis and AI scoring.",
    tech: ["React", "Node.js", "TypeScript", "Supabase", "OpenAI", "Tailwind CSS"]
  },
  {
    icon: <LineChart className="h-6 w-6" />,
    category: "Data Science & AI",
    title: "AI-Powered Market Analysis",
    description: "A trading assistant that tracks market movements and provides AI-driven entry/exit recommendations.",
    tech: ["Streamlit", "Python", "Pandas", "ML", "Yahoo Finance API", "SQLite"]
  },
  {
    icon: <PieChart className="h-6 w-6" />,
    category: "Data Science & AI",
    title: "Data Cleaning & Visualization Tool",
    description: "An automation tool for data preprocessing with real-time visualization for anomaly detection.",
    tech: ["Streamlit", "Python", "Pandas", "Plotly", "Seaborn", "SQLite"]
  },
  {
    icon: <FileText className="h-6 w-6" />,
    category: "Data Science & AI",
    title: "Job Application Automation Tool",
    description: "An automated system that scrapes job postings and matches them to resumes using AI technology.",
    tech: ["Streamlit", "Python", "BeautifulSoup", "OpenAI GPT", "SQLite"]
  },
  {
    icon: <Globe className="h-6 w-6" />,
    category: "Data Science & AI",
    title: "Advanced Stock Analysis Dashboard",
    description: "A real-time financial analytics dashboard with AI-driven predictions and visualization tools.",
    tech: ["Streamlit", "Python", "Yahoo Finance API", "Power BI", "Pandas"]
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
    <section id="projects" ref={sectionRef} className="py-20 relative">
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-blue-100 filter blur-3xl opacity-20" />
      </div>
      
      <div className="container px-6 mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title staggered-item text-gradient">Featured Projects</h2>
          <p className="section-subtitle staggered-item mx-auto">
            A selection of my recent work combining full-stack development and AI technologies
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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
