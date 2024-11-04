import { useContext, useReducer } from "react"

const initialState = {
    currentSection: "about"
}

const NavigationContext: any = useContext(undefined);

export const NavigationContextProvider = ({ children }) => {
    const [section, setSection] = useReducer();
    
    return (
        <NavigationContext.Provider>
            { children }
        </NavigationContext.Provider>
    );
}