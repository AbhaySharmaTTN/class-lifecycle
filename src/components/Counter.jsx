import { useEffect, useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => setCount((prev) => prev + 1);
    const decrement = () => setCount((prev) => prev - 1);
    const reset = () => setCount((prev) => 0);
    const hideText = () => setCount(prev => '')

    // ✅ componentDidMount (runs once when component mounts)
    useEffect(() => {
        console.log("🟢 Component Mounted");

        // ✅ componentWillUnmount (runs when component unmounts)
        return () => {
            console.log("🔴 Component Unmounted");
        };
    }, []);

    // ✅ componentDidUpdate (runs on every count change)
    useEffect(() => {
        if (count !== 0) {
            console.log("🟡 Count Updated:", count);
        }
    }, [count]);

    return (
        <>
            <h1>{count}</h1>
            <div>
                <button onClick={decrement}>Decrease</button>
                <button onClick={reset}>Reset</button>
                <button onClick={increment}>Increase</button>
                <button onClick={hideText}>Hide Text</button>
            </div>
        </>
    );
}
