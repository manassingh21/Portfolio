import Button from "./Button";

export interface TodoProps {
    _id ?: string;
    label : string;
    status : 'complete' | 'ongoing' | 'pending';
    handleClick : ()=> void;
}

const TodoItem : React.FC<TodoProps> = ({label, status, handleClick}) => {
    return(
        <div className="bg-white rounded-md px-2 py-1 my-2 flex flex-row justify-between items-center">
            <p >{label}</p>
            <div className="flex end-0 space-x-3">
                {status === 'complete' && <Button handleClick={handleClick}>Delete</Button>}
                {status === 'ongoing' && <Button handleClick={handleClick}>Complete</Button>}
                {status === 'pending' && <Button handleClick={handleClick}>Start</Button>}
            </div>
        </div>
    )
};

export default TodoItem;