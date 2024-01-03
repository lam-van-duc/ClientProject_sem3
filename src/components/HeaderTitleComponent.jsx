import React from "react";
import propTypes from "prop-types";
import backgroundImageTitle from "../assets/image/backgroundTitle.jpg";

const HeaderTitleComponent = ({ name }) => {
  return (
    <div
      className="w-full h-[37rem] bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${backgroundImageTitle})`,
      }}
    >
      <div
        className="flex h-full flex-col justify-center items-center"
        style={{
          backgroundColor: "rgba(0, 0, 139, 0.5)",
        }}
      >
        <div className="text-center font-bold text-6xl text-white tracking-wider p-2">
          {name}
        </div>
        <div className="text-white text-xl">
          <a
            href="/"
            className="cursor-pointer no-underline hover:text-orange-400 text-white"
          >
            Home
          </a>
          <span className="mx-2">//</span>
          <span>{name}</span>
        </div>
      </div>
    </div>
  );
};
HeaderTitleComponent.propTypes = {
  name: propTypes.string,
};
export default HeaderTitleComponent;
