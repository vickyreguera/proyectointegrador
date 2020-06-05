window.addEventListener("load", function(){

   
        
        if (localStorage.getItem("cancionesFavoritas") != null) {
            let cancionesFavoritas = localStorage.getItem("cancionesFavoritas").split(",")
            
            for (let index = 0; index < cancionesFavoritas.length; index++) {
                
                fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/" + cancionesFavoritas[i])
                .then(
                    function(respuesta) {
                        return respuesta.json();
                    }
                 )
                 .then(
                        function (resultado) {
                            
                        
                    let canciones = resultado.data

                    
                    let title = canciones.title
                    let id = canciones.id;

                    let todasFavoritas =
                    
                    `<li class = "cancion">
                        <a href="tracks.html?idTrack=`+ id + `">`
                        + title + `</a></li>`
                    
                        document.querySelector(".listacanciones").innerHTML += todasFavoritas
        
    })
            }
            
        }
    })
