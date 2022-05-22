import {
    useParams, useHistory
} from "react-router-dom";
import { useEffect, useState } from "react";
import { getDetailCatalogServices } from "services/catalog.js";
import { Card } from "../../../components/card/card";

export function PageCatalogoDetalle() {
    const params = useParams();
    const history = useHistory();
    const [catalogo, setCatalogo] = useState([]);

    async function getDetailCatalogo(id) {
      try {
        const { data } = await getDetailCatalogServices(id);
        setCatalogo(data);
        console.log("Esta es la información que trae", data);
      } catch (e) {
        alert("No se pudo obtener los datos");
      }
    }
  
    useEffect(() => {
      (async () => {
        console.log("cuando inicializa el componente!!", params.id)
        await getDetailCatalogo(params.id);
      })()
    },[]);

    return <div className="py-10">
        <button className="bg-green-300 text-white py-6 px-10 rounded-2xl mb-10" onClick={() => {
          history.push("/catalog")
        }}>Volver</button>
        
        <Card image={catalogo.image}
            title={catalogo.title}
            description={catalogo.description}
            id={catalogo.id}/>
    </div>
}