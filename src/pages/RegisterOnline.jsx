import React from "react";
import { Container, Col, Row, Form } from "react-bootstrap";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const RegisterOnline = () => {
  return (
    <Container className="py-3">
      <Row>
        <Col className="px-5 border-r border-r-gray-200">
          <h5 className="font-bold py-4">ĐĂNG KÝ TRỰC TUYẾN</h5>
          <div className="bg-cover bg-center h-80">
            <img
              src="https://aptech.fpt.edu.vn/wp-content/uploads/2022/12/banner.jpg"
              className="object-cover h-full w-full"
            />
          </div>
          <Form>
            <div className="w-full flex">
              <div className="w-1/2 pr-2">
                <Form.Group className="mt-3">
                  <Form.Label className="font-bold">Full name(*)</Form.Label>
                  <Form.Control type="text" name="name" />
                </Form.Group>
                <Form.Group className="mt-3">
                  <Form.Label className="font-bold">Birthday(*)</Form.Label>
                  <Form.Control type="text" name="dob" />
                </Form.Group>
              </div>
              <div className="w-1/2 pl-2">
                <Form.Group className="mt-3">
                  <Form.Label className="font-bold">Father name</Form.Label>
                  <Form.Control type="text" name="fatherName" />
                </Form.Group>
                <Form.Group className="mt-3">
                  <Form.Label className="font-bold">Mother name</Form.Label>
                  <Form.Control type="text" name="motherName" />
                </Form.Group>
              </div>
            </div>

            <Form.Group className="mt-3">
              <Form.Label className="font-bold">Gender(*)</Form.Label>
              <select name="gender" className="form-control">
                <option selected hidden value={""}>
                  Choice gender
                </option>
                <option value={0}>Male</option>
                <option value={1}>Female</option>
              </select>
            </Form.Group>
            <Form.Group className="mt-3">
              <Form.Label className="font-bold">
                Residential address(*)
              </Form.Label>
              <Form.Control type="text" name="residentialAddress" />
            </Form.Group>

            <Form.Group className="mt-3">
              <Form.Label className="font-bold">Admission for(*)</Form.Label>
              <Form.Control type="text" name="admissionFor" />
            </Form.Group>
            <Form.Group className="mt-3">
              <Form.Label className="font-bold">university(*)</Form.Label>
              <Form.Control type="text" name="university" />
            </Form.Group>

            <Form.Group className="mt-3">
              <Form.Label className="font-bold">
                Enrollment number(*)
              </Form.Label>
              <Form.Control type="text" name="enrollmentNumber" />
            </Form.Group>
            <Form.Group className="mt-3">
              <Form.Label className="font-bold">Center(*)</Form.Label>
              <Form.Control type="text" name="center" />
            </Form.Group>
            <Form.Group className="mt-3">
              <Form.Label className="font-bold">Stream(*)</Form.Label>
              <Form.Control type="text" name="stream" />
            </Form.Group>
            <Form.Group className="mt-3">
              <Form.Label className="font-bold">Field(*)</Form.Label>
              <Form.Control type="text" name="field" />
            </Form.Group>
            <Form.Group className="mt-3">
              <Form.Label className="font-bold">Mark secured(*)</Form.Label>
              <Form.Control type="text" name="markSecured" />
            </Form.Group>
            <Form.Group className="mt-3">
              <Form.Label className="font-bold">Out of(*)</Form.Label>
              <Form.Control type="text" name="outOf" />
            </Form.Group>
            <Form.Group className="mt-3">
              <Form.Label className="font-bold">Class obtained(*)</Form.Label>
              <Form.Control type="text" name="classObtained" />
            </Form.Group>
          </Form>
          <div>
            <button className="bg-blue-950 text-white font-bold text-base mt-3 px-5 py-2">
              Submit
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterOnline;
