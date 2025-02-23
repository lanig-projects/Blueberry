import { useDocumentTitle } from "@shared/hooks/useDocumentTitle";

export const WelcomePage = () => {
  useDocumentTitle('Welcome');

  return (
    <div className={'h-screen flex justify-center items-center bg-neutral-900'}>
      <div className={'text-white'}>
        <h1 className={'text-4xl font-bold'}>
          Welcome to <span className={'font-extrabold text-primary'}>Blueberry</span>
        </h1>
        <p className={'text-lg'}>This is a starter template for React applications.</p>
      </div>
    </div>
  );
};
