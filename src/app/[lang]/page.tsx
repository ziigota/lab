import { getT } from "@/lib/i18n/getT";
import { ClientDemo } from "@/components/ClientDemo";
export function generateStaticParams() {
    return [
        { lang: "en" },
        { lang: "ru" },
    ];
}

export default async function HomePage({
                                           params,
                                       }: {
    params: Promise<{ lang: string }>;
}) {
    const { lang } = await params;
    const { t } = await getT("common", lang);

    const greeting = t("greeting", { name: "Алиса", role: "администратор" });
    const count1 = t("items_count", { count: 1 });
    const count3 = t("items_count", { count: 3 });
    const count5 = t("items_count", { count: 5 });

    return (
        <main style={{ padding: "40px", fontFamily: "sans-serif" }}>
            <section>
                <h2>Задание 1</h2>
                <p>{t("title")}</p>
                <p>{t("welcome")}</p>
                <button>{t("button.submit")}</button>
                <button style={{ marginLeft: 8 }}>{t("button.cancel")}</button>
            </section>

            <section>
                <h2>Задание 2(сервер)</h2>
                <p>{greeting}</p>
            </section>

            <section>
                <h2>Задание 4(сервер)</h2>
                <p>{count1}</p>
                <p>{count3}</p>
                <p>{count5}</p>
            </section>

            <ClientDemo lang={lang} />
        </main>
    );
}