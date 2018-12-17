import axios from 'axios'

class EventService {
  constructor() {
    this.service = axios.create({
      baseURL: "http://localhost:5000",
      withCredentials: true
    });
  }

  createEvent = event => {
    
    const formData = new FormData();
    Object.keys(event).forEach(key => {
      formData.append(key, event[key])
    });


    return this.service.post("/createEvent", event)
      .then(response => response.data);
  };

  showEvents = (showEvent) => {

    return axios.get('http://localhost:5000/showEvent', {
        showEvent
      }, {
        withCredentials: true
      })
      .then(res => res)

  }

  showEventId = (showEventId) => {

    return axios.get(`http://localhost:5000/showEvent/${showEventId}`, {
        showEventId
      }, {
        withCredentials: true
      })
      .then(res => res)
  }


}


export default EventService;