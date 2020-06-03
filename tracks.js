window.addEventListener("load", function(){
    let queryString = new URLSearchParams(location.search)
    let codigoTrack = queryString.get("idTrack");
if(codigoTrack) {


    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/" + codigoTrack)
    .then(
        function(respuesta) {
            return respuesta.json();            
        }
    )
    .then(
        function(resultado) {
        console.log(resultado)
           document.querySelector(".cancion").innerHTML = resultado.title;
           document.querySelector(".portadacamilo").src = resultado.album.cover_medium;
           document.querySelector(".fecha").innerHTML = resultado.release_date;
        }
    )
}
else{
    alert("No se recibió ID de canción")
}


})