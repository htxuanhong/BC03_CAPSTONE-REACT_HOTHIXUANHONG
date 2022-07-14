import Lottie from "lottie-react";
import React from "react";
import bgAnimate from "../../assets/login-animate.json";
import FormLogin from "./FormLogin/FormLogin";
export default function LoginPage() {
  return (
    <div className=" w-screen h-screen flex items-center">
      <div className="flex w-full h-full ">
        <div className="w-1/2 h-full ">
          {/* <div className="w-full h-full scale-50"> */}
          <Lottie animationData={bgAnimate} />
          {/* </div> */}
        </div>
        <div className="w-1/2 mx-auto p-5 rounded bg-white">
          <FormLogin />
        </div>
      </div>
    </div>
  );
}
