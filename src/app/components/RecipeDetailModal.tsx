// src/components/RecipeDetailModal.tsx
'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { Recipe } from '@/data/models';
import Image from 'next/image';

interface RecipeDetailModalProps {
  recipe: Recipe | null; // Puede ser una receta o nulo (para cuando está cerrado)
  onClose: () => void;
}

export default function RecipeDetailModal({ recipe, onClose }: RecipeDetailModalProps) {
  return (
    // Transition maneja las animaciones de entrada y salida
    <Transition appear show={!!recipe} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        {/* ... (código para el fondo oscuro y el panel del modal) ... */}
        {/* El código completo es largo, aquí está la parte importante del panel */}
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                {recipe && ( // Mostramos el contenido solo si hay una receta seleccionada
                  <>
                    <Dialog.Title as="h3" className="text-2xl font-bold leading-6 text-gray-900">
                      {recipe.title}
                    </Dialog.Title>
                    <div className="mt-4 relative h-60 w-full">
                       <Image src={recipe.imageUrl} alt={recipe.title} fill className="object-cover rounded-md"/>
                    </div>
                    <div className="mt-4">
                      <h4 className="text-lg font-semibold">Ingredientes:</h4>
                      <ul className="list-disc list-inside mt-2">
                        {recipe.ingredients.map((ing, i) => <li key={i}>{ing}</li>)}
                      </ul>
                    </div>
                    <div className="mt-4">
                      <h4 className="text-lg font-semibold">Pasos:</h4>
                      <ol className="list-decimal list-inside mt-2">
                        {recipe.steps.map((step, i) => <li key={i}>{step}</li>)}
                      </ol>
                    </div>
                    <div className="mt-6">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none"
                        onClick={onClose}
                      >
                        Cerrar
                      </button>
                    </div>
                  </>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}