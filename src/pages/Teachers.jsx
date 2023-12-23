import React, { useState } from "react";
import { Container } from "react-bootstrap";
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
      <Container className="mt-4">
        <div className="text-right">
          <select className="border py-2 px-4 focus-visible:outline-none ">
            <option selected hidden value="">
              Sort by
            </option>
            <option value="Latest date">Latest date</option>
            <option value="Oldest date">Oldest date</option>
          </select>
        </div>
      </Container>
      <Container className="flex justify-center mb-10">
        <div className="flex flex-wrap flex-row justify-center items-center">
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
      </Container>
      <Container>
        <div className="flex justify-center">
          <Pagination
            activePage={paginationActive}
            itemsCountPerPage={10}
            totalItemsCount={450}
            pageRangeDisplayed={5}
            onChange={(page) => handleChangePage(page)}
          />
        </div>
      </Container>
      <Container className="mb-5">
        <h3 className="flex flex-row items-center justify-center mt-5">
          <b className="flex-1 bg-gray-300 h-1"></b>
          <span className="mx-4">Course</span>
          <b className="flex-1 bg-gray-300 h-1"></b>
        </h3>
        <div className="flex flex-wrap flex-row justify-center items-center my-10">
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
      </Container>
    </div>
  );
};
export default Teachers;
