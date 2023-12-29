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
                className="flex max-h-40 overflow-auto flex-col justify-start items-start border-[1px]  border-blue-400
              sm:flex-col sm:justify-start sm:items-start sm:border-[3px]
              md:flex-col md:justify-start md:items-start md:border-[2px]
              lg:flex-row lg:flex-wrap lg:justify-center lg:items-center lg:border-[0]
             "
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
                  className="bg-red-800 text-white cursor-pointer py-2 px-4 font-bold rounded-md hover:shadow-xl ml-0 lg:ml-8 block"
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

      {/* <Modal show={showFromLogin} onHide={handleCloseFromLogin}>
        <Modal.Header closeButton>
          <Modal.Title>{showFromType}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         
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
          )} */}
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
      {/* </Modal.Footer>
      </Modal> */}
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
      <ul className="absolute p-0 bg-white z-10 border border-gray-400 top-0">
        {children}
      </ul>
    </div>
  );
}

export default App;
