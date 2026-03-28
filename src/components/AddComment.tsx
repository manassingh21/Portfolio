import { useEffect, useRef } from "react";

interface CommentProps {
  open: boolean;
  close: () => void;
}

const AddComment: React.FC<CommentProps> = ({ open, close }) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const userName = formData.get("userName")?.toString().trim();
    const comment = formData.get("comment")?.toString().trim();

    if (!userName || !comment) {
      return;
    }

    const newComment = { userName, comment };

    try {
      const response = await fetch("http://localhost:8080/comment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newComment),
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }
      event.currentTarget.reset();
    } catch (err) {
      console.error("Error submitting comment:", err);
    }
    close();
  };

  useEffect(() => {
    if (open) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      className="m-auto backdrop:bg-black/80 pt-4 pb-10 px-10 rounded-md w-1/2"
    >
      <div className="flex justify-center">
        <h1 className="text-2xl font-semibold text-center">Add Comment</h1>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col mt-6">
        <label htmlFor="userName">Name:</label>
        <input
          type="text"
          name="userName"
          id="userName"
          className="border border-black rounded-md my-3 py-1 pl-3"
        />

        <label htmlFor="comment">Comment:</label>
        <textarea
          name="comment"
          id="comment"
          className="border border-black rounded-md my-3 py-1 pl-3"
        />

        <div className="flex justify-end mt-6 gap-6">
          <button
            type="submit"
            className="cursor-pointer bg-blue-800 rounded-md text-white px-4 py-1  hover:bg-white hover:text-blue-800 border border-blue-800"
          >
            Submit
          </button>
          <button
            type="button"
            className="cursor-pointer bg-black rounded-md text-white px-4 py-1  hover:bg-white hover:text-black border"
            onClick={close}
          >
            Close
          </button>
        </div>
      </form>
    </dialog>
  );
};

export default AddComment;
