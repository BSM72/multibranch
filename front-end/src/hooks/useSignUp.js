import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "./useAuthContext";

export const useSignUp = () => {

    const { dispatch } = useAuthContext();
    const navigate = useNavigate();

    // state variables
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);

    const signup = async (email, password, name) => {
        setIsLoading(true);
        setError(null);

        const response = await fetch("http://localhost:4000/auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email,
                password,
                name
            })
        })

        const json = await response.json();
        if (!response.ok) {
            setIsLoading(false);
            setError(json.msg);
        }
        if (response.ok) {
            navigate("/login");


            // // save the user to local storage
            // localStorage.setItem("user", JSON.stringify(json));

            // // update the auth context
            // dispatch({ type: "LOGIN", payload: json });

            // setIsLoading(false);

        }
    }

    return { signup, isLoading, error };

}

