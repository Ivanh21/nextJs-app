import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const defaultLocale = "fr";
const locales = ["fr", "en"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // ignorer les fichiers _next, api, etc.
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return;
  }

  // si le chemin commence déjà par une locale -> rien à faire
  if (locales.some((loc) => pathname.startsWith(`/${loc}`))) {
    return;
  }

  // sinon -> redirection vers la locale par défaut (/fr)
  return NextResponse.redirect(new URL(`/${defaultLocale}${pathname}`, request.url));
}

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"], // applique partout sauf fichiers statiques
};
