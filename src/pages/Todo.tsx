import TodoItem from "../components/TodoItem";
import { useFetch } from "../hooks/useFetch";
import { useUpdate } from "../hooks/useUpdate";


const Todo : React.FC = () => {

    const {data, loading, error,refetch} = useFetch();
    const pending = data.filter((todo) => todo.status === "pending");
    const complete = data.filter((todo) => todo.status === "complete");
    const ongoing = data.filter((todo) => todo.status === "ongoing");

    const {updateTodo} = useUpdate();

    const handleComplete = async (_id : string) =>{
        console.log("Complete Triggered",_id);
        await updateTodo(_id,"complete");
        refetch();
    }

    const handleStart = async (_id: string) =>{
        console.log("Start Triggered");
        await updateTodo(_id,"ongoing");
        refetch();
    }

    const handleDelete = () =>{
        console.log("Delete Triggered");
    }

    return(
        <div className="bg-white shadow-2xl rounded-lg p-4 my-10 mx-5">
            <h1 className="text-center font-semibold text-3xl">--- TASKS TO DO ---</h1>
            <section className="my-4 bg-gray-500 p-4 shadow-md rounded-lg">
                <h2 className="text-xl text-white font-semibold h-1/4">Completed Tasks</h2>
                <div>
                    {loading && <p className="text-center text-white">Loading Data....</p>}
                    {error && <p className="text-center text-white">Error in Loading Data....</p>}
                    {complete.length===0 && <p className="text-center text-white">No data to display....</p>}
                    {complete.map((todo)=><TodoItem key={todo._id} label={todo.label} handleClick={handleDelete} status={todo.status}/>)}
                </div>
            </section>
            <section className="my-4 bg-gray-700 p-4 shadow-md rounded-lg">
                <h2 className="text-white font-semibold text-xl">Ongoing Tasks</h2>
                <div>
                    {loading && <p className="text-center text-white">Loading Data....</p>}
                    {error && <p className="text-center text-white">Error in Loading Data....</p>}
                    {ongoing.length===0 && <p className="text-center text-white">No data to display....</p>}
                    {ongoing.map((todo)=><TodoItem label={todo.label} status={todo.status} key={todo._id} handleClick={() => handleComplete(todo._id!)}/>)}
                </div>
            </section>
            <section className="my-4 bg-gray-900 p-4 shadow-md rounded-lg">
                <h2 className="text-white font-semibold text-xl">Pending Tasks</h2>
                <div>
                    {loading && <p className="text-center text-white">Loading Data....</p>}
                    {error && <p className="text-center text-white">Error in Loading Data....</p>}
                    {pending.length===0 && <p className="text-center text-white">No data to display....</p>}
                    {pending.map((todo)=><TodoItem key={todo._id} handleClick={() => handleStart(todo._id!)} label={todo.label} status={todo.status} />)}
                </div>
            </section>
        </div>
    );
}

export default Todo;