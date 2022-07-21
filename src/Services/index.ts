import axios from 'axios';

const BASE_URL = 'https://maps.googleapis.com/maps/api/';

const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

/*********************** get news feed api  **************************************************/
export const GetPlaces = (data:object) => {
  return apiClient
    .get(
      `place/nearbysearch/json?location=${data.lat}, ${data.long}&radius=2000&key=AIzaSyA6uc5-fmPTyFBKsqhlOlxChFo8OTqIJYA&type=hotel`,
    )
    .then(res => {
      return res;
    })
    .catch(err => {
      return err;
    });
};


