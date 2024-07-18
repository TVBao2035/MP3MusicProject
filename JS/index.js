import { handleRenderItemsSlide, 
        handleRenderItemsTopAlbum, 
        handleRenderItemsRowImage,
        showAll, 
        showVn, 
        showInternat, 
        handleRenderItemsFlex,
        handleRenderItems100TOP ,
        handleRenderItemsWeekRank
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
        RowQTData_Four,
        Row100TOPData,
        WeekRankVN,
        WeekRankQT,
        WeekRankKPop
       } from './Data/slideData.js';
import {handleSearchInput} from './HandleSearch/handleSearchInput.js';
import {handleSlideRank} from './HandleSlide/handleSlideRank.js';
import { handleAudio, handleGetSong } from "./HandleAudio/handleAudio.js";
import { GET_SONG } from "./localStorageKey.js";
import { songData } from "./Data/songData.js";
import { handleSkip } from "./HandleAudio/handleSkip.js";
import { handleVolume } from "./HandleAudio/handleVolume.js";

if(!localStorage.getItem(GET_SONG)){
        localStorage.setItem(GET_SONG, JSON.stringify([songData[0]]));
}

const pageFirst = document.getElementById('page_first');
const pageSecond = document.getElementById('page_second');
const pageThird = document.getElementById('page_third');
const pageFour = document.getElementById('page_four');
const pageFive = document.getElementById('page_five');
const pageSix = document.getElementById('page_six');
const listItem = document.querySelectorAll(".list_items .item");
listItem[1].classList.add('active_item');
listItem.forEach( (item, index) => {
        item.onclick = () => {
                document.querySelector('.active_item')?.classList.remove('active_item');
                item.classList.add('active_item');
                document.querySelector('.active_page')?.classList.remove('active_page');
                switch(index){
                        case 1: {
                                pageFirst.classList.add('active_page');
                                break;
                        }
                        case 2: {
                                pageSecond.classList.add('active_page');
                                break;
                        }
                        case 3: {
                                pageThird.classList.add('active_page');
                                break;
                        }
                        case 4: {
                                pageFour.classList.add('active_page');
                                break;
                        }
                        case 5: {
                                pageFive.classList.add('active_page');
                                break;
                        }
                        case 6: {
                                pageSix.classList.add('active_page');
                                break;
                        }
                        
                }
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
handleRenderItems100TOP(".row-100--top", Row100TOPData);
handleRenderItemsWeekRank(".box-week-rank", WeekRankVN);
handleRenderItemsWeekRank(".box-two-week-rank", WeekRankQT);
handleRenderItemsWeekRank(".box-three-week-rank", WeekRankKPop);

handleAudio(false);
// Audio
handleGetSong();
handleVolume();
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

// document.addEventListener("DOMContentLoaded", function() {
//         // Select the element you want to double-click
//         const zingChartElement = document.querySelector('.item .title i.bx-pie-chart-alt');
        
//         // Add double-click event listener
//         zingChartElement.addEventListener('dblclick', function() {
//             // Hide all pages
//             const allPages = document.querySelectorAll('.page');
//             allPages.forEach(page => {
//                 page.classList.remove('active_page');
//             });
    
//             // Show only the second page
//             const secondPage = document.querySelector('#page_second');
//             secondPage.classList.add('active_page');
//         });
//     });
    

