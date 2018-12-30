import axios from 'axios';

export default axios.create({
  baseURL: 'https://react-burger-app-93c7a.firebaseio.com'
});
