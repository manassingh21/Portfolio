import type React from "react";
import Comment from "../components/Comment";
import { useEffect, useState } from "react";
import AddComment from "../components/AddComment";
import { Link } from "react-router-dom";

interface CommentType {
  _id: number;
  userName: string;
  comment: string;
};

const Comments: React.FC = () => {
  
  const [comment, setComment] = useState<CommentType[]>([]);
  const [loading,setLoading] = useState<boolean>(true);
  const [error,setError] = useState<string | null>(null);

  const [openAddComment, setOpenAddComment] = useState<boolean>(false);

  const handleOpen = () => setOpenAddComment(true);
  const handleClose = () => setOpenAddComment(false);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch('http://localhost:8080/comment');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setComment(data);

      } catch (e:any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    fetchComments();
  }, [comment]);


  return (
    <>
    {openAddComment && <AddComment open={openAddComment} close={handleClose}/>}
    <div className="pt-8">
      <section className="flex flex-col gap-5">
        <div className="py-2 text-2xl font-semibold align-middle mx-auto">
          <button className="px-4 cursor-pointer border border-white bg-white text-stone-800 rounded-md hover:bg-stone-800 hover:text-white" onClick={handleOpen}>Add Comment</button>
        </div>
        <div className="text-center font-semibold text-[#E2E8F0]">
          <span className="text-[#29D39C] text-3xl">Comments </span><span className="text-3xl ">I GOT</span>
          {loading && <p className="text-center text-white font-semibold mt-10">Loading Data.....</p>}
          {error && <p className="text-center text-white font-semibold mt-10">Error in loading data...</p>}
        </div>
      </section>
      {!comment.length ? <p className="text-center font-semibold text-white text-2xl mt-10">No comments to show</p> : <section className="grid grid-cols-2 gap-10 mt-10 mx-10">
        {comment.map((item) =><Link to={`${item._id}`}> <Comment key={item._id} userName={item.userName} comment={item.comment} _id={item._id}/></Link>)}
      </section>}
    </div>
    </>
  );
};

export default Comments;
