# Karim Yousef - Full Stack MERN Developer Portfolio

A cutting-edge, 3D interactive, and highly optimized developer portfolio built to showcase projects, skills, and experience with unparalleled performance and aesthetics.

![Portfolio Preview](/public/assets/projects/auth-system.jpg)

## 🚀 Key Features

- **Next.js 15 App Router**: Fully migrated from Vite to Next.js for server-side rendering, edge caching, and robust file-system routing.
- **Enterprise SEO**: 100/100 Lighthouse SEO score with dynamic Metadata API, OpenGraph tags, JSON-LD Schema, auto-generated `sitemap.xml`, and `robots.txt`.
- **3D Interactive Elements**: Integrated `@react-three/fiber` and `@react-three/drei` for immersive 3D models (Astronaut, Globe, Particles) dynamically imported to ensure `0ms` Main-Thread Blocking Time (TBT).
- **Framer Motion Animations**: Silky smooth scroll-based animations, parallax backgrounds, and draggable physics-based UI cards.
- **Tailwind CSS v4**: Beautiful, utility-first styling with robust responsive design targeting 4K down to mobile (`100dvh` optimization).
- **Optimized Assets**: Heavy assets and raster images are automatically optimized into WebP using `next/image`.
- **Secure Email System**: Integrated with EmailJS for a seamless Contact Form experience.
- **Enterprise DX**: Fully typed and formatted using strict `eslint-config-next`, Prettier, Husky, and `lint-staged`.

## 🛠️ Technology Stack

- **Framework**: Next.js 15 (App Router)
- **Library**: React 19
- **Styling**: Tailwind CSS v4 & PostCSS
- **3D Graphics**: Three.js, React Three Fiber
- **Animations**: Framer Motion
- **Tooling**: ESLint, Prettier, Husky

## 📦 Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/KARIM2206/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the root directory and add your EmailJS credentials:
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Build for Production:**
   ```bash
   npm run build
   ```

## 📈 Performance (Lighthouse)
This portfolio is engineered for maximum performance, targeting:
- **Performance**: 95-100
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

## 📄 License
© 2025 Karim Yousef. All rights reserved.
