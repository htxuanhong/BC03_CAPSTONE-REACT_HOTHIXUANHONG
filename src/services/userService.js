import axios from "axios";
import { BASE_URL, TOKEN_CYBERSOFT } from "./configURL";

export const userService = {
  postDangNhap: (dataLogin) => {
    return axios({
      method: "POST",
      url: `${BASE_URL}/api/QuanLyNguoiDung/DangNhap`,
      data: dataLogin,
      headers: {
        TokenCybersoft: TOKEN_CYBERSOFT,
      },
    });
  },
};
