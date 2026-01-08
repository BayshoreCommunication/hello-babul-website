"use client";

import React, { useState } from "react";

interface DeleteModalProps {
  open: boolean; // whether modal is open
  onClose: () => void; // close modal
  onConfirm: () => void; // delete action
  confirmMessage?: string; // optional custom message
}

const DeleteModal: React.FC<DeleteModalProps> = ({
  open,
  onClose,
  onConfirm,
  confirmMessage = "Are you sure you want to delete?",
}) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-sm p-8">
        <h3 className="text-2xl text-center font-semibold text-red-600 mb-2">
          Confirm Delete
        </h3>
        <p className="text-sm text-gray-600 mb-6">{confirmMessage}</p>

        <div className="flex justify-center gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded border text-gray-600 hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              onConfirm();
              onClose();
            }}
            className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700"
          >
            Yes, Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
