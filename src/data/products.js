export const categories = [
  { id: 'women-care',  name: 'Women Care',       description: 'Soins visage & corps',     color: '#fde68a', image: null },
  { id: 'men-care',    name: 'Men Care',          description: 'Soins pour hommes',        color: '#bfdbfe', image: null },
  { id: 'baby-care',   name: 'Mom & Baby Care',   description: 'Soins bébé & maman',       color: '#fbcfe8', image: 'bebe-maternite.png' },
  { id: 'sun-care',    name: 'Sun Care',          description: 'Protection solaire',       color: '#fef08a', image: null },
  { id: 'health-care', name: 'Health Care',       description: 'Vitamines & compléments',  color: '#bbf7d0', image: null },
  { id: 'orthopedics', name: 'Orthopédie',        description: 'Supports & attelles',      color: '#ddd6fe', image: null },
  { id: 'hair-care',   name: 'Hair Care',         description: 'Soins capillaires',        color: '#756e59', image: null },
]

export const products = [
  { id: 1,  name: 'Crème Hydratante Visage',    category: 'women-care',  price: 24.99, originalPrice: 29.99, rating: 4.5, reviews: 128, featured: true,  image: null, description: "Crème hydratante à l'acide hyaluronique pour une hydratation toute la journée." },
  { id: 2,  name: 'Daylong extrême - Lotion solaire liposomale - spf50+ - 50ml',      category: 'sun-care',    price: 60.50, originalPrice: null,  rating: 4.8, reviews: 256, featured: true,  image:"daylong.webp", description: 'Protection large spectre UVA/UVB, formule légère et non grasse.' },
  { id: 3,  name: 'Sérum Anti-Âge Rétinol',     category: 'women-care',  price: 34.99, originalPrice: 39.99, rating: 4.3, reviews: 89,  featured: false, image: null, description: 'Sérum rétinol pour réduire les rides et améliorer la texture de la peau.' },
  { id: 4,  name: 'Sérum Éclat Vitamine C',     category: 'women-care',  price: 29.99, originalPrice: null,  rating: 4.6, reviews: 175, featured: true,  image: null, description: 'Illumine le teint et réduit les taches avec 15% de vitamine C.' },
  { id: 5,  name: 'Eau Micellaire Douce',        category: 'women-care',  price: 14.99, originalPrice: null,  rating: 4.4, reviews: 312, featured: false, image: null, description: 'Eau micellaire douce pour tous types de peau.' },
  { id: 6,  name: 'Vitamine D3 1000 UI',         category: 'health-care', price: 12.99, originalPrice: 15.99, rating: 4.7, reviews: 445, featured: true,  image: null, description: 'Vitamine D3 pour le soutien immunitaire et la santé osseuse.' },
  { id: 7,  name: 'Oméga-3 Huile de Poisson',   category: 'health-care', price: 19.99, originalPrice: null,  rating: 4.5, reviews: 298, featured: true,  image: null, description: 'Huile de poisson pure avec EPA & DHA pour la santé cardiaque.' },
  { id: 8,  name: 'Magnésium Glycinate 400mg',  category: 'health-care', price: 22.99, originalPrice: 27.99, rating: 4.6, reviews: 167, featured: false, image: null, description: 'Magnésium hautement absorbable pour le sommeil et la récupération.' },
  { id: 9,  name: 'Lotion Corps Bébé',           category: 'baby-care',   price: 13.99, originalPrice: null,  rating: 4.8, reviews: 389, featured: true,  image: null, description: 'Lotion ultra-douce pour la peau délicate des nouveau-nés.' },
  { id: 10, name: 'Crème Anti-Érythème',         category: 'baby-care',   price: 9.99,  originalPrice: 11.99, rating: 4.7, reviews: 512, featured: false, image: null, description: "Crème barrière à l'oxyde de zinc pour les irritations." },
  { id: 11, name: 'Gel Douche Homme',            category: 'men-care',    price: 12.99, originalPrice: null,  rating: 4.3, reviews: 94,  featured: false, image: null, description: 'Gel douche purifiant enrichi en aloe vera et menthe.' },
  { id: 12, name: 'Genouillère de Compression', category: 'orthopedics', price: 44.99, originalPrice: 54.99, rating: 4.3, reviews: 87,  featured: false, image: null, description: 'Genouillère réglable pour soulager les douleurs du genou.' },
  { id:13, name: 'Phytéal Ultraliss - Sérum traitant à la kératine - 40ml', category: 'hair-care', price: 38.50, originalPrice: null, rating: 4.4, reviews: 123, featured: true, image:"phiteal.webp", description: 'Sérum à la kératine pour cheveux abîmés, lisse et protège.' },
  
]