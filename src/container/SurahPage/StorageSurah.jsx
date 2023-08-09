import React, { useState, useEffect } from 'react';
import Card from '../../component/card/card';
import LoaderComp from '../../component/LoaderComp/LoaderComp';

const StorageSurah = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [surah, setSurah] = useState([]);

  useEffect(() => {
    const apiUrl = process.env.REACT_APP_QURAN_API;
    const apiKey = process.env.REACT_APP_API_KEY;

    // Check if data is available in localStorage
    const localStorageData = localStorage.getItem('surah');
    if (localStorageData) {
      setSurah(JSON.parse(localStorageData));
      setIsLoaded(true);
    } else {
      fetch(apiUrl, {
        headers: {
          'API-Key': apiKey
        }
      })
      .then(res => res.json())
      .then(
        (data) => {
          localStorage.setItem('surah', JSON.stringify(data));
          setIsLoaded(true);
          setSurah(data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
    }
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <LoaderComp />;
  } else {
    return (
        <>
        {surah.map((surah) => (
          <Card
            key={surah.id}
            judul={surah.name}
            arti={surah.arti}
            asma={surah.asma}
            surahNumber={surah.id}
            totalAyat={surah.jumlah_ayat}
          />
        ))}
      </>         
     
    );
  }
};

export default StorageSurah;
