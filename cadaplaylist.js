window.addEventListener("load", function(){

let recuperoStorage = localStorage.getItem("playlist");
let playlist = JSON.parse(recuperoStorage);

let playlistWrapper = document.querySelector(".listacanciones");
console.log(recuperoStorage);
if(recuperoStorage == null || recuperoStorage == "[]"){
    playlist = [];
    playlistWrapper.innerHTML += '<li> No hay canciones en tu playlist </li>'
    console.log(playlistWrapper);
    
} else {

    playlist.forEach(function(codigoTrack){
        buscarYMostrarTrack(codigoTrack);
    });
}

function buscarYMostrarTrack(codigoTrack){
    let proxy = "https://cors-anywhere.herokuapp.com/";
    let url = proxy + "https://api.deezer.com/track/" + codigoTrack;

    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (track) {
            playlistWrapper.innerHTML += '<li class="canciones">' + '<a href="tracks.html?id=' + track.id + '">' + track.title + '</a></li>' 
        })
        .catch(function(errors){
            console.log(errors);
            
            for (let index = 0; index < cancionesFavoritas.length; index++) {
                
                fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/" + cancionesFavoritas[i])
                .then(
                    function(respuesta) {
                        return respuesta.json();
                    }
                 )
                 .then(
                        function (resultado) {
                            
                        
                    let canciones = resultado.data

                    
                    let title = canciones.title
                    let id = canciones.id;

                    let todasFavoritas = `<li class = "cancion">
                        <a href="tracks.html?idTrack=`+ id + `">`
                        + title + `</a></li>`
                    
                        document.querySelector(".listacanciones").innerHTML += todasFavoritas
        
    })
}
        })
            }
        
            
        
    })
