import React, { useState, ReactNode, useEffect } from "react";

interface CustomModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

const CustomModal: React.FC<CustomModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-black rounded-lg shadow-xl max-w-4xl w-full">
        {/* Header */}
        <div className="flex items-center justify-center px-6 py-2 bg-green-700">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white text-2xl hover:text-red-400"
            aria-label="Close modal"
          >
            ✕
          </button>

          {/* Header */}
          <div className="py-4 text-center">
            <h2 className="text-xl md:text-2xl text-center font-semibold text-yellow-300">
              {title}
            </h2>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 max-h-[80vh] overflow-auto">{children}</div>
      </div>
    </div>
  );
};
export default CustomModal;
