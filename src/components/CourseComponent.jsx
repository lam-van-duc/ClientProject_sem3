import React from "react";
import { useNavigate } from "react-router-dom";

const CourseComponent = (props) => {
  const navigator = useNavigate();
  const showDetailTeacher = (id, detail, thumbnail) => {
    navigator("/CourseDetails/" + id);
  };
  return (
    <div
      className="courseItem"
      onClick={() => {
        showDetailTeacher(props.id, props.detail, props.thumbnail);
      }}
    >
      <div className="h-full w-full bg-[#f0f7ff] courseContent border border-gray-200 rounded-md hover:cursor-pointer">
        <div className="couseThumnail w-full h-60 overflow-hidden rounded-t-md min-w-[19rem]">
          <img src={props.image} className="object-contain w-full" />
        </div>
        <div className="text-left p-3">
          <div className="text-2xl font-bold coursesName line-clamp-1">
            {props.name}
          </div>
          <div className="py-2 text-gray-400 line-clamp-3">{props.title}</div>
          <div>
            <a
              onClick={() => {
                showDetailTeacher(props.id);
              }}
              className="no-underline text-orange-400 text-sm font-bold text-center"
            >
              <span>Read More</span>
              <i class="far fa-long-arrow-right text-xl px-2"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseComponent;
