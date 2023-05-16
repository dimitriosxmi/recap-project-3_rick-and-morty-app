import { createCharacterCard } from "./components/card/card.js";

console.clear();

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 1;
const page = 1;
const searchQuery = "";

async function fetchCharacters() {
  cardContainer.innerHTML = "";
  try {
    const characters = await fetch(
      "https://rickandmortyapi.com/api/character/"
    );
    if (characters.ok) {
      const characterJSON = await characters.json();
      const characterData = characterJSON.results;

      characterData.forEach((element) => {
        const characterImage = element.image;
        const characterName = element.name;
        const characterStatus = element.status;
        const characterType = element.type;
        const characterOccurances = element.episode.length;

        const card = createCharacterCard(
          characterImage,
          characterName,
          characterStatus,
          characterType,
          characterOccurances
        );

        cardContainer.append(card);
      });
    } else {
      throw new Error("API Response not ok.");
    }
  } catch (error) {
    console.error("Catched error: ", error);
  }
}

fetchCharacters();
