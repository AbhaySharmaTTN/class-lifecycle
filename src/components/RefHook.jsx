import React, { useEffect, useRef, useState } from "react";

export default function RefHook() {
    const countRef = useRef(0)
    const [value, setValue] = useState(0);
    const nameRef = useRef()

    const increment = () => setValue((prev) => prev + 1);
    const decrement = () => setValue((prev) => prev - 1);

    useEffect(()=> {
        countRef.current++;
    }, [value])

    useEffect(()=> {
        console.log(nameRef.current.value)
    }, )
    return (
        <>
            <button onClick={decrement}> -1 </button>
            <p>{value}</p>
            <button onClick={increment}> +1 </button>
            <p>Render Count: {countRef.current}</p>

            <input type="text" ref={nameRef} placeholder="Enter Something"/>

        </>
    );
}
