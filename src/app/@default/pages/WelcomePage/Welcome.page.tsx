import { useDocumentTitle } from "@shared/hooks/useDocumentTitle";

export const WelcomePage = () => {
  useDocumentTitle('Welcome');

  return (
    <div>
      WelcomePage
    </div>
  );
};
