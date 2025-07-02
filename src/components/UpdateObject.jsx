import React, { useEffect, useState } from "react";

function UpdateObject() {
    const [obj, setObj] = useState({ name: "Prem", age: 22 });

    const updateName = (name) => {
        setObj((prevObj) => ({
            ...prevObj,
            name: name,
        }));
    };

    const updateAge = (age) => {
        const numericAge = parseInt(age);
        if (numericAge < 1 || numericAge > 100 || isNaN(numericAge)) return;
        setObj((prevObj) => ({
            ...prevObj,
            age: age,
        }));
        console.log(obj.age);
    };

    return (
        <>
            <p>
                {obj.name} : {obj.age}
            </p>
            <input
                type="text"
                onChange={(e) => updateName(e.target.value)}
                value={obj.name}
            />
            <input
                type="number"
                min={1}
                max={100}
                onChange={(e) => updateAge(e.target.value)}
                placeholder="Enter age"
            />
        </>
    );
}
export default UpdateObject;
