import { useEffect, useState } from "react";

export default function Input() {
    const [name, setName] = useState("");
    const handleNameChange = (e) => setName(e.target.value);

    const [count, setCount] = useState(0);
    const handleCountChange = (e) => setCount(e.target.value);

    const [select, setSelect] = useState("");
    const handleSelect = (e) => setSelect(e.target.value);

    const [toggle, setToggle] = useState(false);
    const handleToggle = () => setToggle((prev) => !prev);

    const [gender, setGender] = useState("");
    const handleGender = (e) => setGender((prev) => e.target.value);

    useEffect(() => {
        console.log("🟢 Component Mounted");

        // ✅ componentWillUnmount (runs when component unmounts)
        return () => {
            console.log("🔴 Component Unmounted");
        };
    }, []);

    // componentDidUpdate for name only
    useEffect(() => {
        if (name !== "") {
            console.log("🟡 Name Updated:", name);
        }
    }, [name]);

    // componentDidUpdate for count only
    useEffect(() => {
        if (count !== 0) {
            console.log("🟡 Count Updated:", count);
        }
    }, [count]);

    return (
        <>
            <button onClick={handleToggle}>
                {toggle ? "Hide Inputs" : "Show Inputs"}
            </button>
            <br />
            {toggle && (
                <>
                    <input type="text" onChange={handleNameChange} />
                    <p>{name}</p>

                    <input type="number" onChange={handleCountChange} />
                    <p>{count}</p>

                    <select name="payment" id="payment" onChange={handleSelect}>
                        <option value="">Select an option</option>
                        <option value="upi">UPI</option>
                        <option value="visa">Visa</option>
                        <option value="GiftCard">GiftCard</option>
                        <option value="masterCard">MasterCard</option>
                    </select>
                    <p>{select}</p>
                </>
            )}

            <label>
                <input
                    type="radio"
                    value="male"
                    checked={gender === "male"}
                    onChange={handleGender}
                />
                male
            </label>
            <label>
                <input
                    type="radio"
                    value="female"
                    checked={gender === "female"}
                    onChange={handleGender}
                />
                female
            </label>
            <p>
                {gender}
            </p>
        </>
    );
}
