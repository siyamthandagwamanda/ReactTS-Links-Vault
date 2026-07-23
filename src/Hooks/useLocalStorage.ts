import { useState, useEffect,  } from 'react';

export function  useLocalStorage<ValueType>(key: string, initialValue: ValueType){
    const [storedValue, setStoredValue] = useState<ValueType>(() => {
        try{
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
            
        }catch (error){
            console.error(error);
            return initialValue;
        }
    });

    useEffect(() => {
        try{
            window.localStorage.setItem(key, JSON.stringify(storedValue));
        }catch(error){
            console.error(error);
        }
    }, [key, storedValue]);

    return [storedValue, setStoredValue];
}