import { useEffect, useState } from "react";
import { InputTypes } from "@shared/components/Form/types/InputTypes";

const inputConfig = {
  tel: {
    mask: (value: string) => {
      const phone = value.replace(/\D/g, "");
      const phoneMaskArray = "(###) ###-####".split("");
      let phoneIndex = 0;
      let phoneValue = "";

      phoneMaskArray.forEach((char) => {
        if (phoneIndex >= phone.length) return;
        if (char === "#") {
          phoneValue += phone[phoneIndex++];
        } else {
          phoneValue += char;
        }
      });

      return phoneValue;
    },
    maxLength: 10
  },
  email: {
    mask: (value: string) => value,
    maxLength: 50
  },
  postalCode: {
    mask: (value: string) => value,
    maxLength: 5
  }
};

export const useInputMask = (type: InputTypes, initialValue: string) => {
  const [viewValue, setViewValue] = useState("");

  const handleChange = (value: string, setValue: (rawValue: string) => void) => {
    const config = inputConfig[type];

    if (!config) {
      setValue(value);
      setViewValue(value);
      return;
    }

    const rawValue = value.slice(0, config.maxLength || value.length);
    setValue(rawValue);
    setViewValue(config.mask(rawValue));
  };

  useEffect(() => {
    if (initialValue && inputConfig[type]) {
      const config = inputConfig[type];
      setViewValue(config.mask(initialValue.slice(0, config.maxLength || initialValue.length)));
    } else {
      setViewValue(initialValue);
    }
  }, [initialValue, type]);

  return {
    handleChange,
    viewValue
  };
};
