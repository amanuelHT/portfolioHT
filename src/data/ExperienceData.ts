export type ExperienceData = {
  date: string;
  logo: string;
  title: string;
  company: string[];
  description?: string;
  highlights: string[];
};

export const experienceData: ExperienceData[] = [
  {
    date: '2019-2025',
    logo: '/logos/vennesla.jpg',
    title: '',
    company: ['Vennesla kommune',
       'Vennebo',],
    highlights: [



      'Assisting individuals with intellectual disabilities.',
      'Gained experience in responsibility, empathy, and collaboration.',

    ],
  },
  {
    date: '2024-2025',
    logo: '/logos/grimstad.jpg',
    title: '',
    company: ['Grimstad Kommune',
       'BergeGård',
    ],
    highlights: [
      'Care work that enhanced independence, adaptability, and communication.',
    ],
  },
{
    date: '2016-2017',
    logo: '/logos/KGS.jpg',
    title: '',
    company: ['Kongsgård skolesenter -Kristiansand',
      '',
    ],
    
    highlights: [
    'Contributed to a safe school environment.',
      'Developed social understanding and conflict management skills',
    ],
  },

];
