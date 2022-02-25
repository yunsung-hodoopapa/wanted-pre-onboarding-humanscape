import axios from 'axios';
import { useQuery } from 'react-query';

const getResultByKeyword = async keyword => {
  const { data } = await axios.get(
    `https://api.clinicaltrialskorea.com/api/v1/search-conditions/?name=${keyword}}`,
  );
  return data;
};

export const useResults = keyword => {
  return useQuery(['keyword', keyword], () => getResultByKeyword(keyword), {
    enabled: !!keyword,
    select: (data) => data.slice(0, 10),
  });
};

export const debounce = (callback, duration) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => callback(...args), duration);
  };
};
