
import { create } from 'zustand';

type ChatbotStore = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export const useChatbotStore = create<ChatbotStore>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => set({ isOpen }),
}));
