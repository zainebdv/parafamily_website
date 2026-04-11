import deoDouche     from '../assets/deo-douche.jpg'
import daylong       from '../assets/daylong.webp'
import gelNettoyant  from '../assets/gel-nettoyant.jpg'
import ecranSvr      from '../assets/ecran-svr-.jpg'
import shampoing     from '../assets/shampoing.jpg'
import aktivOmega    from '../assets/aktiv-omega3.jpg'
import completDepot  from '../assets/complete_depot.webp'
import babyLotion    from '../assets/baby-lotion.jpg'
import shampoingBaby from '../assets/shampoing-baby.jpg'
import serumBarbe    from '../assets/serum-barbe.jpg'
import genouillere   from '../assets/genouillere.jpg'
import oramelMasque  from '../assets/oramel-masque.jpg'
import jonzac        from '../assets/jonzac.webp'
import bebeMat       from '../assets/bebe-maternite.png'

export const categories = [
  { id: 'women-care',  name: 'Women Care',      description: 'Soins visage & corps',    color: '#fde68a', image: null },
  { id: 'men-care',    name: 'Men Care',         description: 'Soins pour hommes',       color: '#bfdbfe', image: null },
  { id: 'baby-care',   name: 'Mom & Baby Care',  description: 'Soins bébé & maman',      color: '#fbcfe8', image: bebeMat },
  { id: 'sun-care',    name: 'Sun Care',         description: 'Protection solaire',      color: '#fef08a', image: null },
  { id: 'health-care', name: 'Health Care',      description: 'Vitamines & compléments', color: '#bbf7d0', image: null },
  { id: 'orthopedics', name: 'Orthopédie',       description: 'Supports & attelles',     color: '#ddd6fe', image: null },
  { id: 'hair-care',   name: 'Hair Care',        description: 'Soins capillaires',       color: '#756e59', image: null },
]

export const products = [
  { id: 1,  name: 'SVR Spirial - deo-douche gel lavant déodorant - 200ml',        category: 'women-care',  price: 24.990, originalPrice: 29.990, rating: 4.5, reviews: 128, featured: true,  image: deoDouche,     description: "Gel lavant déodorant pour peaux normales à sèches, idéal pour les peaux sensibles. Nettoie et déodorise en une seule étape sous la douche." },
  { id: 2,  name: 'Daylong extrême - Lotion solaire liposomale - spf50+ - 50ml',  category: 'sun-care',    price: 60.500, originalPrice: null,   rating: 4.8, reviews: 256, featured: true,  image: daylong,       description: 'Protection large spectre UVA/UVB, formule légère et non grasse. Idéale pour les activités outdoor intenses.' },
  { id: 3,  name: 'Cytolclean - Gel Nettoyant purifiant - 175ml',                 category: 'women-care',  price: 31.000, originalPrice: 40.000, rating: 4.3, reviews: 89,  featured: false, image: gelNettoyant,  description: "Gel nettoyant purifiant sans savon permettant d'éliminer efficacement l'excès de sébum tout en respectant le film hydrolipidique cutané." },
  { id: 4,  name: 'SVR Sun Secure - Ecran solaire',                               category: 'women-care',  price: 65.000, originalPrice: null,   rating: 4.6, reviews: 175, featured: true,  image: ecranSvr,      description: 'Fluide solaire non gras fini invisible SPF50. Toucher sec qui laisse sur la peau un fini mat non gras et non collant.' },
  { id: 5,  name: "L'Oramel Collagène Caviar - Shampoing Professionnel - 700ml",  category: 'hair-care',   price: 70.000, originalPrice: null,   rating: 4.4, reviews: 312, featured: false, image: shampoing,     description: "Shampoing professionnel au Collagène Caviar pour nettoyer vos cheveux en profondeur sans agresser le cuir chevelu." },
  { id: 6,  name: 'Doppel herz aktiv - Aktiv-Oméga-3 - 60 capsules',             category: 'health-care', price: 55.000, originalPrice: null,   rating: 4.5, reviews: 298, featured: true,  image: aktivOmega,    description: 'Huile de poisson pure avec EPA & DHA pour la santé cardiaque. Contribue au maintien d\'une fonction cardiaque normale.' },
  { id: 7,  name: 'Doppel herz aktiv A-Z - effervescent 15 comprimés',           category: 'health-care', price: 22.990, originalPrice: null,   rating: 4.6, reviews: 167, featured: false, image: completDepot,  description: 'Complexe multivitaminé effervescent avec magnésium hautement absorbable pour le sommeil et la récupération.' },
  { id: 8,  name: 'Chicco baby moments - Lotion lait pour le corps - 200ml',      category: 'baby-care',   price: 17.000, originalPrice: null,   rating: 4.8, reviews: 389, featured: true,  image: babyLotion,    description: 'Lotion ultra-douce pour la peau délicate des nouveau-nés. Sans parabènes ni colorants artificiels.' },
  { id: 9,  name: 'Chicco Baby Moments - Shampoing cheveux & corps',              category: 'baby-care',   price: 22.100, originalPrice: 21.100, rating: 4.7, reviews: 512, featured: false, image: shampoingBaby, description: "Shampoing doux sans larmes pour bébé. Hydrate et protège le cuir chevelu fragile des tout-petits." },
  { id: 10, name: 'Sérum anti chute Barbe et Moustache - Bioxsine - 30ML',       category: 'men-care',    price: 40.000, originalPrice: null,   rating: 4.3, reviews: 94,  featured: false, image: serumBarbe,    description: 'Grâce à ses principes actifs, ce sérum favorise la croissance saine de la barbe et de la moustache.' },
  { id: 11, name: 'Velpeau - Genouillère Ligaction Noir-Bleu',                    category: 'orthopedics', price: 60.000, originalPrice: 54.990, rating: 4.3, reviews: 87,  featured: false, image: genouillere,   description: 'Velpeau Ligaction Comfort est une genouillère pour la compression et la stabilisation du genou. Maintien optimal.' },
  { id: 12, name: "L'Oramel - Masque Fixateur collagène Caviar - 225ml",         category: 'hair-care',   price: 19.900, originalPrice: null,   rating: 4.4, reviews: 123, featured: true,  image: oramelMasque,  description: "Masque fortifiant qui renforce et hydrate votre chevelure tout en prolongeant les effets des traitements lissants." },
  { id: 13, name: 'Jonzac Pure - Soin hydratant matifiant - 50ml',               category: 'men-care',    price: 31.000, originalPrice: null,   rating: 4.2, reviews: 76,  featured: false, image: jonzac,        description: "Riche en eau thermale de Jonzac et poudre de bambou. Hydrate et régule l'excès de sébum pour un fini mat immédiat et durable." },
]
