import React, { useCallback, useState } from "react";

export default function UseCallback() {
    const [count, setCount] = useState(0);
    const increment = () => setCount((prev) => prev + 1);
    const fn = useCallback(() => {
        console.log("fn called")
    }, [])
    const fn2 = useCallback(fn, [])
    return (
        <>
            <Child fn={fn2}/>
            <p>{count}</p>
            <button onClick={increment}>Click</button>
        </>
    );
}

export const Child = React.memo(function Child({fn}) {
    console.log("Child Called");
    // fn()
    return (
        <>
            <div>Hello</div>
        </>
    );
});
