import { useEffect, useState } from "react";
import { InputTypes } from "@shared/components/Form/types/InputTypes";

export const useInputPattern = (type: InputTypes) => {
  const [pattern, setPattern] = useState<RegExp | null>(null);

  useEffect(() => {
    if (!type) return;

    switch (type) {
      case 'email':
        setPattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
        break;
      case 'tel':
        setPattern(/^\d{10}$/);
        break;
      case 'postalCode':
        setPattern(/^\d{5}$/);
        break;
      case 'number':
        setPattern(/^\d+$/);
        break;
    }
  }, [type]);

  return {
    pattern
  };
};
