import { useEffect, useState } from 'react';
import { IoMailOutline, IoLockOpen } from 'react-icons/io5';
import { FaPhone, FaSlackHash } from 'react-icons/fa';
import { InputTypes } from '@shared/components/Form/types/InputTypes';
import { FiPercent } from "react-icons/fi";

export const useInputIcon = (type: InputTypes, showIcon: boolean = true) => {
  const [icon, setIcon] = useState(null);

  useEffect(() => {
    if (!showIcon || !type) return;

    switch (type) {
      case 'email':
        setIcon(<IoMailOutline/>);
        break;
      case 'password':
        setIcon(<IoLockOpen/>);
        break;
      case 'tel':
        setIcon(<FaPhone/>);
        break;
      case 'postalCode':
        setIcon(<FaSlackHash/>);
        break;
      case 'percentage':
        setIcon(<FiPercent/>);
        break;
      default:
        setIcon(null);
        break;
    }
  }, [type, showIcon]);

  return {
    icon
  };
};
