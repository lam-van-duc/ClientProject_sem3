import React, { useEffect, useState } from "react";
import HeaderTitleDetailsComponent from "../components/HeaderTitleDetailsComponent";
import parse from "html-react-parser";
import { useParams } from "react-router-dom";
import axiosConfig from "../config/axiosConfig";
import { toast } from "react-toastify";
const DepartmentDetail = () => {
  const { id } = useParams();
  const [Department, setDepartment] = useState({});
  const [loading, setLoading] = useState(true);
  const Func_GetData = async () => {
    try {
      await axiosConfig
        .get(`/api/Department/${id}`)
        .then((res) => {
          setLoading(false);

          setDepartment(res.data.response);
          console.log(res.data.response);
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
    Func_GetData();
  }, []);

  return (
    <>
      {loading == false ? (
        <div>
          <HeaderTitleDetailsComponent
            name={"Department Detail"}
            imageBackground={Department.thumbnail}
          ></HeaderTitleDetailsComponent>
          <div className="container mx-auto">{parse(Department.response)}</div>
        </div>
      ) : (
        <div className="h-[100vh]"></div>
      )}
    </>
  );
};
export default DepartmentDetail;
