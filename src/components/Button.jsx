export default function Button() {
    let count = 0;

    function handleClick(name) {
        if (count < 3) {
            count++;
            console.log(`${name} clicked me ${count} times...`);
        } else {
            count++;
            console.log(
                `${name}, please stop clicking me. You have already clicked me ${count} times.`
            );
        }
    }

    function changeText(e) {
        return "New Text";
    }

    function changeTargetText(e) {
        console.log(e)
        return e.target.textContent = "New Text";
    }

    const arrowFn = (e) => e.target.textContent = "new Text";

    return (
        <>
            <button onClick={() => handleClick("Prem")}>Click me</button>
            <br />
            <br />
            <button onClick={(e) => {
                const value = changeText();
                e.target.textContent = value;
            }}>Click me</button>
            <br /><br />
            <button onClick={arrowFn}>Arrow Fn</button>
            <br /><br />
            <button onDoubleClick={changeTargetText}>Change via Normal Function</button>
        </>
    );
}
