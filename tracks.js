window.addEventListener("load", function () {
    let queryString = new URLSearchParams(location.search)
    let codigoTrack = queryString.get("idTrack");
    if (codigoTrack) {


        fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/" + codigoTrack)
            .then(
                function (respuesta) {
                    return respuesta.json();
                }
            )
            .then(
                function (resultado) {
                    console.log(resultado)
                    document.querySelector(".cancion").innerHTML = resultado.title;
                    document.querySelector(".portadacamilo").src = resultado.album.cover_medium;
                    document.querySelector(".artist").innerHTML = resultado.artist.name;
                    document.querySelector(".fecha").innerHTML = resultado.release_date;
                    document.querySelector(".separar").innerHTML = resultado.album.title;

                    fetch("https://cors-anywhere.herokuapp.com/" + resultado.artist.tracklist)
                        .then(
                            function (respuesta) {
                                return respuesta.json();
                            }
                        )
                        .then(
                            function (tracklist) {
                                console.log(tracklist)
                                for (let index = 0; index < 6; index++) {
                                    const cadaSong = tracklist.data[index];



                                    console.log(cadaSong);

                                    let otrasSongs = `<li class="espacio"> ` + (index+1) + "- " + cadaSong.title + `</li>`

                                    document.querySelector(".mas-canciones").innerHTML += otrasSongs;



                                }
                            })
                    document.querySelector(".link").addEventListener("click", function (e) {
                        let continuar = confirm("¿Quiere conocer el perfil del artista?")
                        console.log(continuar);


                    })

                })
    }
    else {
        alert("¿No se recibió ID de canción?")
    }

    document.querySelector(".playlist").addEventListener("click",function() {
        let arrayCanciones;

       
         if (localStorage.getItem("cancionesFavoritas") != null) {
            //arrayDeGifsFavoritos y le voy a agregar el código el GIF
            arrayCanciones = localStorage.getItem("cancionesFavoritas").split(",")
            arrayCanciones.push(codigoTrack)
         } 
        else {
            
            arrayCanciones = []
            arrayCanciones.push(codigoTrack)
        }
        
        localStorage.setItem("cancionesFavoritas", arrayCanciones);
    })
   
    





})