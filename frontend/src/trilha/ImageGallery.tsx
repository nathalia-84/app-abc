import React, { useState } from 'react';

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl === selectedImage ? null : imageUrl);
  };

  return (
    <div className='mt-4 mr-4 ml-4 mb-4'>
    <h4 className="mt-6 mb-2 text-3x1 font-semibold text-gray-400">ESCOLHA UM PLANO DE FUNDO</h4>
    <div className="  image-gallery-container max-w-md h-25 overflow-x-auto bg-gray-200 rounded-xl">
      <div className="flex">
        {images.map((imageUrl, index) => (
          <div
            key={index}
            className={`thumbnail-container flex-shrink-0 w-25 h-20 mr-4 mt-4 mb-4 ${
              imageUrl === selectedImage ? 'border-green-500 border-2' : ''
            }`}
            onClick={() => handleImageClick(imageUrl)}
          >
            <img
              src={imageUrl}
              alt={`Image ${index}`}
              className="thumbnail object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default ImageGallery;