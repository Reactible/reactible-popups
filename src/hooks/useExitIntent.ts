import { useEffect } from 'react';

const useExitIntent = (callback: () => void, enabled: boolean = false) => {
  useEffect(() => {
    if (!enabled) return;

    const handleMouseOut = (event: MouseEvent) => {
      if (
        event.clientY <= 0 &&
        event.relatedTarget === null &&
        (event.target as Element).nodeName.toLowerCase() !== 'select'
      ) {
        callback();
      }
    };

    document.addEventListener('mouseout', handleMouseOut);
    return () => {
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, [callback, enabled]);
};

export default useExitIntent;
