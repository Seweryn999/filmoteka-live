import axios from 'axios';
import { apiKey } from './make_single_tile.mjs';

export async function getFilmsByQueryString(string, page = 1) {
  const url = `https://api.themoviedb.org/3/search/movie?query=${string}&api_key=${apiKey}&page=${page}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Wystąpił błąd podczas pobierania danych');
    }
    return await response.json();
  } catch (error) {
    console.error('Wystąpił błąd podczas pobierania danych:', error);
    throw error;
  }
}
