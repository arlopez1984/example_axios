import axios from "axios";

export const getPersonajes= async(state)=>{
 const peticion = await axios.get('https://rickandmortyapi.com/api/character')
 state(peticion.data.results)
}

export const getPersonajesId= async(state,id)=>{
    const peticion = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    state(peticion.data)
   }


