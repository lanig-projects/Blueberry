import { Switch as AntdSwitch } from "antd";
import { Label } from "@shared/components/Form/components/Label";

interface Props {
  name: string;
  label?: string;
  className?: string;
  isChecked?: boolean;
  onChange?: (value: any) => void;
  initialValue?: boolean;
  style?: any;
}

export const Switch = ({ name, label, className = '', onChange, isChecked, initialValue, style }: Props) => {
  return (
    <div className={className} style={style}>
      {label && <Label htmlFor={name}>{label}</Label>}
      <AntdSwitch
        title={label}
        id={name}
        checked={isChecked}
        onChange={onChange}
        defaultChecked={initialValue}
      />
    </div>
  );
};
