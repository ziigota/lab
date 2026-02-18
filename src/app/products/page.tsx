export default function ProductsPage() {
    const products = [
        { id: 1, name: "Продукт 1" },
        { id: 2, name: "Продукт 2" },
        { id: 3, name: "Продукт 3" },
    ];

    return (
        <main>
            <h1>Список продуктов</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <a href={`/products/${product.id}`}>{product.name}</a>
                    </li>
                ))}
            </ul>
        </main>
    );
}