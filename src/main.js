import { renderImages } from "./js/render-functions";
import { fetchImages } from "./js/pixabay-api";

const formEl = document.querySelector(".form");

formEl.addEventListener("submit", (event) => {
    event.preventDefault();

    const inputEl = document.querySelector(".search-input");
    console.log(inputEl.value);
    if (!inputEl.value) {
        console.log("Input can not be empty!");
        return;
    }

    fetchImages(inputEl.value)
        .then((images) => renderImages(images))
        .catch(() => console.log("Sorry, there are no images matching your search query. Please try again!"));
});