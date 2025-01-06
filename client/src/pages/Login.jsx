import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import TextBox from "../componets/TextBox";
import { Button } from "../componets/Button";

const Login = () => {
  const user = "";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const submitHandler = async (data) => {
    console.log(data);
  };

  useEffect(() => {
    user && navigate("/dashboard");
  }, [user]);

  return (
    <div className="w-full min-h-screen flex items-center justify-center flex-col lg:flex-row bg-[#f3f4f6]">
      <div className="w-full md:w-auto gap-0 flex md:gap-x-96 flex-col md:flex-row items-center justify-center">
        {/* Left side */}
        <div className="h-full w-full lg:w-2/3 flex flex-col items-center justify-center">
          <div className="w-full md:max-w-lg 2xl:max-w-3xl flex flex-col items-center justify-center gap-5 md:gap-y-10 2xl:-mt-20">
            <span className="flex gap-1 py-1 px-3 border rounded-full text-sm md:text-base border-gray-300 text-gray-600">
              Manage all your task in one place1
            </span>
            <p className="flex flex-col gap-0 text-4xl md:text-6xl font-black text-blue-700 leading-tight">
              <span>Cloud-Based</span>
              <span>Task Manager</span>
            </p>
            <div className="cell">
              <div className="circle rotate-in-up-left"></div>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="w-full md:w-1 p-4 md:p-1 flex flex-col justify-center items-center">
          <form
            onSubmit={handleSubmit(submitHandler)}
            className="form-container w-full md:w-[400px] flex-col gap-y-8 bg-white px-10 pt-14 pb-14">
            <div className="">
              <p className="text-blue-600 text-3xl font-bold text-center">
                Welcome backk!
              </p>
              <p className="text-center text-gray-700 text-base ">
                Keep all your credential safe.
              </p>
            </div>

            {/* form input */}
            <div>
              <TextBox
                placeholder="email@example.com"
                type="email"
                name="email"
                label="Email Address"
                className="w-full rounded-full"
                register={register("email", {
                  required: "Email Address is required!",
                })}
                error={errors.email ? errors.email.message : ""}
              />
              <TextBox
                placeholder="your password"
                type="password"
                name="password"
                label="Password"
                className="w-full rounded-full"
                register={register("password", {
                  required: "Password is really required!",
                })}
                error={errors.password ? errors.password.message : ""}
              />

              <span className="text-sm text-gray-500 hover:text-blue-600 hover:underline cursor-pointer">
                Forget Password?
              </span>

              <Button
                type="submit"
                label="Submit"
                className="w-full bg-blue-600 rounded-full mt-6 text-white"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
