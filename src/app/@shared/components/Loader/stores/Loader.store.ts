import { create } from "zustand";

export interface LoaderStore {
  isLoading: boolean;
  setLoading: (loading: boolean) => void;

  title: string;
  setTitle: (title: string) => void;
}

export const useLoaderStore = create<LoaderStore>((set) => ({
  isLoading: false,
  setLoading: (loading: boolean) => set({ isLoading: loading }),

  title: '',
  setTitle: (title: string) => set({ title }),
}));
