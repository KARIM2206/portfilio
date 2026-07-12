import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#030412] text-white">
      <h2 className="text-4xl font-bold mb-4 text-aqua">404</h2>
      <p className="text-xl mb-6">Page Not Found</p>
      <Link href="/" className="px-4 py-2 border border-aqua text-aqua rounded hover:bg-aqua hover:text-black transition">
        Return Home
      </Link>
    </div>
  );
}
