import { useAppContext } from "../hooks/useContext";
import { FiSearch } from "react-icons/fi";

const Search = () => {
  const { theme } = useAppContext();

  return (
    <div
      className={`
        flex items-center gap-2 h-8 px-3 w-40 rounded-xl border transition-all duration-300
        ${theme === "dark"
          ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400"
          : "bg-white border-gray-300 text-gray-800 placeholder-gray-500"
        }
      `}
    >
      <FiSearch className="text-sm text-gray-400" />

      <input
        type="text"
        placeholder="Search..."
        className={`
          bg-transparent outline-none flex-1 text-sm
          ${theme === "dark" ? "text-white" : "text-gray-700"}
        `}
      />
    </div>
  );
};

export default Search;
