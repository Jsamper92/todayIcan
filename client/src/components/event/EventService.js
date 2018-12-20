import axios from 'axios'

class EventService {
  constructor() {
    this.service = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}`,
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


    return this.service.get(`/showEvents`, {
        withCredentials: true
      })
      .then(res => res)

  }

  showEventId = (showEventId) => {

    
    return this.service.get(`/showEvent/${showEventId}`, {
        showEventId
      }, {
        withCredentials: true
      })
      .then(res => res)
  }

  showEventUser = (showEventId) => {

    return this.service.get(`/showEventUsers/${showEventId}`, {
        showEventId
      }, {
        withCredentials: true
      })
      .then(res => res)
  }


}


export default EventService;