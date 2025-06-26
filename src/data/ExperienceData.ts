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
    date: 'Nov 2018 - Present',
    logo: '/logo/company.svg',
    title: 'CEO and Founder',
    company: '',
    highlights: [
      'Handle day-to-day business and technology directions',
      'Architected and implemented multiple products and solutions',
      'Offer a great line of products to help ease life and solve problems',
    ],
  },
  {
    date: 'Aug 2024 - Present',
    logo: '/logo/afriwork.png',
    title: 'Web and Mobile Fullstack Dev',
    company: 'Afriwork',
    description:
      'Afriwork is a platform that connects freelancers and clients trusted by over 15k companies and 300k freelancers. It is the top freelancing platform in Ethiopia.',
    highlights: [
      'Designed a hiring pipeline for the company',
      'Consulted on outsourcing projects',
      'Main mobile apps developer for outsourced projects',
    ],
  },
];
