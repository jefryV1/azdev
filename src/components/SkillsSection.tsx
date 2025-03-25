
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface SkillCategoryProps {
  title: string;
  skills: string[];
  delay?: string;
}

const SkillCategory = ({ title, skills, delay = 'delay-0' }: SkillCategoryProps) => {
  return (
    <div className={cn(
      "staggered-item glass-card rounded-xl p-6 h-full",
      "hover:shadow-lg transition-all duration-300",
      delay
    )}>
      <h3 className="text-lg font-bold mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span 
            key={index} 
            className="text-sm bg-secondary rounded-full px-3 py-1 mb-2"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const skillsData = [
  {
    title: "Frontend Development",
    skills: ["React", "TypeScript", "Tailwind CSS", "Streamlit", "Responsive Design", "UI/UX", "Redux", "Next.js"]
  },
  {
    title: "Backend & Databases",
    skills: ["Node.js", "Express", "Supabase", "PostgreSQL", "SQLite", "RESTful APIs", "GraphQL", "Firebase"]
  },
  {
    title: "AI & Data Science",
    skills: ["Python", "Scikit-learn", "TensorFlow", "Pandas", "NLP (SpaCy)", "OpenAI API", "Machine Learning", "Data Analysis"]
  },
  {
    title: "Data Visualization & BI",
    skills: ["Power BI", "Tableau", "Plotly", "Seaborn", "D3.js", "Chart.js", "Data Dashboards", "Real-time Analytics"]
  },
  {
    title: "Web Scraping & Automation",
    skills: ["BeautifulSoup", "Selenium", "Puppeteer", "API Integration", "Process Automation", "ETL Pipelines", "Cron Jobs"]
  },
  {
    title: "Cloud & DevOps",
    skills: ["Supabase", "AWS", "Azure", "Docker", "CI/CD", "Git", "GitHub Actions", "Deployment Automation"]
  }
];

const techList = [
  "React", "Node.js", "TypeScript", "Python", "Supabase", "PostgreSQL", 
  "OpenAI API", "Tailwind CSS", "Streamlit", "Pandas", "Machine Learning", 
  "RESTful APIs", "Firebase", "Scikit-learn", "TensorFlow", "Power BI",
  "Tableau", "Docker", "AWS", "Azure", "CI/CD", "Git", "GitHub Actions"
];

const SkillsSection = () => {
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
    <section id="skills" ref={sectionRef} className="py-20 relative bg-gradient-to-b from-white/0 to-white/40">
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-blue-100 filter blur-3xl opacity-20" />
      </div>
      
      <div className="container px-6 mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title staggered-item text-gradient">Technical Expertise</h2>
          <p className="section-subtitle staggered-item mx-auto">
            A comprehensive toolkit for building modern, AI-driven applications
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {skillsData.map((category, index) => (
            <SkillCategory 
              key={index} 
              {...category} 
              delay={`delay-${(index + 1) * 100}`}
            />
          ))}
        </div>
        
        {/* Tech Slider */}
        <div className="staggered-item overflow-hidden mt-16 rounded-lg glass-card p-6">
          <div className="tech-slider flex space-x-8 whitespace-nowrap">
            {[...techList, ...techList].map((tech, index) => (
              <span 
                key={index}
                className="text-sm md:text-base font-medium px-3 py-1 bg-secondary/50 rounded-full inline-block"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
