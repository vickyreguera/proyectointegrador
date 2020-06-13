window.addEventListener("load", function () {


    // acá lo de track
    let queryString = new URLSearchParams(location.search)

    let buscaAlbum = queryString.get("buscadoravanzadoalbum");

    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/album?q=" + buscaAlbum)

    .then(
        function(respuesta) {
            return respuesta.json();
         }
        )
    .then(
        function(informacion){
            let info = informacion.data;
    
            for (let index = 0; index < 1; index++) {
                const cadaAlbum = info [index];
           
                let nombreAl = cadaAlbum.title;
    
                let fotoAl = cadaAlbum.cover_medium;
    
                let idAl = cadaAlbum.id;
    
            let todoAlbum = `<div class="info">
            <img class="fotasa" src="` + fotoAl +`">
            <a href="albums.html?idAlbums=`+ idAl + `"><h4 class="elnombre">` + nombreAl + `</h4></a>
        </div>`
    
        document.querySelector("main").innerHTML += todoAlbum
            }
            
            
        }) 

    


}) //cierro el onload
