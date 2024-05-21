import axios from 'axios';
import { apiKey } from './make_single_tile.mjs';
import { Notify } from 'notiflix';
// ----------otwieranie/zamykanie Modala-----------

const galleryList = document.querySelector('ul.gallery__container');
const modal = document.querySelector('[data-modal]');
const closeBtn = document.querySelector('[modal-close]');
const addWatched = document.querySelector('.add-watched-btn');
const addQueue = document.querySelector('.add-queue-btn');

galleryList.addEventListener('click', toggleModal);
closeBtn.addEventListener('click', toggleModal);
document.addEventListener('click', closeModal);
document.addEventListener('keydown', (ev) => {
  if (ev.key === 'Escape' && !modal.classList.contains('is-hidden')) {
    toggleModal();
  }
});

function toggleModal() {
  modal.classList.toggle('is-hidden');
  document.addEventListener('click', closeModal);
}
function closeModal(event) {
  if (
    !modal.classList.contains('is-hidden') &&
    !galleryList.contains(event.target) &&
    !modal.contains(event.target)
  ) {
    toggleModal();
    document.removeEventListener('click', closeModal);
  }
}
// ------------pobieranie API------------

let filmId;

const filmTitle = document.querySelector('h2.modal-film-title');
const vote = document.querySelector('b.vote-data');
const votes = document.querySelector('b.votes-data');
const popularity = document.querySelector('b.modal-popularity-data');
const originalTitle = document.querySelector('b.modal-original-title-data');
const genres = document.querySelector('b.modal-genre-data');
const about = document.querySelector('b.about-title-data');
const filmImage = document.querySelector('div.modal-image img');
const list = document.querySelector('ul.modal-film-features-list');

//funkcja generowania stringa z IDs

const generateGenresString = (genresArray) => {
  const array = [];
  genresArray.forEach((element) => {
    array.push(element.name);
  });
  return array.join(', ');
};

galleryList.addEventListener('click', async (ev) => {
  const parent = ev.target.closest('.movie-block');
  const children = parent.querySelector('.film-info');
  const image = ev.target.src;
  filmId = children.id;
  const getDetails = await getFilmDetails(filmId);
  // Uzyskiwanie danych filmu bezpośrednio z getFilmDetails
  if (getDetails) {
    filmImage.src = `https://image.tmdb.org/t/p/original${getDetails.poster_path}`;
    filmTitle.innerText = getDetails.title;
    filmTitle.dataset.title = getDetails.title;
    addWatched.dataset.id = filmId;
    addQueue.dataset.id = filmId;
    vote.innerText = getDetails.vote_average;
    votes.innerText = getDetails.vote_count;
    popularity.innerText = getDetails.popularity;
    originalTitle.innerText = getDetails.original_title;
    about.innerText = getDetails.overview;
    genres.innerText = generateGenresString(getDetails.genres);
  }
});

// --------funkcja pobierania danych filmu-------

export async function getFilmDetails(filmId) {
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
