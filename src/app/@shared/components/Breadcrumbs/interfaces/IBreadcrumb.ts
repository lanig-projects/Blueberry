export interface IBreadcrumb {
  path: string;
  label: string;
  isDisabled?: boolean;
  children?: IBreadcrumb[];
}
