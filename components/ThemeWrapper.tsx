'use client';

import { ThemeProvider, useTheme } from 'next-themes';
import type { ThemeProviderProps } from 'next-themes/dist/types';
import { useEffect, useState } from 'react';

export default function ThemeWrapper({
  children,
  ...props
}: React.PropsWithChildren<ThemeProviderProps>) {
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  if (!mount) {
    return <>{children}</>;
  }

  return <ThemeProvider {...props}>{children}</ThemeProvider>;
}

export function ThemeTesterWidget() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex flex-col space-y-2 items-center justify-center h-screen">
      The current theme is: {theme ?? 'loading...'}
      <div className="flex flex-row space-x-2">
        <button className="p-1 bg-slate-400" onClick={() => setTheme('light')}>
          Light Mode
        </button>
        <button className="p-1 bg-slate-400" onClick={() => setTheme('dark')}>
          Dark Mode
        </button>
      </div>
    </div>
  );
}
