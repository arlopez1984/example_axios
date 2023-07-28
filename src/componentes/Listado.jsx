
import { useEffect, useState } from 'react'
import {getPersonajes} from '../Functions/function'
import axios from 'axios'


const Listado = () => { 

  
  async function Api(){
    try {
          const response = await fetch('https://rickandmortyapi.com/api/character')
          const data = await response.json()
          if(response.status === 200){
            console.log(data.results)
          }else{
            console.log('Error')
          }  
      
    } catch (error) {
      console.log(`Error: ${error}`)
    }
    
  }
  const [caracteres,setCharaceteres] = useState(null)  
 
    useEffect(()=>{     
      Api();     

    // Axios
      
      /*axios.get('https://rickandmortyapi.com/api/character')
      .then((response) =>{      
        setCharaceteres(response.data.results)      
      })
      .catch((err) => {
        console.log(err)
      })*/


    // Fetch
      
    /*  fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => console.log(data.results))*/
       
    },[])


  return (
    <>
     { caracteres !==null ? (caracteres.map(personaje =>(
      <div key = {personaje.key}>
        <a href={`/character/${personaje.id}`}>{personaje.name}</a>
      </div>
     ))) : ('no hay personajes') }
    </>
    )   
  }
    
export default Listado