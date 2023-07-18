import { create } from "zustand";
import { ProductInterface } from "@/types";

interface PreviewModalStore {
  isOpen: boolean;
  data?: ProductInterface;
  onOpen: (data: ProductInterface) => void;
  onClose: () => void;
}

const usePreviewModal = create<PreviewModalStore>((set) => ({
  isOpen: false,
  data: undefined,
  onClose: () => set({ isOpen: false }),
  onOpen: (data: ProductInterface) => set({ data: data, isOpen: true }),
}));

export default usePreviewModal;
