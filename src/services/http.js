import { isLogin, refreshTokenLS, accessTokenLS } from "@/localStorage/auth";
import axios from "axios";

const httpRequest = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BASE_API_URL}/api`,
});
// httpRequest.interceptors.response.use(
//   async function (response) {
//     return response;
//   },
//   async function (error) {
//     const originalReq = error.config;
//     console.log(originalReq);

//     if (error.response.status == 401 && !originalReq._retry) {
//       originalReq._retry = true;
//       const refreshToken = refreshTokenLS.get();
//       axios.defaults.withCredentials = true;
//       return axios
//         .post(`${process.env.NEXT_PUBLIC_BASE_API_URL}/refresh`, {
//           refresh: refreshToken,
//         })
//         .then((response) => {
//           console.log(response.data.data);
//           refreshTokenLS.set(response.data.data.refresh_token);
//           axios.defaults.withCredentials = true;
//           return httpRequest(originalReq);
//         })
//         .catch((error) => {
//           if (error.response.status == 401) {
//             refreshTokenLS.remove();
//             accessTokenLS.remove();
//             isLogin.remove();
//             window.location.href = `${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`;
//           }
//         });
//     }
//     return Promise.reject(error);
//   }
// );
export { httpRequest };
