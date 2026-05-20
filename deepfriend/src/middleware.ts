// deepfriend/middleware.ts
import { NextResponse, type NextRequest } from "next/server";
import { isLocale, resolveLocale } from "@/i18n/config";

const PUBLIC_FILE = /\.(.*)$/;

function buildCsp(nonce: string, isDev: boolean): string {
  return [
    "default-src 'self'",
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic' ${isDev ? "'unsafe-eval'" : ""}`,
    "style-src 'self' 'unsafe-inline'",
    "font-src 'self'",
    "img-src 'self' data: blob: https://firebasestorage.googleapis.com https://pub-1c7f9477558d4afebc1486262d64b4f3.r2.dev",
    "connect-src 'self'",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "object-src 'none'",
    "upgrade-insecure-requests",
    //"report-to csp-endpoint"
  ]
    .filter(Boolean)
    .join("; ")
    .replace(/\s{2,}/g, " ")
    .trim();
};
/*
function withSecurityResponse(response: NextResponse, csp: string): NextResponse {
  response.headers.set("Content-Security-Policy", csp);
  response.headers.set(
    "Reporting-Endpoints",
    'csp-endpoint="https://dfbubbles.report-uri.com/r/d/csp/enforce"',
  );
  return response;
};
*/
export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  const nonce = crypto.randomUUID().replace(/-/g, "");
  const isDev = process.env.NODE_ENV !== "production";
  const csp = buildCsp(nonce, isDev);

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);
  requestHeaders.set("x-csp", csp);

  const first = pathname.split("/").filter(Boolean)[0] ?? "";

  if (isLocale(first)) {
    requestHeaders.set("x-locale", first);
    const response = NextResponse.next({
      request: { headers: requestHeaders },
    });
    response.headers.set("Content-Security-Policy", csp);
    return response;
  }

  const detected = resolveLocale(request.headers.get("accept-language"));
  const target = new URL(
    `/${detected}${pathname === "/" ? "" : pathname}${search}`,
    request.url,
  );
  const response = NextResponse.redirect(target, 308);
  response.headers.set("Content-Security-Policy", csp);
  return response;
};

export const config = {
  matcher: [
    "/((?!_next|api|favicon.ico|icon|apple-icon|manifest.webmanifest|robots.txt|sitemap.xml|.*\\..*).*)",
  ],
};