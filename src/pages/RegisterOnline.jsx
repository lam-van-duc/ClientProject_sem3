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
            <Form.Group className="mt-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="font-bold">Họ tên (*)</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mt-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="font-bold">Số điện thoại (*)</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mt-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="font-bold">Địa chỉ email(*)</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group className="mt-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="font-bold">
                Đăng ký chương trình học (*)
              </Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mt-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="font-bold">Trình độ (*)</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mt-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="font-bold">Họ tên (*)</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Form>
          <div>
            <button className="bg-blue-950 text-white font-bold text-base mt-3 px-5 py-2">
              Đăng ký
            </button>
          </div>
        </Col>
        <Col xs md="3" className="px-2 border-l border-l-gray-200">
          <div className="pl-4">
            <div>
              <h6>TÌM KIẾM</h6>
              <hr className="bg-gray-500 h-1 w-10 my-3 rounded-md" />
              <div className="w-full flex flex-row">
                <input
                  type="text"
                  className="flex-1 outline-none px-2 focus:shadow-md border text-sm border-slate-500"
                  placeholder="Tìm kiếm"
                />
                <button className="w-10 h-9 bg-slate-800"></button>
              </div>
            </div>
            <div className="mt-3">
              <h6>BÀI VIẾT LIÊN QUAN</h6>
              <hr className="bg-gray-500 h-1 w-10 my-3 rounded-md" />
              <div></div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterOnline;
