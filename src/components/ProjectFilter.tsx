
import React from 'react';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

interface ProjectFilterProps {
  categories: string[];
  activeCategory: string;
  onChange: (category: string) => void;
}

const ProjectFilter = ({ categories, activeCategory, onChange }: ProjectFilterProps) => {
  return (
    <div className="flex flex-col items-center justify-center mb-8">
      <h3 className="text-sm font-medium mb-3 text-muted-foreground">Filter by category</h3>
      <ToggleGroup type="single" value={activeCategory} onValueChange={value => value && onChange(value)}>
        <ToggleGroupItem value="all" aria-label="Show all projects" className="text-sm">
          All
        </ToggleGroupItem>
        
        {categories.map((category) => (
          <ToggleGroupItem 
            key={category} 
            value={category} 
            aria-label={`Filter by ${category}`}
            className="text-sm"
          >
            {category}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  );
};

export default ProjectFilter;
