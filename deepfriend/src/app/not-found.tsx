// src/app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
    return (
        <html lang="en">
            <body style={{ fontFamily: "system-ui, sans-serif", padding: 48 }}>
                <h1>
                    404
                </h1>
                <p>
                    Page not found.
                </p>
                <Link href="/es">
                    Inicio
                </Link>
                ·
                <Link href="/en">
                    Home
                </Link>
            </body>
        </html>
    );
}