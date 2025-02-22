import { useLoaderStore } from "@shared/components/Loader/stores/Loader.store";
import { Spin } from "antd";

export const LoaderContainer = () => {
  const title = useLoaderStore((state) => state.title);
  const isLoading = useLoaderStore((state) => state.isLoading);

  if (!isLoading) return null;

  return (
    <div className={'fixed top-0 left-0 w-full h-full z-[99999]'}>
      <div className={'flex justify-center items-center w-full h-full relative z-[1] animate-pulse'}>
        <Spin size={'default'} percent={65} className={'animate-spin'}/>
        <p className={'text-white m-0 ml-2'}>{title || 'Cargando...'}</p>
      </div>
      <div className={'absolute bg-black w-full h-full left-0 top-0 opacity-35'}></div>
    </div>
  );
};
