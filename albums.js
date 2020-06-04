window.addEventListener("load", function (){

    let queryString = new URLSearchParams(location.search)    
    let codigoAlbums = queryString.get("idAlbums");
    
    if(codigoAlbums){

    fetch(" https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/" + codigoAlbums)
    .then(
        function(respuesta){
            return respuesta.json();
        }
    )
    .then(
        function(resultado){  
            console.log(resultado)  

            document.querySelector(".cancion").innerHTML = resultado.title;
            document.querySelector(".tini").src = resultado.album.cover_medium;
            document.querySelector(".fecha").innerHTML = resultado.release_data;   
            document.querySelector(".separar").innerHTML = resultado.album.title;
            
        })  
        
    }
      else{
            alert("No se recibio ID de album")
      }
    

    })

    
    



    

