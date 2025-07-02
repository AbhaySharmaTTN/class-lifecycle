import { useState } from "react";

function UserGreeting({ isLoggedIn, name }) {
    const [login, setLogin] = useState(false);

    const toggleLogin = () => {
        setLogin(prev => !prev);
    };
    return (
        <>
            {login ? (
                <h1>Hello {name}</h1>
            ) : (
                <button onClick={toggleLogin}>Login</button>
            )}
        </>
    ); 
}

export default UserGreeting;
