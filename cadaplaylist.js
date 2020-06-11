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
            playlistWrapper.innerHTML += '<li>' + '<a href="tracks.html?id=' + track.id + '">' + track.title + '</a></li>' 
        })
        .catch(function(errors){
            console.log(errors);
            
        })
};


   
    })
