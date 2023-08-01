import './index.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBookmark } from '@fortawesome/free-solid-svg-icons';
import { news } from '../../../assets/data/new';
import { Card } from '../../card';

export function Painel() {
  return (
    <main className="wrapper-painel">
      <section>
        <div className="top">
          <div>
            <h2>Painel</h2>
            <p>As últimas atualizações de hoje</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
            <FontAwesomeIcon icon={faBookmark} className="icon" />
          </div>
        </div>
        <div>
          {news.map((item, index) => (
            <Card key={index} title={item.title} description={item.description} />
          ))}
        </div>
      </section>
    </main>
  );
}
