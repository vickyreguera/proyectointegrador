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
                let fotoAr = cadaArtista.picture_xl;
                let idAr = cadaArtista.id;
                let fans = cadaArtista.nb_fan;
                let cantidadAlbumes = cadaArtista.nb_album;

                document.querySelector(".titulando").innerHTML += nombreAr
                document.querySelector(".portadaartist").src = fotoAr
                document.querySelector(".seguidores").innerHTML += fans
                document.querySelector(".separar").innerHTML += cantidadAlbumes

                fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/" + idAr + "/top?limit=50")
                        .then(
                            function (respuesta) {
                                return respuesta.json();
                            }
                        )
                        .then(
                            function (resultado) {
                                console.log(resultado)

                                let listaSongs = resultado.data
                                for (let index = 0; index < listaSongs.length; index++) {
                                    const cadaSong = listaSongs[index];

                                    let trackId = cadaSong.id;
                                    let trackNombre = cadaSong.title

                                    console.log(cadaSong);

                                    let otrasSongs = `<li class="cancion"> <a href="tracks.html?idTrack=`+ trackId +`">`  + trackNombre + `</a> </li> `

                                    document.querySelector(".listacanciones").innerHTML += otrasSongs;

        



                                } //cierro for
                            }) //cierro then tracklist



    
            
    
            
    
            } // cierro for inicial
            
            
        }) 

    


}) //cierro el onload

