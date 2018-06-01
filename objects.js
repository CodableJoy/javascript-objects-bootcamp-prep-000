var playlist = {'Ed Sheeran': Perfect}

var updatePlaylist = function(playlist, artistName,songTitle){
  return Object.assign({}, playlist, {[artistName]: songTitle})
 
}