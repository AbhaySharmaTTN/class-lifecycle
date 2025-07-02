import React, { useEffect, useState } from "react";

function Rough2() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("Prem")

    const increment = () => setCount(prev => prev + 1);
    const decrement = () => setCount(prev => prev - 1);
    const changeName = () => setName(prev => prev + 'm');

    useEffect(()=> {
        document.title = count + name;
        console.log(count)
    }, [name])

    useEffect(()=> {
        console.log(`hello ${count}`)
    }, [count]);

    
    return (
        <>
            <div>
                <p>{count}</p>
                <p>{name}</p>
                <button onClick={increment}>Update Count</button>
                <button onClick={decrement}>Decrease</button>
                <button onClick={changeName}>{name}</button>
            </div>
        </>
    )
}
export default Rough2;
