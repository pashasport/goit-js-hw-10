export { fetchBreeds, fetchCatByBreed };

CAT_BASE_URL = 'https://api.thecatapi.com/v1';
CAT_BREED_URL = 'https://api.thecatapi.com/v1/breeds';
API_KEY =
  ' live_9NJeWG2GE6DKlAqaf4PPEen0GELcVs3v4RLR9bwatTuf2JuiA8VPPfiR3K6mkGHe';
CAT_IMAGE_KEY = 'https://api.thecatapi.com/v1/images/search';
const options = {
  Headers: {
    'x-api-key': API_KEY,
  },
};

function fetchBreeds() {
  return fetch(CAT_BREED_URL, options).then(response => {
    if (!response.ok) {
      return new Error(response.status);
    }
    return response.json();
  });
}

function fetchCatByBreed(breedId) {
  return fetch(`${CAT_IMAGE_KEY}?breed_ids=${breedId}&api_key=${API_KEY}`).then(
    response => {
      if (!response.ok) {
        return new Error(response.status);
      }
      return response.json();
    }
  );
}
