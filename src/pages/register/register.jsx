
import {useState} from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";
import "./register.scss";

export function PageRegister() {

  let history = useHistory();

  const [form, setForm] = useState({
    name:'',
    lastname:'',
    mail:'',
    telephone:'',
    user:'',
    pass:'',
  })
 
  function saveUser(){ 
    axios.post("https://61ef3e1fd593d20017dbb3c6.mockapi.io/users",form)
    .then(() => {
      alert("Se guardó correctamente")
      history.push("home")
    }).catch(() => {
      alert("No se pudo guardar, inténtelo de nuevo")
    })
  }  
  
  return (
      <div className="page-register">
         <form onSubmit={(event)=>{
           event.preventDefault()
           saveUser()
         }} className="bg-gray-100 m-auto border-solid border-2 border-color-footer" >
           <h1 className="text-6xl text-center mb-10 pt-10">Regístrate</h1>
           <div className="border-black mb-10 w-4/5 m-auto"/>
          <div class="sm:grid sm:grid-cols-2 sm:gap-10 m-auto w-4/5">
            <input 
              type="text"
              placeholder="Nombre"
              className="mb-8 sm:mb-0 w-full p-4 border border-gray-500 rounded-xl focus:outline-none focus:border-gray-900"
              value={form.name}
              required
              onChange={(event) => { 
                setForm((state) => ({...state, name:event.target.value}))
              }}
            />

            <input 
              type="text"
              placeholder="Apellidos"
              className="mb-8 sm:mb-0 w-full p-4 border border-gray-500 rounded-xl focus:outline-none focus:border-gray-900"
              value={form.lastname}
              required
              onChange={(event) => { 
                setForm((state) => ({...state, lastname:event.target.value}))
              }}
            />

            <input 
              type="email"
              placeholder="Correo electrónico"
              className="mb-8 sm:mb-0 w-full p-4 border border-gray-500 rounded-xl focus:outline-none focus:border-gray-900"
              value={form.mail}
              required
              onChange={(event) => { 
                setForm((state) => ({...state, mail:event.target.value}))
              }}
            />

            <input 
              type="tel"
              placeholder="Número de teléfono"
              className="mb-8 sm:mb-0 w-full p-4 border border-gray-500 rounded-xl focus:outline-none focus:border-gray-900"
              value={form.telephone}
              required
              onChange={(event) => { 
                setForm((state) => ({...state, telephone:event.target.value}))
              }}
            />

            <input 
              type="text"
              placeholder="Usuario"
              className="mb-8 sm:mb-0 w-full p-4 border border-gray-500 rounded-xl focus:outline-none focus:border-gray-900"
              value={form.user}
              required
              onChange={(event) => { 
                setForm((state) => ({...state, user:event.target.value}))
              }}
            />

             <input 
              type="password"
              placeholder="Contraseña"
              className="mb-8 sm:mb-0 w-full p-4 border border-gray-500 rounded-xl focus:outline-none focus:border-gray-900"
              value={form.pass}
              required
              onChange={(event) => { 
                setForm((state) => ({...state, pass:event.target.value}))
              }}
            />        
          </div>
          <div className="flex justify-center pt-10">
            <button className="bg-green-600 py-6 px-20 text-white rounded-xl min-w mb-5">
              Registrarme
            </button>
          </div>
        </form>
      </div>    
  );     


  
}