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
           document.querySelector(".nombre").innerHTML = resultado.name;
           document.querySelector(".seguidores").innerHTML = resultado.nb_fans;
           document.querySelector(".separar").innerHTML = resultado.nb_album;
           
           
        }
    )
}
else{
    alert("No se recibió ID de artist")
}


})