import axios from 'axios'

// Base URL: https://api.themoviedb.org/3
// url da API: /movie/now_playing?api_key=217664cf927a172889057ad67c699fdd&language=pt-BR

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3'
})

export default api
