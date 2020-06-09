window.addEventListener("load",function(){

let queryString = new URLSearchParams(location.search)

let loBuscado = queryString.get("buscador");

fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=" + loBuscado + "")
.then(
    function(respuesta) {
        return respuesta.json();
    }
 )
 .then(
    
     function(resultado){
        resultado = resultado.data

        console.log(resultado)

    
        document.querySelector(".buscar").innerHTML += " "
       
        for (let index = 0; index < 1; index++) {
            const cadaResultado = resultado[index];

            let nombreTrack = cadaResultado.title

            let nombreDelArtista = cadaResultado.artist.name

            let nombreDelAlbum = cadaResultado.album.title

            let fotoTrack = cadaResultado.album.cover_medium

            let duracion = cadaResultado.duration

            let trackId = cadaResultado.id

            let trackResultado = `<main class="container">
            <section class="colizq">
            <div><img class="portadacamilo" src="`+ fotoTrack + `"> </div>
            <div class="nombre">
            <h3 class="cancion"><a href="tracks.html?idTrack=`+ trackId + `"">` + nombreTrack + `</a></h3>
            <h5 class="artist">` + nombreDelArtista + `</h5>
            </div>
            <main class="addto"> 
                <div class="playlist">
                <h4 class="play">ADD TO PLAYLIST</h4>
            </div>
            
            </main>
            </section>
        <section class="col-der">
            <div class="infoalbum">
            <ul class="texto">
                <li class="txchico"> Álbum: </li>
                <li class="txchico">Duración: `+ duracion + ` segundos </li>
                <li class="separar"><strong>`+ nombreDelAlbum + `</strong></li>
                <li class="fecha"><strong></strong></li>
            </ul>
        <div class="tit"><h4>MORE SONGS FROM THE ARTIST :</h4></div>
        <div class="otras">
                <ul class="mas-canciones">
                    
                </ul>
            </div>
        </section>`
        
        
        let queryString = new URLSearchParams(location.search)
        let codigoTrack = queryString.get("idTrack")
        
        fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/" + codigoTrack)
            .then(
                function (respuesta) {
                    return respuesta.json();
                }
            )
            .then(
                function (resultado) {

                    fetch("https://cors-anywhere.herokuapp.com/" + resultado.artist.tracklist)
                        .then(
                            function (respuesta) {
                                return respuesta.json();
                            }
                        )
                        .then(
                            function (tracklist) {
                                
                                for (let index = 0; index < 6; index++) {
                                    const cadaSong = tracklist.data[index];



                                    console.log(cadaSong);

                                    let otrasSongs = `<li class="espacio"> ` + (index+1) + "- " + cadaSong.title + `</li>`

                                    document.querySelector(".mas-canciones").innerHTML += otrasSongs;



                                }
                            })
                        }) 
        document.querySelector(".buscar").innerHTML += trackResultado

        }

    
    })


})