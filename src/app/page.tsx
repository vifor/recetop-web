// src/app/page.tsx
'use client'; // ¡Importante! Esta página ahora necesita manejar estado.

import { useState } from 'react'; // Importamos useState
import RecipeCarousel from './components/RecipeCarousel';
import { mockRecipes } from '@/data/mockRecipes';
import { Recipe } from '@/data/models'; // Importamos el tipo Recipe
import RecipeDetailModal from './components/RecipeDetailModal';
export default function HomePage() {
  // Este estado guardará la receta que está seleccionada para ver en el modal
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  const postres = mockRecipes.filter((r) => r.category === 'Postres');
  const platosPrincipales = mockRecipes.filter((r) => r.category === 'Platos Principales');

  // Función para abrir el modal
  const handleCardClick = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
  };

  // Función para cerrar el modal
  const handleCloseModal = () => {
    setSelectedRecipe(null);
  };

  return (
    <> {/* Reemplazamos <main> por un fragmento ya que el layout lo provee */}
      <h1 className="...">Recetop</h1>

      {/* Pasamos la función handleCardClick a cada carrusel */}
      <RecipeCarousel title="Postres Populares" recipes={postres} onCardClick={handleCardClick} />
      <RecipeCarousel title="Platos Principales" recipes={platosPrincipales} onCardClick={handleCardClick} />

      {/* El modal siempre está en el DOM, pero solo es visible cuando selectedRecipe no es nulo */}
      <RecipeDetailModal recipe={selectedRecipe} onClose={handleCloseModal} />
    </>
  );
}