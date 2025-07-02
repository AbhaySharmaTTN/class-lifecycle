import { useState } from "react";

function Card() {
    const [products, setProducts] = useState([]);
    const [firstItem, setFirstItem] = useState(null);

    async function fetchData() {
        try {
            const response = await fetch("https://dummyjson.com/products");

            if (!response.ok) {
                throw new Error("Network response was not ok.");
            }
            const data = await response.json();
            console.log(data);

            setProducts(data.products);
            setFirstItem(data.products[0]);
        } catch (error) {
            console.log(error);
        }
    }

    function updateArray(index) {
        setProducts((prev) => {
            return prev.filter((e, i) => i != index);
        });

        // Also update firstItem if we're deleting the first item
        if (index === 0 && products.length > 0) {
            setFirstItem(products[1] || null);
        }
    }
    return (
        <>
            <button onClick={fetchData}>Click me</button>
            <button onClick={() => updateArray(0)}>delete 0th element</button>
            <br />
            {firstItem && <p>{firstItem.title}</p>}
            <h3>All Products</h3>
            {products.map((product, index) => (
                <ProductTile
                    key={product.id}
                    title={product.title}
                    onDelete={() => updateArray(index)}
                />
            ))}
        </>
    );
}

export function ProductTile({ title, onDelete }) {
    return (
        <>
            <div style={{ margin: "10px" }}>
                {title}
                <button onClick={onDelete}>Delete</button>
            </div>
        </>
    );
}

export default Card;
