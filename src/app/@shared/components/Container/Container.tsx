import { forwardRef, ReactNode } from "react";

type TContainerBreakpoint =
  | 'container'
  | 'sm:container'
  | 'md:container'
  | 'lg:container'
  | 'xl:container'
  | '2xl:container'
  | null;

interface Props {
  children: ReactNode;
  className?: string;
  breakpoint?: TContainerBreakpoint;
  style?: React.CSSProperties;
}

export const Container = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { children, className, breakpoint = 'container', ...rest } = props;

  return (
    <div
      ref={ref}
      data-component-name="Container"
      className={`mx-auto p-4 ${breakpoint} ${className}`}
      {...rest}>
      {children}
    </div>
  );
});
