import React from 'react';
import { useNavigate } from 'react-router-dom';

const ToolsInfoCard = ({ tool }) => {
  const { name, img, description, minimumOrderQuantity, availableQuantity, unitPrice } = tool;
  const navigate = useNavigate();
  return (
    <div className={`card lg:card-side bg-base-100 shadow-xl mb-5 `}>
      <div className="card-body">
        <figure className="pl-5">
          <img src={img} alt="Album" />
        </figure>
        <h2 className="text-center text-2xl font-bold">{name}</h2>
        <p>{description}</p>
        <p>Unit Price :{unitPrice}</p>
        <p>Available Quantity :{availableQuantity}</p>
        <p>minimum Order Quantity :{minimumOrderQuantity}</p>
        <button onClick={() => navigate('/purchase')} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default ToolsInfoCard;
