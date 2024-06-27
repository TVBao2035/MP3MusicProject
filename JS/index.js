import { handleRenderItemsSlide, handleRenderItemsFlex } from "./HandleRender/handleRenderItemsSlide.js";
import { handleSearchInput } from "./HandleSearch/handleSearchInput.js";
import { handleSlideRank } from "./HandleSlide/handleSlideRank.js";
import { slideData, flexData_Chill, flexData_Remix, flexData_GD} from './Data/slideData.js';
handleRenderItemsFlex("list_chill", flexData_Chill);
handleRenderItemsFlex("list_remix",flexData_Remix);
handleRenderItemsFlex("list_gd",flexData_GD);
handleRenderItemsSlide(slideData);
handleSearchInput();
handleSlideRank();


