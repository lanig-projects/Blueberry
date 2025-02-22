import { useEffect } from 'react';

interface Props {
  color?: string;
}

export const useThemeColor = ({ color }: Props) => {
  useEffect(() => {
    if (color) {
      let metaThemeColor = document.querySelector('meta[name="theme-color"]');

      if (!metaThemeColor) {
        metaThemeColor = document.createElement('meta');
        metaThemeColor.setAttribute('name', 'theme-color');
        document.head.appendChild(metaThemeColor);
      }

      metaThemeColor.setAttribute('content', color);
    }
  }, [color]);
};
