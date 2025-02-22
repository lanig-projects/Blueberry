import React from "react";
import { Controller } from "react-hook-form";
import { Input } from "@shared/components/Form/components/Input";
import { InputTypes } from "@shared/components/Form/types/InputTypes";
import { useInputPattern } from "@shared/components/Form/hooks/useInputPattern";

interface Props {
  name: string;
  placeholder?: string;
  control: any;
  errors: any;
  label?: string;
  className?: string;
  isRequired?: boolean;
  type?: InputTypes;
  icon?: React.ReactNode;
  showIcon?: boolean;
  isDisabled?: boolean;
  maxLength?: number;
  minLength?: number;
  isLoading?: boolean;
  autoComplete?: string;
  style?: any;
  min?: number;
  max?: number;
  spanComponent?: React.ReactNode;
}

export const InputController = ({
  name,
  placeholder,
  control,
  errors,
  label,
  className,
  isRequired,
  type = 'text',
  showIcon,
  icon,
  isDisabled,
  maxLength,
  minLength,
  isLoading = false,
  autoComplete = 'off',
  style,
  min,
  max,
  spanComponent
}: Props) => {
  const { pattern } = useInputPattern(type);

  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: isRequired ? 'Este campo es requerido' : false,
        pattern: {
          value: pattern,
          message: 'Formato inválido'
        },
        ...(min && { min: { value: min, message: `El valor mínimo es ${min}` } }),
        ...(max && { max: { value: max, message: `El valor máximo es ${max}` } }),
        ...(maxLength && { maxLength: { value: maxLength, message: `Máximo ${maxLength} caracteres` } }),
        ...(minLength && { minLength: { value: minLength, message: `Mínimo ${minLength} caracteres` } })
      }}
      render={({ field }) => (
        <Input
          name={name}
          label={label}
          placeholder={placeholder}
          error={errors[name]?.message}
          className={className}
          type={type}
          isDisabled={isDisabled}
          autoComplete={autoComplete}
          value={field.value}
          isRequired={isRequired}
          onChange={field.onChange}
          style={style}
          maxLength={maxLength}
          isLoading={isLoading}
          min={min}
          max={max}
          icon={icon}
          showIcon={showIcon}
          spanComponent={spanComponent}
        />
      )}
    />
  );
};
