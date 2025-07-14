## Gustavo Corona
### REFLECTION.md made July 13, 2025

### What was the hardest part to understand?

The hardest part was figuring out how the (this) keyword works inside different actions. Its used difrrent depending on how an action is started and understanding that it always points to the specific (object) being worked on was key but confusing at first.

### How does this code use this to tie data and behavior together?

This code uses (this) to link the actions of the playlist with the specific information of each playlist (object). For example, when an action is started on a playlist (object), (this) inside that action points directly to that (object). This lets the action add things to that (object)'s unique list of things and update its current active thing, making sure each playlist (object) handles its own set of information.

### What would I do differently if I wrote this object from scratch?

If I built this (object) from the beginning, I would probaly want to include more data about the song, perhaps , artist, album name, run time etc, and allow the use of playing a random song in the list ( shuffle) feature. 