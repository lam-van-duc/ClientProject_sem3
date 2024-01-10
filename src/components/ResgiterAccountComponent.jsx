import ErrorText from "../components/ErrorText";
import axiosConfig from "../config/axiosConfig";
import { toast } from "react-toastify";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useState } from "react";
import propTypes from "prop-types";

const schema = yup.object({
  email: yup.string().email("Invalid email !").required("please enter email !"),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
      "Password must be 6 characters or more, contain lowercase letters, uppercase letters, numbers and special characters"
      //1 chữ thường , 1 chữ hoa và 1 ký tự đặc biệt
    )
    .required("please enter password !"),
  confirmPassword: yup.string().required("please enter confirm password !"),
  studentCode: yup.string().required("please enter student code !"),
});

const RegisterAccountComponent = ({ onMoveRegister }) => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const HandleSubmitFrom = async (data) => {
    try {
      if (data.password != data.confirmPassword) {
        return toast.success("password and confirm password do not match.");
      } else {
        await axiosConfig
          .post("/api/User/SignUp", data)
          .then((res) => {
            reset();
            toast.success("Register success");
          })
          .catch((res) => {
            toast.error(res.response);
          });
      }
    } catch (e) {
      toast.error("Resgister account student error !");
    }
  };

  return (
    <div>
      <form className="px-5 w-full" onSubmit={handleSubmit(HandleSubmitFrom)}>
        <div className="form-input">
          <label>Email</label>
          <input type="email" autoComplete="false" {...register("email")} />
          <ErrorText text={errors.email?.message}></ErrorText>
        </div>
        <div className="form-input">
          <label>Student code</label>
          <input
            type="text"
            autoComplete="false"
            {...register("studentCode")}
          />
          <ErrorText text={errors.studentCode?.message}></ErrorText>
        </div>
        <div className="form-input">
          <label>Password</label>
          <input
            type={showPassword ? "text" : "password"}
            {...register("password")}
          />
          <ErrorText text={errors.password?.message}></ErrorText>
        </div>
        <div className="form-input">
          <label>Confirm Password</label>
          <input
            type={showPassword ? "text" : "password"}
            {...register("confirmPassword")}
          />
          <ErrorText text={errors.confirmPassword?.message}></ErrorText>
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
          Register
        </button>
      </form>
      <div className="w-full text-center font-bold text-base mt-2">
        Already have an account?
        <span
          className="text-orange-400 hover:underline cursor-pointer select-none"
          onClick={onMoveRegister}
        >
          {" Login."}
        </span>
      </div>
    </div>
  );
};

RegisterAccountComponent.propTypes = {
  onMoveRegister: propTypes.func,
};
export default RegisterAccountComponent;
