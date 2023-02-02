import { useEffect, useState } from 'react';
import useSWR from 'swr';
import { apiFetcher } from './api_fetcher';

import { gqlFetcher } from './graphql_fetcher';

// Define general type for useWindowSize hook, which includes width and height
interface Size {
  width: number | undefined;
  height: number | undefined;
}

// Hook
export function useWindowSize(): Size {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState<Size>({
    width: undefined,
    height: undefined
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}

export const useGraphQL = <T>(
  query: string,
  opt: { fallback?: any; cdn: boolean } = {
    cdn: process.env.NODE_ENV === 'production'
  }
) => {
  return useSWR<T>(query, gqlFetcher.bind(gqlFetcher, [query, opt.cdn]), {
    fallbackData: opt.fallback,
    refreshInterval: 5000 // 10 seconds
  });
};

export const useAPI = <T>(
  path: string,
  opt: { internal?: boolean; external?: string; fallback?: any }
) => {
  return useSWR<T>(
    path,
    apiFetcher.bind(apiFetcher, [
      path,
      { internal: opt.internal ?? true, external: opt.external }
    ]),
    {
      fallbackData: opt.fallback,
      refreshInterval: 10000 // 10 seconds
    }
  );
};

export const useToggle = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);

  return { open, toggle };
};
