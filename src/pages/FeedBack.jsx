import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import HeaderTitleComponent from "../components/HeaderTitleComponent";

import ErrorText from "../components/ErrorText";
import axiosConfig from "../config/axiosConfig";
import { toast } from "react-toastify";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const schema = yup.object({
  fullName: yup.string().required("please enter your full name !"),
  email: yup.string().email("Invalid email !").required("please enter email !"),
  firstQuestion: yup.string().required("Please enter first question !"),
  secondQuestion: yup.string().required("Please enter second question !"),
  otherQuestion: yup.string(),
});
const FeedBack = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const HandleSubmitFrom = async (data) => {
    await axiosConfig
      .post("/api/Feedback", data)
      .then((res) => {
        console.log(res.response);
        toast.success("Submit form success");
      })
      .catch((res) => {
        toast.error(res.response.data.title);
      });
  };
  return (
    <div>
      <HeaderTitleComponent name={"FeedBack"}></HeaderTitleComponent>
      <div className="text-center font-bold py-10 mb-10 text-6xl text-orange-400 border-b border-gray-200">
        Community Education Feedback
      </div>
      <form onSubmit={handleSubmit(HandleSubmitFrom)}>
        <Container className="my-4">
          <div className="flex  flex-wrap justify-center">
            <div className="form-input flex-1 mr-2">
              <label>Full name:</label>
              <input type="text" {...register("fullName")} />
              <ErrorText text={errors.fullName?.message} />
            </div>
            <div className="form-input flex-1 ml-2">
              <label>Email:</label>
              <input type="email" {...register("email")} />
              <ErrorText text={errors.email?.message} />
            </div>
          </div>
          <div className="form-input">
            <label>What did you enjoy about the ITM College?</label>
            <textarea
              placeholder="Type here"
              rows="10"
              {...register("firstQuestion")}
            ></textarea>
          </div>
          <div className="form-input">
            <label>What do you not like about ITM College?</label>
            <textarea
              placeholder="Type here"
              rows="10"
              {...register("secondQuestion")}
            ></textarea>
          </div>

          <div className="form-input">
            <label>Other comments:</label>
            <textarea
              placeholder="Type here"
              rows="10"
              {...register("otherQuestion")}
            ></textarea>
          </div>
        </Container>
        <div className="border-t border-gray-20 mt-10 py-10">
          <div className="text-center font-bold text-6xl mb-10 text-orange-400 0">
            Thank you !
          </div>
          <div className="text-center">
            <button className="button-outline-app py-2 px-10 font-bold">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FeedBack;
