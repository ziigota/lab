"use client";

import "@/lib/i18n/index";

import { Suspense, useState } from "react";

import { Trans } from "react-i18next";
import Link from "next/link";

import { useT } from "@/lib/i18n/useT";

export function ClientDemo({ lang }: { lang: string }) {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ClientContent lang={lang} />
        </Suspense>
    );
}

function ClientContent({ lang }: { lang: string }) {
    const { t } = useT("common");

    const [count, setCount] = useState(1);

    return (
        <div
            style={{
                marginTop: 32,
                borderTop: "1px solid #ccc",
                paddingTop: 24,
            }}
        >
            <h2>Клиентские компоненты</h2>

            <section>
                <h3>Задание 2 — Интерполяция (клиент)</h3>

                <p>
                    {t("greeting", {
                        name: "Боб",
                        role: "пользователь",
                    })}
                </p>
            </section>

            <section>
                <h3>Задание 3 — Trans (клиент)</h3>

                <Trans
                    i18nKey="terms_link"
                    ns="common"
                    components={{
                        lnk: (
                            <Link
                                href="/terms"
                                style={{ color: "blue" }}
                            />
                        ),
                        bold: <strong />,
                    }}
                />
            </section>

            <section>
                <h3>Задание 4 — Pluralization (клиент)</h3>

                <p>{t("items_count", { count })}</p>

                <button
                    onClick={() =>
                        setCount((c) => c - 1)
                    }
                >
                    −
                </button>

                <span style={{ margin: "0 12px" }}>
                    {count}
                </span>

                <button
                    onClick={() =>
                        setCount((c) => c + 1)
                    }
                >
                    +
                </button>
            </section>
        </div>
    );
}