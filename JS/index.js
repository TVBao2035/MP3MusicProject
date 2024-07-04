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


handleRenderItemsFlex("list_chill", flexData_Chill);
handleRenderItemsFlex("list_remix",flexData_Remix);
handleRenderItemsFlex("list_gd",flexData_GD);
handleRenderItemsSlide(slideData);
handleSearchInput();
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






