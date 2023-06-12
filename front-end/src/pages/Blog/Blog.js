import React, { useEffect } from 'react'
import { useAuthContext } from '../../hooks/useAuthContext'


function Blog() {
    const { user } = useAuthContext();

    useEffect(() => {
        const fetchAbout = async () => {
            console.log('Fetching abouts');

            // Making a request along with the token 

            const response = await fetch("http://localhost:4000/blog", {
                headers: {
                    "Authorization": `Bearer ${user.token}`
                }
            })
            const json = await response.json();

            if (!response.ok) {
                console.log("error : ", json.error);
            }
            else {
                console.log("Abouts : ", JSON.stringify(json));
            }
        }

        if (user) {
            fetchAbout();
        }
        else {
            console.log("No user")
        }
    })
    return (
        <div>Blog</div>
    )
}

export default Blog