import { useLoaderStore } from "@shared/components/Loader/stores/Loader.store";

export const useLoader = () => {
  const setLoading = useLoaderStore((state) => state.setLoading);
  const setTitle = useLoaderStore((state) => state.setTitle);

  const start = (title?: string) => {
    setLoading(true);
    setTitle(title);
  };

  const stop = () => {
    setLoading(false);
    setTitle('');
  };

  return {
    start,
    stop
  };
};
