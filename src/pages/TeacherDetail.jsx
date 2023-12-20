import React from "react";
import { Container } from "react-bootstrap";
import TeacherComponent from "../components/TeacherComponent";
import { useParams } from "react-router-dom";
const TeacherDetail = () => {
  const { id } = useParams();
  const teacher = {
    id: 5,
    image: "https://ordainit.com/educate/assets/img/team/team-1-7.jpg",
    name: "wan kanda",
    birthday: "29-12-1998",
    Position: "employee",
    phoneNumber: "0985 857 541",
    location: "Hudson, Wisconsin(WI), 54016",
    mail: "govillage@gmail.com",
  };

  return (
    <div>
      <div
        className="w-full h-96 bg-cover"
        style={{
          backgroundImage: `url(https://ordainit.com/educate/assets/img/breadcrumb/breadcrumb.jpg)`,
        }}
      >
        <div
          className="flex h-full flex-col justify-center items-center"
          style={{
            backgroundColor: "rgba(0, 0, 139, 0.3)",
          }}
        >
          <div className="text-center font-bold text-5xl text-white">
            Teacher details
          </div>
          <div className="text-white text-base">
            <a href="/" className="cursor-pointer text-white no-underline">
              Home
            </a>
            <span className="mx-2">//</span>
            <span> Teacher details</span>
          </div>
        </div>
      </div>
      <Container>
        <div className="flex flex-row flex-wrap p-4 bg-gray-200">
          <div className="p-4 w-80">
            <img src={teacher.image} className="object-contain w-full" />
            <div className="bg-gray-400 my-5 h-[1px]"></div>
            <div className="my-2 flex flex-row items-center">
              <i
                class="far fa-phone-volume text-orange-400"
                style={{ fontSize: "20px", paddingRight: "10px" }}
              ></i>
              <div>{teacher.phoneNumber}</div>
            </div>
            <div className="my-2 flex flex-row items-center">
              <i
                class="far fa-map-marker-alt text-orange-400"
                style={{ fontSize: "20px", paddingRight: "10px" }}
              ></i>
              <div>{teacher.location}</div>
            </div>
            <div className="my-2 flex flex-row items-center">
              <i
                class="far fa-envelope text-orange-400"
                style={{ fontSize: "20px", paddingRight: "10px" }}
              ></i>
              <div>{teacher.mail}</div>
            </div>
          </div>

          <div className="p-4 flex-1">
            <div className="bg-white p-4">
              <div className="font-bold text-4xl">{teacher.name}</div>
              <div className="text-sm py-2">{teacher.Position}</div>
              <div className="py-2">
                <p>
                  It's time to clinically test basketball in the target market.
                  Let it fly in said fear in good times. Venenatis large bed
                  frill urn porttitor rhoncus pain. The bow is said to have as
                  many varieties as two, but it has been pursued to the masses.
                </p>
                <p>
                  It's time to clinically test basketball in the target market.
                  The initial fear was voiced but now it is a huge economic
                  opportunity.
                </p>
              </div>
              <div className="font-bold text-2xl">Education:</div>
              <div className="py-2">
                <p>
                  I've spent years finding the "formula" for teaching technical
                  skills in a classroom setting, and I'm really excited to
                  finally share my expertise with you. I can confidently say
                  that my online courses are without a doubt the most
                  comprehensive on the market.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>Teacher other</div>
        </div>
      </Container>
    </div>
  );
};
export default TeacherDetail;
