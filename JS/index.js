

import { handleRenderItemsSlide } from "./HandleRender/handleRenderItemsSlide.js";
import { handleSearchInput } from "./HandleSearch/handleSearchInput.js";
import { handleSlideRank } from "./HandleSlide/handleSlideRank.js";
import { slideData } from './Data/slideData.js';
import { handleForm } from "./HandleForm/HandleForm.js";

handleRenderItemsSlide(slideData);
handleSearchInput();
handleSlideRank();
handleForm();
