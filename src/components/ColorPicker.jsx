import React, { useState } from "react";

export default function ColorPicker() {
    const [color, setColor] = useState("#FFFFFF");
    const handleColorChange = (e) => {
        setColor(e.target.value);
        console.log(e.target.value)
    };
    return (
        <>
            <div>
                <h1>Color Picker</h1>
                <div
                    id="color-box"
                    style={{
                        backgroundColor: color,
                    }}
                >
                    <p>{color}</p>
                </div>
                <p>select a color: </p>
                <input type="color" onChange={handleColorChange} />
            </div>
        </>
    );
}
