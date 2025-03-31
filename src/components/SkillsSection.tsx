
import React, { useEffect, useRef } from 'react';
import { Laptop, Server, Code, Database, Terminal, GitBranch, Globe, BarChart, LineChart } from 'lucide-react';
import SkillsChart from './SkillsChart';
import { motion } from 'framer-motion';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { Card, CardContent } from './ui/card';

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
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="fancy-blob w-96 h-96 bottom-0 left-0 bg-github-accent/5"></div>
        <div className="fancy-blob w-80 h-80 top-1/4 right-10 bg-github-highlight/5"></div>
        <div className="fancy-blob w-64 h-64 bottom-1/4 right-1/4 bg-github-accent/5"></div>
      </div>
      
      <div className="container px-6 mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title text-3xl font-bold mb-4">Technical Skills</h2>
          <p className="section-subtitle text-muted-foreground max-w-2xl mx-auto">
            Programming languages and technologies I work with
          </p>
        </div>
        
        {/* Skills Carousel */}
        <div className="mb-16">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {skillsData.map((category, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="border border-border bg-card/80 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4 flex items-center">
                        <span className="p-2 rounded-md bg-primary/10 text-primary mr-3">
                          {category.icon}
                        </span>
                        <span>{category.name}</span>
                      </h3>
                      <div className="grid grid-cols-2 gap-3">
                        {category.skills.map((skill, skillIndex) => (
                          <motion.div 
                            key={skillIndex}
                            className="p-3 rounded-lg bg-secondary/30 border border-border flex items-center gap-2"
                            whileHover={{ 
                              scale: 1.03,
                              backgroundColor: "rgba(100, 100, 100, 0.2)"
                            }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <div className={`w-7 h-7 rounded-full flex items-center justify-center ${skill.iconBg}`}>
                              {skill.icon}
                            </div>
                            <span className="text-sm font-medium">{skill.name}</span>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-2">
              <CarouselPrevious className="relative inset-0 translate-y-0" />
              <CarouselNext className="relative inset-0 translate-y-0" />
            </div>
          </Carousel>
        </div>
        
        {/* Skills Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Skills Proficiency</h3>
            <p className="text-muted-foreground mb-6">
              I continuously develop my technical skills to stay current with industry trends and best practices. My proficiency in various technologies reflects my dedication to mastering both frontend and backend development.
            </p>
            <ul className="space-y-3">
              {chartData.slice(0, 3).map((item, i) => (
                <motion.li 
                  key={i}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="font-medium">{item.skill}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          
          <motion.div 
            className="bg-card border border-border p-6 rounded-xl shadow-sm"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <SkillsChart data={chartData} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
