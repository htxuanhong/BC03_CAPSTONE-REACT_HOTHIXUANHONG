import { FileOutlined, LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Breadcrumb, Layout, Menu } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { setUserInforAction } from "../../redux/actions/action";
import { localStorageService } from "../../services/localStorageService";
import "./LayoutAdmin.css";

const { Header, Content, Footer, Sider } = Layout;
const LayoutAdmin = () => {
  const [collapsed, setCollapsed] = useState(false);
  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };
  let userInfor = useSelector((state) => state.userReducer.userInfor);
  let dispatch = useDispatch();
  let handleLogout = () => {
    dispatch(setUserInforAction(null));
    localStorageService.removeUserInfor();
    window.location.href = "/";
  };
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo">CINEMA</div>
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1" icon={<UserOutlined />}>
            <NavLink to="/user">Quản lý người dùng</NavLink>
          </Menu.Item>
          <Menu.Item key="2" icon={<FileOutlined />}>
            <NavLink to="/films">Quản lý Films</NavLink>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background text-right "
          style={{
            padding: 0,
          }}
        >
          {!userInfor ? (
            <></>
          ) : (
            <div>
              Xin chào,{" "}
              <span className="text-greenxh font-bold text-lg">
                {userInfor?.hoTen}
              </span>
              <span className="border-l-2 py-1 ml-5 text-grayxh"></span>
              <a
                href
                className="py-2 pr-20 pl-5 rounded font-medium leading-5 text-grayxh text-lg hover:text-orange-600"
                onClick={handleLogout}
              >
                <LogoutOutlined className="inline-flex p-1 mr-2 border rounded-full bg-grayxh text-white text-xl" />
                Đăng xuất
              </a>
            </div>
          )}
        </Header>

        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            Bill is a cat.
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default LayoutAdmin;

// import {
//   DesktopOutlined,
//   LogoutOutlined,
//   UserOutlined,
// } from "@ant-design/icons";
// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { NavLink } from "react-router-dom";
// import { setUserInforAction } from "../../redux/actions/action";
// import { localStorageService } from "../../services/localStorageService";
// import "./LayoutAdmin.css";
// export default function LayoutAdmin() {
//   let userInfor = useSelector((state) => state.userReducer.userInfor);
//   let dispatch = useDispatch();
//   let handleLogout = () => {
//     dispatch(setUserInforAction(null));
//     localStorageService.removeUserInfor();
//     window.location.href = "/Login";
//   };
//   return (
//     <div className="container mx-auto">
//       <div
//         className="flex justify-between items-center h-20 border-2"
//         style={{ background: "#001529" }}
//       >
//         <div className="w-1/6 border-r-2 h-full">
//           <div className="logo rounded">CINEMA</div>
//         </div>
//         {!userInfor ? (
//           <></>
//         ) : (
//           <div>
//             Xin chào,{" "}
//             <span className="text-greenxh font-bold text-lg">
//               {userInfor?.hoTen}
//             </span>
//             <span className="border-l-2 py-1 text-grayxh"></span>
//             <a
//               href
//               className="py-2 rounded font-medium leading-5 text-grayxh text-lg hover:text-orange-600"
//               onClick={handleLogout}
//             >
//               <LogoutOutlined className="inline-flex p-1 mr-2 border rounded-full bg-grayxh text-white text-xl" />
//               Đăng xuất
//             </a>
//           </div>
//         )}
//       </div>

//       <div className="flex border-2">
//         <div className="flex flex-col border-r-2 w-1/6">
//           <NavLink to="/films">
//             <UserOutlined />
//             Quản lý người dùng {""}
//           </NavLink>
//           <NavLink to="/films">
//             <DesktopOutlined /> {""}
//             Quản lý film
//           </NavLink>
//         </div>
//       </div>
//     </div>
//   );
// }
