import { useEffect } from "react";

const useInactivityTimer = (
  callback: () => void,
  time: number = 30,
  enabled: boolean = false
) => {
  useEffect(() => {
    if (!enabled) return;

    let timeout: NodeJS.Timeout;

    const resetTimer = () => {
      clearTimeout(timeout);
      timeout = setTimeout(callback, time * 1000);
    };

    const events = ["mousemove", "keydown", "scroll", "touchstart"];

    events.forEach((event) => {
      window.addEventListener(event, resetTimer);
    });

    resetTimer();

    return () => {
      clearTimeout(timeout);
      events.forEach((event) => {
        window.removeEventListener(event, resetTimer);
      });
    };
  }, [callback, time, enabled]);
};

export default useInactivityTimer;
