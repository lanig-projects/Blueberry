import React, { useState } from "react";
import { Input as AntdInput } from "antd";
import { InputTypes } from "@shared/components/Form/types/InputTypes";
import { Label } from "@shared/components/Form/components/Label";
import { ErrorMessage } from "@shared/components/Form/components/ErrorMessage";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useInputIcon } from "@shared/components/Form/hooks/useInputIcon";
import { useInputMask } from "@shared/components/Form/hooks/useInputMask";

interface Props {
  name?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  label?: string;
  error?: string;
  className?: string;
  type?: InputTypes;
  icon?: React.ReactNode;
  showIcon?: boolean;
  isDisabled?: boolean;
  autoComplete?: string;
  value?: string;
  style?: any;
  maxLength?: number;
  isRequired?: boolean;
  isLoading?: boolean;
  inputClassName?: string;
  min?: number;
  max?: number;
  spanComponent?: React.ReactNode;
}

export const Input = ({
  name,
  onChange = () => {
  },
  placeholder = '',
  label = '',
  error = '',
  className = '',
  type = 'text',
  showIcon = true,
  icon,
  isDisabled = false,
  autoComplete = 'off',
  value = '',
  style,
  isRequired = false,
  maxLength,
  inputClassName = '',
  min,
  max,
  spanComponent
}: Props) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { icon: iconFromType } = useInputIcon(type, showIcon);
  const { viewValue, handleChange } = useInputMask(type, value);

  return (
    <div className={className} style={style}>
      <div className={'flex justify-between items-center'}>
        {label && (
          <Label htmlFor={name}>
            {label}
            {!isRequired && <span className="text-muted"></span>}
          </Label>
        )}

        {spanComponent && (
          <div>
            {spanComponent}
          </div>
        )}
      </div>
      <div className="flex gap-1 items-center relative">
        <AntdInput
          name={name}
          id={name}
          placeholder={placeholder}
          onChange={(e) => handleChange(e.target.value, onChange)}
          value={value || viewValue}
          disabled={isDisabled}
          autoComplete={autoComplete}
          type={type === 'password' ? (!passwordVisible ? 'password' : 'text') : type}
          className={`rounded-md outline-none bg-white dark:bg-neutral-800 ${inputClassName}`}
          style={{ height: '40px' }}
          maxLength={maxLength}
          min={min}
          max={max}
          prefix={icon || iconFromType}
          {...(type === 'password' && {
            suffix: (
              <div
                className="absolute cursor-pointer right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                {passwordVisible ? <FiEyeOff size={18}/> : <FiEye size={18}/>}
              </div>
            )
          })}
        />
      </div>

      {error && <ErrorMessage message={error}/>}
    </div>
  );
};
