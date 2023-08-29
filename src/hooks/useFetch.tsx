import { useState, useEffect, useRef } from "react";
import { axiosClient } from "../api";

const useFetch = <ReturnDataType,>(url: string) : [ReturnDataType|null, React.MutableRefObject<AbortController | null>] => {
  const [data, setData] = useState<ReturnDataType|null>(null);
  const abortControllerRef = useRef<AbortController|null>(null)

  useEffect(() => {
    abortControllerRef.current?.abort()
    abortControllerRef.current = new AbortController()

    async function getData() : Promise<ReturnDataType>{
      const res = await axiosClient.get<ReturnDataType>(url,{signal:abortControllerRef.current?.signal})
      return res.data
    }

    getData().then(res => setData(res))
  }, []);

  return [data, abortControllerRef];
};

export default useFetch;
