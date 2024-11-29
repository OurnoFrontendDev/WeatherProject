import { useRef, useCallback } from "react";

function useDebouncedCallback<T extends (...args: string[]) => void>(
  func: T,
  wait: number,
): (...args: Parameters<T>) => void {
  const timeout = useRef<NodeJS.Timeout | null>(null);

  return useCallback(
    (...args: Parameters<T>) => {
      const later = () => {
        if (timeout.current) {
          clearTimeout(timeout.current);
        }
        func(...args);
      };

      if (timeout.current) {
        clearTimeout(timeout.current);
      }
      timeout.current = setTimeout(later, wait);
    },
    [func, wait],
  );
}

export default useDebouncedCallback;
