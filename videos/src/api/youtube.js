import axios from 'axios';

const YoutubeApiKey = "AIzaSyBc-XVO0c1pFsQGv53N3IzhXONSH0PfPxA";


export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        key: YoutubeApiKey,
        type: "video"
    }
});