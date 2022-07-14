import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserInforAction } from "../../redux/actions/userAction";
import { localStorageService } from "../../services/localStorageService";

export default function UserNav() {
  let userInfor = useSelector((state) => state.userReducer.userInfor);
  console.log("userInfor: ", userInfor);
  let dispatch = useDispatch();

  let handleLogout = () => {
    dispatch(setUserInforAction(null));
    // GP01 - GP08;
    localStorageService.removeUserInfor();
    window.location.href = "/";
  };
  let handleLogin = () => {
    dispatch(setUserInforAction(null));
    localStorageService.setUserInfor();
    window.location.href = "/login";
  };
  let handleRegister = () => {
    dispatch(setUserInforAction(null));
    localStorageService.getUserInfor();
    window.location.href = "/register";
  };
  return (
    <div>
      {userInfor ? (
        <div className="space-x-3">
          {" "}
          <span>{userInfor?.hoTen}</span>{" "}
          <button
            onClick={handleLogout}
            className=" border-gray-700 border-2 px-4 py-2 rounded text-gray-700"
          >
            Đăng xuất
          </button>
        </div>
      ) : (
        <div className="space-x-3">
          <button
            className=" border-blue-700 border-2 px-4 py-2 rounded text-blue-700"
            onClick={handleLogin}
          >
            Đăng nhập
          </button>
          <button
            onClick={handleRegister}
            className=" border-red-700 border-2 px-4 py-2 rounded text-red-700"
          >
            Đăng kí
          </button>
        </div>
      )}
    </div>
  );
}
