window.addEventListener("load", function () {


    // acá lo de track
    let queryString = new URLSearchParams(location.search)

    let buscaTrack = queryString.get("buscadoravanzadotrack");



    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=" + buscaTrack)
    
    .then(
        function(respuesta) {
            return respuesta.json();
        }
     )
    .then(
        
         function(resultado){
            resultados = resultado.data
            
            document.querySelector("main").innerHTML += "";

            for (let index = 0; index < 1; index++) {
                const cadaResultado = resultados[index];
           

                document.querySelector(".titulando").innerHTML = cadaResultado.title;
                    
                document.querySelector(".fecha").innerHTML = cadaResultado.duration;
                   
                    let nombreAl = cadaResultado.album.title;
                    let identificarAl = cadaResultado.album.id;
                    let albumes = `<li class="separar"><a class="allink" href="albums.html?idAlbums=`+ identificarAl + `">`+ nombreAl + `</a> </li>`
                   
                    document.querySelector(".separar").innerHTML = albumes;
 
                   let nombreAr = cadaResultado.artist.name;
                   let identificarAr = cadaResultado.artist.id;
                   let artista = `<li class="artist"><a class="fuera" href="artists.html?idArtist=`+ identificarAr + `">`+ nombreAr + `</a> </li>`
                   
                    
                    document.querySelector(".artist").innerHTML = artista;
                    
                   let idTrack = cadaResultado.id

                    let reproducir = `https://www.deezer.com/plugins/player?format=square&autoplay=false&playlist=false&width=300&height=300&color=007FEB&layout=dark&size=medium&type=tracks&id=` + idTrack + `&app_id=1`

                    document.querySelector(".portadaartist").src = reproducir;
               
                
                 
                let codigoTracklist =  cadaResultado.artist.id

            
                fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/" + codigoTracklist + "/top?limit=50")
                    .then(
                        function (respuesta) {
                            return respuesta.json();
                        }
                    )
                    .then(
                        function (informacion) {
                            console.log(informacion)
                            for (let index = 0; index < informacion.data.length; index++) {
                                const cadaSong = informacion.data[index];

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

                    })

            
                

// Agregar a playlist
let recuperoStorage = localStorage.getItem("playlist");


if(recuperoStorage == null){
playlist = [];
} 
else {
playlist = JSON.parse(recuperoStorage);
}

//Me fijo que no esté en la lista y cambio el texto del botón
if(playlist.includes(codigoTrack)){
document.querySelector(".play").innerHTML = "Remove from playlist";
}

//Paso 2: agregar un track a la playlist.
document.querySelector(".laquiero").addEventListener("click", function(e){
//Detener el comportamiento default de <a></a>
e.preventDefault();

if(playlist.includes(codigoTrack)){
    //Si el track está tenemos que quitarlo.
    // indexof() para localizar valores en un array 
    let array = playlist.indexOf(codigoTrack);
    playlist.splice(array, 1);
    document.querySelector(".play").innerHTML = "Add to playlist";
    console.log(playlist);
    
} 
else { 
    //Agrego el id del track a la lista
    playlist.push(codigoTrack);
    document.querySelector(".play").innerHTML = "Remove from playlist"
}


//Paso 3 guardar lista en localStorage
let alStorage = JSON.stringify(playlist);
localStorage.setItem("playlist", alStorage);
console.log(localStorage);

})



       
} // cierra el for inicial
        
  }) // cierra el then inicial





    
}) // cierra el onload