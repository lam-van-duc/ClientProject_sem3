import React from "react";
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

const schema = yup.object({
  Fullname: yup.string().required("Please enter your full name !"),
  Email: yup.string().email("Invalid email !").required("Please enter email !"),
  PhoneNumber: yup
    .string()
    .matches(/^\+?[0-9\s.-]+$/, "Invalid phone number")
    .required("Please enter phone number"),
  Comment: yup.string(),
});

const Home = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });

  const HandleSubmitFrom = async (data) => {
    await axiosConfig
      .post("/api/ContactUs", data)
      .then((res) => {
        reset();
        toast.success("Submit contact success");
      })
      .catch((res) => {
        toast.error(res.data.response);
      });
  };

  const images = [
    "https://kodeforest.net/html/uoe/extra-images/slider1.jpg",
    "http://kodeforest.net/html/uoe/extra-images/slider2.jpg",
    "http://kodeforest.net/html/uoe/extra-images/slider3.jpg",
  ];

  const departmentList = [
    {
      id: 1,
      thumbnail:
        "https://daihoc.fpt.edu.vn/wp-content/uploads/2022/03/homepage/course_8.png",
      name: "Department of Computer Science",
      information: "Information about the Computer Science department",
    },
    {
      id: 2,
      thumbnail:
        "https://daihoc.fpt.edu.vn/wp-content/uploads/2022/03/homepage/course_11056.png",
      name: "Department of Physics",
      information: "Information about the Physics department",
    },
    {
      id: 3,
      thumbnail:
        "https://daihoc.fpt.edu.vn/wp-content/uploads/2022/03/homepage/course_27.png",
      name: "Department of Literature",
      information: "Information about the Literature department",
    },
    {
      id: 4,
      thumbnail:
        "https://daihoc.fpt.edu.vn/wp-content/uploads/2022/03/homepage/course_28.png",
      name: "Mathematics Professor",
      information: "Information about the Mathematics Professor",
    },
  ];

  const ListCourse = [
    {
      id: 1,
      image:
        "https://htmldemo.zcubethemes.com/qeducato/img/bg/couress-img-1.jpg",
      name: "Biochemistry",
      title:
        "Seamlessly visualize quality ellectual capital without superior collaboration and idea tically",
    },
    {
      id: 2,
      image:
        "https://htmldemo.zcubethemes.com/qeducato/img/bg/couress-img-2.jpg",
      name: "Major in Economics",
      title:
        "Seamlessly visualize quality ellectual capital without superior collaboration and idea tically",
    },
    {
      id: 3,
      image:
        "https://htmldemo.zcubethemes.com/qeducato/img/bg/couress-img-3.jpg",
      name: "Business Media",
      title:
        "Seamlessly visualize quality ellectual capital without superior collaboration and idea tically",
    },
    {
      id: 4,
      image:
        "https://htmldemo.zcubethemes.com/qeducato/img/bg/couress-img-4.jpg",
      name: "Biotechnology",
      title:
        "Seamlessly visualize quality ellectual capital without superior collaboration and idea tically",
    },
    {
      id: 5,
      image:
        "https://htmldemo.zcubethemes.com/qeducato/img/bg/couress-img-6.jpg",
      name: "Corporate Finance",
      title: "Seamlessly visualize quality ",
    },
  ];

  const ListTeacher = [
    {
      id: 1,
      image: "https://ordainit.com/educate/assets/img/team/team-3-2.jpg",
      name: "Doctor strange",
      birthday: "29-12-1998",
      Position: "Manager",
    },
    {
      id: 2,
      image: "https://ordainit.com/educate/assets/img/team/team-3-1.jpg",
      name: "julien",
      birthday: "29-12-1998",
      Position: "English teacher",
    },
    {
      id: 3,
      image: "https://ordainit.com/educate/assets/img/team/team-3-3.jpg",
      name: "rabit",
      birthday: "29-12-1998",
      Position: "Health teacher",
    },
    {
      id: 4,
      image: "https://ordainit.com/educate/assets/img/team/team-3-4.jpg",
      name: "puppy po",
      birthday: "29-12-1998",
      Position: "Head of Education Department",
    },
    {
      id: 5,
      image: "https://ordainit.com/educate/assets/img/team/team-1-7.jpg",
      name: "wan kanda",
      birthday: "29-12-1998",
      Position: "Health teacher",
    },
  ];

  return (
    <div>
      <div>
        <div>
          <Slide
            slidesToShow={1}
            infinite={true}
            duration={2500}
            className="h-[100]"
          >
            {images.map((item) => {
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
            <img
              className="h-56 px-4"
              src="https://aptech.fpt.edu.vn/wp-content/uploads/2022/12/icon-ma%CC%80u-01.png"
            />
            <img
              className="h-56 px-4"
              src="https://aptech.fpt.edu.vn/wp-content/uploads/2021/03/icon-ma%CC%80u-02.png"
            />
            <img
              className="h-56 px-4"
              src="https://aptech.fpt.edu.vn/wp-content/uploads/2021/03/icon-ma%CC%80u-03.png"
            />
            <img
              className="h-56 px-4"
              src="https://aptech.fpt.edu.vn/wp-content/uploads/2021/03/icon-ma%CC%80u-04.png"
            />
            <img
              className="h-56 px-4"
              src="https://aptech.fpt.edu.vn/wp-content/uploads/2021/03/icon-ma%CC%80u-05.png"
            />
          </div>
        </div>

        <div className="container mx-auto">
          <div className="my-6">
            <p className="text-center lg:text-3xl md:text-2xl sm:text-xl text-base font-bold text-orange-400 uppercase m-0">
              Learn about departments
            </p>
            <div className="flex justify-center items-center flex-wrap gap-3">
              {departmentList.map((item, index) => {
                return (
                  <a
                    key={index}
                    href={`DepartmentDetail/${item.id}`}
                    className="h-56 w-72 no-underline"
                  >
                    <div>
                      <div className="h-44 ">
                        <img
                          className="object-contain h-full mx-auto"
                          src={item.thumbnail}
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
                {ListCourse.map((item, index) => {
                  return (
                    <div className="flex flex-col items-start justify-start w-80 h-72 px-3">
                      <div className="w-80 h-64">
                        <img
                          src={item.image}
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
                <span className="mx-4">Faculty memmer</span>
                <b className="flex-1 bg-gray-300 h-1"></b>
              </h3>
              <div>
                <Slide
                  slidesToShow={3}
                  infinite={true}
                  indicators={true}
                  duration={1500}
                >
                  {ListTeacher.map((item, index) => {
                    return (
                      <div className="flex flex-col items-center justify-start p-2">
                        <div className="">
                          <img
                            src={item.image}
                            className="object-cover w-full mx-auto"
                          />
                        </div>
                        <p className="m-0 text-xl font-bold text-orange-400 py-2 line-clamp-2 text-center">
                          {item.name}
                        </p>
                        <p className="m-0 text-base font-[400] line-clamp-2">
                          {item.Position}
                        </p>
                      </div>
                    );
                  })}
                </Slide>
              </div>
            </div>
          </div>
        </div>
        <div
          className="bg-cover bg-center relative"
          style={{
            height: "33rem",
            backgroundImage: `url(
              https://kodeforest.net/html/uoe/extra-images/home-gallery3.jpg
            )`,
          }}
        >
          <a
            className="bg-blue-800 text-xl font-bold py-2 px-4 text-white hover:bg-blue-900 absolute bottom-6 text-center left-[45%]"
            style={{ textDecoration: "none" }}
            href="/tuyensinh"
          >
            Register now
          </a>
        </div>
      </div>
      <ButtonOnTopComponent></ButtonOnTopComponent>
    </div>
  );
};

export default Home;
