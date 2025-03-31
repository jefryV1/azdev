
import React, { useEffect, useRef } from 'react';
import { Laptop, Server, Code, Database, Terminal, GitBranch, Globe, BarChart, LineChart } from 'lucide-react';
import SkillsChart from './SkillsChart';
import { motion } from 'framer-motion';

const SkillsSection = () => {
  const skillsData = [
    {
      name: "Frontend Development",
      icon: <Laptop className="h-5 w-5" />,
      skills: [
        { name: "React", icon: <Code className="h-4 w-4" />, iconBg: "bg-blue-100 text-blue-500" },
        { name: "TypeScript", icon: <Code className="h-4 w-4" />, iconBg: "bg-blue-100 text-blue-500" },
        { name: "Tailwind CSS", icon: <Code className="h-4 w-4" />, iconBg: "bg-teal-100 text-teal-500" },
        { name: "Next.js", icon: <Code className="h-4 w-4" />, iconBg: "bg-gray-100 text-gray-500" },
      ],
    },
    {
      name: "Backend Development",
      icon: <Server className="h-5 w-5" />,
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
        { name: "Python", icon: <Code className="h-4 w-4" />, iconBg: "bg-blue-100 text-blue-500" },
        { name: "Pandas", icon: <BarChart className="h-4 w-4" />, iconBg: "bg-orange-100 text-orange-500" },
        { name: "Streamlit", icon: <Globe className="h-4 w-4" />, iconBg: "bg-red-100 text-red-500" },
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
      </div>
      
      <div className="container px-6 mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title reveal-animation">Technical Skills</h2>
          <p className="section-subtitle reveal-animation mx-auto">
            Programming languages and technologies I work with
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {skillsData.map((category, index) => (
              <motion.div 
                key={index} 
                className="bg-github-darker border border-github-border rounded-xl p-6 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold mb-4 flex items-center text-white">
                  <span className="p-2 rounded-md bg-github-accent/10 text-github-accent mr-3">
                    {category.icon}
                  </span>
                  <span>{category.name}</span>
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex} 
                      className="p-4 rounded-lg bg-secondary/30 border border-github-border flex items-center gap-3 transition-all hover:bg-secondary/50"
                    >
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${skill.iconBg}`}>
                        {skill.icon}
                      </div>
                      <span className="text-sm font-medium">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
          
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
