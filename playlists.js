window.addEventListener("load", function (){

    let queryString = new URLSearchParams(location.search)    
    let codigoPlaylists = queryString.get("idPlaylists");

    if(codigoPlaylists){
    fetch( "https://cors-anywhere.herokuapp.com/https://api.deezer.com/playlist/" + codigoPlaylists)
    .then(
        function(respuesta){
            return respuesta.json();
        }
    )
    .then(
        function(resultado){  
            console.log(resultado)  

            document.querySelector(".titulando").innerHTML = resultado.title; 
            document.querySelector(".titulo").innerHTML = resultado.fans;
            document.querySelector(".portadaplaylist").src = resultado.picture_medium;

            let duracion = resultado.duration;

            let tiempo = `<li class="horas"> ` + duracion + ` segundos  </li>`
           
            document.querySelector(".horas").innerHTML = tiempo


            let escuche = `https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=false&width=600&height=350&color=007FEB&layout=dark&size=medium&type=playlist&id=` + codigoPlaylists + `&app_id=1`

            document.querySelector(".daleplay").src = escuche

            fetch("https://cors-anywhere.herokuapp.com/" + resultado.tracklist)
                        .then(
                            function (respuesta) {
                                return respuesta.json();
                            }
                        )
                        .then(
                            function (tracklist) {
                                console.log(tracklist)
                                for (let index = 0; index < tracklist.data.length; index++) {
                                    const cadaSong = tracklist.data[index];


                                    console.log(cadaSong);

                                    let nombreCancion = cadaSong.title;
                                    let idCancion = cadaSong.id;

                                    let otrasSongs = `<li class="can"> <a class="alsong" href="tracks.html?idTrack=`+ idCancion + `">`  + nombreCancion + `</li>`

                                    

                                    document.querySelector(".canciones").innerHTML += otrasSongs;



                                }
                            })
            
        })  
        
    }
      else{
            alert("Esta playlist no existe")
      }
    
})