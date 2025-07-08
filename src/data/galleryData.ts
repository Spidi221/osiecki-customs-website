export interface GalleryItem {
  id: number;
  title: string;
  description: string;
  beforeSrc: string;
  afterSrc: string;
}

export const galleryData: GalleryItem[] = [
  {
    id: 1,
    title: 'Naprawa tylnego błotnika i drzwi',
    description: 'Kompleksowa naprawa blacharska z cieniowaniem lakieru.',
    beforeSrc: '/images/gallery/Przed1.jpg',
    afterSrc: '/images/gallery/po1.jpg',
  },
  {
    id: 2,
    title: 'Wymiana i lakierowanie zderzaka',
    description: 'Idealne spasowanie i dobór koloru po stłuczce parkingowej.',
    beforeSrc: '/images/gallery/przed2.jpg',
    afterSrc: '/images/gallery/po2.jpg',
  },
  {
    id: 3,
    title: 'Naprawa progu i drzwi kierowcy',
    description: 'Usunięcie głębokich wgnieceń i zarysowań.',
    beforeSrc: '/images/gallery/przed3.jpg',
    afterSrc: '/images/gallery/po3.jpg',
  },
  {
    id: 4,
    title: 'Rekonstrukcja przedniego narożnika',
    description: 'Precyzyjna praca blacharska i lakiernicza po kolizji.',
    beforeSrc: '/images/gallery/przed4.jpg',
    afterSrc: '/images/gallery/po4.jpg',
  },
];