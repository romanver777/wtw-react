import axios, { AxiosInstance } from "axios";

type TInstance = {
  main: AxiosInstance;
  kp: AxiosInstance;
};

const createApi = (): TInstance => {
  const main = axios.create({
    baseURL: "https://run.mocky.io/v3/",
    timeout: 5000,
  });
  const kp = axios.create({
    baseURL: "https://kinopoiskapiunofficial.tech/api/v2.2/films/",
    timeout: 5000,
  });
  return { main, kp };
};

export default createApi;
