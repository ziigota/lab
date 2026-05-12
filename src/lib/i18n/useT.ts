"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import {
    useTranslation,
    type UseTranslationOptions,
} from "react-i18next";
import i18next from "./index";

export function useT(
    ns?: string,
    options: UseTranslationOptions<string> = {}
) {
    const lang = useParams().lang;

    if (typeof lang !== "string") {
        throw new Error("useT is only available inside [lang]");
    }

    if (
        typeof window === "undefined" &&
        i18next.resolvedLanguage !== lang
    ) {
        i18next.changeLanguage(lang);
    } else {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [activeLng, setActiveLng] = useState(i18next.resolvedLanguage);

        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
            if (activeLng === i18next.resolvedLanguage) return;
            setActiveLng(i18next.resolvedLanguage);
        }, [activeLng]);

        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
            if (!lang || i18next.resolvedLanguage === lang) return;
            i18next.changeLanguage(lang);
        }, [lang]);
    }

    return useTranslation(ns, options);
}