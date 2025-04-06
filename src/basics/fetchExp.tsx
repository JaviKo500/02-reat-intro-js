export const API_KEY = 'JYFliq5Q3HMvcD6QLDTYzXDx6EvzlQfN';
export const API_URL = `https://api.giphy.com/v1/gifs/random`;
export const fetchExp = async () => {
  const response =  fetch(
    `${API_URL}?api_key=${API_KEY}`
  );
  // response.then(res => res.json())
  //   .then( ({data}: any) => {
  //     const { url } = data.images.original;
  //     const image = document.createElement('img');
  //     image.src = url;
  //     document.body.appendChild(image);

  //   })
  //   .catch(err => console.log(err));
}