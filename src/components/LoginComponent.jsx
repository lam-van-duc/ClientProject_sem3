import ErrorText from "../components/ErrorText";
import axiosConfig from "../config/axiosConfig";
import { toast } from "react-toastify";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useState } from "react";
import propTypes from "prop-types";
import CookieService from "../config/CookieService";
import { useLocation } from "react-router-dom";

const schema = yup.object({
  email: yup.string().email("Invalid email !").required("please enter email !"),
  password: yup.string().required("please enter password !"),
});

const LoginComponent = ({ onMoveLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const HandleSubmitFrom = async (data) => {
    await axiosConfig
      .post("/api/User/SignIn", data)
      .then((res) => {
        CookieService.saveToken("token", res.data.response);
        toast.success("Submit form success.");
        window.location.reload();
      })
      .catch((res) => {
        toast.error("Invalid infomation.");
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(HandleSubmitFrom)}>
        <div className="px-5 w-full">
          <div className="form-input">
            <label>Email</label>
            <input type="email" {...register("email")} />
            <ErrorText text={errors.email?.message}></ErrorText>
          </div>
          <div className="form-input">
            <label>Password</label>
            <input
              type={showPassword ? "text" : "password"}
              {...register("password")}
            />
            <ErrorText text={errors.password?.message}></ErrorText>
          </div>
          <div className="flex flex-row items-center justify-start mb-3">
            <input
              className="w-4 h-4"
              type="checkbox"
              name="showPasswordLogin"
              checked={showPassword}
              onChange={(e) => setShowPassword(!showPassword)}
            />
            <label className="text-sm ml-2">Show password</label>
          </div>
          <button
            className="button-app w-full font-bold py-2 rounded-full"
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
      <div className="w-full text-center font-bold text-base mt-2">
        Don't have an account?
        <span onClick={onMoveLogin} className="text-orange-400 cursor-pointer">
          {" Register."}
        </span>
      </div>
    </div>
  );
};
LoginComponent.propTypes = {
  onMoveLogin: propTypes.func,
};
export default LoginComponent;
