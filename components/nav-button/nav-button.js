import { navigation, searchBar } from "../../index.js";
export function createButton(buttonDescriber, callback) {
  if (buttonDescriber === "prevButton") {
    const button = document.createElement("button");
    button.classList.add("button");
    button.classList.add("button--prev");
    button.setAttribute("data-js", "button-prev");
    button.textContent = "previous";
    navigation.append(button);
    button.addEventListener("click", callback);
  } else if (buttonDescriber === "nextButton") {
    const button = document.createElement("button");
    button.classList.add("button");
    button.classList.add("button--next");
    button.setAttribute("data-js", "button-next");
    button.textContent = "next";
    button.addEventListener("click", callback);
    navigation.append(button);
  } else if (buttonDescriber === "searchButton") {
    const button = document.createElement("button");
    button.classList.add("search-bar__button");
    button.setAttribute("aria-label", "search for character");
    button.setAttribute("type", "submit");
    button.innerHTML = `<img
    class="search-bar__icon"
    src="assets/magnifying-glass.png"
    alt=""
  />`;
    searchBar.append(button);
  }
}
