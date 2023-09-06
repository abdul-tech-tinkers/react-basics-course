import axios, { AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "1ebb9e0fd55247ea9928eeaac6ac98c7",
  },
});

class ApiClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = async (config: AxiosRequestConfig) => {
    var response = await axiosInstance.get<FetchResponse<T>>(
      this.endpoint,
      config
    );
    return response.data;
  };
}

export default ApiClient;

export interface FetchResponse<T> {
  count: number;
  results: T[];
  next: string | null;
}
