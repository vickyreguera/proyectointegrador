window.addEventListener("load", function () {
    let queryString = new URLSearchParams(location.search)
    let codigoTrack = queryString.get("idTrack");
    if (codigoTrack) {
 
 
        fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/" + codigoTrack)
            .then(
                function (respuesta) {
                    return respuesta.json();
                }
            )
            .then(
                function (resultado) {
                    console.log(resultado)
                    
                    let nombreCancion = resultado.title
                    document.querySelector(".titulando").innerHTML = nombreCancion

                    let tiempo = resultado.duration
                    let enSegundos = `<li class="fecha"><strong>` + tiempo + ` segundos </strong></li>`
                    document.querySelector(".fecha").innerHTML = enSegundos
                   
                    let nombreAl = resultado.album.title;
                    let identificarAl = resultado.album.id;
                    let albumes = `<li class="separar"><a class="allink" href="albums.html?idAlbums=`+ identificarAl + `"><strong>`+ nombreAl + `</strong></a> </li>`
                    document.querySelector(".separar").innerHTML = albumes;
 
                   let nombreAr = resultado.artist.name;
                   let identificarAr = resultado.artist.id;
                   let artista = `<li class="artist"><a class="fuera" href="artists.html?idArtist=`+ identificarAr + `">`+ nombreAr + `</a> </li>`
                   document.querySelector(".artist").innerHTML = artista;
                    
                   

                    let reproducir = `https://www.deezer.com/plugins/player?format=square&autoplay=false&playlist=false&width=300&height=300&color=007FEB&layout=dark&size=medium&type=tracks&id=` + codigoTrack + `&app_id=1`

                    document.querySelector(".spinnertracks").style.display = "none"
                    document.querySelector(".portadaartist").src = reproducir;

                  


 
                    fetch("https://cors-anywhere.herokuapp.com/" + resultado.artist.tracklist)
                        .then(
                            function (respuesta) {
                                return respuesta.json();
                            }
                        )
                        .then(
                            function (tracklist) {
                                console.log(tracklist)
                                for (let index = 0; index < tracklist.data.length; index++) {
                                    const cadaSong = tracklist.data[index];
 
                                    if (index >= 6){
                                        break
                                    }
 
                                    console.log(cadaSong);
 
                                    let otrasSongs = `<li class="espacio"> <a class="melleva" href="tracks.html?idTrack=`+ cadaSong.id + `"> `  + cadaSong.title + `</a> </li>`
                                    
 
                                    document.querySelector(".mas-canciones").innerHTML += otrasSongs;
 
                                } // cierra for
                                        
 
                                
                            }) // cierra then artist
                    document.querySelector(".link").addEventListener("click", function (e) {
                        let continuar = confirm("¿Quiere conocer el perfil del artista?")
                        console.log(continuar);
 
                    }) // cierra function

                    
                   
 
                }) // cierra primer fetch
    } // cierra if
    else {
        alert("No se recibió ID de canción")
    }
 
// Add to playlist
    let recuperoStorage = localStorage.getItem("playlist");
 
 // si no hay nada en storage, arranco un array
if(recuperoStorage == null){
    playlist = [];
} 
else { //Leo con Json para pasarlo a objeto
    playlist = JSON.parse(recuperoStorage);
}
 
//Si está, botón para sacarlo
if(playlist.includes(codigoTrack)){
    document.querySelector(".play").innerHTML = "Remove from playlist";
}
 
//Para agregar una canción a la playlist
document.querySelector(".laquiero").addEventListener("click", function(e){
    //Detener el comportamiento default de <a></a>
    e.preventDefault();
 
    if(playlist.includes(codigoTrack)){
        //Sacar la canción si está
        let posicionCancion = playlist.indexOf(codigoTrack);
        playlist.splice(posicionCancion, 1);
        document.querySelector(".play").innerHTML = "Add to playlist";
        console.log(playlist);
        
    } 
    else { 
        // Manda la cancion si no está
        playlist.push(codigoTrack);
        document.querySelector(".play").innerHTML = "Remove from playlist"
    }
    
 
    
    // convertir a JSON y mandar al storage
    let loMando = JSON.stringify(playlist);
    localStorage.setItem("playlist", loMando);
    console.log(localStorage);
 
 
})
 
 
 
 
 
}) // cierra window onload
