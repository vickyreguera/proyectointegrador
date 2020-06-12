window.addEventListener("load", function(){

    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre")
.then(
   function(respuesta) {
       return respuesta.json();
   }
)
.then(
    function(resultado){ 
        let infoGeneros = resultado.data;

        for (let index = 1; index < infoGeneros.length; index++) {
            const cadaGenero = infoGeneros[index];
            
            let nombreGenero = cadaGenero.name;
 
            let generoCover = cadaGenero.picture_medium; 
 
            let generoId = cadaGenero.id; 

            
            /*let queryString = new URLSearchParams(location.search)
            let codigoGenero = queryString.get("generoId"); */

            fetch("https://cors-anywhere.herokuapp.com/" + resultado + "/" + generoId + "/artists")
                        .then(
                            function (respuesta) {
                                return respuesta.json();
                            }
                        )
                        .then(
                            function (resultadosartistas) { 
                                let top10Artistas = resultadosartistas.data

                                for (let index = 0; index < 10; index++) {
                                    const cadaArtista = top10Artistas[index]; 

                                    let nombreArtista = cadaArtista.name

                                    let idArtista = cadaArtista.id

                                    let fotoArtista = cadaArtista.picture_medium
                                
                               /* los agregue abajo } cierro 2 for*/
                            /* los agregue abajo }) cierro then y function del seguno fetch */
                            
                            

            let htmlGeneros = `<div class="tracks">
            <nav class="main">
                <div>   <img src="`+ generoCover+`">
                        <h2 class="sections">` + nombreGenero +`</h2>
                </div>
            <div uk-spinner class="spinnertracks"></div>
                <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slideshow>
                    <ul class="detalle uk-slideshow-items listadogenero1"> `
                    
                    /* para agregar carrousel de top 10 artistas*/ `<li class="top5"> 
                    <a href="artist.html?idArtist=`+ idArtista + `">
                    <img class="foto" src="` +  fotoArtista + `" alt="` + nombreArtista + `"> 
                    <h4 class="nombre">` + nombreAlbum + `</h4></a></li></ul>  `
                    
                    
                    `<a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
                    <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>
                </div>
            </nav>
            </div>` 

        
            document.querySelector(".spinneralbumes").style.display = "none"
            document.querySelector(".rankings").innerHTML += htmlGeneros
     
        } /*cierro 2 for*/
    }) /*cierro then y function del seguno fetch */
       
        } /*cierra for */

        

    }) /* cierra .then */


}) /* cierra window.event */