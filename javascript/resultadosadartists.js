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
                
                let idAr = cadaArtista.id;
                window.location.href="artists.html?idArtist=" + idAr

                /* TODO ESTO LO TUVIMOS QUE SACAR POR EL WINDOW.LOCATION 



                let nombreAr = cadaArtista.name;
                let fotoAr = cadaArtista.picture_xl;
                let fans = cadaArtista.nb_fan;
                let cantidadAlbumes = cadaArtista.nb_album;

                let linkArtist = `<h3 class="titulando"> <a href="artists.html?idArtist=` + idAr + `">` + nombreAr +` </a></h3>`
                document.querySelector(".titulando").innerHTML += linkArtist
                document.querySelector(".portadaartist").src = fotoAr
                document.querySelector(".seguidores").innerHTML += fans
                document.querySelector(".separar").innerHTML += cantidadAlbumes

                let repro = `https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=false&width=600&height=350&color=007FEB&layout=dark&size=medium&type=radio&id=artist-` + idAr +`&app_id=1`

                document.querySelector(".aescuchar").src = repro

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



    
            
    */
            
    
            } // cierro for inicial
            
            
        }) 

    


}) //cierro el onload

