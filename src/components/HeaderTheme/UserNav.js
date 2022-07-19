import { LoginOutlined, LogoutOutlined, UserOutlined } from "@ant-design/icons";
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
    localStorageService.removeUserInfor();
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
          <span className="hover:text-orange-600 text-grayxh font-bold">
            {userInfor?.hoTen}
          </span>{" "}
          <span className="border-l-2 py-1 text-grayxh"></span>
          <a
            href
            className="py-2 rounded font-medium leading-5 text-grayxh text-lg hover:text-orange-600"
            onClick={handleLogout}
          >
            <LogoutOutlined className="inline-flex p-1 mr-2 border rounded-full bg-grayxh text-white text-xl" />
            Đăng Xuất
          </a>
        </div>
      ) : (
        <div className="space-x-3  ">
          <a
            href
            className="py-2 rounded font-medium leading-5 text-grayxh text-lg hover:text-orange-600"
            onClick={handleLogin}
          >
            <LoginOutlined className="inline-flex p-1 mr-2 border rounded-full bg-grayxh text-white text-xl" />
            Đăng nhập
          </a>
          <span className="border-l-2 py-1 text-grayxh"></span>
          <a
            href
            className="py-2 rounded font-medium leading-5 text-grayxh text-lg hover:text-orange-600"
            onClick={handleRegister}
          >
            <UserOutlined className="inline-flex p-1 mr-2 border rounded-full bg-grayxh text-white text-xl" />
            Đăng ký
          </a>
        </div>
      )}
    </div>
  );
}
