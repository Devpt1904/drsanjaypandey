import { useEffect, useRef, useState } from 'react';

export function useAnimeInView<T extends HTMLElement>(options: IntersectionObserverInit = { threshold: 0.1 }) {
  const ref = useRef<T>(null);
  const [isInView, setIsInView] = useState(false);
  const hasTriggered = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasTriggered.current) {
        setIsInView(true);
        hasTriggered.current = true; // Animate only once per load
      }
    }, options);

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [options]);

  return { ref, isInView };
}
