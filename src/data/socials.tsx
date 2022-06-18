import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io';

interface socials {
  name: string;
  url: string;
  Component: React.ReactNode;
}

export const socials: socials[] = [
  {
    name: 'Linkedin',
    url: 'https://www.linkedin.com/in/german-vazquezw/',
    Component: <IoLogoLinkedin />,
  },
  {
    name: 'Github',
    url: 'https://github.com/Germanvw',
    Component: <IoLogoGithub />,
  },
];
