import './index.css';

import { user } from '../../assets/data/user';

export function Perfil() {
  return (
    <div className="content-perfil">
      <figure className="img">
        <img src={user.img} alt="perfil" />
      </figure>
      <span className="name">{user.name}</span>
      <span className="email">{user.email}</span>
    </div>
  );
}
