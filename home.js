window.addEventListener("load", function(){

fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart")
.then(
   function(respuesta) {
       return respuesta.json();
   }
)
.then(
    function(resultado){
        console.log(resultado)

        let infoAlbums = resultado.albums.data;

       console.log(infoAlbums);

       for (let index = 0; index < infoAlbums.length; index++) {
           const cadaAlbum = infoAlbums[index];
           
           let nombreAlbum = cadaAlbum.title;

           console.log(nombreAlbum);

           let albumCover = cadaAlbum.cover_medium; 

           console.log(albumCover)

           let albumId = cadaAlbum.id; 

           let htmlAlbumsTrending = `<li class="top5"> 
           <a href="albums.html?idAlbums=`+ albumId + `">
           <img class="foto" src="` +  albumCover + `" alt="` + nombreAlbum + `"> 
           <h4 class="nombre">` + nombreAlbum + `</h4></a></li>`

           document.querySelector(".spinneralbumes").style.display = "none"
           document.querySelector(".listadosalbums").innerHTML += htmlAlbumsTrending
    
       }

       let infoTracks = resultado.tracks.data;

       console.log(infoTracks);

       for (let index = 0; index < infoTracks.length; index++) {
           const cadaTrack= infoTracks[index];
           
           let nombreTrack = cadaTrack.title;

           console.log(nombreTrack);

           let trackCover = cadaTrack.album.cover_medium; 

           let trackId = cadaTrack.id; 

           let htmlTracksTrending = `<li class="top5"> 
           <a href="tracks.html?idTrack=`+ trackId + `"> 
           <img class="foto" src="` +  trackCover + `" alt="` + nombreTrack + `"> 
           <h4 class="nombre">` + nombreTrack + `</h4></a></li>`

           document.querySelector(".spinnertracks").style.display = "none"
           document.querySelector(".listadotracks").innerHTML += htmlTracksTrending
    
       }

       let infoArtists = resultado.artists.data;

       console.log(infoArtists);

       for (let index = 0; index < infoArtists.length; index++) {
           const cadaArtist = infoArtists[index];
           
           let nombreArtist = cadaArtist.name;

           console.log(nombreArtist);

           let artistFoto = cadaArtist.picture_medium; 

           let artistId = cadaArtist.id; 

           let htmlArtistTrending = `<li class="top5"> 
           <a href="artists.html?idArtist=`+ artistId + `">
           <img class="foto" src="` +  artistFoto + `" alt="` + nombreArtist + `"> 
           <h4 class="nombre">` + nombreArtist + `</h4></a></li>`

            document.querySelector(".spinnerartistas").style.display = "none"
           document.querySelector(".listadoartists").innerHTML += htmlArtistTrending
    
       }

       let infoPlaylists = resultado.playlists.data;

       for (let index = 0; index < infoPlaylists.length; index++) {
           const cadaPlaylist = infoPlaylists[index];
           
           let nombrePlaylist = cadaPlaylist.title;

           let playlistCover = cadaPlaylist.picture_medium; 

           let playlistId = cadaPlaylist.id; 

           let htmlPlaylistTrending = `<li class="top5"> 
           <a href="playlists.html?idPlaylists=`+ playlistId + `">
           <img class="foto" src="` +  playlistCover + `" alt="` + nombrePlaylist + `"> 
           <h4 class="nombre">` + nombrePlaylist + `</h4></a></li>`

           document.querySelector(".spinnerplaylist").style.display = "none"
           document.querySelector(".listadoplaylists").innerHTML += htmlPlaylistTrending
    
       }

    })
    
     
})