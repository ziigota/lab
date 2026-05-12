import { NextRequest, NextResponse } from "next/server";
import {
    LANGUAGES,
    FALLBACK_LANG,
    COOKIE_NAME,
    HEADER_NAME,
} from "@/lib/i18n/config";
const EXCLUDED_PATHS = ["/posts", "/posts/create"];

export function proxy(request: NextRequest) {
    const search = request.nextUrl.search;
    const pathname = request.nextUrl.pathname;
    const url = pathname + search;

    const lang = request.cookies.has(COOKIE_NAME)
        ? request.cookies.get(COOKIE_NAME)!.value
        : FALLBACK_LANG;
    const isExcluded = EXCLUDED_PATHS.some((path) =>
        pathname.startsWith(path)
    );
    if (isExcluded) {
        return NextResponse.next();
    }
    const langParam = LANGUAGES.find((language: string) => {
        return pathname.startsWith(`/${language}`);
    });

    if (!langParam) {
        return NextResponse.redirect(
            new URL(`/${lang}${url}`, request.url)
        );
    }

    const headers = new Headers(request.headers);
    headers.set(HEADER_NAME, lang);

    return NextResponse.next({ request: { headers } });
}

export const config = {
    matcher: [
        "/((?!api|_next/static|_next/image|favicon.ico).*)",
    ],
};