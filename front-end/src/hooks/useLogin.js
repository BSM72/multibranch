import { useState } from "react";

import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {

    const { dispatch } = useAuthContext();

    // State variables
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);

    const login = async (email, password) => {

        setIsLoading(true);
        setError(null);

        const response = await fetch("http://localhost:4000/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email,
                password
            })
        })

        const json = await response.json();

        if (!response.ok) {
            setIsLoading(false);
            setError(json.msg);
        }
        if (response.ok) {
            console.log("User logged in : ", json);

            // save the user to local storage
            localStorage.setItem("user", JSON.stringify(json));

            // update the auth context
            dispatch({ type: "LOGIN", payload: json });

            setIsLoading(false);
        }

    }
    return { login, isLoading, error };
}

