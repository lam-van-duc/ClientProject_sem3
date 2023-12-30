import React, { useState, useEffect } from "react";

const ButtonOnTopComponent = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`fixed cursor-pointer rounded-full right-8 bottom-8 w-12 h-12 z-50 bg-red-800 ${
        isVisible ? "flex justify-center items-center" : "hidden"
      }`}
      style={{ boxShadow: "2px 5px 12px 0px #991b1b" }}
      onClick={scrollToTop}
    >
      <i class="fas fa-arrow-up text-2xl text-white"></i>
    </div>
  );
};
export default ButtonOnTopComponent;
