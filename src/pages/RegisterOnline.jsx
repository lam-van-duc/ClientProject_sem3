import React, { useEffect, useState } from "react";
import "react-slideshow-image/dist/styles.css";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import ErrorText from "../components/ErrorText";
import HeaderTitleComponent from "../components/HeaderTitleComponent";
import axiosConfig from "../config/axiosConfig";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";

const schema = yup.object({
  name: yup.string().required("Please enter your name !"),
  email: yup
    .string()
    .email("Email is valid !")
    .required("Please enter your email !"),
  fatherName: yup.string(),
  motherName: yup.string(),
  dob: yup.date().required("Please choice birthday !"),
  gender: yup.number().required("Please choice gender !"),
  ResAddress: yup.string().required("Please enter your residential address !"),
  admissionFor: yup.number().required("Please choice your admission for !"),
  PerAddress: yup.string().required("Please enter your permanent address !"),
  university: yup.string(),
  center: yup.string(),
  stream: yup.string(),
  field: yup.string(),
  markSecured: yup.string(),
  outOf: yup.string(),
  classObtained: yup.string(),
  SportDetail: yup.string(),
});
const RegisterOnline = () => {
  const navigator = useNavigate();
  const [listDepartment, setListDepartment] = useState([]);

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
          navigator("/SuccessEnrollmentRegistration");
        })
        .catch((res) => {
          toast.error(res.message);
        });
    } catch (error) {
      toast.error("Submit form error !");
    }
  };

  const GetListDepartment = async () => {
    try {
      await axiosConfig
        .get("/api/Department")
        .then((res) => {
          setListDepartment(res.data.response);
        })
        .catch((res) => {
          toast.error(res.message);
        });
    } catch (error) {
      toast.error("Submit form error !");
    }
  };

  useEffect(() => {
    GetListDepartment();
  }, []);

  return (
    <div>
      <HeaderTitleComponent name="Register online" />
      <div className="container mx-auto py-3">
        <div className="px-5">
          <h5 className="font-bold py-4">Enrollment Registration</h5>
          <form onSubmit={handleSubmit(HandleSubmitFrom)}>
            <div className="w-full">
              <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3">
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
                    <option value={0}>Male</option>
                    <option value={1}>Female</option>
                  </select>
                  <ErrorText text={errors.gender?.message} />
                </div>
              </div>
              <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  grid-cols-1 gap-3">
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
                  <label className="font-bold">Residential address(*)</label>
                  <input
                    {...register("ResAddress")}
                    type="text"
                    name="ResAddress"
                  />
                  <ErrorText text={errors.ResAddress?.message} />
                </div>
                <div className="form-input">
                  <label className="font-bold">Permanent address(*)</label>
                  <input
                    {...register("PerAddress")}
                    type="text"
                    name="PerAddress"
                  />
                  <ErrorText text={errors.PerAddress?.message} />
                </div>
                <div className="form-input">
                  <label className="font-bold">Admission for(*)</label>
                  <select {...register("admissionFor")}>
                    <option selected hidden>
                      Choice admission for
                    </option>
                    {listDepartment != undefined &&
                      listDepartment.map((item) => {
                        return <option value={item.id}>{item.name}</option>;
                      })}
                  </select>
                  <ErrorText text={errors.admissionFor?.message} />
                </div>
              </div>
              <div className="form-input">
                <label className="font-bold">Sport detail</label>
                <input
                  as="textarea"
                  rows={3}
                  {...register("SportDetail")}
                  type="text"
                  name="SportDetail"
                />
                <ErrorText text={errors.SportDetail?.message} />
              </div>
              <div className="mt-4">
                <div className="border-[2px] border-solid border-gray-300 px-3 py-4 rounded-md mb-1 relative">
                  <span className="text-xl font-bold absolute top-[-17px] bg-white px-2 left-4">
                    Previous Education
                  </span>
                  <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-3">
                    <div className="form-input">
                      <label className="font-bold">University</label>
                      <input
                        {...register("university")}
                        type="text"
                        name="university"
                      />
                      <ErrorText text={errors.university?.message} />
                    </div>
                    <div className="form-input">
                      <label className="font-bold">Enrollment number</label>
                      <input
                        {...register("enrollmentNumber")}
                        type="text"
                        name="enrollmentNumber"
                      />
                      <ErrorText text={errors.enrollmentNumber?.message} />
                    </div>
                    <div className="form-input">
                      <label className="font-bold">Center</label>
                      <input
                        {...register("center")}
                        type="text"
                        name="center"
                      />
                      <ErrorText text={errors.center?.message} />
                    </div>

                    <div className="form-input">
                      <label className="font-bold">Stream</label>
                      <input
                        {...register("stream")}
                        type="text"
                        name="stream"
                      />
                      <ErrorText text={errors.stream?.message} />
                    </div>
                    <div className="form-input">
                      <label className="font-bold">Field</label>
                      <input {...register("field")} type="text" name="field" />
                      <ErrorText text={errors.field?.message} />
                    </div>
                    <div className="form-input">
                      <label className="font-bold">Mark secured</label>
                      <input
                        {...register("markSecured")}
                        type="text"
                        name="markSecured"
                      />
                      <ErrorText text={errors.markSecured?.message} />
                    </div>
                    <div className="form-input">
                      <label className="font-bold">Out of</label>
                      <input {...register("outOf")} type="text" name="outOf" />
                      <ErrorText text={errors.outOf?.message} />
                    </div>
                    <div className="form-input">
                      <label className="font-bold">Class obtained</label>
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
