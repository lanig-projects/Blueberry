import React from "react";
import { Button as AntdButton, Tooltip } from "antd";
import type { ButtonColorType, ButtonShape, ButtonType, ButtonVariantType } from "antd/es/button/buttonHelpers";
import type { SizeType } from "antd/es/config-provider/SizeContext";

export interface ButtonProps {
  label?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  color?: ButtonColorType;
  className?: string;
  variant?: ButtonVariantType;
  type?: ButtonType;
  shape?: ButtonShape;
  size?: SizeType;
  isDanger?: boolean;
  isDisabled?: boolean;
  tooltip?: string;
}

export const Button = ({
  label,
  icon,
  onClick,
  color,
  className,
  variant,
  type,
  shape,
  size,
  isDanger,
  isDisabled,
  tooltip
}: ButtonProps) => {
  return (
    <Tooltip title={tooltip}>
      <AntdButton
        icon={icon}
        onClick={onClick}
        color={color}
        className={className}
        variant={variant}
        type={type}
        shape={shape}
        size={size}
        danger={isDanger}
        disabled={isDisabled}
      >
        {label}
      </AntdButton>
    </Tooltip>
  );
};
