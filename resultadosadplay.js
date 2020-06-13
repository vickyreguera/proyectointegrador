window.addEventListener("load", function () {


    // acá lo de track
    let queryString = new URLSearchParams(location.search)

    let buscaPlaylist = queryString.get("buscadoravanzadoplaylist");

    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/playlist?q=" + buscaPlaylist)

    .then(
        function(respuesta) {
            return respuesta.json();
         }
        )
    .then(
        function(informacion){
            let info = informacion.data;
    
            for (let index = 0; index < 1; index++) {
                const cadaPlaylist = info [index];
           
                let nombrePlay = cadaPlaylist.title;
    
                let fotoPlay = cadaPlaylist.picture_medium;
    
                let idPlay = cadaPlaylist.id;
    
            let todoPlaylist = `<div class="info">
            <img class="fotasa" src="` + fotoPlay +`">
            <a href="playlists.html?idPlaylists=`+ idPlay + `"><h4 class="elnombre">` + nombrePlay + `</h4></a>
        </div>`
    
        document.querySelector("main").innerHTML += todoPlaylist
            }
            
            
        }) 

    


}) //cierro el onload
