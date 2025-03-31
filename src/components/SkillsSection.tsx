import React, { useEffect, useRef } from 'react';
import { Laptop2, Server2, Code2, Database, Terminal, GitBranch, Globe2 } from 'lucide-react';
import SkillsChart from './SkillsChart';
import { motion } from 'framer-motion';

const SkillsSection = () => {
  const skillsData = [
    {
      name: "Frontend Development",
      icon: <Laptop2 className="h-5 w-5" />,
      skills: [
        { name: "React", icon: <Code2 className="h-4 w-4" />, iconBg: "bg-blue-100 text-blue-500" },
        { name: "TypeScript", icon: <Code2 className="h-4 w-4" />, iconBg: "bg-blue-100 text-blue-500" },
        { name: "Tailwind CSS", icon: <Code2 className="h-4 w-4" />, iconBg: "bg-teal-100 text-teal-500" },
        { name: "Next.js", icon: <Code2 className="h-4 w-4" />, iconBg: "bg-gray-100 text-gray-500" },
      ],
    },
    {
      name: "Backend Development",
      icon: <Server2 className="h-5 w-5" />,
      skills: [
        { name: "Node.js", icon: <Terminal className="h-4 w-4" />, iconBg: "bg-green-100 text-green-500" },
        { name: "Express.js", icon: <Terminal className="h-4 w-4" />, iconBg: "bg-green-100 text-green-500" },
        { name: "SQL", icon: <Database className="h-4 w-4" />, iconBg: "bg-yellow-100 text-yellow-500" },
        { name: "NoSQL", icon: <Database className="h-4 w-4" />, iconBg: "bg-yellow-100 text-yellow-500" },
      ],
    },
    {
      name: "AI & Data Science",
      icon: <GitBranch className="h-5 w-5" />,
      skills: [
        { name: "Python", icon: <Code2 className="h-4 w-4" />, iconBg: "bg-blue-100 text-blue-500" },
        { name: "Pandas", icon: <PieChart className="h-4 w-4" />, iconBg: "bg-orange-100 text-orange-500" },
        { name: "Streamlit", icon: <Globe2 className="h-4 w-4" />, iconBg: "bg-red-100 text-red-500" },
        { name: "Machine Learning", icon: <LineChart className="h-4 w-4" />, iconBg: "bg-purple-100 text-purple-500" },
      ],
    },
  ];

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
  
  // Skills data for the chart
  const chartData = [
    { skill: 'React', value: 90, color: '#61dafb' },
    { skill: 'TypeScript', value: 85, color: '#3178c6' },
    { skill: 'Node.js', value: 80, color: '#8cc84b' },
    { skill: 'Python', value: 75, color: '#3776ab' },
    { skill: 'TailwindCSS', value: 90, color: '#38b2ac' },
    { skill: 'SQL', value: 70, color: '#f29111' }
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="fancy-blob w-96 h-96 bottom-0 left-0 bg-github-accent/5"></div>
        <div className="fancy-blob w-80 h-80 top-1/4 right-10 bg-github-highlight/5"></div>
        <div className="fancy-blob w-64 h-64 bottom-1/4 right-1/4 bg-github-accent/5"></div>
        
        {/* Animated particles */}
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
          <h2 className="section-title reveal-animation">Technical Skills</h2>
          <p className="section-subtitle reveal-animation mx-auto">
            Programming languages and technologies I work with
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-10">
            {skillsData.map((category, index) => (
              <motion.div 
                key={index} 
                className="staggered-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold mb-4 text-white">
                  {category.icon}
                  <span className="ml-2">{category.name}</span>
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex} 
                      className="relative p-4 rounded-lg github-card flex items-center gap-3 transition-all hover:scale-105"
                    >
                      <div className="h-2 w-2 rounded-full bg-github-accent absolute top-2 right-2"></div>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${skill.iconBg}`}>
                        {skill.icon}
                      </div>
                      <span className="text-sm font-medium">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="bg-github-darker border border-github-border p-6 rounded-xl shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 text-center">Skills Proficiency</h3>
            <SkillsChart data={chartData} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
