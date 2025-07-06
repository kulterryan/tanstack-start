import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  console.log("Current theme:", theme);
  
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme} className="m-0 hover:m-0 transition-all hover:cursor-pointer">
      <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90 text-black dark:text-white" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0 text-black dark:text-white" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
