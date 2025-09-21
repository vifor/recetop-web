import type { Metadata } from 'next';
import { Inter } from 'next/font/google'; // 1. Importamos Inter desde next/font/google
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { AuthProvider } from '@/context/AuthContext';
import { FavoritesProvider } from '@/context/FavoritesContext';

// 2. Configuramos la fuente
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Recetop',
  description: 'Descubre y guarda tus recetas favoritas.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* 3. Usamos inter.className en lugar de GeistSans.className */}
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <AuthProvider>
          <FavoritesProvider>
            <Navbar />
            <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8">
              {children}
            </main>
            <Footer />
          </FavoritesProvider>
        </AuthProvider>
      </body>
    </html>
  );
}