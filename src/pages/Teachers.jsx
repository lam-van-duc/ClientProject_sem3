import React, { useState } from "react";
import TeacherComponent from "../components/TeacherComponent";
import HeaderTitleComponent from "../components/HeaderTitleComponent";
import CourseComponent from "../components/CourseComponent";
import Pagination from "react-js-pagination";
import backgroundImageTitle from "../assets/image/backgroundTitle.jpg";
const Teachers = () => {
  const [paginationActive, setPaginationActive] = useState(1);
  const handleChangePage = (page) => {
    setPaginationActive(page);
    console.log(page);
  };
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
      Position: "employee",
    },
    {
      id: 3,
      image: "https://ordainit.com/educate/assets/img/team/team-3-3.jpg",
      name: "rabit",
      birthday: "29-12-1998",
      Position: "employee",
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
      Position: "employee",
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
  ];
  return (
    <div className="text-center">
      <div>
        <HeaderTitleComponent name="Teacher"></HeaderTitleComponent>
      </div>

      <div className="container mx-auto flex justify-center mt-3">
        <div className="grid gap-3 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
          {ListTeacher.map((item, index) => {
            return (
              <TeacherComponent
                image={item.image}
                name={item.name}
                birthday={item.birthday}
                Position={item.Position}
                id={item.id}
              ></TeacherComponent>
            );
          })}
        </div>
      </div>
      <div className="container mx-auto">
        <div className="flex justify-center mt-3">
          <Pagination
            activePage={paginationActive}
            itemsCountPerPage={10}
            totalItemsCount={450}
            pageRangeDisplayed={5}
            onChange={(page) => handleChangePage(page)}
          />
        </div>
      </div>
      <div className="container mx-auto mb-3">
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
                image={item.image}
                title={item.title}
              ></CourseComponent>
            );
          })}
        </div>
        <div className="text-center">
          <a href="/Courses" className="button-outline-app font-bold uppercase">
            Show more Course
          </a>
        </div>
      </div>
    </div>
  );
};
export default Teachers;
