import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Deepfriend',
        short_name: 'Deepfriend',
        description: "Deepfriend, tu app de paz mental. Descubre Bubbles, la IA científica que revoluciona la Salud Mental. Desde solo 12.99$ y con 3 días gratis sin compromiso para decidir si te gusta. Te parece mala idea? Pues pruebala ya en Google Play Store!",
        start_url: '/',
        categories: ["Deepfriend", "ia Bubbles", "ia cientifica salud mental", "ia cientifica Bubbles", "ia salud mental Bubbles", "ia cientifica salud mental Deepfriend", "ia cientifica salud mental Bubbles", "salud mental basada en la ciencia", "Deep friend", "Deep Friend", "app ia", "salud mental", "salud mental cientifica"],
        display: 'fullscreen',
        background_color: '#24998B',
        theme_color: '#24998B',
        icons: [
      { src: "/icon.png", sizes: "32x32", type: "image/png" },
            {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
            },
            {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
            },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
        ],
  };
}