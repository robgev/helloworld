import { useEffect, useState } from 'react';

const QUERY = '(prefers-reduced-motion: reduce)';

const supportsMatchMedia = () => typeof window !== 'undefined' && typeof window.matchMedia === 'function';

export function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (!supportsMatchMedia()) {
      return false;
    }

    return window.matchMedia(QUERY).matches;
  });

  useEffect(() => {
    if (!supportsMatchMedia()) {
      return undefined;
    }

    const mediaQuery = window.matchMedia(QUERY);

    const updatePreference = (event: MediaQueryList | MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    updatePreference(mediaQuery);

    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', updatePreference);
    } else {
      mediaQuery.addListener(updatePreference);
    }

    return () => {
      if (typeof mediaQuery.removeEventListener === 'function') {
        mediaQuery.removeEventListener('change', updatePreference);
      } else {
        mediaQuery.removeListener(updatePreference);
      }
    };
  }, []);

  return prefersReducedMotion;
}
