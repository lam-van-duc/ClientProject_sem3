import React from "react";
import { Container } from "react-bootstrap";
import ContactComponent from "../components/ContactComponent";
import ErrorText from "../components/ErrorText";
import axiosConfig from "../config/axiosConfig";
import { toast } from "react-toastify";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const schema = yup.object({
  Fullname: yup.string().required("Please enter your full name !"),
  Email: yup.string().email("Invalid email !").required("Please enter email !"),
  PhoneNumber: yup
    .string()
    .matches(/^\+?[0-9\s.-]+$/, "Invalid phone number")
    .required("Please enter phone number"),
  Comment: yup.string(),
});
const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });
  const HandleSubmitFrom = async (data) => {
    // await axiosConfig
    //   .post("/api/Admission", data)
    //   .then((res) => {
    //     console.log(res.response);
    //     toast.success("Submit form success");
    //   })
    //   .catch((res) => {
    //     toast.error(res.response.data.title);
    //   });
    toast.success("Submit contact success");
  };

  return (
    <Container className="mb-5">
      <div
        className="bg-cover bg-center relative"
        style={{
          height: "25rem",
          backgroundImage: `url(
            https://bcp.cdnchinhphu.vn/334894974524682240/2022/10/24/tuyen-sinh-2021-166314089134113137076500-16665993252601357979429.jpg
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
      <div className="grid gap-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 my-5">
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
      <div className="grid gap-5 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2">
        <div>
          <h3>Contact us</h3>
          <p>
            If you are going to use a passage of Lorem Ipsum, you need to be
            sure there isn't anything embarrang hidden in the middle of text.
          </p>
          <div>
            <form onSubmit={handleSubmit(HandleSubmitFrom)}>
              <div className="form-input">
                <label>Full name: </label>
                <input type="text" {...register("Fullname")} />
                <ErrorText text={errors.Fullname?.message} />
              </div>
              <div className="form-input">
                <label>Phone number: </label>
                <input type="text" {...register("PhoneNumber")} />
                <ErrorText text={errors.PhoneNumber?.message} />
              </div>
              <div className="form-input">
                <label>Email: </label>
                <input type="text" {...register("Email")} />
                <ErrorText text={errors.Email?.message} />
              </div>
              <div className="form-input">
                <label>Comment: </label>
                <textarea
                  cols="30"
                  rows="10"
                  {...register("Comment")}
                ></textarea>
              </div>
              <div>
                <button className="button-outline-app py-2 font-bold">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div>
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
