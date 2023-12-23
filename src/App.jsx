import "./App.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, Routes, Route } from "react-router-dom";
import React from "react";
import Contact from "./pages/Contact";
import RegisterOnline from "./pages/RegisterOnline";
import Home from "./pages/Home";
import Teachers from "./pages/Teachers";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import TeacherDetails from "./pages/TeacherDetails";
import Facilities from "./pages/Facilities";
import FeedBack from "./pages/FeedBack";

function App() {
  return (
    <div className="relative h-full">
      <div className="top-0 sticky z-10 bg-white">
        <Navbar expand="lg" className="bg-body-tertiary shadow-xl">
          <div className="flex flex-row justify-center items-center w-full">
            <div className="flex flex-row">
              <Navbar.Brand href="/">
                <img
                  className="h-14 mr-8"
                  src="https://aptech.fpt.edu.vn/wp-content/uploads/2023/03/Logo-fpt-aptech.png"
                />
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
                    href="/dang-ky-tuyen-sinh"
                  >
                    Admission
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

        <Route path="/dang-ky-tuyen-sinh" element={<RegisterOnline />} />
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
            <a className="text-white pb-2" href="/infor">
              Introduction
            </a>
            <a className="text-white pb-2" href="/Daotao">
              Education program
            </a>
            <a className="text-white pb-2" href="/Contact">
              Contact
            </a>
            <a className="text-white pb-2" href="/dang-ky-tuyen-sinh">
              Register for admission
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
