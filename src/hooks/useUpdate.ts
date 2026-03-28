

export const useUpdate = () => {
  const updateTodo = async (_id: string, status: "pending" | "ongoing" | "complete") => {
    try {
      const response = await fetch("http://localhost:8080/todo", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ _id, status }),
      });

      if (!response.ok) {
        throw new Error("Failed to update todo");
      }

      return await response.json();
    } catch (err) {
      console.error("Update error:", err);
      throw err; // Let the caller handle the error
    }
  };

  return { updateTodo };
};
