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
                    document.querySelector(".artist").innerHTML = resultado.artist.name;
                    document.querySelector(".fecha").innerHTML = resultado.duration;
                    document.querySelector(".separar").innerHTML = resultado.album.title;
 
                   
                    
 
 
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
 
                                    let otrasSongs = `<li class="espacio"> `  + cadaSong.title + `</li>`
 
                                    document.querySelector(".mas-canciones").innerHTML += otrasSongs;
 
 
 
                                }
                            })
                    document.querySelector(".link").addEventListener("click", function (e) {
                        let continuar = confirm("¿Quiere conocer el perfil del artista?")
                        console.log(continuar);
 
 
                    })
 
                })
    }
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
 
 
    
 
 
 
 
})
