import React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";

const ImageModal = ({
  image,
  isOpen,
  onClose,
}: {
  image: string;
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="p-0 m-0 max-w-screen h-screen overflow-hidden flex items-center justify-center">
        <div className="relative w-full h-full flex items-center justify-center p-5">
          <img
            className="max-h-full max-w-full object-contain"
            src={image}
            alt="Image"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageModal;
