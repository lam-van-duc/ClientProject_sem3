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
  const [ListFaculty, setListFaculty] = useState([]);

  const [totalItem, setTotalItem] = useState(0);

  const handleChangePage = (page) => {
    setPaginationActive(page);
    Func_GetDataCourse(page, 9);
  };

  const Func_GetDataCourse = async (page, limit) => {
    try {
      await axiosConfig
        .get(`/api/Course?page=${page}&limit=${limit}`)
        .then((res) => {
          setListCourse(res.data.response.data);
          setTotalItem(res.data.response.totalItem);
        })
        .catch((res) => {
          toast.error(res.message);
        });
    } catch (error) {
      toast.error(error.message);
    }
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

  useEffect(() => {
    Func_GetDataCourse(1, 9);
    Func_GetDataFaculty();
  }, []);

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

      <div className="container mx-auto mt-3">
        <div className="flex justify-center">
          <div className="grid gap-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 ">
            {ListCourse.map((item, index) => {
              return (
                <CourseComponent
                  id={item.id}
                  name={item.name}
                  image={item.thumbnail}
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
                itemsCountPerPage={9}
                totalItemsCount={totalItem}
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
          {ListFaculty.map((item, index) => {
            return (
              <TeacherComponent
                image={item.thumbnail}
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
