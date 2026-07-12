export default function manifest() {
  return {
    name: 'Karim Yousef | Full Stack MERN Developer',
    short_name: 'Karim Portfolio',
    description: 'A modern, animated 3D developer portfolio of Karim Yousef, Full Stack MERN Developer.',
    start_url: '/',
    display: 'standalone',
    background_color: '#030412',
    theme_color: '#030412',
    icons: [
      {
        src: '/vite.svg',
        sizes: '192x192',
        type: 'image/svg+xml',
      },
    ],
  }
}
