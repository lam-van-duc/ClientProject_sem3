import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  const images = [
    "https://aptech.fpt.edu.vn/wp-content/uploads/2022/12/BANNER-CHI-TIEU-TRANG-CHU-DESKTOP-fat.jpg",
    "https://aptech.fpt.edu.vn/wp-content/uploads/2022/12/Banner-trang-chu-TS-FAT-GAME-desktop.png",
    "https://aptech.fpt.edu.vn/wp-content/uploads/2023/01/hoc-bong-bo-doi_banner-web-destop-2048x685.jpg",
  ];

  return (
    <div>
      <div>
        <div>
          <Slide
            slidesToShow={1}
            infinite={true}
            duration={1500}
            className="h-[100]"
          >
            <div className="each-slide-effect">
              <div className="h-full">
                <img
                  src={`${images[0]}`}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="each-slide-effect">
              <div className="h-full">
                <img
                  src={`${images[1]}`}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="each-slide-effect">
              <div className="h-full">
                <img
                  src={`${images[2]}`}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </Slide>
        </div>
        <div className="mt-1 pb-4 bg-[#ee661c]">
          <div className="text-center mb-6 pt-4 text-3xl font-bold text-white z">
            HỌC LẬP TRÌNH - TẠI SAO NÊN CHỌN FPT APTECH?
          </div>
          <div className="flex justify-center items-center">
            <img
              className="h-56 px-4"
              src="https://aptech.fpt.edu.vn/wp-content/uploads/2022/12/icon-ma%CC%80u-01.png"
            />
            <img
              className="h-56 px-4"
              src="https://aptech.fpt.edu.vn/wp-content/uploads/2021/03/icon-ma%CC%80u-02.png"
            />
            <img
              className="h-56 px-4"
              src="https://aptech.fpt.edu.vn/wp-content/uploads/2021/03/icon-ma%CC%80u-03.png"
            />
            <img
              className="h-56 px-4"
              src="https://aptech.fpt.edu.vn/wp-content/uploads/2021/03/icon-ma%CC%80u-04.png"
            />
            <img
              className="h-56 px-4"
              src="https://aptech.fpt.edu.vn/wp-content/uploads/2021/03/icon-ma%CC%80u-05.png"
            />
          </div>
        </div>
        <Container>
          <div>
            <p className="text-center text-2xl font-bold text-blue-700 py-7 uppercase">
              Education program
            </p>
            <div className="flex justify-center items-center">
              <div className="grid grid-cols-3">
                <a className="h-56 w-72 m-3">
                  <img
                    className="object-cover w-full h-full"
                    src="https://aptech.fpt.edu.vn/wp-content/uploads/2023/03/anh-de-muc-ADSE-1.jpg"
                  />
                </a>
                <a className="h-56 w-72 m-3">
                  <img
                    className="object-cover w-full h-full"
                    src="https://aptech.fpt.edu.vn/wp-content/uploads/2023/03/anh-de-muc-FrontEnd-1.jpg"
                  />
                </a>
                <a className="h-56 w-72 m-3">
                  <img
                    className="object-cover w-full h-full"
                    src="https://aptech.fpt.edu.vn/wp-content/uploads/2023/03/anh-de-muc-BackEnd-2.jpg"
                  />
                </a>
                <a className="h-56 w-72 m-3">
                  <img
                    className="object-cover w-full h-full"
                    src="https://aptech.fpt.edu.vn/wp-content/uploads/2023/03/anh-de-muc-game-dev-2.jpg"
                  />
                </a>
              </div>
            </div>
          </div>
          <div>
            <div>
              <h3 className="flex flex-row items-center justify-center my-12">
                <b className="flex-1 bg-gray-300 h-1"></b>
                <span className="mx-4">TIN NỔI BẬT</span>
                <b className="flex-1 bg-gray-300 h-1"></b>
              </h3>
              <div>
                <Slide
                  slidesToShow={3}
                  infinite={true}
                  indicators={true}
                  duration={1500}
                >
                  <div className="flex flex-col items-start justify-start relative w-80 h-72">
                    <div className="w-80 h-64">
                      <img
                        src="https://aptech.fpt.edu.vn/wp-content/uploads/2023/05/image001.jpg"
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <p>
                      NÓNG: FPT Aptech mở đơn đăng ký lớp học Lập trình website
                      miễn phí #2
                    </p>
                    <div
                      className="absolute z-10 bg-white border-blue-600 border-2 w-12 h-12 top-8"
                      style={{ left: "-1rem" }}
                    >
                      <div className="font-bold text-lg text-center text-blue-600">
                        11
                      </div>
                      <div className="font-bold text-xs text-center text-blue-600">
                        Th5
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start relative w-80 h-72">
                    <div className="w-80 h-64">
                      <img
                        src="https://aptech.fpt.edu.vn/wp-content/uploads/2023/05/image001.jpg"
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <p>
                      NÓNG: FPT Aptech mở đơn đăng ký lớp học Lập trình website
                      miễn phí #2
                    </p>
                    <div
                      className="absolute z-10 bg-white border-blue-600 border-2 w-12 h-12 top-8"
                      style={{ left: "-1rem" }}
                    >
                      <div className="font-bold text-lg text-center text-blue-600">
                        11
                      </div>
                      <div className="font-bold text-xs text-center text-blue-600">
                        Th5
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-start justify-start relative w-80 h-72">
                    <div className="w-80 h-64">
                      <img
                        src="https://aptech.fpt.edu.vn/wp-content/uploads/2023/05/image001.jpg"
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <p>
                      NÓNG: FPT Aptech mở đơn đăng ký lớp học Lập trình website
                      miễn phí #2
                    </p>
                    <div
                      className="absolute z-10 bg-white border-blue-600 border-2 w-12 h-12 top-8"
                      style={{ left: "-1rem" }}
                    >
                      <div className="font-bold text-lg text-center text-blue-600">
                        11
                      </div>
                      <div className="font-bold text-xs text-center text-blue-600">
                        Th5
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-start justify-start relative w-80 h-72">
                    <div className="w-80 h-64">
                      <img
                        src="https://aptech.fpt.edu.vn/wp-content/uploads/2023/05/image001.jpg"
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <p>
                      NÓNG: FPT Aptech mở đơn đăng ký lớp học Lập trình website
                      miễn phí #2
                    </p>
                    <div
                      className="absolute z-10 bg-white border-blue-600 border-2 w-12 h-12 top-8"
                      style={{ left: "-1rem" }}
                    >
                      <div className="font-bold text-lg text-center text-blue-600">
                        11
                      </div>
                      <div className="font-bold text-xs text-center text-blue-600">
                        Th5
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-start justify-start relative w-80 h-72">
                    <div className="w-80 h-64">
                      <img
                        src="https://aptech.fpt.edu.vn/wp-content/uploads/2023/05/image001.jpg"
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <p>
                      NÓNG: FPT Aptech mở đơn đăng ký lớp học Lập trình website
                      miễn phí #2
                    </p>
                    <div
                      className="absolute z-10 bg-white border-blue-600 border-2 w-12 h-12 top-8"
                      style={{ left: "-1rem" }}
                    >
                      <div className="font-bold text-lg text-center text-blue-600">
                        11
                      </div>
                      <div className="font-bold text-xs text-center text-blue-600">
                        Th5
                      </div>
                    </div>
                  </div>
                </Slide>
              </div>
            </div>
          </div>
        </Container>
        <div className="bg-[#fff6ea]">
          <Container>
            <div>
              <h3 className="flex flex-row items-center justify-center my-12">
                <b className="flex-1 bg-gray-300 h-1"></b>
                <span className="mx-4">GƯƠNG MẶT SINH VIÊN TIÊU BIỂU</span>
                <b className="flex-1 bg-gray-300 h-1"></b>
              </h3>
              <div>
                <Slide
                  slidesToShow={3}
                  infinite={true}
                  indicators={true}
                  duration={1500}
                >
                  <div className="flex flex-col items-start justify-start relative w-80 h-72">
                    <div className="w-80 h-64">
                      <img
                        src="https://aptech.fpt.edu.vn/wp-content/uploads/2023/11/SVSX-Nguyen-Van-Quy-4-2048x1536.jpeg"
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <p>Rẽ hướng để theo đuổi ước mở lập trình</p>
                    <div
                      className="absolute z-10 bg-white border-blue-600 border-2 w-12 h-12 top-8"
                      style={{ left: "-1rem" }}
                    >
                      <div className="font-bold text-lg text-center text-blue-600">
                        11
                      </div>
                      <div className="font-bold text-xs text-center text-blue-600">
                        Th5
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start relative w-80 h-72">
                    <div className="w-80 h-64">
                      <img
                        src="https://aptech.fpt.edu.vn/wp-content/uploads/2023/11/SVSX-Nguyen-Van-Quy-4-2048x1536.jpeg"
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <p>Rẽ hướng để theo đuổi ước mở lập trình</p>
                    <div
                      className="absolute z-10 bg-white border-blue-600 border-2 w-12 h-12 top-8"
                      style={{ left: "-1rem" }}
                    >
                      <div className="font-bold text-lg text-center text-blue-600">
                        11
                      </div>
                      <div className="font-bold text-xs text-center text-blue-600">
                        Th5
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start relative w-80 h-72">
                    <div className="w-80 h-64">
                      <img
                        src="https://aptech.fpt.edu.vn/wp-content/uploads/2023/11/SVSX-Nguyen-Van-Quy-4-2048x1536.jpeg"
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <p>Rẽ hướng để theo đuổi ước mở lập trình</p>
                    <div
                      className="absolute z-10 bg-white border-blue-600 border-2 w-12 h-12 top-8"
                      style={{ left: "-1rem" }}
                    >
                      <div className="font-bold text-lg text-center text-blue-600">
                        11
                      </div>
                      <div className="font-bold text-xs text-center text-blue-600">
                        Th5
                      </div>
                    </div>
                  </div>
                </Slide>
              </div>
            </div>
          </Container>
        </div>

        <div
          className="bg-cover bg-center relative"
          style={{
            height: "33rem",
            backgroundImage: `url(
              https://aptech.fpt.edu.vn/wp-content/uploads/2022/12/BANNER-CHI-TIEU-TRANG-CHU-DESKTOP-fat.jpg
            )`,
          }}
        >
          <a
            className="bg-blue-800 text-xl font-bold py-2 px-4 text-white hover:bg-blue-900 absolute bottom-6 text-center left-[45%]"
            style={{ textDecoration: "none" }}
            href="/tuyensinh"
          >
            Register now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
