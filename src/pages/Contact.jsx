import React from "react";
import { Container } from "react-bootstrap";
import ContactComponent from "../components/ContactComponent";

const Contact = () => {
  return (
    <Container className="mb-5">
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
      <div className="flex flex-row items-start justify-center">
        <div className="flex-1 pr-4">
          <h3>Contact us</h3>
          <p>
            If you are going to use a passage of Lorem Ipsum, you need to be
            sure there isn't anything embarrang hidden in the middle of text.
          </p>
          <div>
            <div className="form-input">
              <label>Full name: </label>
              <input type="text" className="" />
            </div>
            <div className="form-input">
              <label>Phone number: </label>
              <input type="email" />
            </div>
            <div className="form-input">
              <label>Email: </label>
              <input type="text" />
            </div>
            <div className="form-input">
              <label>Comment: </label>
              <textarea cols="30" rows="10"></textarea>
            </div>
            <div>
              <button className="button-outline-app py-2 font-bold">
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1 pl-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.0964843000147!2d105.77972177587242!3d21.028825087775196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab00954decbf%3A0xdb4ee23b49ad50c8!2zRlBUIEFwdGVjaCBIw6AgTuG7mWkgLSBI4buHIHRo4buRbmcgxJHDoG8gdOG6oW8gbOG6rXAgdHLDrG5oIHZpw6puIHF14buRYyB04bq_!5e0!3m2!1svi!2s!4v1703295457747!5m2!1svi!2s"
            loading="lazy"
            className="border-0 w-full"
            height="450"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </Container>
  );
};
export default Contact;
