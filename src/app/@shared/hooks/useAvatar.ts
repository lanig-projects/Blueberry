import { useMemo } from "react";

interface Props {
  name?: string;
}

export const useAvatar = ({ name }: Props = {}) => {
  const getUrl = (name: string) => {
    if (!name) return '';
    return `https://ui-avatars.com/api/?background=random&name=${name}`;
  };

  const url = useMemo<string>(() => getUrl(name), [name]);

  return {
    url,
    getUrl
  };
};
