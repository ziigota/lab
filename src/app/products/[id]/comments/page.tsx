export default async function CommentsPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    return (
        <main>
            <h1>Комментарии</h1>
            <p>Идентификатор продукта: {id}</p>
            <p>Это раздел комментариев для продукта с id: {id}</p>
        </main>
    );
}