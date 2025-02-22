import { useState } from 'react';

interface ISetValue {
	(newValue: string | null): Promise<string | boolean>;
}

export const useLocalStorage = (keyName: string, defaultValue: string | null) => {
	const [storedValue, setStoredValue] = useState<string | null>(() => {
		try {
			const value = window.localStorage.getItem(keyName);
			if (value) {
				return JSON.parse(value) as string;
			}
			window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
			return defaultValue;
		} catch (err) {
			return defaultValue;
		}
	});

	const setValue: ISetValue = (newValue) => {
		return new Promise((resolve) => {
			try {
				window.localStorage.setItem(keyName, JSON.stringify(newValue));
				resolve(true);
			} catch (err) {
				/* empty */
			}
			setStoredValue(newValue);
		});
	};
	return [storedValue, setValue];
};
