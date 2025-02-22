import { Controller } from "react-hook-form";
import { Select } from "@shared/components/Form/components/Select";
import { ISelectOption } from "@shared/components/Form/interfaces/ISelectOption";

interface Props {
  name: string;
  options: ISelectOption[];
  placeholder?: string;
  control: any;
  errors: any;
  label?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  className?: string;
  style?: any;
  isMulti?: boolean;
  spanComponent?: React.ReactNode;
}

export const SelectController = ({
  name,
  options,
  control,
  isRequired = false,
  errors,
  label,
  placeholder = '---',
  isDisabled,
  className,
  style,
  isMulti,
  spanComponent
}: Props) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: isRequired ? 'Este campo es requerido' : false
      }}
      render={({ field }) => {
        return (
          <Select
            name={name}
            options={options}
            placeholder={placeholder}
            error={errors[name]?.message}
            label={label}
            isDisabled={isDisabled}
            className={className}
            style={style}
            initialValue={field.value}
            onChange={field.onChange}
            isMulti={isMulti}
            spanComponent={spanComponent}
          />
        );
      }}
    />
  );
};
