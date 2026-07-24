export type Activity = {
  id: string; title: string; venue: string; in: string; distance: string; spots: string; image: string; category: string;
};

export type Provider = {
  id: string; name: string; role: string; rating: string; reviews: number; distance: string; price: number; image: string; fast?: boolean;
};

export type Person = {
  id: string; name: string; age: number; distance: string; plan: string; when: string; image: string; verified: boolean;
};

export const activities: Activity[] = [
  { id: 'film', title: 'Film', venue: 'Pathé De Munt', in: 'over 45 min', distance: '2,1 km', spots: '2 plekken vrij', category: 'Cinema', image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=900&q=85' },
  { id: 'padel', title: 'Padel', venue: 'Peakz Padel', in: 'over 1 uur', distance: '1,4 km', spots: '3 plekken vrij', category: 'Sport', image: 'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?auto=format&fit=crop&w=900&q=85' },
  { id: 'drinks', title: 'Drinks', venue: 'Café Zurich', in: 'over 1,5 uur', distance: '1,2 km', spots: '4 plekken vrij', category: 'Drinks', image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=900&q=85' },
  { id: 'music', title: 'Live muziek', venue: 'Tolhuistuin', in: 'over 2 uur', distance: '2,7 km', spots: '6 plekken vrij', category: 'Muziek', image: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=85' },
];

export const providers: Provider[] = [
  { id: 'nova', name: 'Studio Nova', role: 'Kapster', rating: '4,9', reviews: 128, distance: '1,2 km', price: 40, fast: true, image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=900&q=85' },
  { id: 'sam', name: 'Hair by Sam', role: 'Kapster', rating: '4,8', reviews: 94, distance: '1,8 km', price: 42, image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=85' },
  { id: 'cutstyle', name: 'Cut & Style', role: 'Kapster', rating: '4,7', reviews: 76, distance: '2,4 km', price: 38, image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=85' },
];

export const people: Person[] = [
  { id: 'sanne', name: 'Sanne', age: 27, distance: '1,3 km', plan: 'Gaat naar film', when: 'Over 2 uur · Pathé De Munt', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=85', verified: true },
  { id: 'jordy', name: 'Jordy', age: 31, distance: '2,1 km', plan: 'Padel speelmaatje gezocht', when: 'Over 1 uur · Peakz Padel', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=85', verified: true },
  { id: 'mila', name: 'Mila', age: 25, distance: '1,8 km', plan: 'Drinks na werk', when: 'Over 1,5 uur · Café Zurich', image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=400&q=85', verified: true },
  { id: 'ravi', name: 'Ravi', age: 29, distance: '3,2 km', plan: 'Live muziek vanavond', when: 'Over 2 uur · Tolhuistuin', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=85', verified: true },
];
