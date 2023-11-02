import { useEffect, useState } from "react"


export default function Home() {
    const [loggedIn, setLoggedIn] = useState(false)

    useEffect(() => {
       const userLS = localStorage.getItem('myUser')
       console.log('userLS ->', userLS)
       if (userLS) {
        setLoggedIn(true)
       }
    }, [])

    return(
        <>
        <h2>This is home page</h2>
        {loggedIn && <button onClick={() => localStorage.clear()}>Logout</button>}
        </>
    )
}