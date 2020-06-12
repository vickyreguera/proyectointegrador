window.addEventListener("load", function(){
    let queryString = new URLSearchParams(location.search)
    let codigoArtist = queryString.get("idArtist");
if(codigoArtist) {


    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/" + codigoArtist)
    .then(
        function(respuesta) {
            return respuesta.json();            
        }
    )
    
    .then(
        function(resultado) {
        console.log(resultado)
           document.querySelector(".portadaartist").src = resultado.picture;
           document.querySelector(".titulando").innerHTML = resultado.name;
           document.querySelector(".seguidores").innerHTML = resultado.nb_fan;
           document.querySelector(".titulo").innerHTML = resultado.nb_album;
           
           fetch("https://cors-anywhere.herokuapp.com/" + resultado.tracklist)
                        .then(
                            function (respuesta) {
                                return respuesta.json();
                            }
                        )
                        .then(
                            function (tracklist) {
                                console.log(tracklist)

                                let listaSongs = tracklist.data
                                for (let index = 0; index < listaSongs.length; index++) {
                                    const cadaSong = tracklist.data[index];

                                    let trackId = cadaSong.id;
                                    let trackNombre = cadaSong.title

                                    console.log(cadaSong);

                                    let otrasSongs = `<li class="cancion"> <a href="tracks.html?idTrack=`+ trackId +`">`  + trackNombre + `</a> </li> `

                                    document.querySelector(".listacanciones").innerHTML += otrasSongs;

        



                                } //cierro for
                            }) //cierro then tracklist
        }) //cierro then artist
} // cierro if
else{
    alert("No se recibió ID de artist")
} //cierro else


  


                    



}) // cierro el onload