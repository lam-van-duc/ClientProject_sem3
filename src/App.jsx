import "./App.css";
import { Nav, Navbar, Modal, Button } from "react-bootstrap";

import { NavLink, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Contact from "./pages/Contact";
import RegisterOnline from "./pages/RegisterOnline";
import Home from "./pages/Home";
import Teachers from "./pages/Teachers";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import TeacherDetails from "./pages/TeacherDetails";
import Facilities from "./pages/Facilities";
import FeedBack from "./pages/FeedBack";
import LogoColor from "./assets/image/logoITM-color.png";
import { ToastContainer } from "react-toastify";
import LoginComponent from "./components/LoginComponent";
import RegisterAccountComponent from "./components/ResgiterAccountComponent";

function App() {
  const [showFromLogin, setShowFromLogin] = useState(false);
  const [showFromType, setShowFromType] = useState("Login");
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordRegister, setShowPasswordRegister] = useState(false);

  const handleCloseFromLogin = () => setShowFromLogin(false);
  const handleShowFromLogin = () => setShowFromLogin(true);

  return (
    <div className="relative h-full">
      <div className="top-0 sticky z-10 bg-white">
        <Navbar expand="lg" className="bg-body-tertiary shadow-xl">
          <div className="flex flex-row justify-center items-center w-full">
            <div className="flex flex-row">
              <Navbar.Brand href="/">
                <img className="h-16 mr-8" src={LogoColor} />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                >
                  <CustomLink to="/">Home</CustomLink>
                  <CustomLink to="/Courses">Courses</CustomLink>
                  <CustomLink to="/StudentRegistration">
                    Student registration
                  </CustomLink>
                  <CustomLink to="/Department">Department</CustomLink>
                  <CustomLink to="/Faculty">Faculty</CustomLink>

                  <CustomLinkDropDown displayName={"Facilities"}>
                    <CustomDropDownLink to="/Facilities/canteen">
                      canteen
                    </CustomDropDownLink>
                    <CustomDropDownLink to="/Facilities/hostel">
                      hostel
                    </CustomDropDownLink>
                    <CustomDropDownLink to="/Facilities/placement-center">
                      Placement center
                    </CustomDropDownLink>
                    <CustomDropDownLink to="/Facilities/college-library">
                      College library
                    </CustomDropDownLink>
                    <CustomDropDownLink to="/Facilities/administrator-office">
                      administrator office
                    </CustomDropDownLink>
                  </CustomLinkDropDown>
                  <CustomLink to="/Teachers">Teachers</CustomLink>
                  <CustomLink to="/Contact">Contact us</CustomLink>
                  <CustomLink to="/Feedback">Feedback</CustomLink>
                  <a
                    className="bg-red-800 text-white cursor-pointer py-2 px-4 font-bold rounded-md hover:shadow-xl ml-8"
                    onClick={handleShowFromLogin}
                  >
                    Đăng nhập
                  </a>
                </Nav>
              </Navbar.Collapse>
            </div>
          </div>
        </Navbar>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="/CourseDetails/:id" element={<CourseDetails />} />
        <Route path="/Teachers" element={<Teachers />} />
        <Route path="/TeacherDetails/:id" element={<TeacherDetails />} />
        <Route path="/Facilities/:id" element={<Facilities />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/FeedBack" element={<FeedBack />} />
        <Route path="/StudentRegistration" element={<RegisterOnline />} />
      </Routes>
      <footer>
        <div className="flex flex-row flex-wrap bg-[#f05123] text-white justify-center items-start py-9">
          <div className="flex flex-col flex-1 max-w-xs text-sm  px-2">
            <div className="text-base font-bold uppercase">Introduce</div>
            <b className="bg-gray-200 h-1 w-10 my-3 rounded-md"></b>
            <div>
              ITM college has more than 25 years of experience training
              international programmers in Vietnam, and is always the preferred
              choice of students and employers.
            </div>
          </div>
          <div className="flex flex-col flex-1 max-w-xs text-sm  px-2">
            <div className="text-base font-bold uppercase">Quick link</div>
            <b className="bg-gray-200 h-1 w-10 my-3 rounded-md"></b>
            <a className="text-white pb-2" href="/">
              Home
            </a>
            <a className="text-white pb-2" href="/Courses">
              Courses
            </a>
            <a className="text-white pb-2" href="/StudentRegistration">
              Student registration
            </a>
            <a className="text-white pb-2" href="/Department">
              Department
            </a>
            <a className="text-white pb-2" href="/Faculty">
              Faculty
            </a>
            <a className="text-white pb-2" href="/Facilities">
              Facilities
            </a>
            <a className="text-white pb-2" href="/Teachers">
              Teachers
            </a>
            <a className="text-white pb-2" href="/Contact">
              Contact
            </a>
            <a className="text-white pb-2" href="/Feedback">
              Feedback
            </a>
          </div>
          <div className="flex flex-col flex-1 max-w-xs text-sm px-2">
            <div className="text-base font-bold uppercase">CONTACT</div>
            <b className="bg-gray-200 h-1 w-10 my-3 rounded-md"></b>
            <p>(HN) 024 7300 8855 - 0973 111 086</p>
            <p>(HCM) 028 7300 8866 - 0931 313 329</p>
            <p>
              aptech.fpt@fe.edu.vn Số 8, Tôn Thất Thuyết, Mỹ Đình, Từ Liêm, Hà
              Nội
            </p>
            <p>
              590, CMT8, Phường 11, Q.3, Tp. Hồ Chí Minh 391A Nam Kỳ Khởi Nghĩa,
              P. Võ Thị Sáu, Q.3, Tp. Hồ Chí Minh 62 Đường số 36, KDC Vạn Phúc,
              P. Hiệp Bình Phước, Tp. Thủ Đức
            </p>
          </div>
        </div>
      </footer>
      <ToastContainer />

      <Modal show={showFromLogin} onHide={handleCloseFromLogin}>
        <Modal.Header closeButton>
          <Modal.Title>{showFromType}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {showFromType == "Login" ? (
            <LoginComponent></LoginComponent>
          ) : (
            <RegisterAccountComponent></RegisterAccountComponent>
          )}
        </Modal.Body>
        <Modal.Footer>
          {showFromType == "Login" ? (
            <div className="w-full text-center font-bold text-base">
              Don't have an account?
              <span
                className="text-orange-400 hover:underline cursor-pointer select-none"
                onClick={() => {
                  setShowFromType("Register");
                }}
              >
                {" Register."}
              </span>
            </div>
          ) : (
            <div className="w-full text-center font-bold text-base">
              Already have an account?
              <span
                className="text-orange-400 hover:underline cursor-pointer select-none"
                onClick={() => {
                  setShowFromType("Login");
                }}
              >
                {" Login."}
              </span>
            </div>
          )}
          {
            /* <Button variant="secondary" onClick={handleCloseFromLogin}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseFromLogin}>
            Save Changes
          </Button> */
            //          "email": "string",
            // "password": "string",
            // "confirmPassword": "string",
            // "studentCode": "string"
          }
        </Modal.Footer>
      </Modal>
    </div>
  );
}

function CustomLink({ to, children, ...props }) {
  return (
    <NavLink
      className={"px-4 py-2 hover:bg-orange-400 hover:text-white"}
      {...props}
      to={to}
    >
      {children}
    </NavLink>
  );
}

function CustomDropDownLink({ to, children, ...props }) {
  return (
    <li>
      <NavLink
        className={
          "min-w-[10rem] block no-underline px-2 py-2 hover:bg-orange-400 hover:text-white"
        }
        {...props}
        to={to}
      >
        {children}
      </NavLink>
    </li>
  );
}

function CustomLinkDropDown({ displayName, to, children, ...props }) {
  return (
    <div className="dropDownMenu hover:bg-orange-400 hover:text-white px-4 py-2 cursor-pointer">
      <div className="relative">{displayName}</div>
      <ul className="absolute p-0 bg-white z-10 border border-gray-400 top-14">
        {children}
      </ul>
    </div>
  );
}

export default App;
