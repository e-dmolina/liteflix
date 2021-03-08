import Axios from "axios";
import Constants from 'expo-constants';

const { apiNowPlayingUrl, apiUpcomingUrl, apiPopularUrl, apiKey } = Constants.manifest.extra;

const nowPlayingMovie = async () => await Axios.get(`${apiNowPlayingUrl}?api_key=${apiKey}`);

const upcomningMovies = async () => await Axios.get(`${apiUpcomingUrl}?api_key=${apiKey}`);

const popularMovies = async () => await Axios.get(`${apiPopularUrl}?api_key=${apiKey}`);

export {
    nowPlayingMovie,
    upcomningMovies,
    popularMovies,
}