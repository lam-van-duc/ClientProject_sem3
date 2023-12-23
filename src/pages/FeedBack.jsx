import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import HeaderTitleComponent from "../components/HeaderTitleComponent";
const FeedBack = () => {
  return (
    <div>
      <HeaderTitleComponent name={"FeedBack"}></HeaderTitleComponent>
      <div className="text-center font-bold py-16 mb-16 text-6xl text-orange-400 border-b border-gray-200">
        Community Education Feedback
      </div>
      <Container className="my-4">
        <div className="flex  flex-wrap justify-center w-full">
          <div className="form-input w-1/3">
            <label>Full name:</label>
            <input type="text" />
          </div>
          <div className="form-input w-1/3 pl-2">
            <label>Email:</label>
            <input type="email" />
          </div>
          <div className="form-input w-1/3 pl-2">
            <label>Date:</label>
            <input type="date" data-format="ddmmyyyy" />
          </div>
        </div>
        <div className="form-input">
          <label>What did you enjoy about the ITM College?</label>
          <textarea placeholder="Type here" rows="10"></textarea>
        </div>
        <div className="form-input">
          <label>What do you not like about ITM College?</label>
          <textarea placeholder="Type here" rows="10"></textarea>
        </div>

        <div className="form-input">
          <label>Other comments:</label>
          <textarea placeholder="Type here" rows="10"></textarea>
        </div>
      </Container>
      <div className="border-t border-gray-20 mt-16 py-16">
        <div className="text-center font-bold text-6xl mb-16 text-orange-400 0">
          Thank you !
        </div>
        <div className="text-center">
          <button className="button-outline-app py-2 px-10 font-bold">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedBack;
