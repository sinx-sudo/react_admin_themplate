import { X } from "lucide-react";
import { useState } from "react"

interface ModalProps {
  title: String;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};
const Modal = ({ isOpen, onClose, children, title }: ModalProps) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* background */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />
      <div className="relative z-10 w-full max-w-md rounded-2xl bg-white shadow-xl">
        {/* title */}
        <div className="flex justify-between bg-red-500 w-full rounded-t-2xl p-2 text-white">
          <p className="font-semibold text-xl">
            {title}
          </p>
          <div>
            <button onClick={onClose}>
            <X />
            </button>
          </div>
        </div>
        {/* content */}
        <div className="p-6 max-h-[80vh] overflow-y-scroll">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal