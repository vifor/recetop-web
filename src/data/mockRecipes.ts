// src/data/mockRecipes.ts
import { Recipe } from './models';

export const mockRecipes: Recipe[] = [
  {
    id: 1,
  title: 'Bavaroise de banana y durazno',
  imageUrl: '/images/bavaroisedebananaydurazno.jpg',
  category: 'Postres',
    duration: 30,
    difficulty: 'Media',
    ingredients: [
      '2 bananas maduras',
      '2 duraznos maduros',
    ],  
    steps: [
      'Pelar y cortar las bananas y los duraznos en trozos pequeños.',
      'Colocar las frutas en una licuadora y procesar hasta obtener un puré suave.',
      'Agregar azúcar al gusto y mezclar bien.',
      'En un bol aparte, batir la crema de leche hasta que forme picos suaves.',
      'Incorporar el puré de frutas a la crema batida con movimientos envolventes.',
      'Verter la mezcla en moldes individuales y refrigerar durante al menos 4 horas antes de servir.',
    ],
  },
  {
    id: 2,
  title: 'Bizcochitos de dos ingredientes',
  imageUrl: '/images/bizcochitosdedosingredientes.jpg',
  category: 'Postres',
    duration: 60,
    difficulty: 'Fácil',
    ingredients: [
      '2 plátanos maduros',
      '1 taza de harina de avena (o cualquier otra harina)',
    ],
    steps: [
      'Precalentar el horno a 180°C (350°F).',
      'En un bol, triturar los plátanos y mezclar con la harina de avena hasta obtener una masa homogénea.',
      'Formar pequeñas bolitas y colocarlas en una bandeja para hornear.',
      'Hornear durante 15-20 minutos o hasta que estén doradas.',
    ],
  },
  {
    id: 3,
  title: 'Flan con leche condensada',
  imageUrl: '/images/flanconlechecondensada.jpg',
  category: 'Postres',
    duration: 25,
    difficulty: 'Fácil',
    ingredients: [
      '1 lata de leche condensada',
      '1 lata de leche evaporada',
      '4 huevos',
      '1 cucharadita de esencia de vainilla',
      'Caramelo líquido para el molde',
    ],
    steps: [
      'Precalentar el horno a 180°C (350°F).',
      'En un bol, batir los huevos y añadir la leche condensada, la leche evaporada y la vainilla. Mezclar bien.',
      'Verter la mezcla en un molde caramelizado.',
      'Hornear a baño maría durante 1 hora o hasta que al insertar un palillo, este salga limpio.',
      'Dejar enfriar y desmoldar.',
    ],
  },
  {
    id: 4,
  title: 'Tarta Quiche de espinaca',
  imageUrl: '/images/tartadeespinaca.jpg',
  category: 'Platos Principales',
    duration: 90,
    difficulty: 'Media',
    ingredients: [
      '1 masa de tarta (puede ser comprada)',
      '500 g de espinaca fresca',   
      '200 ml de crema de leche',
      '3 huevos',
      '100 g de queso rallado (opcional)',
      'Sal y pimienta al gusto',
    ],
    steps: [
      'Precalentar el horno a 180°C (350°F).',  
      'Lavar y picar la espinaca. Cocinarla en una sartén hasta que se reduzca y se evapore el exceso de agua. Dejar enfriar.',
      'En un bol, batir los huevos con la crema de leche. Añadir la espinaca cocida y el queso rallado. Salpimentar al gusto.',
      'Colocar la masa de tarta en un molde y verter la mezcla de espinaca y huevos.',      
      'Hornear durante 35-40 minutos o hasta que la superficie esté dorada y el relleno firme.',
      'Dejar enfriar un poco antes de servir.',
    ],

  },
];