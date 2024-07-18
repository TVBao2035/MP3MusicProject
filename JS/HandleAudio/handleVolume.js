export const handleVolume = () => {
    const myAudio = document.querySelector('.audio');
    const containerVolume = document.querySelector('.container_volume');
    const progressVolume = document.querySelector('.progress_tool--volume');
    const btnVolume = document.querySelector('.audio_icon--volume');
    var isOff = false;
    var currentVolume = myAudio.volume;
    progressVolume.style.width = (myAudio.volume * 100) + "%";
    containerVolume.onclick = (e)=> {
        let calculatorWidth = (e.offsetX / containerVolume.offsetWidth) * 100;
        if(calculatorWidth === 0){
            console.log("OFF volume");
            btnVolume.innerHTML = '<span class="material-symbols-outlined">volume_off</span>';
        }else{
            btnVolume.innerHTML = '<span class="material-symbols-outlined">volume_up</span>';
        }
        progressVolume.style.width = calculatorWidth + "%";
        myAudio.volume = calculatorWidth/100;
    }
    btnVolume.onclick = () => {
        if(isOff){
            isOff = false;
            btnVolume.innerHTML = '<span class="material-symbols-outlined">volume_up</span>';
            progressVolume.style.width = currentVolume * 100 + "%";
            myAudio.volume = currentVolume;
        }else{
            isOff = true;
            currentVolume = myAudio.volume;
            btnVolume.innerHTML = '<span class="material-symbols-outlined">volume_off</span>';
            progressVolume.style.width = "0%";
            myAudio.volume = 0;
        }
    }
}