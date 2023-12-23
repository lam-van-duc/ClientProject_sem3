import React from "react";
import propTypes from "prop-types";

const ContactComponent = ({ name, content1, content2, content3, icon }) => {
  return (
    <div className="w-96 h-48 my-2 relative text-center shadow-xl border border-slate-50-50 rounded">
      <div
        className="absolute top-0 left-1/2"
        style={{
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className="bg-orange-200 p-3 w-16 h-16 flex justify-center items-center rounded-full text-4xl">
          {icon}
        </div>
      </div>
      <div className="p-5">
        <h4>{name}</h4>
        <p>{content1}</p>
        <p>{content2}</p>
        <p>{content3}</p>
      </div>
    </div>
  );
};
ContactComponent.propTypes = {
  name: propTypes.string,
  content1: propTypes.string,
  content2: propTypes.string,
  content3: propTypes.string,
  icon: propTypes.any,
};
export default ContactComponent;
