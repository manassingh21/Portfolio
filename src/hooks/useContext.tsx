import { createContext, useState, useContext as useReactContext} from "react";

interface AppContextType {
    theme: "light" | "dark";
    toggleTheme: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
    children: React.ReactNode;
}

export const AppContextProvider = ({ children }: AppProviderProps) => {

    const [theme, setTheme] = useState<"light" | "dark">("dark");

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
    };

    const value: AppContextType = { theme, toggleTheme };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = (): AppContextType => {
    const context = useReactContext(AppContext);
    if (context === undefined) {
        throw new Error('useAppContext must be used within an AppContextProvider');
    }

    return context;
};