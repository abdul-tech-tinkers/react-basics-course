import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "1ebb9e0fd55247ea9928eeaac6ac98c7",
  },
});

export interface FetchResponse<T> {
  count: number;
  results: T[];
}
