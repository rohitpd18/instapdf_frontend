import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://freepdf-bakcend.onrender.com/',
  });

  export default instance