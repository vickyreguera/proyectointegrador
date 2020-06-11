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
           document.querySelector(".tini").src = resultado.picture;
           document.querySelector(".nombre").innerHTML = resultado.name;
           document.querySelector(".seguidores").innerHTML = resultado.nb_fan;
           document.querySelector(".separar").innerHTML = resultado.nb_album;
           
           fetch("https://cors-anywhere.herokuapp.com/" + resultado.tracklist)
                        .then(
                            function (respuesta) {
                                return respuesta.json();
                            }
                        )
                        .then(
                            function (tracklist) {
                                console.log(tracklist)
                                for (let index = 0; index < 5; index++) {
                                    const cadaSong = tracklist.data[index];

                            

                                    console.log(cadaSong);

                                    let otrasSongs = `<li class="cancion"> `  + cadaSong.title + `</li>`

                                    document.querySelector(".listacanciones").innerHTML += otrasSongs;



                                }
                            })
        })
}
else{
    alert("No se recibió ID de artist")
}


  


                    
fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/" + codigoArtist)
.then(
    function(respuesta) {
        return respuesta.json();            
    }
)
.then(
    function(resultado) {
    console.log(resultado)
    
       document.querySelector(".quiero").innerHTML = resultado.title;
       
    }
)


})