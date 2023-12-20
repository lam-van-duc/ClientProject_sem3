import "./App.css";
import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import {
  NavLink,
  Routes,
  Route,
  useResolvedPath,
  useMatch,
} from "react-router-dom";
import Contact from "./pages/Contact";
import RegisterOnline from "./pages/RegisterOnline";
import Home from "./pages/Home";
import Teachers from "./pages/Teachers";
import TeacherDetail from "./pages/TeacherDetail";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    // Handle item click logic
    console.log(`Clicked on ${item}`);
    setIsOpen(false); // Close the dropdown after selecting an item
  };
  return (
    <div className="relative h-full">
      <nav className="h-14 top-0 sticky z-10 bg-white">
        <ul className="flex flex-row justify-center items-center">
          <li>
            <img
              className="h-14 mr-8"
              src="https://aptech.fpt.edu.vn/wp-content/uploads/2023/03/Logo-fpt-aptech.png"
            />
          </li>
          <CustomLink to="/">Home</CustomLink>
          <CustomLink to="/infor">Introduction</CustomLink>
          <CustomLink to="/Teachers">Teachers</CustomLink>
          <CustomLink to="/Daotao">Education program</CustomLink>
          <CustomLink to="/Contact">Contact</CustomLink>
          <li className="ml-8">
            <a
              className="bg-red-800 text-white cursor-pointer py-2 px-4 font-bold rounded-md hover:shadow-xl"
              href="/dang-ky-tuyen-sinh"
            >
              Admission
            </a>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Teachers" element={<Teachers />} />
        <Route path="/TeacherDetail/:id" element={<TeacherDetail />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/dang-ky-tuyen-sinh" element={<RegisterOnline />} />
      </Routes>
      <footer>
        <div className="flex flex-row flex-wrap bg-[#f05123] text-white justify-center items-start py-9">
          <div className="flex flex-col flex-1 max-w-xs text-sm  px-2">
            <div className="text-base font-bold uppercase">Introduce</div>
            <b className="bg-gray-200 h-1 w-10 my-3 rounded-md"></b>
            <div>
              FPT Aptech có hơn 25 năm kinh nghiệm đào tạo lập trình viên quốc
              tế tại Việt Nam, và luôn là sự lựa chọn ưu tiên của các sinh viên
              và nhà tuyển dụng.
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
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

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

function CustomDropdownLink({ to, name, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li>
      <div
        class="dropdown"
        className={
          isActive
            ? "px-4 py-2 bg-orange-400 text-white"
            : "px-4 py-2 hover:bg-orange-400 hover:text-white"
        }
      >
        <button class="dropbtn">{name}</button>
        <div class="dropdown-content">
          <CustomLink to="/aaaa">test</CustomLink>
        </div>
      </div>
    </li>
  );
}

export default App;
