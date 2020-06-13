window.addEventListener("load", function () {


    // acá lo de track
    let queryString = new URLSearchParams(location.search)

    let buscaTrack = queryString.get("buscadoravanzadotrack");



    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=" + buscaTrack)
    
    .then(
        function(respuesta) {
            return respuesta.json();
        }
     )
    .then(
        
         function(resultado){
            resultados = resultado.data
            
            document.querySelector("main").innerHTML += "";

            for (let index = 0; index < 1; index++) {
                const cadaResultado = resultados[index];
           
                let nombreTr = cadaResultado.title;

            let fotoTr = cadaResultado.album.cover_medium;

            let idTr = cadaResultado.id;

            let todoTrack = `<div class="info">
            <img class="fotasa" src="` + fotoTr +`">
            <a href="tracks.html?idTrack=`+ idTr + `"><h4 class="elnombre">` + nombreTr + `</h4></a>
        </div>`

        document.querySelector("main").innerHTML += todoTrack
            }
        

        
         }) // cierra el then





    
}) // cierra el onload