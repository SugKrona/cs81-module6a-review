// Gustavo Corona
// playlist.js made July 13, 2025

// *V* Url for GitHub *V
// GitHub Repository URL: https://github.com/SugKrona/cs81-module6a-review 

// This is the constructor function to create new objects.
function Playlist(name) {
  // This sets up the object's identifying name. 
  this.name = name;
  // This prepares an empty list to store items for this object.
  this.songs = [];
  // This tracks the item currently being processed by this object, starting empty.
  this.currentSong = null;
}

// This method adds a new item to the end of the object's list.
Playlist.prototype.addSong = function (songTitle) {
  this.songs.push(songTitle);
};

// This method starts playing the first item if the object's list is not empty.
Playlist.prototype.playFirst = function() {
  // This checks if there are any items in the list.
  if (this.songs.length > 0) {
    this.currentSong = this.songs[0];
    // This line shows which item is now active.
    console.log("Now playing:", this.currentSong);
  }
};

// This method advances to the next item in the list, removing the current one.
Playlist.prototype.skipSong = function() {
  // This checks if there is more than one item in the list to skip.
  if (this.songs.length > 1) {
    this.songs.shift(); // Removes the first item from the list.
    this.currentSong = this.songs[0]; // Sets the new first item as active.
    // This output confirms the change and shows the new active item.
    console.log("Skipped! Now playing:", this.currentSong);
  } else {
    // This message appears if there are no more items to advance to.
    console.log("No more songs to skip.");
  }
};

// This method displays the object's name and all its items.
Playlist.prototype.listSongs = function() {
  console.log("Playlist:", this.name);
  console.log("Songs:", this.songs.join(", "));
};

// Test calls for the Playlist object
let myMix = new Playlist("My Chill Mix");
myMix.addSong("Lofi Study");
myMix.addSong("Chillhop Beats");
myMix.addSong("Evening Jazz");
myMix.playFirst();
myMix.skipSong();
myMix.listSongs();