import { Form, Input, message } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setUserInforAction } from "../../../redux/actions/action";
import { localStorageService } from "../../../services/localStorageService";
import { userService } from "../../../services/userService";
import "./FormLogin.css";

export default function FormLogin() {
  // can thiệp thanh URL, dùng để điều hướng trang
  let history = useHistory();

  let dispatch = useDispatch();
  const onFinish = (values) => {
    console.log("Success:", values);

    userService
      .postDangNhap(values)
      .then((res) => {
        localStorageService.setUserInfor(res.data.content);
        dispatch(setUserInforAction(res.data.content));
        message.success("Đăng nhập thành công");
        setTimeout(() => {
          history.push("/");
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
        message.error(err.response.data.message);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="bg-login">
      <div className="login-box">
        <h3>Đăng nhập</h3>
        <Form
          name="basic"
          layout="vertical"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <div className="user-box">
            <Form.Item
              label="Tài khoản"
              name="taiKhoan"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập tài khoản!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </div>
          <div className="user-box">
            <Form.Item
              label="Mật khẩu"
              name="matKhau"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập mật khẩu!",
                },
              ]}
            >
              <Input.Password className="bg-slate-400" />
            </Form.Item>
          </div>

          <button htmlType="submit">
            <span />
            <span />
            <span />
            <span />
            Đăng nhập
          </button>
          <div className="text-white pt-2">
            Bạn chưa có tài khoản? {""}
            <span>
              <a href="/register" className="underline text-blue-500">
                Đăng kí thôi nào!
              </a>
            </span>
          </div>
        </Form>
      </div>
    </div>
  );
}
