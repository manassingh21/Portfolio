import { useAppContext } from "../hooks/useContext";

const Toggle = () => {
    const { theme, toggleTheme } = useAppContext();

    return (
        <div
            onClick={toggleTheme}
            className={`
            cursor-pointer w-12 h-6 flex items-center 
            rounded-full p-1 transition-all duration-300
            ${theme === "dark" ? "bg-gray-700" : "bg-white"}`}
        >
        <div
            className={`
            w-4 h-4 rounded-full shadow-md transform 
            transition-all duration-300 ${theme === "dark" ? "translate-x-6 bg-white" : "translate-x-0 bg-gray-900"}`}>
            </div>
        </div>
    );
};

export default Toggle;