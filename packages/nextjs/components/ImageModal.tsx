import React, { useEffect } from "react";

interface ImageModalProps {
  src: string;
  alt: string;
  isOpen: boolean;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ src, alt, isOpen, onClose }) => {
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscapeKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal modal-open" onClick={onClose}>
      <div
        className="modal-box relative max-w-[90vw] w-auto h-auto p-0 bg-transparent shadow-none"
        onClick={e => e.stopPropagation()}
      >
        <button className="btn btn-sm btn-circle absolute right-2 top-2 z-50 bg-base-200" onClick={onClose}>
          ✕
        </button>
        <img src={src} alt={alt} className="rounded-lg max-h-[85vh] w-auto" />
      </div>
    </div>
  );
};

export default ImageModal;
