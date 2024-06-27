'use client';

import React from 'react';

const Button = () => {
  const whatsappURL = "https://wa.me/573137266912?text=Hola,%20estoy%20interesado%20en%20sus%20productos.";

  const handleClick = () => {
    window.open(whatsappURL, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className='flex justify-start'>
      <button 
        className="bg-blue-500 text-white px-4 py-2 transition-all hover:scale-105"
        onClick={handleClick}
      >
        Contactame -&gt;
      </button>
    </div>
  );
};

export default Button;
