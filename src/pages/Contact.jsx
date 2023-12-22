import React from "react";
import { Container } from "react-bootstrap";
import ContactComponent from "../components/ContactComponent";

const Contact = () => {
  return (
    <Container>
      <div
        className="bg-cover bg-center relative"
        style={{
          height: "25rem",
          backgroundImage: `url(
              https://aptech.fpt.edu.vn/wp-content/uploads/2022/12/BANNER-CHI-TIEU-TRANG-CHU-DESKTOP-fat.jpg
            )`,
        }}
      >
        <a
          className="bg-blue-800 text-xl font-bold py-2 px-4 text-white hover:bg-blue-900 absolute bottom-6 text-center left-[45%]"
          style={{ textDecoration: "none" }}
          href="/dang-ky-tuyen-sinh"
        >
          Register to study
        </a>
      </div>
      <h4 className="flex flex-row items-center justify-center my-6">
        <b className="flex-1 bg-gray-300 h-1"></b>
        <span className="mx-4">ADMISSION CONSULTING OFFICE</span>
        <b className="flex-1 bg-gray-300 h-1"></b>
      </h4>
      <div className="flex flex-row flex-wrap justify-between my-5">
        <ContactComponent
          icon={<i class="fas fa-map-marker-alt"></i>}
          name={"Address"}
          content1={"107, Broklyn Golden Road Street. New York, USA."}
        ></ContactComponent>
        <ContactComponent
          icon={<i class="fas fa-envelope"></i>}
          name={"Email"}
          content1={"support@domain.com"}
          content2={"contact@domain.com"}
        ></ContactComponent>
        <ContactComponent
          icon={<i class="fas fa-phone"></i>}
          name={"Phone number"}
          content1={"+01 123 456 789"}
          content2={"+01 123 456 789"}
        ></ContactComponent>
      </div>
      <div className="flex flex-row items-center justify-center">
        <div className="flex-1">
          <h3>Contact us</h3>
          <p>
            If you are going to use a passage of Lorem Ipsum, you need to be
            sure there isn't anything embarrang hidden in the middle of text.
          </p>
        </div>
        <div className="flex-1"></div>
      </div>
    </Container>
  );
};
export default Contact;
