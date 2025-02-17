import React, { useState } from "react";
import ImageModal from "./ImageModal";

interface ClickableImageProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
}

const ClickableImage: React.FC<ClickableImageProps> = ({ src, alt, caption, className = "" }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="group">
      <div
        className="relative cursor-pointer transition-all duration-200 hover:opacity-90"
        onClick={() => setIsModalOpen(true)}
      >
        <img src={src} alt={alt} className={`rounded-lg border border-base-300 ${className}`} />
        <div className="absolute inset-0 bg-base-300 opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-200" />
      </div>
      {caption && <p className="text-xs sm:text-sm text-base-content/70 mt-2 mb-4">{caption}</p>}
      <ImageModal src={src} alt={alt} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default ClickableImage;
