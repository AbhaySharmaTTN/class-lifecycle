import React, { useEffect, useState } from "react";

function Rough() {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("Event listener added")
        // return()=> {
        //     window.removeEventListener("resize", handleResize)
        //     console.log("Event listener removed")
        // }
    },[]);

    const handleResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
        console.log(window.innerWidth, window.innerHeight);
    };

    return (
        <>
            <div>
                <p>width: {width}px</p>
                <p>height: {height}px</p>
            </div>
        </>
    );
}
export default Rough;
