export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    return (
        <main>
            <h1>Страница продукта</h1>
            <p>Идентификатор продукта: {id}</p>
            <a href={`/products/${id}/comments`}>Перейти к комментариям</a>
        </main>
    );
}