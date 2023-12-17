import React from "react";

const ContactComponent = (props) => {
  return (
    <div className="w-[49%] mb-5">
      <div className="h-96">
        <img src={props.image} className="w-full h-full object-cover" />
      </div>
      <div className="py-2">
        <div className="text-blue-700 font-bold text-sm">{props.name}</div>
        <ul>
          <li className="list-disc">
            <span className="font-bold">Địa chỉ: </span>
            <span>{props.address}</span>
          </li>
          <li className="list-disc">
            <span className="font-bold">Phòng Tuyển sinh: </span>
            <span>{props.phoneNumberAdmissions}</span>
          </li>

          <li className="list-disc">
            <span className="font-bold">Hotline: </span>
            <span>{props.hotLine}</span>
          </li>
          <li className="list-disc">
            <span className="font-bold">Phòng đào tạo: </span>
            <span>{props.phoneNumberTrainningDepartment}</span>
          </li>
          <li className="list-disc">
            <span className="font-bold">Phòng quan hệ doanh nghiệp: </span>
            <span>{props.phoneNumberBusinessRelations}</span>
          </li>
          <li className="list-disc">
            <span className="font-bold">Email: </span>
            <span>{props.email}</span>
          </li>
        </ul>
      </div>
      <div>
        <iframe
          src={props.iframe}
          className="w-full"
          height="450"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactComponent;
