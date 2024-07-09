import { songData } from "../Data/songData.js";
import { GET_SONG } from "../localStorageKey.js";
export const handleAudio = (chooseOrtherSong) => {
    const dataLocalStorage = JSON.parse(localStorage.getItem(GET_SONG));
    const myAudio = document.querySelector('.audio');
    const seekBar = document.querySelector('.container_seekbar')
    const progressBar = document.querySelector('.progress_tool');
    const minuteTimer = document.querySelector('.time_minute');
    const secondTimer = document.querySelector('.time_second');
    const endTimer = document.querySelector('.time_end');
    const singerTitle = document.querySelector('.block_audio--content span');
    const songTitle = document.querySelector('.block_audio--content p');
    const imgBlock = document.querySelector('.block_audio--img img');
    const iconPlay = document.querySelector('.icon_play');


  
   
    let isPause = true;
    if(chooseOrtherSong) iconPlay.innerHTML = '<span class="material-symbols-outlined">pause_circle</span>';
    else iconPlay.innerHTML = '<span class="material-symbols-outlined">play_circle</span>';



    if(dataLocalStorage && dataLocalStorage?.length !== 0){

        myAudio.src = dataLocalStorage[0]?.src;
        myAudio.load();
        endTimer.innerHTML =  dataLocalStorage[0]?.time;
        singerTitle.innerHTML =  dataLocalStorage[0]?.actor;
        songTitle.innerHTML = dataLocalStorage[0]?.title;
        imgBlock.src = dataLocalStorage[0]?.img;

        iconPlay.onclick = () =>{
            if(isPause) {
                myAudio.play();
                isPause = false;
                iconPlay.innerHTML = '<span class="material-symbols-outlined">pause_circle</span>';
            }
            else  {
                myAudio.pause()
                isPause = true;
                iconPlay.innerHTML = '<span class="material-symbols-outlined">play_circle</span>';
            }
            console.log("my audio", {myAudio});
            
        }
        
        seekBar.onclick = (e)=>{
            iconPlay.innerHTML = '<span class="material-symbols-outlined">pause_circle</span>';
            myAudio.play();
            progressBar.style.width = ((e.offsetX / seekBar.offsetWidth)*100) + "%";
            myAudio.currentTime = (e.offsetX / seekBar.offsetWidth)*100 *myAudio.duration/100
        }
     
         myAudio.ontimeupdate = () =>{
            progressBar.style.width = ((myAudio.currentTime / myAudio.duration)*100) + "%";
            let second = parseInt(myAudio.currentTime) >= 60 ? parseInt(myAudio.currentTime%60) : parseInt(myAudio.currentTime);
            let minute = parseInt(myAudio.currentTime/60);
            if(second.toString().length < 2) second = '0'+second.toString();
            if(minute.toString().length < 2) minute = '0'+minute.toString();
            secondTimer.innerHTML = second;
            minuteTimer.innerHTML = minute;
        
        }

    }
    

}

export const handleGetSong = () => {
    const listMusic = document.querySelectorAll(".item_music--main");
   
    listMusic.forEach( song => {
        song.onclick = () => {
            localStorage.setItem(GET_SONG, '[]');
            let title = song.querySelector('.title_music--main').textContent;
            let getSong = songData.filter((song)=>song.title.toLocaleLowerCase()===title.toLocaleLowerCase());
            localStorage.setItem(GET_SONG, JSON.stringify(getSong));
            handleAudio(true);
          
        }
    })
}
