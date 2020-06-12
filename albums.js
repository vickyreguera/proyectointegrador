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
            
            document.querySelector(".nombre").innerHTML = resultado.title;
            document.querySelector(".tini").src = resultado.cover_medium;
            document.querySelector(".fecha").innerHTML = resultado.release_date;   
            document.querySelector(".separar").innerHTML = resultado.duration;
            document.querySelector(".cantante").innerHTML = resultado.artist.name;

            
            
            let otrasCanciones = resultado.tracks.data
            console.log(otrasCanciones);
            
            for (let index = 0; index < otrasCanciones.length; index++) {
                const masSongs = otrasCanciones[index];



                console.log(masSongs);

                let albumCanciones = `<li class="cancion">`  + masSongs.title + `</li>`

                

                document.querySelector(".listacanciones").innerHTML += albumCanciones;



            }
        })
    }

    })

    

