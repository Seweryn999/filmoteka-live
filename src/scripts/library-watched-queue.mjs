import axios from "axios";
import { Notify } from "notiflix";
import { apiKey } from "./make_single_tile.mjs";
import { getFilmDetails } from "./modal-library.mjs";
import { makeSingleFilmTile } from "./make_single_tile.mjs";
import { renderQueue, renderWatched } from "./library.mjs";

const addWatched = document.querySelector(".add-watched-btn");
const addQueue = document.querySelector(".add-queue-btn");



const handleAddToWatched = () => {
    const filmTitle = document.querySelector(".modal-film-title").dataset.title;
    const filmId = addQueue.dataset.id;

    const updateLocalStorage = (film, addKey, removeKey) => {
        let addFilms = JSON.parse(localStorage.getItem(addKey)) || [];
        let removeFilms = JSON.parse(localStorage.getItem(removeKey)) || [];
    
        if (addFilms.includes(film)) {
            Notify.failure(`${filmTitle} is already in the ${addKey.replace('Films', '').toLowerCase()} list!`);
            return false;
        }
    
        if (removeFilms.includes(film)) {
            removeFilms = removeFilms.filter(id => id !== film);
            localStorage.setItem(removeKey, JSON.stringify(removeFilms));
            Notify.success(`${filmTitle} is removed from the ${removeKey.replace('Films', '').toLowerCase()} and added to the ${addKey.replace('Films', '').toLowerCase()} list!`);
        } else {
            Notify.success(`${filmTitle} is added to the ${addKey.replace('Films', '').toLowerCase()} list!`);
        }
    
        addFilms.push(film);
        localStorage.setItem(addKey, JSON.stringify(addFilms));
        return true;
    };
    updateLocalStorage(filmId, 'watchedFilms', 'queueFilms');


    };

    // const addToLocalStorage = (film, key) => {
    //     let films = JSON.parse(localStorage.getItem(key)) || [];
    //     let queueFilms = JSON.parse(localStorage.getItem('queueFilms')) || [];

    //     if (films.includes(film)) {
    //         Notify.failure(`${filmTitle} is already watched!`);
    //         return false;
    //     } 
    //     if (queueFilms.includes(film)) {
    //         Notify.failure(`${filmTitle} is already in on the queue!`);
    //         return false;
    //     }
    //     else {
    //     Notify.success(`${filmTitle} is added to watched list!`);
    //     films.push(film);
    //     localStorage.setItem(key, JSON.stringify(films));
    //     }
    // };
    // addToLocalStorage(filmId, 'watchedFilms')

    const handleAddToQueue = () => {
        const filmTitle = document.querySelector(".modal-film-title").dataset.title;
        const filmId = addQueue.dataset.id;

        const updateLocalStorage = (film, addKey, removeKey) => {
            let addFilms = JSON.parse(localStorage.getItem(addKey)) || [];
            let removeFilms = JSON.parse(localStorage.getItem(removeKey)) || [];
        
            if (addFilms.includes(film)) {
                Notify.failure(`${filmTitle} is already in the ${addKey.replace('Films', '').toLowerCase()} list!`);
                return false;
            }
        
            if (removeFilms.includes(film)) {
                removeFilms = removeFilms.filter(id => id !== film);
                localStorage.setItem(removeKey, JSON.stringify(removeFilms));
                Notify.success(`${filmTitle} is removed from the ${removeKey.replace('Films', '').toLowerCase()} and added to the ${addKey.replace('Films', '').toLowerCase()} list!`);
            } else {
                Notify.success(`${filmTitle} is added to the ${addKey.replace('Films', '').toLowerCase()} list!`);
            }
        
            addFilms.push(film);
            localStorage.setItem(addKey, JSON.stringify(addFilms));
            return true;
        };

        updateLocalStorage(filmId, 'queueFilms', 'watchedFilms');


        // const addToLocalStorage = (film, key) => {
        //     let films = JSON.parse(localStorage.getItem(key)) || [];
        //     let watchedFilms = JSON.parse(localStorage.getItem('watchedFilms')) || [];
            
        //     if (watchedFilms.includes(film)) {
        //         Notify.failure(`${filmTitle} is already watched!`);
        //         return false;
        //     }
        //     if (films.includes(film)) {
        //         Notify.failure(`${filmTitle} is already in on the queue!`);
        //         return false;
        //     } else {
        //     Notify.success(`${filmTitle} is added to queue list!`);
        //     films.push(film);
        //     localStorage.setItem(key, JSON.stringify(films));
        //     }
        // };
        // addToLocalStorage(filmId, 'queueFilms');
    };

addWatched.addEventListener("click", handleAddToWatched);
addQueue.addEventListener("click", handleAddToQueue);
