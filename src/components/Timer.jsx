import React, { useEffect, useState } from "react";

function Timer() {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        console.log("function called")

        return () => clearInterval(intervalId);
    }, [] );

    const padZero = (number) => {
        return (number < 10 ? "0" : "") + number
    }
    return (
        <>
            <div>
                <h1>Timer</h1>
                <p>
                    {padZero(time.getDate())}:{padZero(time.getMonth() + 1)}
                </p>
                <p>
                    {padZero(time.getHours())}:{padZero(time.getMinutes())}:{padZero(time.getSeconds())}
                </p>
            </div>
        </>
    );
}
export default Timer;