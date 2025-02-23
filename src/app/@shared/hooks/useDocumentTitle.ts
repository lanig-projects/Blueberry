import { useEffect, useState } from 'react';
import { environment } from "@environment/environment";

export const useDocumentTitle = (title: string, name: string = environment.app?.name) => {
  const [documentTitle, setDocumentTitle] = useState<string>(`${title} | ${name}`);

  useEffect(() => {
    document.title = documentTitle;
  }, [documentTitle, title, name]);

  return [documentTitle, setDocumentTitle];
};
