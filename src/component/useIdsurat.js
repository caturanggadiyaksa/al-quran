// useIdsurat.js
import { useParams } from 'react-router-dom';

const useIdsurat = () => {
  const { surah_number } = useParams();
  return surah_number;
};

export default useIdsurat;
