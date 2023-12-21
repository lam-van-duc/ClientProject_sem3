import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import HeaderTitleDetailsComponent from "../components/HeaderTitleDetailsComponent";
const CourseDetails = () => {
  const { id } = useParams();
  const course = {
    id: 1,
    image: "https://htmldemo.zcubethemes.com/qeducato/img/bg/couress-img-1.jpg",
    name: "Biochemistry",
    title:
      "Seamlessly visualize quality ellectual capital without superior collaboration and idea tically",
  };

  return (
    <div>
      <HeaderTitleDetailsComponent
        name="Course details"
        imageBackground={course.image}
      ></HeaderTitleDetailsComponent>
      <Container className="my-10">
        <div className="text-5xl font-bold">
          Overview of the Software Engineering major in the Information
          Technology major
        </div>
        <div className="py-4">
          <p>
            At FPT University, Software Engineering is the most famous and
            oldest major. Currently, FPT University students have been working
            and studying in countries such as the US, Germany, Japan, and
            Singapore - important IT markets in the world. This is the result of
            an international standard training program, focusing on foreign
            language training, soft skills development and output orientation to
            meet business needs.
          </p>
          <p>
            The program is designed according to the standards of the
            Association for Computing Machinery (ACM), software engineer
            training standards of the Accreditation Board for Engineering and
            Technology (ABET - USA), Vietnam Software Association (VINASA) ,
            EC-Council Training Program, Jetking Hardware and Networking Academy
            (India); with the advice of IT experts and businesses such as FPT
            Corporation, IBM Corporation, and integrating knowledge standards of
            the industry such as Oracle, Cisco... Training content specialized
            in Software Engineering of the University FPT learning integrates a
            balance between fundamental knowledge with new technology and
            techniques: not only includes basic scientific knowledge of the IT
            industry group but also provides full training on the software
            development process, from methods, techniques, and technologies in
            analysis, design, development, testing, software maintenance, and
            software project management as well as IT applications; Balance
            between theory with application and practice: Theory study time
            takes up only half the time of most subjects.
          </p>
          <p>
            Địa điểm học: Hà Nội, Đà Nẵng, TP.Hồ Chí Minh, Cần Thơ, Bình Định
          </p>
        </div>
      </Container>
    </div>
  );
};
export default CourseDetails;
