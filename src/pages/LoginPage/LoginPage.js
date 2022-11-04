import Lottie from "lottie-react";
import React from "react";
import animate from "../../assets/animation-lottie.json";
import FormLogin from "./FormLogin/FormLogin";
export default function LoginPage() {
  return (
    <div
      className=" w-screen max-h-max flex items-center m-auto"
      style={{
        backgroundImage: `url(https://www.pixelstalk.net/wp-content/uploads/images6/Aesthetic-Minimalist-Wallpaper-Paper-Airplanes.png)`,
        backgroundPosition: `center center`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        maxWidth: 1200,
      }}
    >
      <div className="w-1/2 justify-center xl:flex hidden ">
        <div className="w-1/2 h-1/2 ">
          <Lottie animationData={animate} loop={true} />
          {/* </div> */}
        </div>
      </div>
      <div className="w-full xl:w-1/2 h-full flex justify-center items-center">
        <FormLogin />
      </div>
    </div>
  );
}
