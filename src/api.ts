import axios, { AxiosInstance } from "axios";
import { URL } from "./helpers/const";

type TInstance = {
  main: AxiosInstance;
  kp: AxiosInstance;
};

const createApi = (): TInstance => {
  const main = axios.create({
    baseURL: URL.MAIN_BASE,
    timeout: 10000,
  });
  const kp = axios.create({
    baseURL: URL.KP_BASE,
    timeout: 10000,
  });
  return { main, kp };
};

export default createApi;
