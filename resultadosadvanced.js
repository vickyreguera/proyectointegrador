window.addEventListener("load", function () {


    // acá lo de artist
    let queryString = new URLSearchParams(location.search)

    let buscaTrack = queryString.get("buscadoravanzadotrack");



    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=track:" + buscaTrack + "")
    .then(
        function(respuesta) {
            return respuesta.json();
        }
     )
     .then(
        
         function(resultado){

            let nombreTr = resultado.data.title;

            let fotoTr = resultado.data.album.cover_xl;

            let todoTrack = ``


        
         }) // cierra el then


}) // cierra el onload