import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// 1. Define an interface for the data structure
interface CommentData {
  userName: string;
  comment: string;
}

const CommentDetail: React.FC = () => {
  const [data, setData] = useState<CommentData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const { _id } = useParams<{ _id: string }>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/comment/${_id}`);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseData: CommentData = await response.json();
        setData(responseData);
      } catch (err: any) {
        console.error("Fetch error:", err);
        setError(err.message);
      }
    };

    fetchData();
  }, [_id]);

  if (error) return <div className="p-4 text-red-500">Error: {error}</div>;
  if (!data) return <div className="p-4">Loading...</div>;

  return (
    <section className="m-10">
    <div className="p-4 bg-white text-stone-800 rounded-md">
      <h1 className="text-2xl font-semibold">{data.userName}</h1>
      <p className="font-semibold my-4">{data.comment}</p>
    </div>
    </section>
  );
};

export default CommentDetail;