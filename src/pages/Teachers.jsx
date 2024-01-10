import React, { useState, useEffect } from "react";
import TeacherComponent from "../components/TeacherComponent";
import HeaderTitleComponent from "../components/HeaderTitleComponent";
import CourseComponent from "../components/CourseComponent";
import Pagination from "react-js-pagination";
import axiosConfig from "../config/axiosConfig";
import { toast } from "react-toastify";
const Teachers = () => {
  const [paginationActive, setPaginationActive] = useState(1);
  const [ListCourse, setListCourse] = useState([]);
  const [ListFaculty, setListFaculty] = useState([]);
  const [totalItem, setTotalItem] = useState(0);
  const handleChangePage = (page) => {
    setPaginationActive(page);
    Func_GetDataFaculty(page, 12);
  };

  const Func_GetDataCourse = async () => {
    try {
      await axiosConfig
        .get(`/api/Course?page=${1}&limit=${3}`)
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

  const Func_GetDataFaculty = async (page, limit) => {
    try {
      await axiosConfig
        .get(`/api/Faculty?page=${page}&limit=${limit}`)
        .then((res) => {
          setListFaculty(res.data.response.data);
          setTotalItem(res.data.response.totalItem);
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
    Func_GetDataFaculty(1, 12);
  }, []);

  return (
    <div className="text-center">
      <div>
        <HeaderTitleComponent name="Faculty"></HeaderTitleComponent>
      </div>

      <div className="container mx-auto">
        <div className="container mx-auto flex justify-center mt-3">
          <div className="grid gap-3 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 sm:px-5 md:px-0 lg:px-0">
            {ListFaculty.map((item, index) => {
              return (
                <TeacherComponent
                  image={item.thumbnail}
                  name={item.name}
                  email={item.email}
                  id={item.id}
                  teacher={item}
                ></TeacherComponent>
              );
            })}
          </div>
        </div>
        <div>
          <div className="flex justify-center mt-3">
            <Pagination
              activePage={paginationActive}
              itemsCountPerPage={12}
              totalItemsCount={totalItem}
              pageRangeDisplayed={5}
              onChange={(page) => handleChangePage(page)}
            />
          </div>
        </div>
        <div className="mb-3 px-3">
          <h3 className="flex flex-row items-center justify-center mt-3">
            <b className="flex-1 bg-gray-300 h-1"></b>
            <span className="mx-4">Course</span>
            <b className="flex-1 bg-gray-300 h-1"></b>
          </h3>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-12 justify-center items-center my-3">
            {ListCourse.map((item, index) => {
              return (
                <CourseComponent
                  id={item.id}
                  name={item.name}
                  image={item.thumbnail}
                  title={item.title}
                  detail={item.detail}
                  thumbnail={item.thumbnail}
                ></CourseComponent>
              );
            })}
          </div>
          <div className="text-center">
            <a
              href="/Courses"
              className="button-outline-app font-bold uppercase"
            >
              Show more Course
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Teachers;
