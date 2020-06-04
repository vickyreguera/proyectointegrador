window.addEventListener("load", function(){
    let queryString = new URLSearchParams(location.search)
    let codigoTrack = queryString.get("idTrack");
if(codigoTrack) {


    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/" + codigoTrack)
    .then(
        function(respuesta) {
            return respuesta.json();            
        }
    )
    .then(
        function(resultado) {
        console.log(resultado)
           document.querySelector(".cancion").innerHTML = resultado.title;
           document.querySelector(".portadacamilo").src = resultado.album.cover_medium;
           document.querySelector(".artist").innerHTML = resultado.artist.name;
           document.querySelector(".fecha").innerHTML = resultado.release_date;
           document.querySelector(".separar").innerHTML = resultado.album.title;
           
           
            let infoSongs = resultado.artist.data;
        
           console.log(infoSongs);
        
        for (let index = 0; index < infoSongs.length; index++) {
            const cadaSong = infoSong[index];
            
            let nombreSong = cadaSong.tracklist;
            
            console.log(nombreSong);
        
            document.querySelector(".espacio").innerHTML = resultado.artist.tracklist;
        }
           
         
    
        })
        }
else{
    alert("No se recibió ID de canción")
}


})
