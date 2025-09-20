// src/components/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="bg-white dark:bg-gray-900 shadow-md">
      <nav className="container mx-auto px-6 py-4">
        <Link href="/" className="text-2xl font-bold text-gray-800 dark:text-white">
          Recetop 🍽️
        </Link>
      </nav>
    </header>
  );
}