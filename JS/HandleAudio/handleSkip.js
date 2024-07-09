import { songData } from "../Data/songData.js";
import { GET_SONG } from "../localStorageKey.js";
import { handleAudio } from "./handleAudio.js";

export const handleSkip = () => {
    const btnSkipNext = document.querySelector(".skip_next");
    const btnSkipPrevious = document.querySelector(".skip_previous");

    btnSkipNext.onclick = () => {
        let getSongFormLocaStorage = JSON.parse(localStorage.getItem(GET_SONG));
        console.log(getSongFormLocaStorage);
        let indexOfSong = songData.findIndex((song) => song.title.toLocaleLowerCase() === getSongFormLocaStorage[0]?.title?.toLocaleLowerCase());
        localStorage.setItem(GET_SONG, JSON.stringify([songData[++indexOfSong]]));
        handleAudio(true);
        console.log("index>>", indexOfSong);
        console.log("song >>", songData[++indexOfSong]);
    }

    btnSkipPrevious.onclick = () => {
        let getSongFormLocaStorage = JSON.parse(localStorage.getItem(GET_SONG));
        console.log(getSongFormLocaStorage);
        let indexOfSong = songData.findIndex((song) => song.title.toLocaleLowerCase() === getSongFormLocaStorage[0]?.title?.toLocaleLowerCase());
        localStorage.setItem(GET_SONG, JSON.stringify([songData[++indexOfSong]]));
        handleAudio(true);
        console.log("index>>", indexOfSong);
        console.log("song >>", songData[--indexOfSong]);
    }

    console.log(songData);
}