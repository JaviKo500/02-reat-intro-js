import { API_KEY, API_URL } from "./fetchExp";

export const asyncAwait = async () => {
  try {
    
    const url = await getImage();
  
    const image = document.createElement('img');
    image.src = url;
    document.body.appendChild(image);
    console.log('<--------------- JK AsyncAwait --------------->');
    console.log(image);
  } catch (error) {
    console.log('<--------------- JK AsyncAwait Error --------------->');
    console.log(error);
  }
}

const getImage = async () => {
  const response = await fetch(
    `${API_URL}?api_key=${API_KEY}`
  );
  const {data} = await response.json();
  const { url } = data.images.original;
  return url;
}