export type ExperienceData = {
  date: string;
  logo: string;
  title: string;
  company: string;
  description?: string;
  highlights: string[];
};

export const experienceData: ExperienceData[] = [
  {
    date: '2019-2025',
    logo: '/logos/vennesla.jpg',
    title: 'CEO and Founder',
    company: 'Vennesla kommune',
    highlights: [
      'Handle day-to-day business and technology directions',
      'Architected and implemented multiple products and solutions',
      'Offer a great line of products to help ease life and solve problems',
    ],
  },
  {
    date: '2024-2025',
    logo: '/logos/grimstad.jpg',
    title: 'Web and Mobile Fullstack Dev',
    company: 'Grimstad Kommune',
    description:
      'Afriwork is a platform that connects freelancers and clients trusted by over 15k companies and 300k freelancers. It is the top freelancing platform in Ethiopia.',
    highlights: [
      'Designed a hiring pipeline for the company',
      'Consulted on outsourcing projects',
      'Main mobile apps developer for outsourced projects',
    ],
  },
];
