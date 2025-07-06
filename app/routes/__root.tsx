// app/routes/__root.tsx
import type { ReactNode } from 'react';
import { Outlet, createRootRoute, HeadContent, Scripts } from '@tanstack/react-router';
import { useEffect } from 'react';

import appCss from '@/styles/app.css?url';
import { getThemeServerFn } from '@/lib/theme';
import { ThemeProvider, useTheme } from '@/components/theme-provider';

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'TanStack Start Starter',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),
  loader: () => getThemeServerFn(),
  component: RootComponent,
});

function RootComponent() {
  const theme = Route.useLoaderData() as 'light' | 'dark';
  return (
    <ThemeProvider theme={theme}>
      <RootDocument>
        <Outlet />
      </RootDocument>
    </ThemeProvider>
  );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  const { theme } = useTheme();
  
  useEffect(() => {
    const root = document.documentElement;
    root.className = theme;
  }, [theme]);
  
  return (
    <html className={theme} lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
