window.addEventListener("load", function(){

    let nombrePlaylist = prompt("Ingrese el nombre de su playlist")

    let nombreDelUsuario = '<h3 class="mimusica">' + nombrePlaylist+ '</h3>'

    document.querySelector(".infoalbum").innerHTML += nombreDelUsuario

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

            
            document.querySelector(".listacanciones").innerHTML += '<li class="titulacion">' + '<a class="titulacion" href="tracks.html?idTrack=' + track.id + '">' + track.title + '</a></li>' 
        
            
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

                    
                    let titleCancion = resultados.title;
                    let idCancion = resultados.id;

                    let todasFavoritas = `<li class ="titulacion"><h3 class="titulacion"> <a class="titulacion" href="tracks.html?idTrack=` + idCancion + `">`
                        + titleCancion + `</a> </h3> </li>`
                    
                        document.querySelector(".listacanciones").innerHTML += todasFavoritas

                        
    }) 
    
        }
        })
            }     
        
        
        
    })
