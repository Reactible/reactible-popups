import { useEffect } from 'react';

const useScrollPercentage = (
  callback: () => void,
  percentage: number = 50,
  enabled: boolean = false
) => {
  useEffect(() => {
    if (!enabled) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const totalHeight = document.body.scrollHeight;
      const currentPercentage = (scrollPosition / totalHeight) * 100;

      if (currentPercentage >= percentage) {
        callback();
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [callback, percentage, enabled]);
};

export default useScrollPercentage;
