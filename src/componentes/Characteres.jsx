import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import {getPersonajesId} from '../Functions/function'


const Characteres = () => {

  const [characterSelec,setCharacterSelec] = useState(null)
 useEffect(()=>{
    getPersonajesId(setCharacterSelec,params.id)
  },[])

  const params = useParams();
  return (
    <>
      Este personaje tiene el id: {params.id}
      {characterSelec !== null ? (
        <p>Con el nombre {characterSelec.name} tenemos que tener cuidado...</p>
      ) : ('no tiene')}
    </>
  )
}

export default Characteres