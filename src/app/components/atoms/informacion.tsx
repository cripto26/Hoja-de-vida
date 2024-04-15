import React from 'react';

const Informacion = () => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <span className="font-semibold">Age:</span>
        <span className="ml-4">29</span>
      </div>
      <div className="flex justify-between">
        <span className="font-semibold">Residence:</span>
        <span className="ml-4">CO</span>
      </div>
      <div className="flex justify-between">
        <span className="font-semibold">Freelance:</span>
        {}
        <span className="ml-4 text-red-500">No Available</span>
      </div>
      <div className="flex justify-between">
        <span className="font-semibold">Address:</span>
        <span className="ml-4">Bello/Antioquia</span>
      </div>
    </div>
  );
};

export default Informacion;
