import { useEffect, useState } from 'react';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const BASE_URL = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = (tag) => {
  const [gif, setGif] = useState('');
  const [loading, setLoading] = useState(false);

  async function fetchData(tagValue) {
    try {
      setLoading(true);
      const { data } = await axios.get(tagValue ? `${BASE_URL}&tag=${tagValue}` : BASE_URL);
      const imageSource = data?.data?.images?.downsized_large?.url || '';
      setGif(imageSource);
    } catch (error) {
      console.error('Error fetching GIF:', error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData(tag || 'car');
  }, [tag]);

  return { gif, loading, fetchData };
};

export default useGif;
