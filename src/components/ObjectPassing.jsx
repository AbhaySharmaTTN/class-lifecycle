import { useEffect, useState } from "react";

function ObjectPassing() {
    const [userData, setUserData] = useState({name: "default", age: 0})

    useEffect(() => {
        setUserData((prev) => ({
            ...prev,
            name: "prem"
        }))
    }, [])

    console.log(userData)

    function changeName(e){
        setUserData(prev => ({
            ...prev,
            name: e.target.value
        }))
    }

    return(
        <>
        <input type="text" onChange={
            // e => {
            //     setUserData(prev => ({
            //         ...prev,
            //         name: e.target.value
            //     }))
            // }
            changeName
        }/>
            <p>{userData.name}</p>
        </>
    )
}

export default ObjectPassing