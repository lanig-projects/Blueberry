import { TimePicker as AntdTimePicker } from "antd";
import { Label } from "@shared/components/Form/components/Label";
import { ErrorMessage } from "@shared/components/Form/components/ErrorMessage";

interface Props {
  name?: string;
  onChange?: (value: any) => void;
  label?: string;
  className?: string;
  style?: any;
  initialValue?: any;
  placeholder?: string;
  error?: string;
  isDisabled?: boolean;
}

export const TimePicker = ({
  name,
  onChange,
  label,
  className,
  style,
  initialValue,
  placeholder,
  error,
  isDisabled
}: Props) => {
  return (
    <div className={className} style={style}>
      {label && <Label htmlFor={name}>{label}</Label>}
      <AntdTimePicker
        defaultValue={initialValue}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        id={name}
        disabled={isDisabled}
        format={'HH:mm'}
        className={'w-full h-[40px]'}
      />
      {error && (
        <ErrorMessage message={error}/>
      )}
    </div>
  );
};
