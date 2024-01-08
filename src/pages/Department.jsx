import React, { useEffect } from "react";
import DepartmentComponent from "../components/DepartmentComponent";
import HeaderTitleComponent from "../components/HeaderTitleComponent";

const Department = () => {
  return (
    <>
      <HeaderTitleComponent name={"Department"}></HeaderTitleComponent>
      <div className="container mb-5">
        <DepartmentComponent></DepartmentComponent>
      </div>
    </>
  );
};
export default Department;
