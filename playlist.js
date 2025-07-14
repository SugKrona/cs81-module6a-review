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

// IMPROVEMENT SUGGESTION: Add a way to remove any song by its title would offer more control to managing the playlist in case 
// you want to alter the genre or overall vibe of the playlist.

// This new method removes a specific song from the playlist by its title.
Playlist.prototype.removeSongByTitle = function(songTitleToRemove) {
  // Finds where the song is in the list.
  const index = this.songs.indexOf(songTitleToRemove);
  // If the song is found (index is not -1).
  if (index !== -1) {
    this.songs.splice(index, 1); // Removes the song from the list.
    // If the removed song was the one currently playing, update what's playing.
    if (this.currentSong === songTitleToRemove) {
      this.currentSong = this.songs.length > 0 ? this.songs[0] : null; // Plays first song or nothing.
    }
    return true; // Indicate that the song was removed
  } else {
    return false; // Indicate that the song was not found
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

// Simple Test calls for the new removeSongByTitle method
console.log("\n--- Testing removeSongByTitle ---");
myMix.removeSongByTitle("Chillhop Beats"); // It removes a song
myMix.listSongs(); // List songs to see if it was removed
myMix.removeSongByTitle("Non-existent Song"); // if it tries to remove a song not there
myMix.listSongs(); 