import React, { useEffect, useState } from "react";

function UpdateArray() {
    const [fruits, setFruits] = useState(["apple"]);

    const addFruits = (id) => {
        const fruit = document.getElementById(id).value;
        document.getElementById(id).value = "";

        if (fruit.trim() !== "") setFruits((prev) => [...prev, fruit]);
        console.log(fruits);
    };

    const removeFruit = (id) => {
        const fruit = document.getElementById(id).value;
        document.getElementById(id).value = ""

        if(fruit.trim() !== '') setFruits(prev => prev.filter(element => element!=fruit));
        console.log(fruits)
    }

    return (
        <>
            <div>
                <ul>
                    {
                        fruits.map((fruit, index) => {
                            return <li key={index}>{fruit}</li>
                        })
                    }
                </ul>
                <input type="text" id="input" />
                <button onClick={() => addFruits("input")}>Add Fruit</button>
                <button onClick={() => removeFruit("input")}>Remove Fruit</button>
            </div>
        </>
    );
}
export default UpdateArray;
