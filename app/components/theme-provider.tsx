import { setThemeServerFn } from "@/lib/theme";
import { useRouter } from "@tanstack/react-router";
import { createContext, PropsWithChildren, useContext } from "react";

export type Theme = "light" | "dark";

type ThemeContextVal = { theme: Theme; setTheme: (val: Theme) => void };
type Props = PropsWithChildren<{ theme: Theme }>;

const ThemeContext = createContext<ThemeContextVal | null>(null);

export function ThemeProvider({ children, theme }: Props) {
  const router = useRouter();

  async function setTheme(val: Theme) {
    try {
      await setThemeServerFn({ data: val });
      router.invalidate();
    } catch (error) {
      console.error('Failed to set theme:', error);
    }
  }

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const val = useContext(ThemeContext);
  if (!val) throw new Error("useTheme called outside of ThemeProvider!");
  return val;
}