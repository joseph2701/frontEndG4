import { Carousel } from "antd";
import { MarcoImagen } from "../../components/marco_imagen/marcoImagen";
import "./about.scss";

function MarcoImagen2(props) {
  const { image, title, description, className = "" } = props;

  return (
    <div className={`${className} marco-imagen`}>
      <div className="flex justify-between items-center">
        <img src={image} alt={title} className="hover:shadow-lg w-6/12" />
        <div className="pl-6 marco-imagen__text  w-6/12">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export function PageAbout() {
  const imagenes = [
    {
      // image: require("../../images/about/mueble-oficina.jpg"),
      image: require("../../images/about/cama.jpg"),
      title: "TITULO IMAGEN UNO",
      description:
        "Somos una empresa en crecimiento dedicada a la fabricación y comercialización de muebles en general de la mas alta calidad con diseños al gusto de todos nuestros clientes mas exigentes, motivo por el cual, nos llena de orgullo el trabajo realizado, puesto que, en cada uno de ellas lleva nuestro sello empresarial de calidad y garantía. Agradecemos a toda nuestra clientela por la preferencia demostrada a lo largo de los años y los esperamos en cualquiera de nuestras tiendas en Lima y Provincias.",
    },
    {
      image: require("../../images/about/cama.jpg"),
      title: "CALIDAD Y GARANTÍA",
      description:
        "Nuestra aspiración ha sido siempre hacer felices a nuestros clientes y llenar cada rincón de sus espacios con piezas de calidad, diseño y garantía, por lo que la innovación y adaptación a la nuevas tendencias de diseño y estilo han sido clave en nuestro desempeño. Damos la bienvenida a las nuevas generaciones con innovación constante.",
    },
    /*
    {
      image: require("../../images/about/cocina.jpg"),
      title: "DISEÑOS A LA MEDIDA",
      description:
        "La dedicación al diseño nos exige una determinación de habilidad y buen gusto. Cada diseño lleva detrás una completa línea de posibilidades ocultas. Los Sofás pueden modificarse por medio de diferentes fundas y tipos de cojines. Los muebles pueden reorganizarse libremente, todo ello en variados colores, estilos y materiales que están perfectamente coordinados al gusto del cliente.",
    },
    {
      // image: require("../../images/about/mueble-oficina.jpg"),
      image: require("../../images/about/cama.jpg"),
      title: "TITULO IMAGEN UNO",
      description:
        "Somos una empresa en crecimiento dedicada a la fabricación y comercialización de muebles en general de la mas alta calidad con diseños al gusto de todos nuestros clientes mas exigentes, motivo por el cual, nos llena de orgullo el trabajo realizado, puesto que, en cada uno de ellas lleva nuestro sello empresarial de calidad y garantía. Agradecemos a toda nuestra clientela por la preferencia demostrada a lo largo de los años y los esperamos en cualquiera de nuestras tiendas en Lima y Provincias.",
    },
    {
      image: require("../../images/about/cama.jpg"),
      title: "CALIDAD Y GARANTÍA",
      description:
        "Nuestra aspiración ha sido siempre hacer felices a nuestros clientes y llenar cada rincón de sus espacios con piezas de calidad, diseño y garantía, por lo que la innovación y adaptación a la nuevas tendencias de diseño y estilo han sido clave en nuestro desempeño. Damos la bienvenida a las nuevas generaciones con innovación constante.",
    },
    {
      image: require("../../images/about/cocina.jpg"),
      title: "DISEÑOS A LA MEDIDA",
      description:
        "La dedicación al diseño nos exige una determinación de habilidad y buen gusto. Cada diseño lleva detrás una completa línea de posibilidades ocultas. Los Sofás pueden modificarse por medio de diferentes fundas y tipos de cojines. Los muebles pueden reorganizarse libremente, todo ello en variados colores, estilos y materiales que están perfectamente coordinados al gusto del cliente.",
    }, */
  ];

  const contentStyle = {
    width: "500px",
    color: "#fff",
    textAlign: "center",
    background: "#364d79",
  };

  return (
    <div className="page-about">
      <div style={contentStyle} className="mx-auto mb-24">
        <Carousel autoplay>
          <div>
            <img src={imagenes[0].image} />
          </div>
          <div>
            <img src={imagenes[0].image} />
          </div>
          <div>
            <img src={imagenes[0].image} />
          </div>
          <div>
            <img src={imagenes[0].image} />
          </div>
          <div>
            <img src={imagenes[0].image} />
          </div>
        </Carousel>
      </div>

      {imagenes.map((imagen) => (
        <MarcoImagen2
          className="mb-16"
          image={imagen.image}
          title={imagen.title}
          description={imagen.description}
        />
      ))}
      {/* <div className="text-center m-auto">
        <h1 className="text-6xl">Acerca de nosotros</h1>
        <p className="w-2/3 text-2xl m-auto mb-20 mt-20 leading-10 ">
          {imagenes[0].description}
        </p>
        <div>
          <MarcoImagen image={imagenes[0].image} />
        </div>
      </div>
      <p className="text-center text-3xl p-20">Mas de nosotros</p>
      <div className="grid gap-x-16 gap-y-32 grid-cols-2 gap-10 place-content-between items-center">
        <div>
          <h2 className="font-bold">{imagenes[1].title}</h2>
          <p className="text-xl leading-9">{imagenes[1].description}</p>
        </div>
        <div>
          <MarcoImagen image={imagenes[1].image} />
        </div>
        <div>
          <MarcoImagen image={imagenes[2].image} />
        </div>
        <div>
          <h2 className="font-bold">{imagenes[2].title}</h2>
          <p className="text-xl leading-9">{imagenes[2].description}</p>
        </div>
      </div>{" "}
      <br />
      <br /> */}
    </div>
  );
}
