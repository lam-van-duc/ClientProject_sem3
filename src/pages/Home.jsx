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
  const [course, setListCourse] = useState([]);
  const [faculty, setListFaculty] = useState([]);

  const [loading, setLoading] = useState(true);
  const whyToChoose = [
    {
      title: "Industry-Relevant Curriculum",
      value:
        "Our programs are designed to align with current industry needs, ensuring you acquire skills that matter in the real world.",
    },
    {
      title: "Global Networking",
      value:
        "Connect with a diverse community of students and professionals, fostering a global perspective and opening doors to international opportunities.",
    },
    {
      title: "Innovative Learning Methods",
      value:
        "Experience engaging and interactive learning methods that go beyond traditional lectures, promoting creativity and critical thinking.",
    },
  ];

  const HandleSubmitFrom = async () => {
    await axiosConfig
      .get("/api/Home")
      .then((res) => {
        setLoading(false);
        setHomePage(res.data.response);
        console.log(res);
      })
      .catch((res) => {
        setLoading(false);
        toast.error(res.message);
      });
  };
  const Func_GetDataFaculty = async () => {
    try {
      await axiosConfig
        .get(`/api/Faculty?page=${1}&limit=${4}`)
        .then((res) => {
          setListFaculty(res.data.response.data);
        })
        .catch((res) => {
          toast.error(res.message);
        });
    } catch (error) {
      toast.error(error.message);
    }
  };
  const Func_GetDataCourse = async () => {
    try {
      await axiosConfig
        .get(`/api/Course?page=${1}&limit=${5}`)
        .then((res) => {
          setListCourse(res.data.response.data);
        })
        .catch((res) => {
          toast.error(res.message);
        });
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    setLoading(true);
    HandleSubmitFrom();
    Func_GetDataCourse();
    Func_GetDataFaculty();
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
                          src={`http://localhost:5080/api/Image/${item}`}
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
              <div className="text-center py-6 lg:text-3xl md:text-2xl sm:text-xl text-base font-bold text-white z bg-[#ee661c]">
                WHY SHOULD YOU CHOOSE ITM COLLEGE?
              </div>
              <div className="container">
                <div className="flex justify-between items-center flex-wrap">
                  {whyToChoose.map((item) => {
                    return (
                      <div className="w-96">
                        <p className="text-ceter w-full lg:text-xl font-bold text-white md:text-xl sm:text-base text-sm">
                          {item.title}
                        </p>
                        <p className="text-start font-[500] lg:text-base md:text-base sm:text-base text-sm">
                          {item.value}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="container mx-auto">
              <div>
                <p className="text-center lg:text-3xl md:text-2xl sm:text-xl text-base font-bold text-orange-400 uppercase m-0 py-4">
                  Learn about departments
                </p>
                <div className="flex justify-center items-center flex-wrap gap-3 mt-2">
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
                          <div className="h-36 ">
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
                    {course.length > 0 &&
                      course.map((item, index) => {
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
                      {faculty.length > 0 &&
                        faculty.map((item, index) => {
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
