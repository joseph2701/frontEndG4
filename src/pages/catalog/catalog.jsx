import { useState, useEffect }  from "react";
import { Card } from "../../components/card/card";
import { getCatalogServices } from "services/catalog.js";
import "./catalog.scss";

export function PageCatalog() {
  const [catalogo, setCatalogo] = useState([]);

  async function getCatalogo() {
    try {
      const { data } = await getCatalogServices();
      setCatalogo(data);
      console.log(data);
    } catch (e) {
      alert("No se pudo obtener los datos");
    }
  }

  useEffect(() => {
    (async () => {
      await getCatalogo();
    })()
  },[]);

  return (
 

    <div className="page-catalog">
      <h1 className="text-center">Catálogo</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
        {catalogo.map((item) => (
          <Card
            key={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
            description={item.description}
            id={item.id}         
          />
        ))}
      </div>
    </div>







    /*
    <div className="page-catalog">
      <h1>Catalog</h1>
      <div className="grid">
        {portafolio.map((portafolio) => (
          <Card
            image={portafolio.image}
            title={portafolio.title}
            description={portafolio.description}
          />
        ))}
      </div>
    </div> */
  );
}
