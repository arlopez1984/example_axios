import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';


const Data = () => {
 const  params =  useParams();
 const [user, setUser] = useState(null);
 const [loading, setLoading] = useState(true);
 
 const url = `http://localhost:3000/users/${params.id}`; 
 
 
 /////////////////Ejemplo con useEffect/////////////////////////////
  /*useEffect(()=>{
    fetch(url)
  .then(response => response.json())
  .then(data =>  setUser(data)) 
  .catch(err => console.log(err))
  setLoading(false)
  },[])*/

/////////////////Ejemplo con Callback/////////////////////////////

  function GetData(fn){
    useEffect(()=>{
      fetch(url)
    .then(response => response.json())
    .then(data =>  setUser(data)) 
    .catch(err => console.log(err))
    fn();
    }
    ,[])
    
  }
  function SetData(){
    setLoading(false)
  }

  GetData(SetData);


  return (    
    <>
    {
      loading ? (<h1>Loading...</h1>):(null)
    }
    {
      user ? (
          <div>
            <p> El usuario con id {user.id} y nombre {user.name} esta embarcado....</p>
          </div>        
      ):('Loading ....')
      
    }
    </>
  )
}
export default Data