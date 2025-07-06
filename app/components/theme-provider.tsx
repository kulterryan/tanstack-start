import { getThemeFromStorage, setThemeToStorage } from "@/lib/theme";
import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";

export type Theme = "light" | "dark";

type ThemeContextVal = { theme: Theme; setTheme: (val: Theme) => void };
type Props = PropsWithChildren<{ theme?: Theme }>;

const ThemeContext = createContext<ThemeContextVal | null>(null);

export function ThemeProvider({ children, theme: initialTheme }: Props) {
  // Initialize with localStorage value or default to dark
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      return getThemeFromStorage();
    }
    return initialTheme || "dark";
  });

  // Apply theme class immediately on client-side
  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  function setTheme(val: Theme) {
    setThemeState(val);
    setThemeToStorage(val);
    document.documentElement.className = val;
  }

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const val = useContext(ThemeContext);
  if (!val) throw new Error("useTheme called outside of ThemeProvider!");
  return val;
}