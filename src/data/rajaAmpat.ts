export interface Destination {
  id: string;
  name: string;
  location: string;
  image: string;
  description: string;
}

export interface Activity {
  id: string;
  title: string;
  desc?: string;
  icon?: string; // Adding icon for the design
}

export interface GalleryItem {
  id: string;
  image: string;
  alt?: string;
}

export const destinations: Destination[] = [
  {
    id: 'wayag',
    name: 'Wayag',
    location: 'West Waigeo',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
    description: 'Iconic karst islands and turquoise lagoons.',
  },
  {
    id: 'pianemo',
    name: 'Pianemo',
    location: 'Fam Islands',
    image: 'https://images.unsplash.com/photo-1529365091034-9fdf2d1b32f9?auto=format&fit=crop&w=1200&q=80',
    description: 'Breathtaking panoramic views of the archipelago.',
  },
  {
    id: 'misool',
    name: 'Misool',
    location: 'South Raja Ampat',
    image: 'https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1200&q=80',
    description: 'World-class diving and pristine coral reefs.',
  },
  {
    id: 'arborek',
    name: 'Arborek',
    location: 'Meos Mansar',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    description: 'Traditional village known for local crafts and culture.',
  },
];

export const activities: Activity[] = [
  { id: 'diving', title: 'Diving', desc: 'Discover vibrant coral reefs.', icon: '🤿' },
  { id: 'snorkeling', title: 'Snorkeling', desc: 'Swim with turtles and fish.', icon: '🏊' },
  { id: 'island-hopping', title: 'Island Hopping', desc: 'Explore hidden lagoons.', icon: '🚤' },
  { id: 'photography', title: 'Photography', desc: 'Capture sunset moments.', icon: '📸' },
];

export const culinary: string[] = [
  'Papeda',
  'Ikan Bakar',
  'Manokwari',
];

export const gallery: GalleryItem[] = [
  { id: 'g1', image: 'https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=800&q=80', alt: 'Panorama' },
  { id: 'g2', image: 'https://images.unsplash.com/photo-1500336624523-d727130c3328?auto=format&fit=crop&w=800&q=80', alt: 'Underwater' },
  { id: 'g3', image: 'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&w=800&q=80', alt: 'Culture' },
  { id: 'g4', image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80', alt: 'Sunset' },
  { id: 'g5', image: 'https://images.unsplash.com/photo-1526779259212-8e6b3b2f6a5b?auto=format&fit=crop&w=800&q=80', alt: 'Beach' },
  { id: 'g6', image: 'https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?auto=format&fit=crop&w=800&q=80', alt: 'Marine Life' },
];
