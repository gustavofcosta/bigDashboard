import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faRocket, faPencil, faHand, faBell } from '@fortawesome/free-solid-svg-icons';
import { ReactNode } from 'react';

interface IMenu {
  id: number;
  name: string;
  icon: ReactNode;
}

export const menuTitle: IMenu[] = [
  {
    id: 1,
    icon: <FontAwesomeIcon icon={faHome} />,
    name: 'Painel',
  },
  {
    id: 2,
    icon: <FontAwesomeIcon icon={faRocket} />,
    name: 'Projetos',
  },
  {
    id: 3,
    icon: <FontAwesomeIcon icon={faPencil} />,
    name: 'Leads',
  },
  {
    id: 4,
    icon: <FontAwesomeIcon icon={faHand} />,
    name: 'Campanhas',
  },
  {
    id: 5,
    icon: <FontAwesomeIcon icon={faBell} />,
    name: 'Notificações',
  },
];
