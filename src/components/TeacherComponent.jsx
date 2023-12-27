import React from "react";
import { useNavigate } from "react-router-dom";

const TeacherComponent = (props) => {
  const navigator = useNavigate();
  const showDetailTeacher = (id) => {
    navigator("/TeacherDetails/" + id);
  };
  return (
    <div
      className="h-[30rem] border border-gray-300 item-teacher rounded-md hover:bg-orange-400 hover:text-white hover:cursor-pointer"
      onClick={() => showDetailTeacher(props.id)}
    >
      <div className="h-[20rem] overflow-hidden rounded-t-md">
        <img src={props.image} className="object-contain w-full" />
      </div>
      <div className="px-2">
        <div className="align-middle text-center py-3 font-bold text-xl ">
          {props.name}
        </div>
        <div className="text-center">{props.birthday}</div>
        <div className="text-center">{props.Position}</div>
      </div>
    </div>
  );
};

export default TeacherComponent;
