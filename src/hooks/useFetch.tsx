import { useState, useEffect, useRef } from "react";
import { axiosClient } from "../api";
import { useSearchParams } from "react-router-dom";
import { useErrorBoundary } from "react-error-boundary";
import { AxiosError } from "axios";

type TypeUseFetch = <DataType>(
  url: string
) => [DataType | null, Number, React.Dispatch<React.SetStateAction<number>>];

const useFetch: TypeUseFetch = <ReturnDataType,>(url: string) => {
  const { showBoundary } = useErrorBoundary();
  const [data, setData] = useState<ReturnDataType | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const abortControllerRef = useRef<AbortController | null>(null);
  const [searchParams] = useSearchParams();
  // const limit = searchParams.get("limit");
  const skip = searchParams.get("skip");

  useEffect(() => {
    abortControllerRef.current?.abort();
    abortControllerRef.current = new AbortController();

    async function getData(): Promise<any> {
      const res = await axiosClient.get(url, {
        signal: abortControllerRef.current?.signal,
        params: {
          limit: 150,
          skip: skip ? Number(skip) * pageNumber : 0,
        },
      });

      if (res.status == 200 || res?.config?.signal?.aborted == true) {
        return res;
      }

      if (!res.status) {
        const response = res as unknown as AxiosError;
        if (response?.message.includes("404")) {
          throw Error("A server error occured. No response receieved");
        }
        if (
          response?.message.includes("Network Error") ||
          response?.code?.includes("ERR_NETWORK")
        ) {
          throw Error("No internet! Please make sure you are connected to the internet");
        }
      }
    }

    getData()
      .then((res) => setData(res.data))
      .catch((err) => {
        showBoundary(err);
        throw Error(err);
      });
    return () => {
      setPageNumber(1);
    };
  }, []);

  return [data, pageNumber, setPageNumber];
};

export default useFetch;
