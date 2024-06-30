

import { handleRenderItemsSlide, handleRenderItemsTop } from "./HandleRender/handleRenderItemsSlide.js";
import { slideData, flexData_Top } from './Data/slideData.js';

import { handleSearchInput } from "./HandleSearch/handleSearchInput.js";
import { handleSlideRank } from "./HandleSlide/handleSlideRank.js";




import { handleForm } from "./HandleForm/HandleForm.js";

handleRenderItemsSlide(slideData);
handleRenderItemsTop(flexData_Top);
handleSearchInput();
handleSlideRank();
handleForm();
