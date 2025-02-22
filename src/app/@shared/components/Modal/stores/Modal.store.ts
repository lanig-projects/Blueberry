import { create } from 'zustand';
import { IModal } from "@shared/components/Modal/interfaces/IModal";

interface ModalState {
  modals: IModal[],
  setModals: (modals: IModal[]) => void;
}

export const useModalStore = create<ModalState>((set) => ({
  modals: [],
  setModals: (modals) => set({ modals }),
}));
