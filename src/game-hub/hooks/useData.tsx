import { useEffect, useState } from "react";
import create from "../services/http-service";
import { AxiosRequestConfig } from "axios";
import { BsEmojiWink } from "react-icons/bs";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

interface Props {
  endpoint: string;
  requestConfig?: AxiosRequestConfig;
  deps?: any[];
}

const useData = <T,>({ endpoint, requestConfig, deps }: Props) => {
  ``;
  console.log(`use Data Hook ${requestConfig?.params?.platforms}`);
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(
    () => {
      async function GetData() {
        try {
          setLoading(true);
          let service = create(endpoint);
          let getResponse = await service.getAllByConfiguration<
            FetchResponse<T>
          >({ ...requestConfig });
          setData((getResponse.data).results);
          console.log(getResponse.data?.results);
        } catch (error: any) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      }
      GetData();
    },
    deps ? [...deps] : []
  );
  return { data, error, isLoading };
};
export default useData;
