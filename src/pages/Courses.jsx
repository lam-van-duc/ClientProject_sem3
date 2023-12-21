import React, { useState } from "react";
import "../style/Courses.css";
import { Container } from "react-bootstrap";
import CourseComponent from "../components/CourseComponent";
import HeaderTitleComponent from "../components/HeaderTitleComponent";
import Pagination from "react-js-pagination";

const Courses = () => {
  const [paginationActive, setPaginationActive] = useState(1);
  const handleChangePage = (page) => {
    setPaginationActive(page);
    console.log(page);
  };
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

  return (
    <div className="text-center">
      <div>
        <HeaderTitleComponent name="Course"></HeaderTitleComponent>
      </div>
      <Container className="flex justify-center">
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
      </Container>
      <Container>
        <div>
          <Pagination
            activePage={paginationActive}
            itemsCountPerPage={10}
            totalItemsCount={450}
            pageRangeDisplayed={5}
            onChange={(page) => handleChangePage(page)}
          />
        </div>
      </Container>
    </div>
  );
};
export default Courses;
