import { Controller } from "react-hook-form";
import { DatePicker } from "@shared/components/Form/components/DatePicker";

interface Props {
  name: string;
  placeholder?: string;
  control: any;
  errors: any;
  label?: string;
  className?: string;
  isRequired?: boolean;
  type?: string;
  isDisabled?: boolean;
  autoComplete?: string;
  style?: any;
  initialValue?: any;
}

export const DatePickerController = ({
  name,
  placeholder,
  control,
  errors,
  label,
  className,
  isRequired,
  isDisabled,
  style,
  initialValue
}: Props) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: isRequired ? 'Este campo es requerido' : false
      }}
      render={({ field }) => (
        <DatePicker
          name={name}
          label={label}
          placeholder={placeholder}
          error={errors[name]?.message}
          className={className}
          isDisabled={isDisabled}
          initialValue={initialValue}
          value={field.value}
          onChange={field.onChange}
          style={style}
        />
      )}
    />
  );
};
