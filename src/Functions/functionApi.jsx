function getSuspender(promise)
{
   let status = "pending";
   let response;

   const suspender = promise.then(    
    (Array)=>{
      status = "success";
      response= Array;     
     },
     (error)=>{
      status= "error";
      response= error;
     }     
   );
   const read=()=>{  
     switch (status) {
      case "pending":
         throw suspender;               
        case "error":
         throw response;        
      default:
        return response;        
     }         
   };

  return {read} ;
  
}

export function fetchData(url){ 
   const promise = fetch(url)    
               .then((response) => response.json())            
               .then((data) => data)                          
               return getSuspender(promise)
}
/*export function apiPost(url){  
}
export function apiGetID(setUser,url,id){
  try {  
    const urlId = url + id  
    fetch(urlId)
    .then(response => response.json())
    .then(x => setUser(x))
  
  } catch (error) {
    console.log(`Error: ${error}`)
  }   
}
export function apiPut(url){
    
}*/