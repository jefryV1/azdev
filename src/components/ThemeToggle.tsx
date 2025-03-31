
import React from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/useTheme";
import { motion } from "framer-motion";
import { Toggle } from "@/components/ui/toggle";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      className="relative h-9 w-9 rounded-full bg-transparent p-0"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
    >
      <Moon className={`h-5 w-5 absolute ${theme === "dark" ? "opacity-100" : "opacity-0"} transition-opacity`} />
      <Sun className={`h-5 w-5 absolute ${theme === "dark" ? "opacity-0" : "opacity-100"} transition-opacity`} />
    </Button>
  );
}
