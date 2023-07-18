"use client";

import PreviewModal from "@/components/ui/modal/preview-modal";
import { UseMounted } from "@/hooks/use-mouted";
import React from "react";
import { Toaster } from "react-hot-toast";

const ModalProvider = () => {
  const isMounted = UseMounted();

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Toaster />
      <PreviewModal />
    </>
  );
};

export default ModalProvider;
