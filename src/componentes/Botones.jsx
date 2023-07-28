import React, { useState, Suspense, useEffect } from 'react'
import {fetchData,apiGetID,apiPost,apiPut} from '../Functions/functionApi'
//import Characteres from '../componentes/Characteres'
import usePeople from "../hooks/usePeople";



const Botones = () => {
  const [data,setData] = useState(null)
  //const [loading,setLoading] = useState(false)
  //const [error,setError] = useState(null) 
  const { people, isloading, newerror} = usePeople(); 
  
 
  
  const numbers = [2,5,8,7,9];
  let total = 0; 
 // const responseMayor = numbers.every(item => item > 4)

// const responseMayor = numbers.some(item => item > 2)
  
 // console.log(responseMayor)
  
  const url = process.env.REACT_APP_API_URL
  
  /*useEffect(()=>{
    fetch(url)  
    .then((response) => {
      if(response.ok){
        return response.json();
      }
        throw new Error(response.status);
           
    }) 
    .then(data => setData(data)) 
    .catch(err => console.log('error en el acceso al API')) 
  },[])*/

  //hacer una promesa....

  /*const fakePromise = new Promise((resolve,reject) =>{
    setTimeout(() => {
       resolve("Devolviendo lo que sea!!!")
    }, 2000);
  })*/

  /*useEffect(()=>{
    const fetchDAta = async () =>{
      try {
        const msg = await fakePromise;
        console.log(msg);
        const response = await fetch('http://localhost:3000/userss');
        if(!response.ok) throw {ok:false, msg:'Error 404'}
        const data = await response.json();
        setData(data)
        setLoading(true);
      } catch (error) {
        setError(error)
      }finally{
        // Aqui lo que quieres hacer de cualqueir manera jejejeje
      }
    }
    fetchDAta();
  },[])*/
 
  //otra manera 

  /*useEffect(()=>{
    fetch(url)  
    .then((response) => response.json()) 
    .then((data) => setData(data)) 
    .catch(err =>console.log('error en el acceso al API'))
  },[])*/
  
  
  //otra manera..
 
  const GetData =() =>
  {     
     /*const datos = fetch('http://localhost:3000/users')
                  .then(response => response.json())
                  .then(data => setData(data)) 
                  .catch(err => err)
                  console.log(data)*/


      // accediendo al hook personalizado haciendo click en el boton GEtData  
    
      
  }  
  
  const GetDataID =() =>
  {

  }

  const DeleteData =() =>
  {

  } 
  const PutData= async()=>{
    const newUserUpdate= { 
          edad: 39,
          name: 'Alien'   
    }
    try {
      const response = await fetch('http://localhost:3000/users/1',
      {
        method: 'PUT',
        headers:{
          'Content-Type': 'application/json'
        },
          body: JSON.stringify(newUserUpdate)
      })
      if(response.ok)
      {
        const jsonResponse = await response.json()
        const {name, edad} = jsonResponse;
        console.log(`Fue updateado un recurso con el name: ${name} y edad ${edad} sin problemas`)
        setData(prev => [...prev,jsonResponse]);                    
      } 
      
      
    } catch (error) {
      console.log(error)
    }

  }
  const  PostData = async() =>
  {
    let id = 0;
    if(data) {
      id = (data[data.length -1]).id +1
      
    }     
    const newUser= {
      id: id,
      name: 'Alien',
      edad: 39
    }
      try {
        const response = await fetch('http://localhost:3000/users',
        {
          method: 'POST',
          headers:{
            'Content-Type': 'application/json'
          },
            body: JSON.stringify(newUser)
        })
        if(response.ok)
        {
          const jsonResponse = await response.json()
          const {name, edad} = jsonResponse;
          console.log(`Fue adicionado un recurso con name: ${name} y edad ${edad} sin problemas`)          
        } 
        
      } catch (error) {
        console.log(error)
      }
  } 
 
  return (
    <>
     <h1>Listado</h1>
      <div>
          <button onClick={GetData}>get</button>
          <button onClick={GetDataID}>getId</button>
          <button onClick={PostData}>post</button>
          <button onClick={PutData}>put</button>
          <button onClick={DeleteData}>delete</button>
      </div>     
      {/*
        user !== null ? (<div key={user.id}>
          {user.name}
        </div>):('')
        */ }  
          
      {
         !isloading ? (
         <div>
          <h4>Loading.... </h4></div>):('') 
      }
      {
        newerror !== null ? (newerror.msg):(
          people !== null ? (people.map(element => (
            <ul key={element.id}>
               <a href={`/users/${element.id}`}>{element.name}</a>
            </ul>  
            ))):('')
          )
        }   
       {/* data !== null ? (data.map(element => (
          <ul key={element.id}>
             <a href={`/users/${element.id}`}>{element.name}</a>
          </ul>  
        ))):('')*/}       
    </>
    
  )
}

export default Botones