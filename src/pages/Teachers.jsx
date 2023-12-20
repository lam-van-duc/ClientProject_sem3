import React from "react";
import { Container } from "react-bootstrap";
import TeacherComponent from "../components/TeacherComponent";

const Teachers = () => {
  const ListTeacher = [
    {
      id: 1,
      image: "https://ordainit.com/educate/assets/img/team/team-3-2.jpg",
      name: "Doctor stranger",
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
  return (
    <div className="text-center">
      <div></div>
      <Container className="flex justify-center">
        <div className="flex flex-wrap flex-row items-center my-20">
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
    </div>
  );
};
export default Teachers;
