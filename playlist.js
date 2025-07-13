// Gustavo Corona
// playlist.js made July 13, 2025

// *V* Url for GitHub *V
// GitHub Repository URL: https://github.com/SugKrona/cs81-module6a-review 

function Playlist(name) {
  this.name = name;
  this.songs = [];
  this.currentSong = null;
}

Playlist.prototype.addSong = function (songTitle) {
  this.songs.push(songTitle);
};

Playlist.prototype.playFirst = function() {
  if (this.songs.length > 0) {
    this.currentSong = this.songs[0];
    console.log("Now playing:", this.currentSong);
  }
};

Playlist.prototype.skipSong = function() {
  if (this.songs.length > 1) {
    this.songs.shift();
    this.currentSong = this.songs[0];
    console.log("Skipped! Now playing:", this.currentSong);
  } else {
    console.log("No more songs to skip.");
  }
};

Playlist.prototype.listSongs = function() {
  console.log("Playlist:", this.name);
  console.log("Songs:", this.songs.join(", "));
};

let myMix = new Playlist("My Chill Mix");
myMix.addSong("Lofi Study");
myMix.addSong("Chillhop Beats");
myMix.addSong("Evening Jazz");
myMix.playFirst();
myMix.skipSong();
myMix.listSongs();