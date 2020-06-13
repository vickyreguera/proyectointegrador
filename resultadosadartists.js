window.addEventListener("load", function () {


    // acá lo de track
    let queryString = new URLSearchParams(location.search)

    let buscaArtist = queryString.get("buscadoravanzadoartist");

    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/artist?q=" + buscaArtist)

    .then(
        function(respuesta) {
            return respuesta.json();
         }
        )
    .then(
        function(informacion){
            let info = informacion.data;
    
            for (let index = 0; index < 1; index++) {
                const cadaArtista = info [index];
           
                let nombreAr = cadaArtista.name;
    
            let fotoAr = cadaArtista.picture_medium;
    
            let idAr = cadaArtista.id;
    
            let todoArtista = `<div class="info">
            <img class="fotasa" src="` + fotoAr +`">
            <a href="artists.html?idArtist=`+ idAr + `"><h4 class="elnombre">` + nombreAr + `</h4></a>
        </div>`
    
        document.querySelector("main").innerHTML += todoArtista
            }
            
            
        }) 

    


}) //cierro el onload

