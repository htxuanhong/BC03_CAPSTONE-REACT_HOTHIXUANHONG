import React from "react";
import { useSelector } from "react-redux";
import { PacmanLoader } from "react-spinners";

export default function SpinnerComponent() {
  const { isLoading } = useSelector((state) => state.spinnerSlice);
  return isLoading ? (
    <div className="fixed h-screen w-screen bg-black z-50 flex items-center justify-center">
      <PacmanLoader size={150} color={"#FFA500"} />
    </div>
  ) : (
    <></>
  );
}
