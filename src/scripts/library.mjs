import axios from "axios";
import { Notify } from "notiflix";
import { apiKey } from "./make_single_tile.mjs";
import { makeSingleFilmTile } from "./make_single_tile.mjs";

const watchedBtn = document.querySelector(".watched-btn");
const queueBtn = document.querySelector(".queue-btn");

async function getFilmDetails(filmId) {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${filmId}?api_key=${apiKey}`
      );
      return response.data;
    } catch (error) {
      Notify.failure('Wystąpił błąd podczas pobierania szczegółów filmu.');
      console.error('Błąd podczas pobierania szczegółów filmu:', error);
      return null;
    }
  }

document.addEventListener("DOMContentLoaded", async () => {
    const watchArr = JSON.parse(localStorage.getItem('watchedFilms'));
    const gallery = document.querySelector(".movies-gallery");
    gallery.innerHTML = "";
    watchedBtn.classList.add("active-btn");
    for (const element of watchArr) {
          const filmDetails = await getFilmDetails(element);
          if (filmDetails) {
              const filmTile = await makeSingleFilmTile(filmDetails);
              gallery.innerHTML += filmTile;
          }
      }

    if (!gallery) {
        console.error("Target container not found.");
        return;
    }
    watchedBtn.addEventListener("click", async () => {
      const watchArr = JSON.parse(localStorage.getItem('watchedFilms'));
      gallery.innerHTML = "";
      queueBtn.classList.remove("active-btn");
      watchedBtn.classList.add("active-btn");
      for (const element of watchArr) {
          const filmDetails = await getFilmDetails(element);
          if (filmDetails) {
              const filmTile = await makeSingleFilmTile(filmDetails);
              gallery.innerHTML += filmTile;
          }
      }
  });
  queueBtn.addEventListener("click", async () => {
    const queueArr = JSON.parse(localStorage.getItem('queueFilms'));
    gallery.innerHTML = "";
    watchedBtn.classList.remove("active-btn");
    queueBtn.classList.add("active-btn");
    for (const element of queueArr) {
        const filmDetails = await getFilmDetails(element);
        if (filmDetails) {
            const filmTile = await makeSingleFilmTile(filmDetails);
            gallery.innerHTML += filmTile;
        }
    }
  });
});

