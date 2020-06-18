window.addEventListener("load", function(){

    let nombrePlaylist = prompt("Ingrese el nombre de su playlist")

    let nombreDelUsuario = '<h3 class="mimusica">' + nombrePlaylist + '</h3>'

    document.querySelector(".infoalbum").innerHTML += nombreDelUsuario

let traigoInfo = localStorage.getItem("playlist");
let playlist = JSON.parse(traigoInfo);
// el Json lo trae devuelta en objeto a lo que estaba en el storage


console.log(traigoInfo);
if(traigoInfo == null || traigoInfo == "[]"){
    playlist = [];
    document.querySelector(".listacanciones").innerHTML += '<li class="nohay"> No hay canciones en tu playlist </li>'
    // si no hay nada que me ponga esa frase
    
} 
else {

   // si sí hay, recorre la lista de canciones añadidas a la playlisy

    for (let index = 0; index < playlist.length; index++) {
        const canciones = playlist[index];

        laPlaylist(canciones)

        
    }
}

function laPlaylist(codigoTrack){
    

    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/" + codigoTrack)
        .then(function (response) {
            return response.json();
        })
        .then(function (resultado) {

            let titleCancion = resultado.title;
            let idCancion = resultado.id
            
            document.querySelector(".listacanciones").innerHTML += '<li class="titulacion">' + '<a class="titulacion" href="tracks.html?idTrack=' + idCancion + '">' + titleCancion + '</a></li>' 
        
        })
            }     
        
        
        
    })
