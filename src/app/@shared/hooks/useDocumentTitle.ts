import { useEffect, useState } from 'react';

export const useDocumentTitle = ({
  title = 'DentaSoft',
  name = 'DentaSoft'
}: {
  title?: string;
  name?: string;
}) => {
  const [documentTitle, setDocumentTitle] = useState<string>(`${title} | ${name}`);

  useEffect(() => {
    document.title = documentTitle;
  }, [documentTitle, title, name]);

  return [documentTitle, setDocumentTitle];
};
