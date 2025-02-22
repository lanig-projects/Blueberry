import { Controller } from "react-hook-form";
import { Textarea } from "@shared/components/Form/components/Textarea";

interface Props {
  name: string;
  placeholder?: string;
  control: any;
  errors: any;
  label?: string;
  className?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  style?: any;
}

export const TextareaController = ({
  name,
  placeholder,
  control,
  errors,
  label,
  className,
  isRequired,
  isDisabled,
  style
}: Props) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: isRequired ? 'Este campo es requerido' : false
      }}
      render={({ field }) => (
        <Textarea
          name={name}
          label={label}
          placeholder={placeholder}
          error={errors[name]?.message}
          className={className}
          isDisabled={isDisabled}
          value={field.value}
          onChange={field.onChange}
          style={style}
        />
      )}
    />
  );
};
