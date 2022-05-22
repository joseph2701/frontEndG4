import React from "react";
import ReactDOM from "react-dom";
import "./assets/style/main.css";
// const h1 = document.createElement("h1");
// h1.textContent = "hola mundo";
// const container = document.getElementById("root");
// container.appendChild(h1);

function Hello(props) {
  return <h1>hola {props.name.toUpperCase()}</h1>;
}

function Lista(props) {
  console.log("props", props);
  return (
    <ul>
      {props.items.map((alumno) => (
        <li>{alumno}</li>
      ))}
    </ul>
  );
}

function Card(props) {
  const {
    imagen = "https://gestion.pe/resizer/uwUASF0Zl47Qx0xmzlnny7_w4oQ=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/BPT2O6BPWVB4XJIHMQP3SKV3GM.jpg",
    titulo = "TITULO",
    descripcion = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
    pharetra pharetra, eget sit sed nisi massa. Sit dignissim diam
    lacinia odio vitae enim sit massa. Pulvinar amet viverra sed
    scelerisque sit. Risus volutpat tristique quis ut interdum. In
    gravida eu, vulputate tellus ac. Augue purus nisl scelerisque erat
    at quam mi est nisl. Massa malesuada mauris varius gravida ac
    faucibus fermentum auctor.`,
    destinos = ["OLLAYTAMTAMBO", "PIZZA", "MACHU PICCHU"],
  } = props; // destructuring

  return (
    <div>
      <article>
        <img width="200" height="200" src={imagen} />
        <div>
          <h2>{titulo}</h2>
          <p>{descripcion}</p>
          <Lista items={destinos} />
        </div>
      </article>
    </div>
  );
}

const destinos = [
  {
    titulo: "PARACAS",
    imagen:
      "https://cdn.getyourguide.com/img/location/5cd404718fff1.jpeg/88.jpg",
    descripcion:
      "Embárcate en un tour de un día desde Lima para visitar el pueblo costero de Paracas y la laguna de Huacachina en el desierto.",
    lugares: ["ISLAS BALLESTAS", "CHINCHA", "ICA"],
  },
  {
    titulo: "PUNO",
    imagen:
      "https://noticias-pe.laiglesiadejesucristo.org/media/960x540/Aniversario-fundacion-Puno-2.jpg",
    descripcion:
      "Una de las ciudades más altas del Perú y la quinta en el mundo",
    lugares: ["ISLAS BALLESTAS", "CHINCHA", "ICA"],
  },
  {
    titulo: "PIURA",
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/MINISTRO_NIETO_VIAJ%C3%93_A_PIURA_PARA_SUPERVISAR_LA_RESPUESTA_DEL_SECTOR_DEFENSA_Y_LAS_FFAA_ANTE_LA_EMERGENCIA_%2833665723862%29.jpg/250px-MINISTRO_NIETO_VIAJ%C3%93_A_PIURA_PARA_SUPERVISAR_LA_RESPUESTA_DEL_SECTOR_DEFENSA_Y_LAS_FFAA_ANTE_LA_EMERGENCIA_%2833665723862%29.jpg",
    descripcion: "Piura la ciudad del sol",
    lugares: ["ISLAS BALLESTAS", "CHINCHA", "ICA"],
  },
];

function App() {
  return (
    <div className="wrapper">
      <header>header</header>
      <main>
        <Card imagen={destinos[0].imagen} titulo="SEBASTIAN!!!" />
      </main>
      <footer>footer</footer>
    </div>
  );
}

// COMPONENTES BASICOS
// ReactDOM.render(
//   <div>
//     {Hello({ name: "toto" })}
//     <Hello name="sebastian" />
//     <Hello name="jose luis" />
//     <Hello name="Melisa" />
//     <Lista items={["MELISA", "JOSE", "LUIS", "HARUMI"]} />
//     <Lista items={["NANA", "MARTHA", "MANU", "DAVID"]} />
//     {destinos.map((destino) => (
//       <Card
//         imagen={destino.imagen}
//         titulo={destino.titulo}
//         description={destino.descripcion}
//         lugares={destino.lugares}
//       />
//     ))}
//     <Card imagen={destinos[0].imagen} titulo="SEBASTIAN!!!" />
//     {/* <Card imagen={destinos[0].imagen} />
//     <Card imagen={destinos[1].imagen} />
//     <Card imagen={destinos[2].imagen} /> */}
//   </div>,
//   document.getElementById("root")
// );

ReactDOM.render(<App />, document.getElementById("root"));
