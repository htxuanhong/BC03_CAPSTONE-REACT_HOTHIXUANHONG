import { Form, Input, message } from "antd";
import React from "react";
import { userService } from "../../services/userService";
import "./RegisterPage.css";

const RegisterPage = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
    userService
      .postDangKy(values)
      .then((res) => {
        message.success("Đăng ký thành công");
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        message.error(err.response.data.content);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    // message.error(errorInfo.response.data.message);
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <div
        style={{
          width: 35,
        }}
      >
        <div value="84">+84</div>
      </div>
    </Form.Item>
  );
  return (
    <Form
      name="basic"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <div className="bg-img min-h-screen pt-12">
        <div className=" max-w-lg text-slate-800 flex flex-col gap-6 bg-form bg-white rounded-lg border py-7 px-5 mx-auto ">
          <h1 className="text-2xl mb-4 font-bold text-red-600">Đăng ký</h1>

          <div className="flex items justify-between items-center">
            <label className="font-semibold ">Tài khoản:</label>
            <Form.Item
              className="input-form bg-input"
              name="taiKhoan"
              rules={[
                {
                  required: true,
                  message: "Đây là trường bắt buộc!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </div>
          <div className="flex items justify-between items-center">
            <label className="font-semibold ">Mật khẩu:</label>

            <Form.Item
              name="matKhau"
              className="bg-input"
              rules={[
                {
                  required: true,
                  message: "Đây là trường bắt buộc!",
                },
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>
          </div>

          <div className="flex items justify-between items-center">
            <label className="font-semibold ">Nhập lại mật khẩu:</label>
            <Form.Item
              name="confirm"
              className="bg-input"
              dependencies={["matKhau"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Đây là trường bắt buộc!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("matKhau") === value) {
                      return Promise.resolve();
                    }

                    return Promise.reject(new Error("Mật khẩu không khớp"));
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>
          </div>

          <div className="flex items justify-between items-center">
            <label className="font-semibold">Họ và tên:</label>
            <Form.Item
              className="input-form bg-input"
              name="hoTen"
              rules={[
                {
                  required: true,
                  message: "Đây là trường bắt buộc!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </div>
          <div className="flex items justify-between items-center">
            <label className="font-semibold">Email:</label>
            <Form.Item
              className="input-form bg-input"
              name="email"
              rules={[
                {
                  type: "email",
                  message: "Email phải đúng định dạng!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </div>
          <div className="flex items justify-between items-center">
            <label className="font-semibold">Số điện thoại:</label>
            <Form.Item
              className="bg-input"
              name="soDt"
              rules={[
                {
                  required: true,

                  message: "Đây là trường bắt buộc!",
                },
              ]}
            >
              <Input
                className="prefix-input"
                addonBefore={prefixSelector}
                style={{
                  width: "100%",
                }}
              />
            </Form.Item>
          </div>
          <button
            htmlType="submit"
            className="py-2 disabled:bg-red-600 px-3 rounded-full border bg-green-300 mt-5 text-gray-700 font-semibold hover:bg-green-600/80 hover:text-white"
          >
            Đăng ký
          </button>
        </div>
      </div>
    </Form>
  );
};

export default RegisterPage;
