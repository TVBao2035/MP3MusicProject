export const handleSearchInput = () => {
    let containerInput = document.querySelector('.container_input');
    let searchInput = document.querySelector(".search_input");
    let modelInput = document.querySelector('.model_search_input');
    let search = document.querySelector('.search');
    search.onclick = () => {
        modelInput.style.display = "block";
        searchInput.classList.add('search_input_onclick');
        search.classList.add('search_onclick');
    }
    containerInput.onclick = (e) => {
        if(e.target === e.currentTarget){
            modelInput.style.display = "none";
            searchInput.classList.remove('search_input_onclick');
            search.classList.remove('search_onclick');
        }
    }
}