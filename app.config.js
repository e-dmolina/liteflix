import 'dotenv/config';

export default {
    "extra": {
        "apiNowPlayingUrl": process.env.EXPO_API_NOW_PLAYING_URL,
        "apiUpcomingUrl": process.env.EXPO_API_UPCOMING,
        "apiPopularUrl": process.env.EXPO_API_POPULAR,
        "apiKey": process.env.EXPO_API_KEY
    },
    "android": {
        "package": "com.liteflix.app"
    }
}