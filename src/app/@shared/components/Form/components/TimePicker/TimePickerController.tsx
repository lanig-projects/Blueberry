import { Controller } from "react-hook-form";
import { TimePicker } from "@shared/components/Form/components/TimePicker";

interface Props {
  name: string;
  placeholder?: string;
  control: any;
  errors: any;
  label?: string;
  className?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  showIcon?: boolean;
  autoComplete?: string;
  style?: any;
}

export const TimePickerController = ({
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
        <TimePicker
          name={name}
          label={label}
          placeholder={placeholder}
          error={errors[name]?.message}
          className={className}
          isDisabled={isDisabled}
          initialValue={field.value}
          onChange={field.onChange}
          style={style}
        />
      )}
    />
  );
};
