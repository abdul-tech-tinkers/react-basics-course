import { Axios, AxiosRequestConfig } from "axios";
import apiClient from "./api-client";

interface Entity {
  id: number;
}

class HttpService {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll<T>() {
    return apiClient.get<T[]>(this.endpoint);
  }

  getAllByConfiguration<T>(requestconfig?: AxiosRequestConfig) {
    console.log("inside get all by configuration ");
    return apiClient.get<T[]>(this.endpoint, { ...requestconfig });
  }

  delete(id: number) {
    return apiClient.delete(this.endpoint + "/" + id);
  }

  create<T>(entity: T) {
    return apiClient.post(this.endpoint, entity);
  }

  update<T extends Entity>(entity: T) {
    return apiClient.patch(this.endpoint + "/" + entity.id, entity);
  }
}

const create = (endpoint: string) => new HttpService(endpoint);

export default create;
