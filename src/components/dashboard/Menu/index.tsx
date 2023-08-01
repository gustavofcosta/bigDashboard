import { menuTitle } from '../../../assets/data/menu';
import { Perfil } from '../../perfil';
import './index.css';

export function Menu() {
  return (
    <nav className="wrapper-menu">
      <div className="logo">
        <figure>
          <img src="/logo.png" alt="logo" />
        </figure>
        <span>BigDashboard</span>
      </div>

      <ul>
        {menuTitle.map((item) => (
          <div key={item.id} className="menu-content">
            <span>{item.icon}</span>
            <li>{item.name}</li>
          </div>
        ))}
      </ul>

      <Perfil />
    </nav>
  );
}
