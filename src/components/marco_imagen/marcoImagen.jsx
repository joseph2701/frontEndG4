import "./marcoImagen.scss";

export function MarcoImagen(props) {
    const { image } = props;
  
    return (
      <div >
         <figure>
          <img className="imagen" src={image} />
         </figure>     
      </div>
    );
  }
  
