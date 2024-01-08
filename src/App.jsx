import "./App.css";
import { NavLink, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
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
import FooterAppComponent from "./components/FooterAppComponent";
import axiosConfig from "./config/axiosConfig";
import { toast } from "react-toastify";
function App() {
  const [openModalLogin, setOpenModalLogin] = useState(false);
  const [showFromType, setShowFromType] = useState("Login");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [ListFacilities, setListFacilities] = useState([]);

  const Func_GetDataFacilities = async () => {
    try {
      await axiosConfig
        .get(`/api/Facility`)
        .then((res) => {
          setListFacilities(res.data.response);
        })
        .catch((res) => {
          toast.error(res.message);
        });
    } catch (error) {
      toast.error(error.message);
    }
  };
  useEffect(() => {
    Func_GetDataFacilities();
  }, []);
  return (
    <div className="relative h-full">
      <div className="top-0 sticky z-50 bg-white cursor-pointer shadow-md dropDownMenu py-2">
        <div className="flex flex-row lg:justify-center md:justify-between sm:justify-between justify-between lg:items-center md:items-start sm:items-start">
          <div>
            <img className="h-16 mr-8" src={LogoColor} />
          </div>
          <div
            className={`flex flex-row justify-between transition-all lg:translate-x-0 lg:h-full md:h-0 sm:h-0 h-0  ${
              isMenuOpen
                ? "translate-x-0 md:translate-x-0 sm:translate-x-0"
                : "translate-x-[80%] md:translate-x-[80%] sm:translate-x-[80%]"
            }`}
          >
            <div
              className="lg:hidden md:block sm:block block mr-2"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              <div className="flex flex-col mx-2 w-10">
                <span className="h-1 bg-gray-400 my-1 rounded-full"></span>
                <span className="h-1 bg-gray-400 my-1 rounded-full"></span>
                <span className="h-1 bg-gray-400 my-1 rounded-full"></span>
              </div>
            </div>
            <div>
              <ul
                className="
                bg-white
                flex flex-col justify-start items-start border-[1px]  border-orange-400
                sm:flex-col sm:justify-start sm:items-start sm:border-[1px] 
                md:flex-col md:justify-start md:items-start md:border-[1px] 
                lg:flex-row lg:flex-wrap lg:justify-center lg:items-center lg:border-[0]"
              >
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/Courses">Courses</CustomLink>
                <CustomLink to="/StudentRegistration">
                  Student registration
                </CustomLink>
                <CustomLink to="/Department">Department</CustomLink>
                <CustomLink to="/Teachers">Faculty</CustomLink>
                <CustomLinkDropDown displayName={"Facilities"}>
                  {ListFacilities.map((item, index) => {
                    return (
                      <CustomChildrenDropDown to={`/Facilities/${item.id}`}>
                        {item.name}
                      </CustomChildrenDropDown>
                    );
                  })}
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
      <FooterAppComponent></FooterAppComponent>
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
    <div className="dropDownMenu relative z-10 hover:bg-orange-400 hover:text-white">
      <a href={to} className="px-4 py-2 cursor-pointer">
        {displayName}
      </a>
      <ul className="absolute p-0 bg-white z-10 border border-gray-400 top-full block lg:left-10">
        {children}
      </ul>
    </div>
  );
}

export default App;
