import React from 'react';

const Informacion = () => {
  return (
    <div className="space-y-2 w-[310px]">
      <div className="flex justify-between">
        <span className="font-semibold">Age:</span>
        <span className="ml-2">29</span>
      </div>
      <div className="flex justify-between">
        <span className="font-semibold">Residence:</span>
        <span className="ml-2">CO</span>
      </div>
      <div className="flex justify-between">
        <span className="font-semibold">Freelance:</span>
        {}
        <span className="ml-2 text-red-500">No Available</span>
      </div>
      <div className="flex justify-between">
        <span className="font-semibold">Address:</span>
        <span className="ml-2">Bello/Antioquia</span>
      </div>
    </div>
  );
};

export default Informacion;
