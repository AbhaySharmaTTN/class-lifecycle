export default function List({items, categories}) {
    const fruits = [...items];

    // fruits.sort((a,b) => a.calories - b.calories);
    fruits.sort((a,b) => a.name.localeCompare(b));
    fruits.push({id: 8, name: "abc", calories: 200})
    console.log(items)
    const lowCalFruits = fruits.filter((fruit) => fruit.calories<100)
    console.log(fruits)
    const mappedFruits = lowCalFruits.map((lowCalFruit) => <li key={lowCalFruit.id}>{lowCalFruit.name}</li>);

    return (
        <>
            <ol>{mappedFruits}</ol>
        </>
    );
}
