import {useState} from 'react'


const usePeople = () => { 
 
    const [people,setPeople] = useState(null);
    const [newerror, setNewError] = useState(null);
    const [isloading,setIsLoading] = useState(false);  
    const fetchData = async () =>{
      try {   
          const response = await fetch('http://localhost:3000/users');
          if(!response.ok) throw {ok:false, msg:'Error 404'}
          const data = await response.json();
          setPeople(data)
          setIsLoading(true)
        } catch (error) {
          setNewError(error)
        }finally{
          // Aqui lo que quieres hacer de cualqueir manera jejejeje
        }   
    } 
    fetchData();
      return {
        people,
         isloading,
          newerror
      }
  }
export default usePeople




/* const fetchData = async () =>{
        try {   
          const response = await fetch('http://localhost:3000/users');
          if(!response.ok) throw {ok:false, msg:'Error 404'}
          const data = await response.json();
          //console.log(data)           
          setPeople(data)
          setLoading(true)
        } catch (error) {
          setError(error)
        }finally{
          // Aqui lo que quieres hacer de cualqueir manera jejejeje
        }   
   } 
   fetchData();*/
  