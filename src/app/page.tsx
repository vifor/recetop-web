// src/app/page.tsx
import RecipeCard from '../app/components/RecipeCard';
import { mockRecipes } from '@/data/mockRecipes';
import RecipeCarousel from './components/RecipeCarousel';

export default function HomePage() {
  // Tomamos solo la primera receta para la prueba inicial
  const testRecipe = mockRecipes[0]; 

  return (
    <main className="p-8 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
        Recetop
      </h1>
      <div className="w-full max-w-xs mx-auto"> {/* Contenedor para la prueba */}
        <RecipeCard recipe={testRecipe} />
      </div>
      <div className="mt-12">
        <RecipeCarousel title="Postres Populares" recipes={mockRecipes} />
      </div>

    </main>
  );
}