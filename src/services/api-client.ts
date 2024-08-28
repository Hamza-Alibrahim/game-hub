import axios, { AxiosRequestConfig } from "axios";

interface FetchResonse<T> {
  count: number;
  next?: string | null;
  results: T[];
}

const axiosApi = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "b37b4862d4424d2cb414a15bacfcebc0",
  },
});

class ApiClient<T> {
  endPoint: string;
  constructor(endPoint: string) {
    this.endPoint = endPoint;
  }

  getAll = async (config: AxiosRequestConfig) => {
    const res = await axiosApi.get<FetchResonse<T>>(this.endPoint, config);
    return res.data;
  };

  get = async (id: number | string) => {
    const res = await axiosApi.get<T>(this.endPoint + "/" + id);
    return res.data;
  };
}

export default ApiClient;
