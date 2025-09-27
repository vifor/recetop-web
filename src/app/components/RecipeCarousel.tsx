'use client';

import { Recipe } from '@/data/models';
import RecipeCard from './RecipeCard';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { useRef } from 'react';

interface RecipeCarouselProps {
  title: string;
  recipes: Recipe[];
  onCardClick: (recipe: Recipe) => void;
}

export default function RecipeCarousel({ title, recipes, onCardClick }: RecipeCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: scrollRef.current.scrollLeft - 300,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: scrollRef.current.scrollLeft + 300,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="mb-8 relative">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
        {title}
      </h2>
      {/* Botón izquierdo */}
      <button
        type="button"
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 rounded-full shadow p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
        aria-label="Anterior"
        onClick={scrollLeft}
      >
        <ChevronLeftIcon className="h-6 w-6 text-gray-700 dark:text-white" />
      </button>
      {/* Botón derecho */}
      <button
        type="button"
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 rounded-full shadow p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
        aria-label="Siguiente"
        onClick={scrollRight}
      >
        <ChevronRightIcon className="h-6 w-6 text-gray-700 dark:text-white" />
      </button>
      <div ref={scrollRef} className="flex space-x-4 overflow-x-auto scrollbar-hide pb-4">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="flex-shrink-0 w-64">
            <RecipeCard recipe={recipe} onCardClick={onCardClick} />
          </div>
        ))}
      </div>
    </section>
  );
}