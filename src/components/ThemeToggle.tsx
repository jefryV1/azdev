
import React from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/useTheme";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="sm"
      className="relative h-9 w-9 rounded-full bg-transparent p-0"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <span className="sr-only">Toggle theme</span>
      <span className="absolute inset-0 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100">
        <Moon className="h-5 w-5" />
      </span>
      <span className="absolute inset-0 rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0">
        <Sun className="h-5 w-5" />
      </span>
    </Button>
  );
}
