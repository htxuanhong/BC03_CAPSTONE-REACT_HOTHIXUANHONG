import { LayoutTheme } from "../HOC/Layout";
import NotFoundPage from "../pages/404Page/404Page";
import Dashboard from "../pages/Admin/Dashboard/Dashboard";
import Films from "../pages/Admin/Films/Films";
import UserAdmin from "../pages/Admin/UserAdmin/UserAdmin";
import DetailPage from "../pages/DetailPage/DetailPage";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import PickGroupPage from "../pages/PickGroupPage/PickGroupPage";
import PurchasePage from "../pages/PurchasePage/PurchasePage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";

export const userRoutes = [
  {
    path: "/",
    component: <LayoutTheme Component={HomePage} />,
    exact: true,
    isUseLayout: true,
  },

  {
    path: "/detail/:id",
    component: <LayoutTheme Component={DetailPage} />,
    isUseLayout: true,
  },
  {
    path: "/pick-group/:id",
    component: <LayoutTheme Component={PickGroupPage} />,
    isUseLayout: true,
  },
  {
    path: "/login",
    component: LoginPage,
  },
  {
    path: "/register",
    component: <LayoutTheme Component={RegisterPage} />,
    isUseLayout: true,
  },
  {
    path: "/purchase/:id",
    component: <LayoutTheme Component={PurchasePage} />,
    isUseLayout: true,
  },
  {
    path: "/admin",
    component: Dashboard,
  },
  {
    path: "/films",
    component: Films,
  },
  {
    path: "/user",
    component: UserAdmin,
  },
  {
    path: "*",
    component: NotFoundPage,
  },
];
