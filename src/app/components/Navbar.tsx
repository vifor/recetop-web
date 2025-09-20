// src/components/Navbar.tsx
'use client'; // Necesario porque usará el hook useAuth

import Link from 'next/link';
import { useAuth } from '@/context/AuthContext'; // Importamos nuestro hook

export default function Navbar() {
  const { user, logout } = useAuth(); // Obtenemos el usuario y la función de logout

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800 dark:text-white">
          Recetop 🍽️
        </Link>

        <div>
          {user ? (
            // Si el usuario existe (está logueado)
            <div className="flex items-center space-x-4">
              <span className="text-gray-800 dark:text-white">Hola, {user.name}</span>
              <button
                onClick={logout}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-3 rounded text-sm"
              >
                Cerrar Sesión
              </button>
            </div>
          ) : (
            // Si el usuario no existe (no está logueado)
            <Link href="/login" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Iniciar Sesión
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}