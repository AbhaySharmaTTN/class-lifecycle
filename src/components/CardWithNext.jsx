import { useEffect, useState } from "react";
import { ProductTile } from "./Card";

function CardWithNext() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        try {
            setLoading(true);
            const response = await fetch("https://dummyjson.com/products");
            if (!response.ok) {
                throw new Error("Network response was not ok.");
            }

            const data = await response.json();
            setProducts(data.products);
            console.log(data.products);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
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
            {loading ? (
                <p style={{fontSize:"100px"}}>Loading</p>
            ) : (
                <>
                    <button onClick={fetchData}>Click me</button>
                    <br />
                    <h3>All Products</h3>
                    {products.map((product, index) => (
                        <ProductTile
                            key={product.id}
                            title={product.title}
                            onDelete={() => updateArray(index)}
                        />
                    ))}
                </>
            )}
        </>
    );
}

export default CardWithNext;
