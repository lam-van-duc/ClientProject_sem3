import React, { useEffect, useState } from "react";
import "../style/Courses.css";
import CourseComponent from "../components/CourseComponent";
import HeaderTitleComponent from "../components/HeaderTitleComponent";
import Pagination from "react-js-pagination";
import TeacherComponent from "../components/TeacherComponent";
import axiosConfig from "../config/axiosConfig";
import { toast } from "react-toastify";
const Courses = () => {
  const [paginationActive, setPaginationActive] = useState(1);
  const [ListCourse, setListCourse] = useState([]);

  const handleChangePage = (page) => {
    setPaginationActive(page);
  };

  const Func_GetDataCourse = async () => {
    try {
      await axiosConfig
        .get("/api/Course")
        .then((res) => {
          setListCourse(res.data.response);
        })
        .catch((res) => {
          toast.error(res.message);
        });
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    Func_GetDataCourse();
  }, []);

  // const ListCourse = [
  //   {
  //     id: 1,
  //     image:
  //       "https://htmldemo.zcubethemes.com/qeducato/img/bg/couress-img-1.jpg",
  //     name: "Biochemistry",
  //     title:
  //       "Seamlessly visualize quality ellectual capital without superior collaboration and idea tically",
  //   },
  //   {
  //     id: 2,
  //     image:
  //       "https://htmldemo.zcubethemes.com/qeducato/img/bg/couress-img-2.jpg",
  //     name: "Major in Economics",
  //     title:
  //       "Seamlessly visualize quality ellectual capital without superior collaboration and idea tically",
  //   },
  //   {
  //     id: 3,
  //     image:
  //       "https://htmldemo.zcubethemes.com/qeducato/img/bg/couress-img-3.jpg",
  //     name: "Business Media",
  //     title:
  //       "Seamlessly visualize quality ellectual capital without superior collaboration and idea tically",
  //   },
  //   {
  //     id: 4,
  //     image:
  //       "https://htmldemo.zcubethemes.com/qeducato/img/bg/couress-img-4.jpg",
  //     name: "Biotechnology",
  //     title:
  //       "Seamlessly visualize quality ellectual capital without superior collaboration and idea tically",
  //   },
  //   {
  //     id: 5,
  //     image:
  //       "https://htmldemo.zcubethemes.com/qeducato/img/bg/couress-img-6.jpg",
  //     name: "Corporate Finance",
  //     title: "Seamlessly visualize quality ",
  //   },
  //   {
  //     id: 2,
  //     image:
  //       "https://htmldemo.zcubethemes.com/qeducato/img/bg/couress-img-2.jpg",
  //     name: "Major in Economics",
  //     title:
  //       "Seamlessly visualize quality ellectual capital without superior collaboration and idea tically",
  //   },
  //   {
  //     id: 3,
  //     image:
  //       "https://htmldemo.zcubethemes.com/qeducato/img/bg/couress-img-3.jpg",
  //     name: "Business Media",
  //     title:
  //       "Seamlessly visualize quality ellectual capital without superior collaboration and idea tically",
  //   },
  //   {
  //     id: 4,
  //     image:
  //       "https://htmldemo.zcubethemes.com/qeducato/img/bg/couress-img-4.jpg",
  //     name: "Biotechnology",
  //     title:
  //       "Seamlessly visualize quality ellectual capital without superior collaboration and idea tically",
  //   },
  //   {
  //     id: 5,
  //     image:
  //       "https://htmldemo.zcubethemes.com/qeducato/img/bg/couress-img-6.jpg",
  //     name: "Corporate Finance",
  //     title: "Seamlessly visualize quality ",
  //   },
  // ];

  const ListTeacher = [
    {
      id: 1,
      image: "https://ordainit.com/educate/assets/img/team/team-3-2.jpg",
      name: "Doctor strange",
      Position: "Manager",
    },
    {
      id: 2,
      image: "https://ordainit.com/educate/assets/img/team/team-3-1.jpg",
      name: "julien",
      Position: "employee",
    },
    {
      id: 3,
      image: "https://ordainit.com/educate/assets/img/team/team-3-3.jpg",
      name: "rabit",
      Position: "employee",
    },
    {
      id: 4,
      image: "https://ordainit.com/educate/assets/img/team/team-3-4.jpg",
      name: "puppy po",
      Position: "Head of Education Department",
    },
  ];

  return (
    <div className="text-center">
      <div>
        <HeaderTitleComponent name="Course"></HeaderTitleComponent>
      </div>
      <div className="my-2 container mx-auto">
        <div className="text-right">
          <select className="border py-2 px-4 focus-visible:outline-none ">
            <option selected hidden value="">
              Sort by
            </option>
            <option value="Latest date">Latest date</option>
            <option value="Oldest date">Oldest date</option>
          </select>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="grid gap-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 ">
            {ListCourse.map((item, index) => {
              return (
                <CourseComponent
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  title={item.title}
                ></CourseComponent>
              );
            })}
          </div>
        </div>
        <div className="block mt-4">
          <div className="flex justify-center">
            <div>
              <Pagination
                activePage={paginationActive}
                itemsCountPerPage={10}
                totalItemsCount={450}
                pageRangeDisplayed={5}
                onChange={(page) => handleChangePage(page)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto mb-4">
        <h3 className="flex flex-row items-center justify-center">
          <b className="flex-1 bg-gray-300 h-1"></b>
          <span className="mx-4">Teacher</span>
          <b className="flex-1 bg-gray-300 h-1"></b>
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  gap-4 mb-4">
          {ListTeacher.map((item, index) => {
            return (
              <TeacherComponent
                image={item.image}
                name={item.name}
                Position={item.Position}
                id={item.id}
              ></TeacherComponent>
            );
          })}
        </div>
        <div className="text-center">
          <div>
            <a
              href="/Teachers"
              className="button-outline-app font-bold uppercase"
            >
              Show more teacher
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Courses;
