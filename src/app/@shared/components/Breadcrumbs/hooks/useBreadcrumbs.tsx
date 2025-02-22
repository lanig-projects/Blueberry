import { IBreadcrumb } from "@shared/components/Breadcrumbs/interfaces/IBreadcrumb";
import { useLocation, useParams } from "react-router-dom";

export const useBreadcrumbs = (breadcrumbs: IBreadcrumb[]) => {
  const location = useLocation();
  const pathname = location.pathname;

  const generateBreadcrumbs = (
    config: IBreadcrumb[],
    pathSegments: string[],
    basePath: string = ''
  ): IBreadcrumb[] => {
    const result: IBreadcrumb[] = [];

    for (const segment of pathSegments) {
      for (const item of config) {
        const isDynamicSegment = item.path.startsWith('/:');
        const cleanPathSegment = isDynamicSegment ? segment : item.path.replace('/', '');

        if (cleanPathSegment === segment || isDynamicSegment) {
          const updatedPath = `${basePath}/${segment}`;
          result.push({
            ...item,
            path: updatedPath,
          });

          if (item.children) {
            const remainingSegments = pathSegments.slice(1);
            const childBreadcrumbs = generateBreadcrumbs(
              item.children,
              remainingSegments,
              updatedPath
            );
            result.push(...childBreadcrumbs);
          }
          return result;
        }
      }
      pathSegments.shift();
    }

    return result;
  };

  const pathSegments = pathname.split('/').filter((segment) => segment);
  return generateBreadcrumbs(breadcrumbs, pathSegments);
};
