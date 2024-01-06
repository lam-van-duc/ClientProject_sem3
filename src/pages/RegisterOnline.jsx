import React, { useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import ErrorText from "../components/ErrorText";
import HeaderTitleComponent from "../components/HeaderTitleComponent";
import axiosConfig from "../config/axiosConfig";
import { toast } from "react-toastify";

const schema = yup.object({
  name: yup.string().required("please enter your name !"),
  email: yup
    .string()
    .email("email is valid !")
    .required("please enter your name !"),
  fatherName: yup.string(),
  motherName: yup.string(),
  dob: yup.date().required("Please choice dob !"),
  gender: yup.string().required("Please choice gender !"),
  // .oneOf(["male", "female"], "Bạn chỉ được chọn Nam or Nữ"),
  residentialAddress: yup
    .string()
    .required("please enter your residential address !"),
  admissionFor: yup.string().required("please enter your admission for !"),
  permanentAddress: yup
    .string()
    .required("please enter your permanent address !"),
  university: yup.string().required("please enter university !"),
  center: yup.string().required("please enter center !"),
  stream: yup.string().required("please enter stream !"),
  field: yup.string().required("please enter field !"),
  markSecured: yup.string().required("please enter markSecured !"),
  outOf: yup.string().required("please enter outOf !"),
  dob: yup.string().required("please enter dob !"),

  classObtained: yup.string().required("please enter Class obtained !"),
  SportDetail: yup.string().required("please enter Sport detail !"),

  // passwordConfirm: yup
  //   .string()
  //   .matches(
  //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
  //     "Mật khẩu phải chứa ít nhất 1 chữ thường , 1 chữ hoa và 1 ký tự đặc biệt"
  //   )
  //   .required("Vui lòng điền xác nhận mật khẩu !"),
});
const RegisterOnline = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const HandleSubmitFrom = async (data) => {
    try {
      await axiosConfig
        .post("/api/Admission", data)
        .then((res) => {
          reset();
          toast.success("Submit form success !");
        })
        .catch((res) => {
          console.log(res);
          toast.error(res.message);
        });
    } catch (error) {
      toast.error("Submit form error !");
    }
  };

  return (
    <div>
      <HeaderTitleComponent name="Register online" />
      <div className="container mx-auto py-3">
        <div className="px-5">
          <h5 className="font-bold py-4">REGISTER ONLINE</h5>
          {/* <div className="bg-cover bg-center h-80">
              <img
                src="https://aptech.fpt.edu.vn/wp-content/uploads/2022/12/banner.jpg"
                className="object-cover h-full w-full"
              />
            </div> */}
          <form onSubmit={handleSubmit(HandleSubmitFrom)}>
            <div className="w-full">
              <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3">
                <div className="form-input">
                  <label className="font-bold">Full name(*)</label>
                  <input type="text" {...register("name")} />
                  <ErrorText text={errors.name?.message} />
                </div>
                <div className="form-input">
                  <label className="font-bold">Email(*)</label>
                  <input type="text" {...register("email")} />
                  <ErrorText text={errors.email?.message} />
                </div>
                <div className="form-input">
                  <label className="font-bold">Father name</label>
                  <input
                    {...register("fatherName")}
                    type="text"
                    name="fatherName"
                  />
                  <ErrorText text={errors.fatherName?.message} />
                </div>
                <div className="form-input">
                  <label className="font-bold">Mother name</label>
                  <input
                    {...register("motherName")}
                    type="text"
                    name="motherName"
                  />
                  <ErrorText text={errors.motherName?.message} />
                </div>

                <div className="form-input">
                  <label className="font-bold">Birthday(*)</label>
                  <input {...register("dob")} type="date" name="dob" />
                  <ErrorText text={errors.dob?.message} />
                </div>
                <div className="form-input">
                  <label className="font-bold">Gender(*)</label>
                  <select
                    name="gender"
                    className="form-control"
                    {...register("gender")}
                  >
                    <option selected hidden value={""}>
                      Choice gender
                    </option>
                    <option value={"0"}>Male</option>
                    <option value={"1"}>Female</option>
                  </select>
                  <ErrorText text={errors.gender?.message} />
                </div>
              </div>
              <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  grid-cols-1 gap-3">
                <div className="form-input">
                  <label className="font-bold">Residential address(*)</label>
                  <input
                    {...register("residentialAddress")}
                    type="text"
                    name="residentialAddress"
                  />
                  <ErrorText text={errors.residentialAddress?.message} />
                </div>
                <div className="form-input">
                  <label className="font-bold">Permanent address(*)</label>
                  <input
                    {...register("permanentAddress")}
                    type="text"
                    name="permanentAddress"
                  />
                  <ErrorText text={errors.permanentAddress?.message} />
                </div>
                <div className="form-input">
                  <label className="font-bold">Admission for(*)</label>
                  <input
                    {...register("admissionFor")}
                    type="text"
                    name="admissionFor"
                  />
                  <ErrorText text={errors.admissionFor?.message} />
                </div>
              </div>
              <div className="form-input">
                <label className="font-bold">Sport detail(*)</label>
                <input
                  as="textarea"
                  rows={3}
                  {...register("SportDetail")}
                  type="text"
                  name="SportDetail"
                />
                <ErrorText text={errors.SportDetail?.message} />
              </div>
              <div className="mt-3">
                <div className="border-[2px] border-solid border-gray-300 px-3 py-4 rounded-md mb-1 relative">
                  <span className="text-xl font-bold absolute top-[-17px] bg-white px-2 left-4">
                    In tabular format
                  </span>
                  <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-3">
                    <div className="form-input">
                      <label className="font-bold">university(*)</label>
                      <input
                        {...register("university")}
                        type="text"
                        name="university"
                      />
                      <ErrorText text={errors.university?.message} />
                    </div>
                    <div className="form-input">
                      <label className="font-bold">Enrollment number(*)</label>
                      <input
                        {...register("enrollmentNumber")}
                        type="text"
                        name="enrollmentNumber"
                      />
                      <ErrorText text={errors.enrollmentNumber?.message} />
                    </div>
                    <div className="form-input">
                      <label className="font-bold">Center(*)</label>
                      <input
                        {...register("center")}
                        type="text"
                        name="center"
                      />
                      <ErrorText text={errors.center?.message} />
                    </div>

                    <div className="form-input">
                      <label className="font-bold">Stream(*)</label>
                      <input
                        {...register("stream")}
                        type="text"
                        name="stream"
                      />
                      <ErrorText text={errors.stream?.message} />
                    </div>
                    <div className="form-input">
                      <label className="font-bold">Field(*)</label>
                      <input {...register("field")} type="text" name="field" />
                      <ErrorText text={errors.field?.message} />
                    </div>
                    <div className="form-input">
                      <label className="font-bold">Mark secured(*)</label>
                      <input
                        {...register("markSecured")}
                        type="text"
                        name="markSecured"
                      />
                      <ErrorText text={errors.markSecured?.message} />
                    </div>
                    <div className="form-input">
                      <label className="font-bold">Out of(*)</label>
                      <input {...register("outOf")} type="text" name="outOf" />
                      <ErrorText text={errors.outOf?.message} />
                    </div>
                    <div className="form-input">
                      <label className="font-bold">Class obtained(*)</label>
                      <input
                        {...register("classObtained")}
                        type="text"
                        name="classObtained"
                      />
                      <ErrorText text={errors.classObtained?.message} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <button className="button-outline-app font-bold text-base mt-3 px-5 py-2">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterOnline;
