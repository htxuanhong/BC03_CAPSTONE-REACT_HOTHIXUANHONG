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
            className="py-2 rounded font-medium leading-5 text-grayxh text-lg "
            onClick={handleLogout}
          >
            <span className="inline-flex p-1  border rounded-full bg-grayxh   ">
              <LogoutOutlined
                style={{
                  fontSize: "20px",
                  color: "white",
                }}
              />
            </span>{" "}
            <span className="hover:text-orange-600">Đăng Xuất</span>
          </a>
        </div>
      ) : (
        <div className="space-x-3  ">
          <a
            href
            className="py-2 rounded font-medium leading-5 text-grayxh text-lg "
            onClick={handleLogin}
          >
            <span className="inline-flex p-1  border rounded-full bg-grayxh   ">
              <LoginOutlined
                style={{
                  fontSize: "20px",
                  color: "white",
                }}
              />
            </span>{" "}
            <span className="hover:text-orange-600 ">Đăng nhập</span>
          </a>
          <span className="border-l-2 py-1 text-grayxh"></span>
          <a
            href
            className="py-2 rounded font-medium leading-5 text-grayxh text-lg  "
            onClick={handleRegister}
          >
            <span className="inline-flex p-1  border rounded-full bg-grayxh ">
              <UserOutlined
                style={{
                  fontSize: "20px",
                  color: "white",
                }}
              />
            </span>{" "}
            <span className="hover:text-orange-600 ">Đăng ký</span>
          </a>
        </div>
      )}
    </div>
  );
}
