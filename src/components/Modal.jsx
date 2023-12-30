import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import propTypes from "prop-types";

const Modal = ({ open, onClose, children }) => {
  return (
    <div
      className={`fixed inset-0 flex justify-center items-center transition-colors z-50 ${
        open ? "visible bg-black/20" : "invisible"
      }`}
      onClick={onClose}
    >
      <div
        className={`bg-white rounded-lg p-6 transition-all max-w-xl w-100 min-h-[25rem] max-h-[95%] overflow-auto ${
          open ? "scale-100 opacity-100" : "scale-110 opacity-0"
        }`}
        style={{
          boxShadow: "5px 5px 15px 0 #555555",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 py-1 px-2 rounded-md text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600"
          onClick={onClose}
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  open: propTypes.bool,
  onClose: propTypes.func,
  children: propTypes.node,
};
export default Modal;
