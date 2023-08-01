import { project } from '../../../assets/data/project';
import { todo } from '../../../assets/data/todo';
import { Card } from '../../card';
import './index.css';
export function Sidebar() {
  return (
    <aside className="wrapper-sidebar">
      <div className="todo">
        <h4>Tarefas de Hoje</h4>
        {todo.map((item, index) => (
          <Card key={index} title={item.title} description={item.description} />
        ))}
      </div>
      <div className="project">
        <h4>Projeto recente</h4>
        {project.map((item, index) => (
          <Card key={index} title={item.title} description={item.description} />
        ))}
      </div>
    </aside>
  );
}
