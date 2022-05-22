import { Percentage } from "../../components/percentage/percentage";
import "./delivery.scss";
import m1 from "../../images/mueble1.jpg"
import m2 from "../../images/mueble2.jpg"
import m3 from "../../images/mueble3.jpg"
import m4 from "../../images/mueble4.jpg"
import m5 from "../../images/mueble5.jpg"
import Calendar from "react-calendar"
import 'react-calendar/dist/Calendar.css';

export function PageDelivery() {
  return (
    <div className="page-delivery w-3/4  flex flex-col justify-center items-center">
      <div class=" py-5 flex flex-col justify-center items-center">        
        <img className=" object-cover w-3/5 h-3/5 py-5 " src={m4} alt=""/>
        <h2 className="text-center text-4xl py-2 font-bold animate-bounce" >Ahorra tiempo y recibe tus muebles en la comodidad de tu casa !!!</h2>
      </div>
    <div className=" bg-gray-100 px-10 py-10 flex gap-10 w-4/5" >
      <div className="form_Pedido w-1/2 " >
        <form className="m-auto  py-6" >
          <h1 className="text-4xl text-center py-1 	">Haz tu Pedido</h1>
          <div className="border-black w-4/5 m-auto"/>
            <div className="sm:grid sm:grid-cols-1 sm:gap-4 m-auto">
              <input 
                type="text"
                placeholder="Nombre"
                className="sm:mb-0 w-full p-4 border border-gray-500 rounded-xl focus:outline-none focus:border-gray-900"
                required        
              />
              <input 
                type="text"
                placeholder="Apellidos"
                className="sm:mb-0 w-full p-4 border border-gray-500 rounded-xl focus:outline-none focus:border-gray-900"
                required
              />
              <input 
                type="email"
                placeholder="Correo electrónico"
                className="sm:mb-0 w-full p-4 border border-gray-500 rounded-xl focus:outline-none focus:border-gray-900"
                required
              />
              <input 
                type="tel"
                placeholder="Número de teléfono"
                className="sm:mb-0 w-full p-4 border border-gray-500 rounded-xl focus:outline-none focus:border-gray-900"
                required
              />         
            </div>
            <div className="flex justify-center pt-10">
              <button className="bg-green-600 px-20 text-white rounded-xl min-w py-6">
                Registrar Pedido
              </button>
            </div>
          </form>
      </div>
      <div className="w-1/2 ">
        <p className="text-4xl text-center font-bold py-2 	"> Elige una Fecha</p>        
        <div className="flex flex-col items-center" >          
          <Calendar  />        
        </div>
      </div>
    </div>   
    <div className=" p-10 text-4xl text-blue-900 w-4/5 text-center animate-pulse	" >
        <p> "Nuestro Equipo te contactara en los proximos diez minutos" </p>
    </div>
  </div>    
  );
}   