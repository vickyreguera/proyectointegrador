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
                

                document.querySelector(".portadaplaylist").src = fotoPlay;
                document.querySelector(".titulando").innerHTML += nombrePlay;

                let escuche = `https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=false&width=600&height=350&color=007FEB&layout=dark&size=medium&type=playlist&id=` + idPlay + `&app_id=1`

                document.querySelector(".daleplay").src = escuche
                
    
                fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/playlist/" + idPlay)
                .then(
                    function(respuesta){
                        return respuesta.json();
                    }
                )
                .then(
                    function(resultado){  
                        let duracionPlay = resultado.duration;
                        let fanaticos = resultado.fans;

                        let tiempo = `<li class="horas"> ` + duracionPlay + ` segundos  </li>`

                        document.querySelector(".horas").innerHTML += tiempo;
                        document.querySelector(".titulo").innerHTML += fanaticos;
                    }) // cierra el then de idPlay



                fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/playlist/" + idPlay + "/tracks")
                .then(
                    function(respuesta){
                        return respuesta.json();
                    }
                    )
                .then(
                    function(canciones){  
                        let todasCanciones = canciones.data

                        for (let index = 0; index < todasCanciones.length; index++) {
                            const cadaSong = todasCanciones[index];


                            console.log(cadaSong);

                            let nombreCancion = cadaSong.title;
                            let idCancion = cadaSong.id;

                            let otrasSongs = `<li class="can"> <a class="alsong" href="tracks.html?idTrack=`+ idCancion + `">`  + nombreCancion + `</li>`

                            

                            document.querySelector(".canciones").innerHTML += otrasSongs;
                        } // cierra for canciones

                    }) // cierra then canciones

            } // cierra el for inicial
            
            
        }) // cierra el then inicial

    


}) //cierro el onload
