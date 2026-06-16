export type TeamMember = {
  id?: string;
  name: string;
  role?: string;
  imageUrl?: string;
  bio?: string;
};

export const LEADERSHIP: TeamMember[] = [
  {
    id: 'lead-1',
    name: 'Executive Director',
    role: 'Executive Director',
    imageUrl: '/images/leadership/executive-director.jpg',
    bio: 'Provides strategic leadership and vision.',
  },
  {
    id: 'lead-2',
    name: 'Administrative Pastor',
    role: 'Administrative Pastor',
    imageUrl: '/images/leadership/administrative-pastor.jpg',
    bio: 'Oversees administrative operations and pastoral care.',
  },
];
