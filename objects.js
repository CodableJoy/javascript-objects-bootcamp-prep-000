var playlist = {'Ed Sheeran': 'Perfect'};

var updatePlaylist = function(playlist, artistName,songTitle){
  var artist = artistName
  
  playlist[artist] = songTitle
  return playlist;
}