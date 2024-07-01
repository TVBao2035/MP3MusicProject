

import { handleRenderItemsSlide, handleRenderItemsTop, handleRenderItemsAlbum } from "./HandleRender/handleRenderItemsSlide.js";
import { slideData, flexData_Top, flexData_Album } from './Data/slideData.js';

import { handleSearchInput } from "./HandleSearch/handleSearchInput.js";
import { handleSlideRank } from "./HandleSlide/handleSlideRank.js";


handleRenderItemsSlide(slideData);
handleRenderItemsTop(flexData_Top);
handleRenderItemsAlbum(flexData_Album);
handleSearchInput();
handleSlideRank();
