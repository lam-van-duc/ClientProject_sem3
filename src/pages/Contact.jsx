import React from "react";
import { Container } from "react-bootstrap";
import ContactComponent from "../components/ContactComponent";

const Contact = () => {
  return (
    <Container>
      <div
        className="bg-cover bg-center relative"
        style={{
          height: "25rem",
          backgroundImage: `url(
              https://aptech.fpt.edu.vn/wp-content/uploads/2022/12/BANNER-CHI-TIEU-TRANG-CHU-DESKTOP-fat.jpg
            )`,
        }}
      >
        <a
          className="bg-blue-800 text-xl font-bold py-2 px-4 text-white hover:bg-blue-900 absolute bottom-6 text-center left-[45%]"
          style={{ textDecoration: "none" }}
          href="/dang-ky-tuyen-sinh"
        >
          Đăng ký học
        </a>
      </div>
      <h4 className="flex flex-row items-center justify-center my-6">
        <b className="flex-1 bg-gray-300 h-1"></b>
        <span className="mx-4">VĂN PHÒNG TƯ VẤN TUYỂN SINH</span>
        <b className="flex-1 bg-gray-300 h-1"></b>
      </h4>
      <div className="flex flex-row flex-wrap justify-between">
        <ContactComponent
          image="https://aptech.fpt.edu.vn/wp-content/uploads/2023/02/FAT-Ha-Noi.jpg"
          name="FPT APTECH HÀ NỘI"
          address="Số 8, Tôn Thất Tuyết, Mỹ Đình, Từ Liêm, Hà Nội"
          phoneNumberAdmissions="024 7300 8855"
          hotLine="0973111086"
          phoneNumberBusinessRelations="0902005356"
          phoneNumberTrainningDepartment="024 7300 9955"
          email="aptech.fpt@fe.edu.vn"
          iframe="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.0964842999633!2d105.77972177479617!3d21.028825087777246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab4cd376479b%3A0xbc2e0bb9db373ed2!2zOGEgVMO0biBUaOG6pXQgVGh1eeG6v3QsIE3hu7kgxJDDrG5oLCBD4bqndSBHaeG6pXksIEjDoCBO4buZaSAxMDAwMDAsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1702733218538!5m2!1svi!2s"
        />
        <ContactComponent
          image="https://aptech.fpt.edu.vn/wp-content/uploads/2023/02/FAT-HCM-CMT8.jpg"
          name="FPT APTECH HỒ CHÍ MINH"
          address="590 Cách Mạng Tháng Tám, Phường 11, Quận 3, HCM"
          phoneNumberAdmissions="024 7300 8855"
          hotLine="0931 313 329"
          phoneNumberBusinessRelations="028 62935 101"
          phoneNumberTrainningDepartment="028 7300 5654"
          email="aptech.fpt@fe.edu.vn"
          iframe="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.0964842999633!2d105.77972177479617!3d21.028825087777246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab4cd376479b%3A0xbc2e0bb9db373ed2!2zOGEgVMO0biBUaOG6pXQgVGh1eeG6v3QsIE3hu7kgxJDDrG5oLCBD4bqndSBHaeG6pXksIEjDoCBO4buZaSAxMDAwMDAsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1702733218538!5m2!1svi!2s"
        />
        <ContactComponent
          image="https://aptech.fpt.edu.vn/wp-content/uploads/2023/02/vp4.jpg"
          name="FPT APTECH THỦ ĐỨC (KHU ĐÔ THỊ VẠN PHÚC)"
          address="62 Đường số 36, KDC Vạn Phúc, P. Hiệp Bình Phước, Tp. Thủ Đức"
          phoneNumberAdmissions="028 7300 8866"
          hotLine="0931 313 329"
          phoneNumberBusinessRelations="028 62935 101"
          phoneNumberTrainningDepartment="028 7300 5654"
          email="aptech.fpt@fe.edu.vn"
          iframe="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.0964842999633!2d105.77972177479617!3d21.028825087777246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab4cd376479b%3A0xbc2e0bb9db373ed2!2zOGEgVMO0biBUaOG6pXQgVGh1eeG6v3QsIE3hu7kgxJDDrG5oLCBD4bqndSBHaeG6pXksIEjDoCBO4buZaSAxMDAwMDAsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1702733218538!5m2!1svi!2s"
        />
      </div>
    </Container>
  );
};
export default Contact;
