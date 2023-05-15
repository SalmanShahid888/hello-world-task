import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [Email, setEmail] = useState<string>("");
  const [Password, setPassword] = useState<string>("");
  const [EmailError, setEmailError] = useState<string | string[]>("");
  const [PasswordError, setPasswordError] = useState<string | string[]>("");
  return (
    <div className="min-h-screen min-w-full bg-[#FAFAFA] flex justify-center items-center">
      <div className="flex flex-col justify-center items-center bg-white shadow-md min-h-[40%] min-w-[35%] rounded-lg py-5">
        <h3 className="text-[#1A3A5F] font-bold font-mulish text-2xl leading-6 my-5">
          Welcome Back!
        </h3>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs bg-[#FAFAFA] focus:ring-0 focus:border-none focus:outline-none"
            value={Email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label className="label">
            <span className="label-text-alt text-red-300">{EmailError[0]}</span>
          </label>
        </div>
        <div className="form-control w-full max-w-xs my-4">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs bg-[#FAFAFA] focus:ring-0 focus:border-none focus:outline-none"
            value={Password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <label className="label">
            <span className="label-text-alt text-red-300">
              {PasswordError[0]}
            </span>
          </label>
        </div>
        <Button
          variant={"primary"}
          size={"lg"}
          className="w-[40%] m-5 px-5"
          onClick={() => navigate("/")}
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
