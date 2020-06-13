window.addEventListener("load", function(){

let recuperoStorage = localStorage.getItem("playlist");
let playlist = JSON.parse(recuperoStorage);


console.log(recuperoStorage);
if(recuperoStorage == null || recuperoStorage == "[]"){
    playlist = [];
    document.querySelector(".listacanciones").innerHTML += '<li class="nohay"> No hay canciones en tu playlist </li>'
    
    
} 
else {

   

    for (let index = 0; index < playlist.length; index++) {
        const canciones = playlist[index];

        mostrarPlaylist(canciones)

        
    }
}

function mostrarPlaylist(codigoTrack){
    

    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/" + codigoTrack)
        .then(function (response) {
            return response.json();
        })
        .then(function (track) {
            document.querySelector(".listacanciones").innerHTML += '<li class="titulacion">' + '<a href="tracks.html?id=' + track.id + '">' + track.title + '</a></li>' 
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
                            
                        
                    let resultados = resultado.data

                    
                    let titleCancion = resultados.title
                    let idCancion = resultados.id;

                    let todasFavoritas = `<li class = "cancion">
                        <a href="tracks.html?idTrack=`+ idCancion + `"><h3 class="cancion">`
                        + titleCancion + `</h3></a></li>`
                    
                        document.querySelector(".listacanciones").innerHTML += todasFavoritas
    }) 
    
        }
        })
            }     
        
        
        
    })
