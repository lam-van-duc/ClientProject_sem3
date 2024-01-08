import React, { useState, useEffect } from "react";
import HeaderTitleDetailsComponent from "../components/HeaderTitleDetailsComponent";
import { useLocation, useParams } from "react-router-dom";
import axiosConfig from "../config/axiosConfig";
import { toast } from "react-toastify";
const TeacherDetail = () => {
  const { id } = useParams();
  const [Faculty, setFaculty] = useState({});
  const [loading, setLoading] = useState(true);

  const Func_GetDataFaculty = async () => {
    try {
      await axiosConfig
        .get(`/api/Faculty/${id}`)
        .then((res) => {
          setLoading(false);

          setFaculty(res.data.response);
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
            name="Teacher details"
            imageBackground={Faculty.thumbnail}
          ></HeaderTitleDetailsComponent>
          <div className="container mx-auto">
            <div className="flex flex-row flex-wrap p-4 bg-gray-200">
              <div className="p-4 w-80">
                <div className="w-full min-h-[15rem] bg-white">
                  <img
                    src={Faculty.thumbnail}
                    className="object-contain w-full"
                  />
                </div>
                <div className="bg-gray-400 my-5 h-[1px]"></div>
                <div className="text-center font-bold text-xl">
                  {Faculty.name}
                </div>
                <div className="my-2 flex flex-row items-center">
                  <i
                    class="far fa-phone-volume text-orange-400"
                    style={{ fontSize: "20px", paddingRight: "10px" }}
                  ></i>
                  <div>{Faculty.phoneNumber}</div>
                </div>
                <div className="my-2 flex flex-row items-center">
                  <i
                    class="far fa-map-marker-alt text-orange-400"
                    style={{ fontSize: "20px", paddingRight: "10px" }}
                  ></i>
                  <div>{Faculty.address}</div>
                </div>
                <div className="my-2 flex flex-row items-center">
                  <i
                    class="far fa-envelope text-orange-400"
                    style={{ fontSize: "20px", paddingRight: "10px" }}
                  ></i>
                  <div>{Faculty.email}</div>
                </div>
              </div>

              <div className="p-4 flex-1">
                <div className="bg-white p-4 min-h-[32rem]">
                  {Faculty.detail}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-[100vh]"></div>
      )}
    </>
  );
};
export default TeacherDetail;
