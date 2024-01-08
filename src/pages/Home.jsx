import React, { useEffect, useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ButtonOnTopComponent from "../components/ButtonOnTopComponent";
import ErrorText from "../components/ErrorText";
import axiosConfig from "../config/axiosConfig";
import { toast } from "react-toastify";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigator = useNavigate();
  const [HomePage, setHomePage] = useState({});
  const [loading, setLoading] = useState(true);

  const HandleSubmitFrom = async () => {
    await axiosConfig
      .get("/api/Home")
      .then((res) => {
        setLoading(false);
        setHomePage(res.data.response);
      })
      .catch((res) => {
        setLoading(false);
        toast.error(res.message);
      });
  };

  useEffect(() => {
    setLoading(true);
    HandleSubmitFrom();
  }, []);

  return (
    <>
      {loading == false ? (
        <div>
          <div>
            <div>
              <Slide
                slidesToShow={1}
                infinite={true}
                duration={2500}
                className="h-[100]"
              >
                {HomePage.banners.map((item) => {
                  return (
                    <div className="each-slide-effect">
                      <div className="z-10">
                        <img
                          src={`${item}`}
                          className="w-full object-cover select-none z-0"
                          style={{ pointerEvents: "none" }}
                        />
                      </div>
                    </div>
                  );
                })}
              </Slide>
            </div>
            <div className="mt-1 pb-4 bg-[#ee661c]">
              <div className="text-center py-6 lg:text-3xl md:text-2xl sm:text-xl text-base font-bold text-white z">
                WHY SHOULD YOU CHOOSE ITM COLLEGE?
              </div>
              <div className="flex justify-center items-center flex-wrap">
                {HomePage.whyToChooseUs.map((item) => {
                  return (
                    <img
                      className="h-56 px-4"
                      src="https://aptech.fpt.edu.vn/wp-content/uploads/2022/12/icon-ma%CC%80u-01.png"
                    />
                  );
                })}
              </div>
            </div>

            <div className="container mx-auto">
              <div className="my-6">
                <p className="text-center lg:text-3xl md:text-2xl sm:text-xl text-base font-bold text-orange-400 uppercase m-0">
                  Learn about departments
                </p>
                <div className="flex justify-center items-center flex-wrap gap-3">
                  {HomePage.departments.map((item, index) => {
                    return (
                      <a
                        key={index}
                        onClick={() => {
                          navigator("/DepartmentDetail/" + item.id);
                        }}
                        className="h-56 w-72 no-underline"
                      >
                        <div>
                          <div className="h-44 ">
                            <img
                              className="object-contain h-full mx-auto"
                              src={item.icon}
                            />
                          </div>
                          <div className="text-black font-bold text-center py-2">
                            {item.name}
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>
                <div className="text-center mt-3">
                  <a href="/Department" className="button-outline-app py-2">
                    Load More Department
                  </a>
                </div>
              </div>

              <div className="my-6">
                <h3 className="flex flex-row items-center justify-center mb-6">
                  <b className="flex-1 bg-gray-300 h-1"></b>
                  <span className="mx-4">Course</span>
                  <b className="flex-1 bg-gray-300 h-1"></b>
                </h3>
                <div>
                  <Slide
                    slidesToShow={3}
                    infinite={true}
                    indicators={true}
                    duration={1500}
                  >
                    {HomePage.courses.map((item, index) => {
                      return (
                        <div className="flex flex-col items-start justify-start w-80 h-72 px-3">
                          <div className="w-80 h-64">
                            <img
                              src={item.thumbnail}
                              className="object-cover h-full mx-auto"
                            />
                          </div>
                          <p className="m-0 font-bold py-2 line-clamp-2">
                            {item.name}
                          </p>
                        </div>
                      );
                    })}
                  </Slide>
                </div>
              </div>
            </div>
            <div className="bg-[#fff6ea] py-6 w-full">
              <div className="container">
                <div className="my-6">
                  <h3 className="flex flex-row items-center justify-center mb-6">
                    <b className="flex-1 bg-gray-300 h-1"></b>
                    <span className="mx-4">Faculty member</span>
                    <b className="flex-1 bg-gray-300 h-1"></b>
                  </h3>
                  <div>
                    <Slide
                      slidesToShow={3}
                      infinite={true}
                      indicators={true}
                      duration={1500}
                    >
                      {HomePage.faculties.map((item, index) => {
                        return (
                          <div className="flex flex-col items-center justify-start p-2">
                            <div className="min-h-[12rem]">
                              <img
                                src={item.thumbnail}
                                className="object-cover w-full mx-auto"
                              />
                            </div>
                            <p className="m-0 text-xl font-bold text-orange-400 py-2 line-clamp-2 text-center">
                              {item.name}
                            </p>
                            <p className="m-0 text-base font-[400] line-clamp-2">
                              {item.email}
                            </p>
                          </div>
                        );
                      })}
                    </Slide>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ButtonOnTopComponent></ButtonOnTopComponent>
        </div>
      ) : (
        <div className="h-[100vh]"></div>
      )}
    </>
  );
};

export default Home;
