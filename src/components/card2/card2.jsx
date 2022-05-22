import "./card2.scss";
export function Card2(props) {
  const { image, title, description, url,hr } = props;

  return (
    <div className="card2">
      <figure className="card2_figure">
        <img src={image} />
      </figure>
      <div className="card2_text">
        <h2>{title}</h2>
        <p>{description}</p>        
      </div>      
      <hr />
    </div>
    
  );
}
