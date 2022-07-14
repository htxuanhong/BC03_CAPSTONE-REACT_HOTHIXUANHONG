import { Button, Form, Input, message } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setUserInforAction } from "../../../redux/actions/userAction";
import { localStorageService } from "../../../services/localStorageService";
import { userService } from "../../../services/userService";

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
      <Form.Item
        label="Username"
        name="taiKhoan"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="matKhau"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <div className="text-center">
        <Button className="bg-blue-500 text-white mx-auto" htmlType="submit">
          Đăng nhập
        </Button>
      </div>
    </Form>
  );
}
