import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io';
import { FaDiscord } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

interface socials {
  name: string;
  url: string | null;
  Component: any;
  copy: string | null;
}

export const socials: socials[] = [
  {
    name: 'Linkedin',
    url: 'https://www.linkedin.com/in/german-vazquezw/',
    Component: <IoLogoLinkedin />,
    copy: null,
  },
  {
    name: 'Github',
    url: 'https://github.com/Germanvw',
    Component: <IoLogoGithub />,
    copy: null,
  },
  {
    name: 'Email',
    url: null,
    Component: <MdEmail />,
    copy: 'germanvazquezw99@gmail.com',
  },
  {
    name: 'Discord',
    url: null,
    Component: <FaDiscord />,
    copy: 'Gercor',
  },
];
