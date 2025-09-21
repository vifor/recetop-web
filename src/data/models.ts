export interface Recipe {
  id: number;
  title: string;
  imageUrl: string;
  category: 'Postres' | 'Platos Principales' | 'Ensaladas' | 'Sopas';
  duration: number; // Duración en minutos
  difficulty: 'Fácil' | 'Media' | 'Difícil';
  ingredients: string[]; 
  steps: string[];       
}