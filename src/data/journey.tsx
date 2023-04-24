import { DiJavascript } from 'react-icons/di';
import { FaLaravel, FaGraduationCap } from 'react-icons/fa';
import { RiReactjsLine } from 'react-icons/ri';

export const journey = [
  {
    title: 'Fullstack Developer',
    label: 'Fullstack Javascript Dev at Cedeira & Banco Galicia',
    date: 'May 2022 - Present',
    description:
      'Fullstack React, Nodejs & .NET Core 6 Developer at Cedeira working on several projects of the company and Banco Galicia. I am responsible for the development and leadership of the frontend of 2 projects in a team of 6 developers.',
    technologies: [
      'Mantine',
      'MUI5',
      'SCSS',
      'React',
      'Nodejs',
      'Redux Tookit',
      '.NET Core 6',
      'SQL Server',
    ],
    icon: <RiReactjsLine />,
  },
  {
    title: 'Graduated From University',
    label: 'Technician in Programming',
    date: 'Mar 2020 - Dec 2021',
    description:
      'Graduated from the UTN FRGP with the degree  "Technician in Programming/Computer Systems" (2 years of study)',
    technologies: ['C++', 'C#', 'Java', 'SQL Database'],
    icon: <FaGraduationCap />,
  },
  {
    title: 'University payment site',
    label: 'Intership at UTN',
    date: 'Oct 2021 - Nov 2021',
    description: `Registration and authentication system for the university's payment site (UTN FRGP) made with Laravel in a team of 5 people.`,
    technologies: ['PHP', 'Laravel', 'Bootstrap'],
    icon: <FaLaravel />,
  },
  {
    title: 'Learning Javascript',
    label: 'Nodejs & React',
    date: 'Feb 2021',
    description: `Started my self-taught journey to become a Javascript Fullstack Developer while finishing my last year at university.`,
    technologies: ['Javascript', 'React', 'Nodejs'],
    icon: <DiJavascript />,
  },
];
