import axios from 'axios';
export const apiKey = '6822ab68b639c8d7f457546b90aae724';
import Loader from './loader';

//zapytanie pozyskujące tablice obiektów z gatunkami

const genresQuery = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`;

const getGenres = async () => {
  try {
    Loader.show(); // Pokazanie loadera
    const response = await axios.get(genresQuery);
    Loader.hide(); // Ukrycie loadera po zakończeniu zapytania
    return response.data.genres;
  } catch (error) {
    Loader.hide(); // Ukrycie loadera w przypadku błędu
    console.error('Error fetching genres:', error);
    throw error;
  }
};

//funkcja zwracająca stringa gatunków po przecinku dostające tablicę genres IDs

const makeGenresString = async (array) => {
  if (!array || array.length === 0) {
    return "";
  }
  
  const gensArray = [];
  let genres; // Tablica obiektów z IDs
  await getGenres().then((data) => {
    genres = data;
    array.forEach((val) => {
      const element = genres.find((gen) => gen.id === val);
      if (element) {
        gensArray.push(element.name);
      }
    });
  });
  return gensArray.join(', ');
};

//funkcja generująca pojedynczy kafelek filmu
//UWAGA - wywoływać z await!!!!

export const makeSingleFilmTile = async (film) => {
  let genres = film.genre_ids;
  
  if (film.genres && film.genres.length > 0) {
    genres = film.genres.map(genre => genre.name).join(', ');
  } else {
    genres = await makeGenresString(film.genre_ids); //film.genre_ids to tablica IDs gatunków
  }
  const year = film.release_date.slice(0, 4);
  return `<li class="movie-block">
  <div class="image"><img class="image__img" src="https://image.tmdb.org/t/p/original${
    film.poster_path
  }" alt="${film.title} poster"/></div>
  <div class="film-info" id="${film.id}">
  <p class="film-info__item film-info--title">${film.title.toUpperCase()}</p>
  <p class="film-info__item">${genres} | ${year}</p>
  </div>
  </li>`;
};

//poniższe wrzucone dla sprawdzenia, jak potem wszystko będzie działać to do usunięcia

// const movie = {
//   adult: false,
//   backdrop_path: '/8YURPHUqD2ODIffxPf8sG5l5UC7.jpg',
//   genre_ids: [12, 36, 10752, 28],
//   id: 652,
//   original_language: 'en',
//   original_title: 'Troy',
//   overview:
//     'In year 1250 B.C. during the late Bronze age, two emerging nations begin to clash. Paris, the Trojan prince, convinces Helen, Queen of Sparta, to leave her husband Menelaus, and sail with him back to Troy. After Menelaus finds out that his wife was taken by the Trojans, he asks his brother Agamemnon to help him get her back. Agamemnon sees this as an opportunity for power. They set off with 1,000 ships holding 50,000 Greeks to Troy.',
//   popularity: 82.284,
//   poster_path: '/a07wLy4ONfpsjnBqMwhlWTJTcm.jpg',
//   release_date: '2004-05-13',
//   title: 'Troy',
//   video: false,
//   vote_average: 7.16,
//   vote_count: 9817,
// };

// console.log(await makeSingleFilmTile(movie));
