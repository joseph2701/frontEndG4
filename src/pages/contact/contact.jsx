import React from 'react';
import axios from 'axios'
import { useHistory } from "react-router-dom";
import { useState } from 'react'

import "./contact.scss";

export function PageContact() {

  let history = useHistory();

  const [form, setForm] = useState({
    nombre:'',
    apellido:'',
    correo:'',
    telefono:'',
    comentario:''
  })
 
  function saveContact(){ 
    axios.post("https://61ef3de0d593d20017dbb3bf.mockapi.io/contacto",form)
    .then(() => {
      alert("Se guardó correctamente")
      history.push("home")
    }).catch(() => {
      alert("No se pudo guardar, inténtelo de nuevo")
    })
  }  
  
  return (
      <div className="page-contact ">
         <form onSubmit={(event)=>{
           event.preventDefault()
           saveContact()
         }} className="bg-gray-100 m-auto w-4/5 border-solid border-2 border-color-footer" >
           <h1 className="text-6xl text-center mb-10 pt-10">Contáctanos</h1>
           <div className="border-black mb-20 w-4/5 m-auto"/>
          <div class="sm:grid sm:grid-cols-2 sm:gap-10 m-auto w-4/5">
            <input 
              type="text"
              placeholder="Nombre"
              className="mb-8 sm:mb-0 w-full p-4 border border-gray-500 rounded-xl focus:outline-none focus:border-gray-900"
              value={form.nombre}
              required
              onChange={(event) => { 
                setForm((state) => ({...state, nombre:event.target.value}))
              }}
            />

            <input 
              type="text"
              placeholder="Apellidos"
              className="mb-8 sm:mb-0 w-full p-4 border border-gray-500 rounded-xl focus:outline-none focus:border-gray-900"
              value={form.apellido}
              required
              onChange={(event) => { 
                setForm((state) => ({...state, apellido:event.target.value}))
              }}
            />

            <input 
              type="email"
              placeholder="Correo electrónico"
              className="mb-8 sm:mb-0 w-full p-4 border border-gray-500 rounded-xl focus:outline-none focus:border-gray-900"
              value={form.correo}
              required
              onChange={(event) => { 
                setForm((state) => ({...state, correo:event.target.value}))
              }}
            />

            <input 
              type="tel"
              placeholder="Número de teléfono"
              className="mb-8 sm:mb-0 w-full p-4 border border-gray-500 rounded-xl focus:outline-none focus:border-gray-900"
              value={form.telefono}
              required
              onChange={(event) => { 
                setForm((state) => ({...state, telefono:event.target.value}))
              }}
            />

            <textarea 
              type="text"
              placeholder="Comentario"
              className="w-full p-4 border border-gray-500 rounded-xl focus:outline-none focus:border-gray-900 col-span-2"
              rows="10"
              value={form.comentario}
              required
              onChange={(event) => { 
                setForm((state) => ({...state, comentario:event.target.value}))
              }}
            />           
          </div>
          <div className="flex justify-center pt-10">
            <button className="bg-color-footer py-8 px-20 text-white rounded-xl min-w mb-10">
              Enviar mensaje
            </button>
          </div>
          </form>
      </div>    
  );     

}