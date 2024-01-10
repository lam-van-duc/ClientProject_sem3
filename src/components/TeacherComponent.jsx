import React from "react";
import { useNavigate } from "react-router-dom";

const TeacherComponent = (props) => {
  const navigator = useNavigate();
  const showDetailTeacher = (id, teacher) => {
    navigator("/TeacherDetails/" + id);
  };
  return (
    <div
      className="border border-gray-300 item-teacher rounded-md hover:bg-orange-400 hover:text-white hover:cursor-pointer"
      onClick={() => showDetailTeacher(props.id, props.teacher)}
    >
      <div className="h-[15rem] overflow-hidden rounded-t-md">
        <img src={props.image} className="object-contain w-full" />
      </div>
      <div className="h-[6rem] p-2">
        <div className="text-center text-base font-bold pb-2">{props.name}</div>
        <div className="text-sm line-clamp-2 overflow-ellipsis">
          {props.email}
        </div>
      </div>
    </div>
  );
};

export default TeacherComponent;
