import React from "react";

const Card = ({ title, desc, image }) => {
  return (
    <div id="card" className=" bg-white shadow-md hover:shadow-xl transition rounded-xl overflow-hidden flex flex-col">
      {/* Image */}
      {image && (
        <div className="h-48 w-full overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <h2 className="text-slate-900 text-lg font-bold mb-2">{title}</h2>
        <p className="text-slate-600 text-sm flex-grow">{desc}</p>
      </div>
    </div>
  );
};

export default Card;
