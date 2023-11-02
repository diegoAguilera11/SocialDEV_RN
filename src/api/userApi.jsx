import axios from 'axios';

const baseURL = 'http://yourApi/api';

const userApi = axios.create({ baseURL });


export default userApi