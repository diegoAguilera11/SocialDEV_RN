import axios from 'axios';

const baseURL = 'http://192.168.0.112:8000/api';

const userApi = axios.create({ baseURL });


export default userApi