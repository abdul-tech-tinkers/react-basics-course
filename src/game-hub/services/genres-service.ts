import create from "./http-service";
export interface Genre {
  id: number;
  name: string;
}
export interface GetGenreResponse {
  count: Number;
  results: Genre[];
}
export default create("/genres");
