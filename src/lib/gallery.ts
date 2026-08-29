export const galleryCategories = [
  { id: 'all', label: 'All projects' },
  { id: 'roof-installation', label: 'Roof installation' },
  { id: 'roof-damage', label: 'Roof damage' },
  { id: 'leak-repair', label: 'Leak repair' },
  { id: 'paint-job', label: 'Paint job' },
  { id: 'bathroom-remodeling', label: 'Bathroom remodeling' },
] as const;

export type GalleryCategoryId = (typeof galleryCategories)[number]['id'];

export type GalleryItem = {
  id: string;
  src: string;
  title: string;
  category: Exclude<GalleryCategoryId, 'all'>;
  width: number;
  height: number;
};

export const galleryItems: GalleryItem[] = [
  {
    id: '1',
    src: '/gallery/gallery-1.jpg',
    title: 'Roof replacement — before',
    category: 'roof-installation',
    width: 800,
    height: 450,
  },
  {
    id: '2',
    src: '/gallery/gallery-2.jpg',
    title: 'Roof replacement — during',
    category: 'roof-installation',
    width: 800,
    height: 450,
  },
  {
    id: '3',
    src: '/gallery/gallery-3.jpg',
    title: 'Roof replacement — after',
    category: 'roof-installation',
    width: 800,
    height: 600,
  },
  {
    id: '4',
    src: '/gallery/gallery-4.jpg',
    title: 'Old patio cover',
    category: 'roof-installation',
    width: 800,
    height: 600,
  },
  {
    id: '5',
    src: '/gallery/gallery-5.jpg',
    title: 'Framing new patio cover',
    category: 'roof-installation',
    width: 800,
    height: 600,
  },
  {
    id: '6',
    src: '/gallery/gallery-6.jpg',
    title: 'New patio cover with fans and security lights',
    category: 'roof-installation',
    width: 800,
    height: 600,
  },
  {
    id: '7',
    src: '/gallery/gallery-7.jpg',
    title: 'Satellite dish company damage',
    category: 'leak-repair',
    width: 800,
    height: 450,
  },
  {
    id: '8',
    src: '/gallery/gallery-8.jpg',
    title: 'Lifted roof flashings',
    category: 'leak-repair',
    width: 800,
    height: 450,
  },
  {
    id: '9',
    src: '/gallery/gallery-9.jpg',
    title: 'Before leaking plumbing flashing',
    category: 'leak-repair',
    width: 800,
    height: 450,
  },
  {
    id: '10',
    src: '/gallery/gallery-10.jpg',
    title: 'After leaking plumbing flashing',
    category: 'leak-repair',
    width: 800,
    height: 450,
  },
  {
    id: '11',
    src: '/gallery/gallery-11.jpg',
    title: 'Tile roof maintenance repair',
    category: 'roof-installation',
    width: 800,
    height: 450,
  },
  {
    id: '12',
    src: '/gallery/gallery-12.jpg',
    title: 'GAF Barkwood',
    category: 'roof-installation',
    width: 800,
    height: 450,
  },
  {
    id: '13',
    src: '/gallery/gallery-13.jpg',
    title: 'Katy — before roof replacement',
    category: 'roof-installation',
    width: 800,
    height: 450,
  },
  {
    id: '14',
    src: '/gallery/gallery-14.jpg',
    title: 'Katy — after roof replacement',
    category: 'roof-installation',
    width: 800,
    height: 450,
  },
  {
    id: '15',
    src: '/gallery/gallery-15.jpg',
    title: 'Before new roof install',
    category: 'roof-installation',
    width: 800,
    height: 450,
  },
  {
    id: '16',
    src: '/gallery/gallery-16.jpg',
    title: 'During new roof install',
    category: 'roof-installation',
    width: 800,
    height: 450,
  },
  {
    id: '17',
    src: '/gallery/gallery-17.jpg',
    title: 'GAF shingle install',
    category: 'roof-installation',
    width: 800,
    height: 450,
  },
  {
    id: '18',
    src: '/gallery/gallery-18.jpg',
    title: 'During new roof install',
    category: 'roof-installation',
    width: 800,
    height: 450,
  },
  {
    id: '19',
    src: '/gallery/gallery-19.jpg',
    title: 'Exterior',
    category: 'roof-installation',
    width: 800,
    height: 450,
  },
  {
    id: '20',
    src: '/gallery/gallery-20.jpg',
    title: 'Paint job',
    category: 'paint-job',
    width: 800,
    height: 450,
  },
  {
    id: '21',
    src: '/gallery/gallery-21.jpg',
    title: 'Clogged commercial roof drain',
    category: 'leak-repair',
    width: 800,
    height: 450,
  },
  {
    id: '22',
    src: '/gallery/gallery-22.jpg',
    title: 'Commercial roof leak repair',
    category: 'leak-repair',
    width: 800,
    height: 450,
  },
  {
    id: '23',
    src: '/gallery/gallery-23.jpg',
    title: 'Before new roof install',
    category: 'roof-installation',
    width: 800,
    height: 450,
  },
  {
    id: '24',
    src: '/gallery/gallery-24.jpg',
    title: 'Roof tree damage',
    category: 'roof-damage',
    width: 800,
    height: 450,
  },
  {
    id: '25',
    src: '/gallery/gallery-25.jpg',
    title: 'During new roof install',
    category: 'roof-installation',
    width: 800,
    height: 450,
  },
  {
    id: '26',
    src: '/gallery/gallery-26.jpg',
    title: 'During new roof install',
    category: 'roof-installation',
    width: 800,
    height: 450,
  },
  {
    id: '27',
    src: '/gallery/gallery-27.jpg',
    title: 'Bathroom remodeling',
    category: 'bathroom-remodeling',
    width: 422,
    height: 750,
  },
  {
    id: '28',
    src: '/gallery/gallery-28.jpg',
    title: 'Bathroom remodeling',
    category: 'bathroom-remodeling',
    width: 422,
    height: 750,
  },
  {
    id: '29',
    src: '/gallery/gallery-29.jpg',
    title: 'Bathroom remodeling',
    category: 'bathroom-remodeling',
    width: 800,
    height: 450,
  },
  {
    id: '30',
    src: '/gallery/gallery-30.jpg',
    title: 'Bathroom remodeling',
    category: 'bathroom-remodeling',
    width: 422,
    height: 750,
  },
];

export const featuredGalleryItems = galleryItems.filter((item) =>
  ['1', '3', '12', '14', '17', '24', '6', '22'].includes(item.id),
);

export function categoryLabel(id: GalleryItem['category']) {
  return (
    galleryCategories.find((category) => category.id === id)?.label ?? id
  );
}
