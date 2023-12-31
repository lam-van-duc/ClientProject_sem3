import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import parse from "html-react-parser";
import HeaderTitleDetailsComponent from "../components/HeaderTitleDetailsComponent";
import axiosConfig from "../config/axiosConfig";
import { toast } from "react-toastify";
const CourseDetails = () => {
  const { id } = useParams();
  const [Course, setCourse] = useState({});
  const [loading, setLoading] = useState(true);

  const Func_GetDataFaculty = async () => {
    try {
      await axiosConfig
        .get(`/api/Course/GetCourseById?id=${id}`)
        .then((res) => {
          setLoading(false);

          setCourse(res.data.response);
        })
        .catch((res) => {
          setLoading(false);
          toast.error(res.message);
        });
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    setLoading(true);
    Func_GetDataFaculty();
  }, []);

  return (
    <>
      {loading == false ? (
        <div>
          <HeaderTitleDetailsComponent
            name="Course details"
            imageBackground={Course.thumbnail}
          ></HeaderTitleDetailsComponent>
          <div className="container mx-auto my-2">{parse(Course.detail)}</div>
        </div>
      ) : (
        <div className="h-[100vh]"></div>
      )}
    </>
  );
};
export default CourseDetails;
