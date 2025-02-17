import { useState, useCallback } from "react";

function useDebounce(callback, delay) {
  const [timer, setTimer] = useState(null);

  const debouncedCallback = useCallback(
    (...args) => {
      if (timer) clearTimeout(timer);
      const newTimer = setTimeout(() => {
        callback(...args);
      }, delay);
      setTimer(newTimer);
    },
    [callback, delay]
  );

  return debouncedCallback;
}
export default useDebounce;
