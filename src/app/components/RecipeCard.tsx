'use client';

import Image from 'next/image';
import { Recipe } from '@/data/models';
import FavoriteIcon from './FavoriteIcon';
import { useAuth } from '@/context/AuthContext';
import { useFavorites } from '@/context/FavoritesContext';

interface RecipeCardProps {
  recipe: Recipe;
  onCardClick: (recipe: Recipe) => void; // <-- CAMBIO (Asegúrate de que esta prop esté aquí)
}

export default function RecipeCard({ recipe, onCardClick }: RecipeCardProps) { // <-- CAMBIO (Asegúrate de recibir onCardClick)
  const { user } = useAuth();
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  const isCurrentlyFavorite = user ? isFavorite(recipe.id) : false;

  // <-- CAMBIO: Modificamos el handler para detener la propagación del evento
  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // ¡Muy importante! Evita que el clic "burbujee" hacia la tarjeta.
    if (!user) {
      alert('Necesitas iniciar sesión para añadir favoritos.');
      return;
    }

    if (isCurrentlyFavorite) {
      removeFavorite(recipe.id);
    } else {
      addFavorite(recipe.id);
    }
  };

  return (
    // <-- CAMBIO: Añadimos onClick y cursor-pointer al div principal
    <div 
      className="group block overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
      onClick={() => onCardClick(recipe)}
    >
      <div className="relative w-full h-40">
        <Image
          src={recipe.imageUrl}
          alt={recipe.title}
          fill
          className="object-cover transition-transform duration-30-0 group-hover:scale-110"
        />
      </div>

      <div className="p-4 bg-white dark:bg-gray-800 relative">
        <div className="pr-10">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white line-clamp-2 min-h-[2.75rem]">
            {recipe.title}
          </h3>
      <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
            {recipe.duration} min · {recipe.difficulty}
          </p>
        </div>

        <div className="absolute bottom-4 right-4">
          <FavoriteIcon
            isFavorite={isCurrentlyFavorite}
            onClick={handleFavoriteClick} // El onClick del ícono ahora llama al nuevo handler
          />
        </div>
      </div>
    </div>
  );
}