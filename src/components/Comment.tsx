interface CommentProps {
  _id: number;
  userName: string;
  comment: string;
}

const Comment: React.FC<CommentProps> = ({ _id, userName, comment }) => {
  const handleDelete = async (event : React.MouseEvent) => {

    event.stopPropagation();
    event.preventDefault();

    try {
      const response = await fetch(`http://localhost:8080/comment/${_id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete comment");
      }

      console.log("Comment deleted successfully");
    } catch (err) {
      console.error("Error deleting comment:", err);
    }
  };

  return (
    <section className="p-2 bg-white text-stone-800 rounded-md shadow-2xl">
      <h3 className="text-2xl font-semibold text-center mb-5">{userName}</h3>
      <article className="text-center">
        <p>{comment}</p>
      </article>
      <div className="flex text-white justify-end">
        <button
          className="px-2 py-1 bg-stone-800 mr-2 border hover:bg-stone-100 hover:text-stone-800 rounded-md cursor-pointer"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </section>
  );
};

export default Comment;
