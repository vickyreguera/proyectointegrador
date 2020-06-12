window.addEventListener("load", function(){


    let queryString = new URLSearchParams(window.location.search)
    let codigoGenero = queryString.get("idGenero"); 

    console.log(codigoGenero)

    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/" + codigoGenero)
.then(
   function(respuesta) {
       return respuesta.json();
   }
)
.then(
    function(resultado){ 
        let infoGeneros = resultado

        console.log(infoGeneros)

            let nombreGenero = infoGeneros.name;
 
            let generoCover = infoGeneros.picture_medium; 

            let portadaGeneros = `<img class="portadagenero" src="` + generoCover+ `">
            <h3 class="nombregenero"> `+ nombreGenero + `</h3>`

            document.querySelector(".infodelgenero").innerHTML += portadaGeneros
 
            let generoId = infoGeneros.id;

        }) /* cierra .then */
 
fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/" + codigoGenero + "/artists")

                .then(
                    function(respuesta) {
                        return respuesta.json();
                    }
                 )
                 .then(
                     function(resultado){ 

                        let artistasGeneros = resultado.data

                        for (let index = 0; index < 10; index++) {
                            const cadaArtista = artistasGeneros [index];

                            let fotoArtista = cadaArtista.picture_medium

                            let nombreArtista = cadaArtista.name

                            let artistaId = cadaArtista.id

                            let htmlCadaGenero = `<li class="artistas">
                            <a href="artists.html?idArtist= `+ artistaId + `">
                            <img src="` + fotoArtista + `" alt="" class="fotoartista"></a>
                            <a href="artists.html?idArtist= `+ artistaId + `">
                            <h3 class="nombreartista">` +  nombreArtista + `</h3> </a>`

                            document.querySelector(".listaartistas").innerHTML += htmlCadaGenero

                        } /*cierra for  */ 

                     }) /* cierra segundo then y function */ 

        



}) /* cierra window.event */