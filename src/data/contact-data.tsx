import { FaDiscord } from 'react-icons/fa';
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';

export const contact = [
  {
    name: 'phone',
    value: '+54 11 5692-0619',
    Component: <MdPhone />,
  },
  {
    name: 'email',
    value: 'germanvazquezw99@gmail.com',
    Component: <MdEmail />,
  },
  {
    name: 'location',
    value: 'Buenos Aires, Argentina',
    Component: <MdLocationOn />,
  },
  {
    name: 'discord',
    value: 'Gercor',
    Component: <FaDiscord />,
  },
];
