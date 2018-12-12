import axios from 'axios'

class EventService {
  constructor() {
    this.service = axios.create({
      baseURL: "http://localhost:5000/api",
      withCredentials: true
    });
  }

  createEvent = user => {
    //axios.post("http://localhost:5000/api/auth/signup", {user}, {withCredentials: true})
    const formData = new FormData();
    Object.keys(user).forEach(key => formData.append(key, user[key]));

    return this.service
        .post("/createEvent", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      .then(response => response.data);
  };
}


export default EventService;