import logo from "./logo.svg";
import "./App.css";
import {
  Link,
  Routes,
  Route,
  useResolvedPath,
  useMatch,
} from "react-router-dom";
import Contact from "./pages/Contact";
import RegisterOnline from "./pages/RegisterOnline";
import Home from "./pages/Home";

function App() {
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
          <CustomLink to="/">Trang chủ</CustomLink>
          <CustomLink to="/infor">Giới thiệu</CustomLink>
          <CustomLink to="/Daotao">Chương trình đào tạo</CustomLink>
          <CustomLink to="/Tintuc">Tin tức</CustomLink>
          <CustomLink to="/Contact">Liên hệ</CustomLink>
          <CustomLink to="/tuyensinh">Tuyển sinh</CustomLink>
          <li className="ml-8">
            <a
              className="bg-red-800 text-white cursor-pointer py-2 px-4 font-bold rounded-md hover:shadow-xl"
              href="/dang-ky-tuyen-sinh"
            >
              Đăng ký
            </a>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/dang-ky-tuyen-sinh" element={<RegisterOnline />} />
      </Routes>
      <footer>
        <div className="flex flex-row flex-wrap bg-[#f05123] text-white justify-center items-start py-9">
          <div className="flex flex-col flex-1 max-w-xs text-sm  px-2">
            <div className="text-base font-bold">GIỚI THIỆU</div>
            <b className="bg-gray-200 h-1 w-10 my-3 rounded-md"></b>
            <div>
              FPT Aptech có hơn 25 năm kinh nghiệm đào tạo lập trình viên quốc
              tế tại Việt Nam, và luôn là sự lựa chọn ưu tiên của các sinh viên
              và nhà tuyển dụng.
            </div>
          </div>
          <div className="flex flex-col flex-1 max-w-xs text-sm  px-2">
            <div className="text-base font-bold">LIÊN KẾT NHANH</div>
            <b className="bg-gray-200 h-1 w-10 my-3 rounded-md"></b>
            <a>Học lập trình</a>
            <a>Khóa học lập trình</a>
            <a>Ngôn ngữ lập trình</a>
            <a>Lập trình là gì</a>
          </div>
          <div className="flex flex-col flex-1 max-w-xs text-sm px-2">
            <div className="text-base font-bold">LIÊN HỆ</div>
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
      <Link
        className={
          isActive
            ? "px-4 py-2 bg-orange-400 text-white"
            : "px-4 py-2 hover:bg-orange-400 hover:text-white"
        }
        {...props}
        to={to}
      >
        {children}
      </Link>
    </li>
  );
}

export default App;
