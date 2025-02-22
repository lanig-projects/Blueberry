import { IBreadcrumb } from "@shared/components/Breadcrumbs/interfaces/IBreadcrumb";
import { useBreadcrumbs } from "@shared/components/Breadcrumbs/hooks/useBreadcrumbs";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";

interface Props {
  breadcrumbs: IBreadcrumb[];
}

export const Breadcrumbs = ({ breadcrumbs }: Props) => {
  const breadcrumbItems = useBreadcrumbs(breadcrumbs);

  return (
    <Breadcrumb
      items={breadcrumbItems}
      itemRender={(item: IBreadcrumb) => (
        <Link to={item.isDisabled ? '#' : item.path}>{item.label}</Link>
      )}
    />
  );
};
