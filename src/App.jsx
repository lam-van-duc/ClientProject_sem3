import "./App.css";
// import { Nav, Navbar, Modal, Button } from "react-bootstrap";
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
import Department from "./pages/Department";

import Modal from "./components/Modal";
import RegisterAccountComponent from "./components/ResgiterAccountComponent";

function App() {
  const [openModalLogin, setOpenModalLogin] = useState(false);
  const [showFromType, setShowFromType] = useState("Login");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="relative h-full">
      <div className="top-0 sticky z-10 bg-white cursor-pointer shadow-md dropDownMenu py-2">
        <div className="flex flex-row lg:justify-center md:justify-between sm:justify-between justify-between lg:items-center md:items-start sm:items-start">
          <div>
            <img className="h-16 mr-8" src={LogoColor} />
          </div>
          <div className="flex flex-row justify-between">
            <div
              className={` lg:block ${
                isMenuOpen
                  ? "md:block sm:block block"
                  : "md:hidden sm:hidden hidden"
              }`}
              style={{ transition: "all 0.2s ease" }}
            >
              <ul
                className="
                flex max-h-40 flex-col justify-start items-start border-[1px]  border-orange-400
                sm:flex-col sm:justify-start sm:items-start sm:border-[1px] 
                md:flex-col md:justify-start md:items-start md:border-[1px] 
                lg:flex-row lg:flex-wrap lg:justify-center lg:items-center lg:border-[0]"
              >
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/Courses">Courses</CustomLink>
                <CustomLink to="/StudentRegistration">
                  Student registration
                </CustomLink>
                <CustomLinkDropDown displayName={"Department"} to="/Department">
                  <CustomChildrenDropDown to="/Facilities/canteen">
                    canteen
                  </CustomChildrenDropDown>
                </CustomLinkDropDown>
                <CustomLink to="/Teachers">Faculty</CustomLink>
                <CustomLinkDropDown displayName={"Facilities"}>
                  <CustomChildrenDropDown to="/Facilities/canteen">
                    canteen
                  </CustomChildrenDropDown>
                  <CustomChildrenDropDown to="/Facilities/hostel">
                    hostel
                  </CustomChildrenDropDown>
                  <CustomChildrenDropDown to="/Facilities/placement-center">
                    Placement center
                  </CustomChildrenDropDown>
                  <CustomChildrenDropDown to="/Facilities/college-library">
                    College library
                  </CustomChildrenDropDown>
                  <CustomChildrenDropDown to="/Facilities/administrator-office">
                    administrator office
                  </CustomChildrenDropDown>
                </CustomLinkDropDown>
                <CustomLink to="/Contact">Contact us</CustomLink>
                <CustomLink to="/Feedback">Feedback</CustomLink>
                <a
                  className="bg-red-800 text-white cursor-pointer py-2 px-4 font-bold rounded-md hover:shadow-xl ml-0 lg:ml-8 block no-underline"
                  onClick={() => {
                    setOpenModalLogin(true);
                  }}
                >
                  Đăng nhập
                </a>
              </ul>
            </div>

            <div
              className="lg:hidden md:block sm:block block"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              <div className="h-20 flex flex-col mx-2 w-10">
                <span className="h-1 bg-gray-400 my-1 rounded-full"></span>
                <span className="h-1 bg-gray-400 my-1 rounded-full"></span>
                <span className="h-1 bg-gray-400 my-1 rounded-full"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="/CourseDetails/:id" element={<CourseDetails />} />
        <Route path="/Department" element={<Department />} />
        <Route path="/Teachers" element={<Teachers />} />
        <Route path="/TeacherDetails/:id" element={<TeacherDetails />} />
        <Route path="/Facilities/:id" element={<Facilities />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/FeedBack" element={<FeedBack />} />
        <Route path="/StudentRegistration" element={<RegisterOnline />} />
      </Routes>
      <footer className="bg-[#fb923c] text-white">
        <div className="flex flex-row flex-wrap  justify-center items-start py-3">
          <div className="flex flex-col flex-1 max-w-xs text-sm  px-2">
            <div className="text-base font-bold uppercase">
              About ITM College
            </div>
            <b className="bg-gray-200 h-1 w-10 my-3 rounded-md"></b>
            <div>
              ITM College is dedicated to providing quality education and
              fostering innovation in technology.
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
            <p>024 7300 8855 - 0973 111 086</p>
            <p>
              aptech.fpt@fe.edu.vn Số 8, Tôn Thất Thuyết, Mỹ Đình, Từ Liêm, Hà
              Nội
            </p>
          </div>
        </div>
        <div className="text-center py-3 border-t border-white">
          <span>&copy; 2023 ITM College. All rights reserved.</span>
        </div>
      </footer>
      <ToastContainer />
      <Modal
        open={openModalLogin}
        onClose={() => {
          setOpenModalLogin(false);
        }}
      >
        <div className="text-4xl font-bold text-center">{showFromType}</div>
        {showFromType == "Login" ? (
          <LoginComponent
            onMoveLogin={() => {
              setShowFromType("Register");
            }}
          ></LoginComponent>
        ) : (
          <RegisterAccountComponent
            onMoveRegister={() => {
              setShowFromType("Login");
            }}
          ></RegisterAccountComponent>
        )}
      </Modal>
    </div>
  );
}

function CustomLink({ to, children, ...props }) {
  return (
    <li>
      <NavLink
        className={"px-4 py-2 hover:bg-orange-400 hover:text-white"}
        {...props}
        to={to}
      >
        {children}
      </NavLink>
    </li>
  );
}

function CustomChildrenDropDown({ to, children, ...props }) {
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
    <div className="dropDownMenu hover:bg-orange-400 relative hover:text-white px-4 py-2 cursor-pointer z-10">
      <a href={to}>{displayName}</a>
      <ul className="absolute p-0 bg-white z-10 border border-gray-400 top-full block">
        {children}
      </ul>
    </div>
  );
}

export default App;
