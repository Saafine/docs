// In prepration for halloween, you've become the shared DJ for
// all your friends. You've set up the system to distribute the music
// using the hip new typeify API/  

import {typeifyAPI} from "type-or-treat"

const playlist = [
    "The Legend of Sleepy Hollow by The Monotones.mp3",
    "(It's a) Monster's Holiday by Buck Owens.mp3",
    "Bo Meets the Monster by Bo Diddley.mp3",
    "Purple People Eater Meets the Witch Doctor by The Big Bopper.mp3",
    "Screamin Ball (at Dracula Hall) by The DuPonts.mp3",
    "Batman, Wolfman, Frankenstein, or Dracula by The Diamonds.mp3",
    "Frankenstein Twist by The Crystals.mp3",
    "'Thriller' by Michael Jackson.mp3"
] as const

playlist
// ^?
// TypeScript thinks this is a list of strings, which is true - but can you 
// make TypeScript treat the playlist array more "as constants"?

const api = typeifyAPI("my_api_key")
api.connect()

function playSong(song: typeof playlist[number]) {
    api.play(song)
}

playSong("Purple People Eater Meets the Witch Doctor by The Big Bopper.mp3")