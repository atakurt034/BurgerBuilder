import axios from 'axios';

const instance = axios.create({
    baseURL: "https://react-my-burger-c5d1b.firebaseio.com/"
});

export default instance;