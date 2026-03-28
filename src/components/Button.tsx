
interface ButtonProp {
    children : React.ReactNode;
    handleClick : ()=>void;
}

const Button : React.FC <ButtonProp> = ({children,handleClick}) => {
    return(
        <button className="bg-gray-700 text-white px-2 rounded-md cursor-pointer border hover:border-gray-700 hover:bg-white hover:text-gray-700" onClick={handleClick}>
            {children}
        </button>
    )
};

export default Button;