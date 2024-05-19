import axios from "axios";

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/Code-Pop/Real-World_Vue-3',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
})

export default {
  getEvents(perPage, page) { 
    //PARAMETERS: perPage --> events quantity to return per page -/- page --> the page we are on
    return apiClient.get('/events?_limit=' + perPage + "&_page=" + page); 
    //"/events" is added on the baseURL, to call only events
  },

  getSingleEvent(id) {
    return apiClient.get('/events/' + id);
  },
}
