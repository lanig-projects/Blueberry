import { Controller } from "react-hook-form";
import { RichText } from "@shared/components/Form/components/RichText/RichText";

interface Props {
  name: string;
  control: any;
  errors: any;
  label?: string;
  className?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  style?: React.CSSProperties;
  spanComponent?: React.ReactNode;
  maxLength?: number;
  minLength?: number;
}

export const RichTextController = ({
  name,
  control,
  errors,
  label,
  className,
  isRequired,
  isDisabled,
  style,
  spanComponent,
  maxLength,
  minLength
}: Props) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: isRequired ? 'Este campo es requerido' : false,
        ...(maxLength && { maxLength: { value: maxLength, message: `Máximo ${maxLength} caracteres` } }),
        ...(minLength && { minLength: { value: minLength, message: `Mínimo ${minLength} caracteres` } })
      }}
      render={({ field }) => (
        <RichText
          value={field.value}
          onChange={field.onChange}
          error={errors[name]?.message}
          label={label}
          className={className}
          isRequired={isRequired}
          isDisabled={isDisabled}
          style={style}
          spanComponent={spanComponent}
        />
      )}
    />
  );
};
