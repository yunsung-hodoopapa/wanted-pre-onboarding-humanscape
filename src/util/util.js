import axios from 'axios';
import { useQuery } from 'react-query';

const getResultByKeyword = async (keyword) => {
  const {data} = await axios.get(
    `https://api.clinicaltrialskorea.com/api/v1/search-conditions/?name=${keyword}}`,
  );
  return data;
}

export const useResults = (keyworld) => {
  return useQuery(['keyword', keyword], () => getResultByKeyword(keyword), {
    enabled: !!keyword,
  });
}