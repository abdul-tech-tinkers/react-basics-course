import { useEffect, useState } from "react";
import create from "../services/http-service";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

interface Props {
  endpoint: string;
}

const useData = <T,>({ endpoint }: Props) => {
  ``;
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    async function GetData() {
      try {
        setLoading(true);
        let service = create(endpoint);
        let getResponse = await service.getAll<FetchResponse<T>>();
        setData(getResponse.data.results);
        console.log(getResponse.data.results);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    GetData();
  }, []);
  return { data, error, isLoading };
};
export default useData;
