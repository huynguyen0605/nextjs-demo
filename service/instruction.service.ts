import axios from 'axios';

export const fetchProjectsApi = () => {
    return axios.get(`https://api.github.com/orgs/facebook/repos`)
};