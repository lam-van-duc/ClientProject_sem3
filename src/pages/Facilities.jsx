import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import HeaderTitleComponent from "../components/HeaderTitleComponent";
import ButtonOnTopComponent from "../components/ButtonOnTopComponent";
import axiosConfig from "../config/axiosConfig";
import { toast } from "react-toastify";
const Facilities = () => {
  const { id } = useParams();
  const [facility, setFacility] = useState({});
  const Func_GetDataFacility = async () => {
    try {
      await axiosConfig
        .get(`/api/Facility/${id}`)
        .then((res) => {
          setFacility(res.data.response);
        })
        .catch((res) => {
          toast.error(res.message);
        });
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    Func_GetDataFacility();
  }, []);

  return (
    <>
      {facility.name != null ? (
        <div>
          <div>
            <HeaderTitleComponent name={facility.name}></HeaderTitleComponent>
          </div>
          <div className="container mx-auto my-3">
            {parse(facility.description)}
          </div>
          <ButtonOnTopComponent></ButtonOnTopComponent>
        </div>
      ) : (
        <div className="h-[100vh]"></div>
      )}
    </>
  );
};

export default Facilities;
