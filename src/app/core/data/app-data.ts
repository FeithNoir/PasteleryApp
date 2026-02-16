import { Cake } from "@core/interfaces/cake.interface";

export interface SidebarItem {
    label: string;
    icon: string;
    path: string;
}

export const CAKES_DATA: Cake[] = [
    {
        id: 1,
        name: 'Pan Artesanal de Masa Madre',
        price: 8.50,
        imageUrl: 'bread-01.png',
        description: 'Pan artesanal fermentado naturalmente para un sabor y textura inigualables.',
        category: 'Pastel'
    },
    {
        id: 2,
        name: 'Baguette Tradicional',
        price: 4.20,
        imageUrl: 'bread-02.png',
        description: 'Crocante por fuera y tierno por dentro, el clásico francés en tu mesa.',
        category: 'Pastel'
    },
    {
        id: 3,
        name: 'Hogaza de Cereales',
        price: 6.80,
        imageUrl: 'bread-03.png',
        description: 'Nutritiva mezcla de cereales y semillas en una hogaza rústica.',
        category: 'Pastel'
    },
    {
        id: 4,
        name: 'Delicia de Chocolate',
        price: 15.00,
        imageUrl: 'dessert_1.png',
        description: 'Intenso bizcocho de chocolate con capas de ganache suave.',
        category: 'Cheesecake'
    },
    {
        id: 5,
        name: 'Tarta de Frutos Rojos',
        price: 18.50,
        imageUrl: 'dessert_2.png',
        description: 'Base crujiente con crema pastelera y una selección de frutos del bosque.',
        category: 'Cheesecake'
    },
    {
        id: 6,
        name: 'Cheesecake de Vainilla',
        price: 22.00,
        imageUrl: 'dessert_3.png',
        description: 'Clásico cheesecake al estilo New York con un toque de vainilla natural.',
        category: 'Cheesecake'
    },
    {
        id: 7,
        name: 'Pastel Especial de Otoño',
        price: 35.00,
        imageUrl: 'dessert_4.png',
        description: 'Combinación única de especias, calabaza y nueces para la temporada.',
        category: 'Especial'
    },
    {
        id: 8,
        name: 'Capricho Cremoso',
        price: 12.00,
        imageUrl: 'hero.png',
        description: 'Nuestra especialidad de la casa, una explosión de sabores dulces.',
        category: 'Especial'
    }
];

export const SIDEBAR_ITEMS: SidebarItem[] = [
    { label: 'Especiales', icon: '✨', path: '/cakes/special' },
    { label: 'De temporada', icon: '🍂', path: '/cakes/seasonal' },
    { label: 'Personalizados', icon: '🎨', path: '/cakes/custom' },
    { label: 'Recetas de la Casa', icon: '📖', path: '/recipes' }
];
