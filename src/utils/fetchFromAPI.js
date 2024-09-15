import axios from "axios";
const BASE_URL='https://youtube-v31.p.rapidapi.com'
const API_KEY = process.env.REACT_APP_API_KEY
const options = {
    method: 'GET',
    url: BASE_URL,
    params: {
      maxResults: '10'
    },
    headers: {
      'x-rapidapi-key': API_KEY,
      'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
    }
  };
  
  try {
      const response = await axios.request(options);
      console.log(response.data);
  } catch (error) {
      console.error(error);
  }
  export const fetchFromAPI = async (url)=>{
    const { data } = await axios.get(`${BASE_URL}/${url}`,options)
    return data;

  }