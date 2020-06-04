window.addEventListener("load", function (){

    let queryString = new URLSearchParams(location.search)    
    let codigoPlaylists = queryString.get("idPlaylists");

    if(codigoPlaylists){
    fetch( "https://cors-anywhere.herokuapp.com/https://api.deezer.com/playlist/" + codigoPlaylists)
    .then(
        function(respuesta){
            return respuesta.json();
        }
    )
    .then(
        function(resultado){  
            console.log(resultado)  

            document.querySelector(".cancion").innerHTML = resultado.title;
            document.querySelector(".fotito").src = resultado.album.cover_medium;
            document.querySelector(".horas").innerHTML = resultado.release_data;   
            document.querySelector(".titulo").innerHTML = resultado.album.title;
            
        })  
        
    }
      else{
            alert("No se recibio ID de album")
      }
    
})