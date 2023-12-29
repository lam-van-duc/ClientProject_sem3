import React, { useState } from "react";
import { Container, Col, Row, Form } from "react-bootstrap";
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
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const HandleSubmitFrom = async (data) => {
    try {
      await axiosConfig
        .post("/api/Admission", data)
        .then((res) => {
          console.log(res.response);
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
      <Container className="py-3">
        <Row>
          <Col className="px-5">
            <h5 className="font-bold py-4">REGISTER ONLINE</h5>
            {/* <div className="bg-cover bg-center h-80">
              <img
                src="https://aptech.fpt.edu.vn/wp-content/uploads/2022/12/banner.jpg"
                className="object-cover h-full w-full"
              />
            </div> */}
            <Form onSubmit={handleSubmit(HandleSubmitFrom)}>
              <div className="w-full">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3">
                  <Form.Group>
                    <Form.Label className="font-bold">Full name(*)</Form.Label>
                    <Form.Control type="text" {...register("name")} />
                    <ErrorText text={errors.name?.message} />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label className="font-bold">Father name</Form.Label>
                    <Form.Control
                      {...register("fatherName")}
                      type="text"
                      name="fatherName"
                    />
                    <ErrorText text={errors.fatherName?.message} />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label className="font-bold">Mother name</Form.Label>
                    <Form.Control
                      {...register("motherName")}
                      type="text"
                      name="motherName"
                    />
                    <ErrorText text={errors.motherName?.message} />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label className="font-bold">Birthday(*)</Form.Label>
                    <Form.Control {...register("dob")} type="date" name="dob" />
                    <ErrorText text={errors.dob?.message} />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label className="font-bold">Gender(*)</Form.Label>
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
                  </Form.Group>
                  <Form.Group>
                    <Form.Label className="font-bold">
                      Admission for(*)
                    </Form.Label>
                    <Form.Control
                      {...register("admissionFor")}
                      type="text"
                      name="admissionFor"
                    />
                    <ErrorText text={errors.admissionFor?.message} />
                  </Form.Group>
                </div>
                <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-3">
                  <Form.Group>
                    <Form.Label className="font-bold">
                      Residential address(*)
                    </Form.Label>
                    <Form.Control
                      {...register("residentialAddress")}
                      type="text"
                      name="residentialAddress"
                    />
                    <ErrorText text={errors.residentialAddress?.message} />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label className="font-bold">
                      Permanent address(*)
                    </Form.Label>
                    <Form.Control
                      {...register("permanentAddress")}
                      type="text"
                      name="permanentAddress"
                    />
                    <ErrorText text={errors.permanentAddress?.message} />
                  </Form.Group>
                </div>
                <div>
                  <fieldset className="border border-solid border-gray-400 p-3">
                    <legend className="text-sm">In tabular format</legend>
                    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3">
                      <Form.Group>
                        <Form.Label className="font-bold">
                          university(*)
                        </Form.Label>
                        <Form.Control
                          {...register("university")}
                          type="text"
                          name="university"
                        />
                        <ErrorText text={errors.university?.message} />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label className="font-bold">
                          Enrollment number(*)
                        </Form.Label>
                        <Form.Control
                          {...register("enrollmentNumber")}
                          type="text"
                          name="enrollmentNumber"
                        />
                        <ErrorText text={errors.enrollmentNumber?.message} />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label className="font-bold">Center(*)</Form.Label>
                        <Form.Control
                          {...register("center")}
                          type="text"
                          name="center"
                        />
                        <ErrorText text={errors.center?.message} />
                      </Form.Group>

                      <Form.Group>
                        <Form.Label className="font-bold">Stream(*)</Form.Label>
                        <Form.Control
                          {...register("stream")}
                          type="text"
                          name="stream"
                        />
                        <ErrorText text={errors.stream?.message} />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label className="font-bold">Field(*)</Form.Label>
                        <Form.Control
                          {...register("field")}
                          type="text"
                          name="field"
                        />
                        <ErrorText text={errors.field?.message} />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label className="font-bold">
                          Mark secured(*)
                        </Form.Label>
                        <Form.Control
                          {...register("markSecured")}
                          type="text"
                          name="markSecured"
                        />
                        <ErrorText text={errors.markSecured?.message} />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label className="font-bold">Out of(*)</Form.Label>
                        <Form.Control
                          {...register("outOf")}
                          type="text"
                          name="outOf"
                        />
                        <ErrorText text={errors.outOf?.message} />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label className="font-bold">
                          Class obtained(*)
                        </Form.Label>
                        <Form.Control
                          {...register("classObtained")}
                          type="text"
                          name="classObtained"
                        />
                        <ErrorText text={errors.classObtained?.message} />
                      </Form.Group>
                    </div>
                  </fieldset>
                  <form>
                    <fieldset className="border-spacing-2 border-gray-950">
                      <legend className="w-auto m-5">Information</legend>
                      <div className="form-group row">
                        <label
                          htmlFor="myId"
                          className="col-md-2 col-form-label label-form"
                        >
                          Name
                        </label>
                        <div className="col-md-10">
                          <input
                            type="text"
                            className="form-control"
                            id="myId"
                          />
                        </div>
                      </div>
                    </fieldset>
                  </form>
                </div>
                <Form.Group>
                  <Form.Label className="font-bold">Sport detail(*)</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    {...register("SportDetail")}
                    type="text"
                    name="SportDetail"
                  />
                  <ErrorText text={errors.SportDetail?.message} />
                </Form.Group>
              </div>

              <div>
                <button className="button-outline-app font-bold text-base mt-3 px-5 py-2">
                  Submit
                </button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RegisterOnline;
