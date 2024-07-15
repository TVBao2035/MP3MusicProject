import { handleRenderItemsSlide, 
        handleRenderItemsTopAlbum, 
        handleRenderItemsRowImage,
        showAll, 
        showVn, 
        showInternat, 
        handleRenderItemsFlex 
       } from "./HandleRender/handleRenderItemsSlide.js";

import { slideData, 
        flexData_Top, 
        flexData_Album,
        flexData_Chill,
        flexData_Remix,
        flexData_GD,
        RowData_One,
        RowData_Two,
        RowData_Three,
        RowData_Four,
        RowVNData_One,
        RowVNData_Two,
        RowVNData_Three,
        RowVNData_Four,
        RowQTData_One,
        RowQTData_Two,
        RowQTData_Three,
        RowQTData_Four
       } from './Data/slideData.js';
import {handleSearchInput} from './HandleSearch/handleSearchInput.js';
import {handleSlideRank} from './HandleSlide/handleSlideRank.js';
import { handleAudio, handleGetSong } from "./HandleAudio/handleAudio.js";
import { GET_SONG } from "./localStorageKey.js";
import { songData } from "./Data/songData.js";
import { handleSkip } from "./HandleAudio/handleSkip.js";

if(!localStorage.getItem(GET_SONG)){
        localStorage.setItem(GET_SONG, JSON.stringify([songData[0]]));
}

const pageFirst = document.getElementById('page_first');
const pageSecond = document.getElementById('page_second');
const pageThird = document.getElementById('page_third');

const listItem = document.querySelectorAll(".list_items .item");
listItem[1].classList.add('active_item');
listItem.forEach( (item, index) => {
        item.onclick = () => {
                document.querySelector('.active_item').classList.remove('active_item');
                item.classList.add('active_item')
        }
})
console.log(listItem);

handleRenderItemsFlex("list_chill", flexData_Chill);
handleRenderItemsFlex("list_remix",flexData_Remix);
handleRenderItemsFlex("list_gd",flexData_GD);

handleRenderItemsSlide(songData);
handleSlideRank();

//top 100 & album hot
handleRenderItemsTopAlbum(".list_top",flexData_Top);
handleRenderItemsTopAlbum(".list_album", flexData_Album);

// NÚT TẤT CẢ & VIỆT NAM & QUỐC TẾ
document.getElementById('btn_all').addEventListener('click', showAll);
document.getElementById('btn_vn').addEventListener('click', showVn);
document.getElementById('btn_internat').addEventListener('click', showInternat);
// nút tất cả
handleRenderItemsRowImage(".row-img--one",RowData_One);
handleRenderItemsRowImage(".row-img--two",RowData_Two);
handleRenderItemsRowImage(".row-img--three",RowData_Three);
handleRenderItemsRowImage(".row-img--four",RowData_Four);
// nút việt nam
handleRenderItemsRowImage(".rownvn_img_one",RowVNData_One);
handleRenderItemsRowImage(".rownvn_img_two",RowVNData_Two);
handleRenderItemsRowImage(".rownvn_img_three",RowVNData_Three);
handleRenderItemsRowImage(".rownvn_img_four",RowVNData_Four);
// nút quốc tế
handleRenderItemsRowImage(".rownqt_img_one",RowQTData_One);
handleRenderItemsRowImage(".rownqt_img_two",RowQTData_Two);
handleRenderItemsRowImage(".rownqt_img_three",RowQTData_Three);
handleRenderItemsRowImage(".rownqt_img_four",RowQTData_Four);
// -----------------------------------------------------------------------


handleAudio(false);
// Audio
handleGetSong();

handleSkip();
handleSearchInput();


//Radio
import {handleRenderRadio, handleRenderRadioCalender, handleTime} from "./HandleRender/handleRenderRadio.js";
import {radioChannelData, radioStreamData1, radioStreamData2, radioStreamTime} from "./Data/radioData.js";
handleTime(radioStreamTime);
handleRenderRadio(radioChannelData);
import {handleSlideRadio, handleSlideRadioCalendar} from "./HandleSlide/handleSlideRadio.js";
handleSlideRadio();
handleSlideRadioCalendar();
handleRenderRadioCalender(radioStreamData1, "radio_stream_calendar_top");
handleRenderRadioCalender(radioStreamData2, "radio_stream_calendar_bot");
