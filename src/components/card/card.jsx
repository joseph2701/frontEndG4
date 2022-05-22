import { Link, useHistory } from "react-router-dom";
import "./card.scss";
export function Card(props) {
  const { image, title, description, id, price,discount } = props;

  return (
    <div className="card">
       <Link to={`catalog/${id}`}>
      <figure className="card__figure">
        <img src={image} />
      </figure>
      <div className="card__text">
        <h2>{title}</h2>
        <p>{description}</p>  
        <p>{price}</p>  
        <p>{discount}</p>          
      </div>
      </Link>
    </div>
  );
}
