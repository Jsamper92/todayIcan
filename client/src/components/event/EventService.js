import axios from 'axios'

class EventService {
  constructor() {
    this.service = axios.create({
      baseURL: "http://localhost:5000",
      withCredentials: true
    });
  }

  createEvent = event => {
    //axios.post("http://localhost:5000/api/auth/signup", {user}, {withCredentials: true})
    const formData = new FormData();
    Object.keys(event).forEach(key => {formData.append(key, event[key])});
  

    return this.service.post("/createEvent", event)
      .then(response => response.data);
  };
}


export default EventService;