import { MenuOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";
import UserNav from "./UserNav";

export default function HeaderMobile() {
  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: (
            <NavLink to="" className="font-medium">
              Lịch chiếu
            </NavLink>
          ),
        },
        {
          key: "12",
          label: (
            <NavLink to="" className="font-medium">
              Cụm rạp
            </NavLink>
          ),
        },
        {
          key: "3",
          label: (
            <NavLink to="" className="font-medium">
              Tin tức
            </NavLink>
          ),
        },
        {
          key: "4",
          label: (
            <NavLink to="" className="font-medium">
              Ứng dụng
            </NavLink>
          ),
        },
      ]}
    ></Menu>
  );
  return (
    <div className=" w-full bg-gray-100">
      <div className="mx-auto max-w-max py-1">
        <div className="text-2xl font-bold text-red-500">CINEMA*</div>
      </div>
      <div className="flex justify-between items-center border-t-2 py-1 px-3">
        <div>
          <Dropdown overlay={menu} trigger={["click"]}>
            <a onClick={(e) => e.preventDefault()} href>
              <Space>
                <MenuOutlined className="lg:text-xl text-lg text-grayxh hover:text-orange-600 transition duration-200" />
              </Space>
            </a>
          </Dropdown>
        </div>
        <div>
          <UserNav />
        </div>
      </div>
    </div>
  );
}
