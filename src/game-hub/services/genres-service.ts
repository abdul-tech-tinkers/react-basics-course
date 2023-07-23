import create from "./http-service";
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}
export interface FetchResponse<T> {
  count: number;
  results: T[];
}
export default create("/genres");
