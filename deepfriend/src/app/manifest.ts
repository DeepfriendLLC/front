import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Deepfriend',
        short_name: 'Deepfriend',
        description: "Deepfriend is an AI app for mental wellness. Click and meet Bubbles, your trusted whale designed with a psychologist's mind and a friend's heart.",
        start_url: '/',
        categories: ["Deepfriend", "Deep friend", "Deep Friend", "app ai", "app ai mental health", "mental health", "ai mental health", "freedom", "app mental wellness"],
        display: 'fullscreen',
        background_color: '#24998B',
        theme_color: '#24998B',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
            {
                src: '/favicon-16x16.png',
                sizes: '16x16',
                type: 'image/png',
            },
            {
                src: '/favicon-32x32.png',
                sizes: '32x32',
                type: 'image/png',
            },
            {
                src: '/android-chrome-512x512.png',
                sizes: '512x512',
                type: 'image/png',
            },
            {
                src: '/android-chrome-192x192.png',
                sizes: '192x192',
                type: 'image/png',
            },
        ],
    }
}