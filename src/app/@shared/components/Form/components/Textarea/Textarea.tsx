import { Input } from "antd";
import { Label } from "@shared/components/Form/components/Label";
import { ErrorMessage } from "@shared/components/Form/components/ErrorMessage";

const { TextArea: AntdTextarea } = Input;

interface Props {
  name?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  label?: string;
  error?: string;
  className?: string;
  isDisabled?: boolean;
  autoComplete?: string;
  value?: string;
  style?: any;
  inputClassName?: string;
}

export const Textarea = ({
  name,
  onChange = () => {
  },
  placeholder = '',
  label = '',
  error = '',
  className = '',
  isDisabled = false,
  autoComplete = 'off',
  value = '',
  style,
  inputClassName = ''
}: Props) => {
  return (
    <div className={className} style={style}>
      {label && (
        <Label htmlFor={name}>
          {label}
        </Label>
      )}
      <AntdTextarea
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        value={value}
        disabled={isDisabled}
        autoComplete={autoComplete}
        className={inputClassName}
        rows={6}
      />
      {error && (
        <ErrorMessage message={error}/>
      )}
    </div>
  );
};
