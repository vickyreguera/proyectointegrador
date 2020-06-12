window.addEventListener("load", function (){

    let queryString = new URLSearchParams(location.search)
    let codigoAlbum = queryString.get("idAlbums");

    if(codigoAlbum){
        
        fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/" + codigoAlbum)
        .then(
            function (respuesta) {
                return respuesta.json();
            }
        )
        .then(
            function(resultado){
            console.log(resultado);
            
            document.querySelector(".titulando").innerHTML = resultado.title;
            document.querySelector(".portadaartist").src = resultado.cover_medium;
            document.querySelector(".fecha").innerHTML = resultado.release_date;   
            document.querySelector(".titulo").innerHTML = resultado.duration;
            
            let nombreArtista = resultado.artist.name;
            let idArtista = resultado.artist.id;

            let todoArtist = `<h5 class="cantante"><a class="linkeando" href="artists.html?idArtist=`+ idArtista + `">`+ nombreArtista + `</a> </li>`
            
            document.querySelector(".cantante").innerHTML = todoArtist;
            
            
            
            let otrasCanciones = resultado.tracks.data
            console.log(otrasCanciones);
            
            for (let index = 0; index < otrasCanciones.length; index++) {
                const masSongs = otrasCanciones[index];



                console.log(masSongs);

                let nombreCancion = masSongs.title;
                let idCancion = masSongs.id
                let albumCanciones = `<li class="cancion"> <a href="tracks.html?idTrack=` + idCancion + `">`  + nombreCancion + ` </a> </li>`

                

                document.querySelector(".listacanciones").innerHTML += albumCanciones;



            }

        })
    }

    })

    

