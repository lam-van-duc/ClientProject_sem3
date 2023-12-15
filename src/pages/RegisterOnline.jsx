import React from "react";
import { Container, Col, Row, Form } from "react-bootstrap";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

const RegisterOnline = () => {
  return (
    <Container className="py-3">
      <Row>
        <Col className="px-5">
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
              <Form.Control type="email" placeholder="name@example.com" />
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
        </Col>
        <Col xs md="2" className="px-2">
          <h6>TÌM KIẾM</h6>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterOnline;
