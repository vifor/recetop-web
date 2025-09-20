// src/app/login/page.tsx
'use client'; // Necesario porque usaremos hooks (useAuth, useRouter)

import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation'; // Hook para redirigir al usuario

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();

  const handleLogin = () => {
    login(); // Llama a la función de nuestro contexto
    router.push('/'); // Redirige al usuario a la página principal
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-3xl font-bold mb-6">Iniciar Sesión</h1>
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <p className="text-center mb-4">
          Esto es una simulación. Haz clic en el botón para iniciar sesión.
        </p>
        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Iniciar Sesión con Vicky
        </button>
      </div>
    </div>
  );
}