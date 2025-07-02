import React, { useMemo, useState } from "react";

export default function UseMemo() {
    const [number, setNumber] = useState(0);
    const [counter, setCounter] = useState(0);

    const calculateCube = (number) => {
        console.log("calculation done");
        return Math.pow(number, 3);
    };
    // const result = calculateCube(number);
    const result = useMemo(()=>calculateCube(number), [number]);

    const increment = () => setCounter((prev) => prev + 1);

    return (
        <>
            <div>
                <input
                    type="number"
                    value={number}
                    onChange={(e) => {
                        setNumber(e.target.value);
                    }}
                />
                <p>Cube of the number is: {result}</p>
                <p>{counter}</p>
                <button onClick={increment}> increment</button>
            </div>
        </>
    );
}
