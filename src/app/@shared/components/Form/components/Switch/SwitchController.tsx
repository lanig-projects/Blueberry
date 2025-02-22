import { Controller } from "react-hook-form";
import { Switch } from "@shared/components/Form/components/Switch";

interface Props {
  name: string;
  control: any;
  label?: string;
  className?: string;
  style?: any;
}

export const SwitchController = ({
  name,
  control,
  label,
  className,
  style
}: Props) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        return (
          <Switch
            name={name}
            label={label}
            className={className}
            isChecked={field.value}
            onChange={field.onChange}
            style={style}
          />
        );
      }}
    />
  );
};
