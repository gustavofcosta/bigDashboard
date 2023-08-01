import './index.css';
interface ICard {
  title: string;
  description: string;
}

export function Card({ title, description }: ICard) {
  return (
    <article className="content">
      <h5>{title}</h5>
      <p>{description}</p>
    </article>
  );
}
