import { Card } from "../../components/card/card";
import { Card2 } from "../../components/card2/card2";
import "./home.scss";

export function PageHome() {
  const portafolio = [    
    {
      image:
        "https://ksassets.timeincuk.net/wp/uploads/sites/56/2021/06/Small-living-room-ideas_Grey-sofa-920x552.jpg",
      title: "Living Room",      
      url: "",
      description:"* * * * * (20 000)",
    },
    {
      image:
        "http://img.interempresas.net/FotosArtProductos/P129689.jpg",
      title: "Bath Room",      
      url: "",
      description:"* * * * * (20 000)",
    },
    {
      image:
        "https://ksassets.timeincuk.net/wp/uploads/sites/56/2021/05/Small-kitchen-ideas-featured.jpg",
      title: "Kitchen Room",      
      url: "",
      description:"* * * * * (20 000)",
    },
    {
      image:
        "https://st.depositphotos.com/1050516/3692/i/600/depositphotos_36922407-stock-photo-luxury-rattan-garden-furniture.jpg",
      title: "Garden",
      url: "",
      description:"* * * * * (20 000)",
    }, 
  ];
  const portafolio2 = [        
    {
      image:
        "http://img.interempresas.net/FotosArtProductos/P129689.jpg",
      title: "Bath Room",      
      url: "",
      description:"* * * * * (20 000)",
      price:"USD 2000.00",
      discount:"USD 2000.00 (10% de descuento)",
    },
    {
      image:
        "http://img.interempresas.net/FotosArtProductos/P129689.jpg",
      title: "Bath Room",      
      url: "",
      description:"* * * * * (20 000)",
      price:"USD 2000.00",
      discount:"USD 2000.00 (10% de descuento)",
    }, 
    {
      image:
        "http://img.interempresas.net/FotosArtProductos/P129689.jpg",
      title: "Bath Room",      
      url: "",
      description:"* * * * * (20 000)",
      price:"USD 2000.00",
      discount:"USD 2000.00 (10% de descuento)",
    }, 
  ];

  return (
    <div className="page-home"> 
        <div className="page-home_section_1 bg-white relative">
          <div className=" bg-orange-200	h-80 absolute w-screen">
              <p className="text-center text-7xl p-4 font-serif">Encuentra los muebles que te gustan de forma rápida y segura.</p>        
              <div className="flex justify-center space-x-20 font-sans font-bold">
                {portafolio.map((portafolio) => (
                  <Card2              
                    image={portafolio.image}
                    title={portafolio.title}                     
                  />            
                ))}
              </div> 
            </div>
        </div>    

        <div className="page-home_section_2 ">
          <p className="text-7xl font-bold px-4 font-sans py-10">Más populares en estos momentos</p>        
          <div className="grid-cols-3 flex gap-40 justify-center items-center">
            {portafolio2.map((portafolio2) => (
              <Card
                image={portafolio2.image}
                title={portafolio2.title}
                description={portafolio2.description}
                price={portafolio2.price}
                discount={portafolio2.discount}
              />
            ))}    
          </div>
        </div> 
        <div className="page-home_section_3 relative">
          <div className=" bg-green-50	h-full absolute w-screen">
            <div className="page-home_section_3_content">
              <h2 className="text-center text-8xl py-12 font-sans font-bold">¿Qué es My E-shop?</h2>        
              <h3 href="" className="text-center text-5xl font-sans underline">Lee nuestra maravillosamente excepcional historia</h3>
              <div class="grid items-center grid-cols-3 text-5xl gap-40 px-40 pt-20 pb-10">
                    <div className="">
                      <h3 className="text-4xl font-bold text-center px-10">Una Comunidad que hace el bien</h3>
                      <p className="text-justify text-3xl ">My E.Shop es un mercado internacional en línea al que acuden personas de todo el mundo para hacer, vender, comprar y coleccionar productos únicos. También somos una comunidad que impulsa cambios positivos para los pequeños negocios, las personas y el planeta. Estas son algunas de las formas en las que, juntos, creamos un efecto positivo.</p>
                    </div>
                    <div className="">
                      <h3 className="text-4xl font-bold text-center px-10">Una Comunidad que hace el bien</h3>
                      <p className="text-justify text-3xl ">My E.Shop es un mercado internacional en línea al que acuden personas de todo el mundo para hacer, vender, comprar y coleccionar productos únicos. También somos una comunidad que impulsa cambios positivos para los pequeños negocios, las personas y el planeta. Estas son algunas de las formas en las que, juntos, creamos un efecto positivo.</p>
                    </div>
                    <div className="">
                      <h3 className="text-4xl font-bold text-center px-10">Una Comunidad que hace el bien</h3>
                      <p className="text-justify text-3xl ">My E.Shop es un mercado internacional en línea al que acuden personas de todo el mundo para hacer, vender, comprar y coleccionar productos únicos. También somos una comunidad que impulsa cambios positivos para los pequeños negocios, las personas y el planeta. Estas son algunas de las formas en las que, juntos, creamos un efecto positivo.</p>
                    </div>                   
              </div>
              <p className="text-4xl pb-10">¿Alguna pregunta? Encuentra aquí las respuestas a tus preguntas.</p>
          <button class="bg-green-300  hover:bg-gray-100 w-100 text-2xl text-gray-800 font-bold px-10 py-6 border border-gray-400 rounded shadow">
          Ir al Centro de Ayuda</button>
            </div>
          </div>
        </div> 
    </div>    
  );
}
