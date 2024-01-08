import { useNavigate } from "react-router-dom";
import axiosConfig from "../config/axiosConfig";
import { toast } from "react-toastify";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useState } from "react";
const DepartmentComponent = () => {
  const navigator = useNavigate();
  const [ListDepartment, setListDepartment] = useState([]);

  const showDetailDepartment = (id) => {
    navigator("/TeacherDetails/" + id);
  };

  const getListDepartment = async () => {
    await axiosConfig
      .get("/api/Department")
      .then((res) => {
        setListDepartment(res.data.response);
      })
      .catch((res) => {
        toast.error(res.data.response);
      });
  };

  useEffect(() => {
    getListDepartment();
  }, []);

  return (
    <>
      <div className="grid gap-3 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 my-3 cursor-pointer">
        {ListDepartment.map((item, index) => {
          return (
            <div
              className="flex flex-col overflow-hidden rounded-lg border"
              onClick={() => {
                showDetailDepartment(item.id);
              }}
            >
              <div className="h-[15rem] hoverScale">
                <img src={item.thumbnail} className="h-full object-cover"></img>
              </div>
              <div className="h-[6rem] p-2">
                <div className="text-center text-base font-bold pb-2">
                  {item.name}
                </div>
                <div className="text-sm line-clamp-3 overflow-ellipsis">
                  {item.contactInformation}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default DepartmentComponent;
