import { useEffect, useState } from "react";
import type { TodoProps } from "../components/TodoItem";

export const useFetch = () => {
    const [data,setData] = useState<TodoProps[]>([]);
    const [loading,setLoading] = useState<boolean>(true);
    const [error, setError] = useState< string | null >(null);
    const [refresh, setRefresh] = useState(false);

    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/todo`);
        if (!response.ok) {
          throw new Error('Error fetching data');
        }
        const res = await response.json();
        setData(res);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally{
        setLoading(false);
      }
    };

  useEffect(() => {
    fetchData();
  }, [fetchData, refresh]);

  const refetch = () => setRefresh(prev => !prev);

  return {data,loading,error,refetch};
}