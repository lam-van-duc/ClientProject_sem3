import React from "react";
import DepartmentComponent from "../components/DepartmentComponent";
import axiosConfig from "../config/axiosConfig";
import { toast } from "react-toastify";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import HeaderTitleComponent from "../components/HeaderTitleComponent";

const Department = () => {
  //   const {
  //     register,
  //     handleSubmit,
  //     formState: { errors },
  //     reset,
  //   } = useForm({
  //     resolver: yupResolver(schema),
  //     mode: "onSubmit",
  //   });

  //   const HandleSubmitFrom = async (data) => {
  //     await axiosConfig
  //       .post("/api/ContactUs", data)
  //       .then((res) => {
  //         reset();
  //         toast.success("Submit contact success");
  //       })
  //       .catch((res) => {
  //         toast.error(res.data.response);
  //       });
  //   };

  return (
    <>
      <HeaderTitleComponent name={"Department"}></HeaderTitleComponent>
      <div className="container mb-5">
        <DepartmentComponent></DepartmentComponent>
      </div>
    </>
  );
};
export default Department;
