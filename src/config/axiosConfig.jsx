import axios, { AxiosInstance } from "axios";
import CookieService from "./CookieService";

class Http {
  instance: AxiosInstance;
  constructor() {
    this.instance = axios.create({
      baseURL: "http://localhost:5080",
      headers: {
        "Content-Type": "application/json",
      },
    });

    this.instance.interceptors.request.use(
      async (config) => {
        const token = await CookieService.getToken("token");
        config.headers.Authorization = `Bearer ${token}`;
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // this.instance.interceptors.response.use(
    //     (response) => {
    //         return response;
    //     },
    //     async (error) => {
    //         const refreshToken = await this.GetRefreshToken();
    //         if (error.response && error.response.status === 401 && refreshToken) {
    //             try {
    //                 await this.RefreshToken(refreshToken).then(async (data) => {
    //                     await Token.saveToken(data.data);
    //                     const config = error.config;
    //                     config.headers.Authorization = `Bearer ${data.data.accessToken}`;
    //                     return axios(config);
    //                 });
    //             } catch (error) {
    //                 console.error('Error refreshing token:', error);
    //                 return Promise.reject(error);
    //             }
    //         } else {
    //             return Promise.reject(error);
    //         }
    //     }
    // );
  }

  // async RefreshToken(refreshToken: string): Promise<HttpReponse<Token>> {
  //     const data = {
  //         token: refreshToken
  //     };
  //     const url = `/api/Authentication/GetAccessToken`;
  //     try {
  //         const res = await this.instance.post(url, data);
  //         return res.data;
  //     } catch (err: unknown) {
  //         throw err.response.data;
  //     }
  // }

  // async GetRefreshToken() {
  //     try {
  //         const token = await Token.loadToken();
  //         if (token) {
  //             const expireRefreshToken = token?.expireRefreshToken;
  //             const expireRefreshTokenDate = new Date(expireRefreshToken);
  //             const currentDate = new Date();
  //             if (currentDate > expireRefreshTokenDate) {
  //                 return null;
  //             }
  //             return token.refreshToken;
  //         }
  //         return null;
  //     } catch (error) {
  //         console.error('Error getting RefreshToken:', error);
  //         throw error;
  //     }
  // }
}

const http = new Http().instance;

export default http;
