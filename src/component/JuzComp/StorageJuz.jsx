import React, { useState, useEffect } from 'react';
import LoaderComp from '../../component/LoaderComp/LoaderComp';
import JuzComp from '../../component/JuzComp/JuzComp';


const StorageJuz = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [juz, setJuz] = useState([]);

  useEffect(() => {
    const apiUrl = process.env.REACT_APP_JUZ_API;
    const apiKey = process.env.REACT_APP_API_KEY;

    // Check if data is available in localStorage
    const localStorageData = localStorage.getItem('juz');
    if (localStorageData) {
      setJuz(JSON.parse(localStorageData));
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
          localStorage.setItem('juz', JSON.stringify(data));
          setIsLoaded(true);
          setJuz(data);
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
     
      </>
    );
  }
};

export default StorageJuz;
