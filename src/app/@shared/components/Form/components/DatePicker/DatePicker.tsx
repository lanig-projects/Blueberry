import { DatePicker as AntdDatePicker } from "antd";
import { Label } from "@shared/components/Form/components/Label";
import { ErrorMessage } from "@shared/components/Form/components/ErrorMessage";
import dayjs from 'dayjs';
import 'dayjs/locale/es';

dayjs.locale('es');

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
  value?: any;
  picker?: 'date' | 'week' | 'month' | 'quarter' | 'year';
  isClearable?: boolean;
}

export const DatePicker = ({
  name,
  onChange,
  label,
  className,
  style,
  initialValue,
  placeholder,
  error,
  isDisabled,
  value,
  picker = 'date',
  isClearable = true
}: Props) => {
  return (
    <div className={className} style={style}>
      {label && <Label htmlFor={name}>{label}</Label>}
      <AntdDatePicker
        defaultValue={initialValue}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        name={name}
        id={name}
        disabled={isDisabled}
        allowClear={isClearable}
        className={'w-full h-[40px]'}
        picker={picker}
        {...(value && { value })}
      />
      {error && (
        <ErrorMessage message={error}/>
      )}
    </div>
  );
};
