window.addEventListener("load", function(){
    let queryString = new URLSearchParams(location.search)
    let codigoArtist = queryString.get("idArtist");
if(codigoArtist) {


    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/" + codigoArtist)
    .then(
        function(respuesta) {
            return respuesta.json();            
        }
    )
    .then(
        function(resultado) {
        console.log(resultado)
           document.querySelector(".tini").src = resultado.picture;
           document.querySelector(".cancion").innerHTML = resultado.title;
           document.querySelector(".artist").innerHTML = resultado.artist.name;
           document.querySelector(".fecha").innerHTML = resultado.release_date;
           document.querySelector(".separar").innerHTML = resultado.album.title;
           
        }
    )
}
else{
    alert("No se recibió ID de artist")
}


})