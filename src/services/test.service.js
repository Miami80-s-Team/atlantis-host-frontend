import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';

axios.defaults.baseURL = API_URL;

export const TestService = {
    async getAll() {
        return axios.get('/posts');
    },
};
