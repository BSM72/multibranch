import React from 'react'
import { useNavigate } from 'react-router-dom';

import "./Scanner.css"

function Scanner() {
    // Navigating to different component if use not logged in
    const navigate = useNavigate();


    // useEffect(() => {
    //     navigate('https://scanner.deepware.ai/', { replace: true });

    // }, [])

    return (
        <section className='scan-fake-videos'>
            <h1>Scan deep fake videos</h1>
        </section>
    )
}

export default Scanner