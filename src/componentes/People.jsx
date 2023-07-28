import usePeople from '../hooks/usePeople'

const People = () => {
     const { people, loading, error} = usePeople();    
     return (     
     <>
         {
            !loading ? (
            <div>
            <h4>Loading.... </h4></div>):('') 
         }
         {
            error !== null ? (error.msg):(
               people !== null ? (people.map(element => (
                  <ul key={element.id}>
                     <a href={`/users/${element.id}`}>{element.name}</a>
                  </ul>  
               ))):('')
            )
         }     
     </>

     // partiendo de que uso el hook personalizado
    
      
      )
}

export default People