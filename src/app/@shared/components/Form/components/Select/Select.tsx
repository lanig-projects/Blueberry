import { Select as AntdSelect } from 'antd';
import { ISelectOption } from "@shared/components/Form/interfaces/ISelectOption";
import { Label } from "@shared/components/Form/components/Label";
import { ErrorMessage } from "@shared/components/Form/components/ErrorMessage";

interface Props {
  name?: string;
  onChange?: (value: string) => void;
  initialValue?: string;
  options: ISelectOption[];
  placeholder?: string;
  error?: string;
  label?: string;
  isDisabled?: boolean;
  className?: string;
  style?: any;
  isClearable?: boolean;
  isMulti?: boolean;
  spanComponent?: React.ReactNode;
}

export const Select = ({
  name,
  onChange = () => {
  },
  initialValue,
  options,
  placeholder = '---',
  error,
  label,
  isDisabled,
  className,
  style,
  isClearable = true,
  isMulti = false,
  spanComponent
}: Props) => {
  return (
    <div className={className} style={style}>
      <div className={'flex justify-between items-center'}>
        {label && (
          <Label htmlFor={name}>
            {label}
          </Label>
        )}

        {spanComponent && (
          <div>
            {spanComponent}
          </div>
        )}
      </div>
      <AntdSelect
        onChange={(value) => onChange(value)}
        optionFilterProp={'label'}
        showSearch
        placeholder={placeholder}
        disabled={isDisabled}
        value={initialValue}
        options={options}
        allowClear={isClearable}
        style={{ width: '100%', height: '40px' }}
        {...(isMulti && { mode: 'multiple' })}
      />
      {error && (
        <ErrorMessage message={error}/>
      )}
    </div>
  );
};
