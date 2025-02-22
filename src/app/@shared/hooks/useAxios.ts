import { useEffect, useState } from 'react';
import axios, { Method } from 'axios';

interface Props {
  baseURL: string;
  headers?: { 'Content-Type': 'application/json' };
}

export const useAxios = ({ baseURL, headers }: Props) => {
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [controller, setController] = useState<AbortController | null>(null);

  const axiosFetch = async (configObj: {
    method: Method;
    url: string;
    body?: any;
  }) => {
    const { method, url, body } = configObj;

    const axiosInstance = axios.create({
      baseURL,
      headers
    });

    try {
      setLoading(true);

      const ctrl = new AbortController();
      setController(ctrl);

      const requestConfig = {
        signal: ctrl.signal,
        ...(body ? { data: body } : {})
      };

      const res = await axiosInstance.request({
        method,
        url,
        ...requestConfig
      });

      setResponse(res.data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    return () => controller?.abort();
  }, [controller]);

  return { response, error, loading, axiosFetch };
};
