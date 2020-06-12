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
                    document.querySelector(".cancion").innerHTML = resultado.title;
                    document.querySelector(".portadacamilo").src = resultado.album.cover_medium;
                    document.querySelector(".fecha").innerHTML = resultado.duration;
                   
                    let nombreAl = resultado.album.title;
                    let identificarAl = resultado.album.id;
                    let albumes = `<li class="separar"><a class="allink" href="albums.html?idAlbums=`+ identificarAl + `">`+ nombreAl + `</a> </li>`
                   
                    document.querySelector(".separar").innerHTML = albumes;
 
                   let nombreAr = resultado.artist.name;
                   let identificarAr = resultado.artist.id;
                   let artista = `<li class="artist"><a class="fuera" href="artists.html?idArtist=`+ identificarAr + `">`+ nombreAr + `</a> </li>`
                   
                    
                    document.querySelector(".artist").innerHTML = artista;
 
 
                    fetch("https://cors-anywhere.herokuapp.com/" + resultado.artist.tracklist)
                        .then(
                            function (respuesta) {
                                return respuesta.json();
                            }
                        )
                        .then(
                            function (tracklist) {
                                console.log(tracklist)
                                for (let index = 0; index < 6; index++) {
                                    const cadaSong = tracklist.data[index];
 
                                    
 
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
        alert("¿No se recibió ID de canción?")
    }
 
// Agregar a playlist
    let recuperoStorage = localStorage.getItem("playlist");
 
 
if(recuperoStorage == null){
    playlist = [];
} else {
    playlist = JSON.parse(recuperoStorage);
}
 
//Me fijo que no esté en la lista y cambio el texto del botón
if(playlist.includes(codigoTrack)){
    document.querySelector(".laquiero").innerHTML = "Remove from playlist";
}
 
//Paso 2: agregar un track a la playlist.
document.querySelector(".laquiero").addEventListener("click", function(e){
    //Detener el comportamiento default de <a></a>
    e.preventDefault();
 
    if(playlist.includes(codigoTrack)){
        //Si el track está tenemos que quitarlo.
        // indexof() para localizar valores en un array 
        let indiceEnElArray = playlist.indexOf(codigoTrack);
        playlist.splice(indiceEnElArray, 1);
        document.querySelector(".laquiero").innerHTML = "Add to playlist";
        console.log(playlist);
        
    } else { 
        //Agrego el id del track a la lista
        playlist.push(codigoTrack);
        document.querySelector(".laquiero").innerHTML = "Remove from playlist"
    }
    //
 
 
    //Paso 3 guardar lista en localStorage
    let playlistParaStorage = JSON.stringify(playlist);
    localStorage.setItem("playlist", playlistParaStorage);
    console.log(localStorage);
 
 
})
 
 
    
 
 
 
 
}) // cierra window onload
