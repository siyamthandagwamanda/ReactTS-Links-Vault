import { useEffect, useState } from "react";

export function useLocalStorage<ValueType>(
  key: string,
  initialValue: ValueType
) {
  const [storedValue, setStoredValue] = useState<ValueType>(() => {
    try {
      const item = window.localStorage.getItem(key);

      if (item) {
        return JSON.parse(item);
      }

      return initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      const value = JSON.stringify(storedValue);
      window.localStorage.setItem(key, value);
    } catch (error) {
      console.error(error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue] as const;
}