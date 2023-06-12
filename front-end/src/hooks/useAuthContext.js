import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export const useAuthContext = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw Error("useAuthContext must be used inside an AuthContext Provider")
    }

    // returns the user property and the dispatch function
    return context;
}