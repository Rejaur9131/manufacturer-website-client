import React from 'react';

const ToolsInfoCard = ({ tool }) => {
  const { name } = tool;
  return (
    <div className={`card lg:card-side bg-base-100 shadow-xl mb-5 `}>
      {/* <figure className="pl-5">
        <img src={img} alt="Album" />
      </figure> */}
      <div className="card-body">
        <h2 className="text-center text-2xl font-bold">{name}</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
      </div>
    </div>
  );
};

export default ToolsInfoCard;
