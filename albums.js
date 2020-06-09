window.addEventListener("load", function (){
    console.log("hola")
    let queryString = new URLSearchParams(location.search)    
    let codigoAlbums = queryString.get("idAlbums");
    
    if(codigoAlbums){

    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/" + codigoAlbums)
    .then(
        function(respuesta){
            return respuesta.json();
        }
    )
    .then(
        function(resultado){  
            console.log(resultado)  
            let cancionesAlbum

            document.querySelector(".cancion").innerHTML = resultado.title;
            document.querySelector(".tini").src = resultado.album.cover_medium;
            document.querySelector(".fecha").innerHTML = resultado.release_date;   
            document.querySelector(".separar").innerHTML = resultado.album.title;
            
            })
         
        
    }
      else{
            alert("No se recibio ID de album")
      }


    })

    
    



    


