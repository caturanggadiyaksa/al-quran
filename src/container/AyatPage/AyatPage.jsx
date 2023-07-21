import React, { useEffect, useState} from 'react';
import Ayat from '../../component/ayat/ayat';
import { useParams } from 'react-router-dom';

const AyatPage = () => {

  const { surah_number } = useParams();
 
  const [surah, setSurah] = useState([]);

  useEffect(() => {
    const apiKey = 'lcjYVLBQPueQNxivzTEeRgV7Kj9LN44NFg8chnal';
    const apiUrl = 'http://127.0.0.1:8000/api/quran';

    fetch(apiUrl, {
      headers: {
        'API-Key': apiKey
      }
    })
      .then(res => res.json())
      .then(data => {
        setSurah(data);
       
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

 
    
    return (
      
      <>
      <div className='min-h-screen overflow-hidden bg-gray-50 dark:bg-gray-800'>
        <div className='m-4 '>
          {surah.map((surahItem) => (
            <div key={surahItem.id}>
              <h2 className='m-4 text-gray-800 dark:text-gray-100'>{surahItem.id === parseInt(surah_number) ? surahItem.name : null}</h2>
              {surahItem.id === parseInt(surah_number) ? surahItem.ayats.map((ayat) => (
                <Ayat key={ayat.id} judul={ayat.isi_ayat} arti={ayat.translation} asma={ayat.text}/>
              )) : null}
            </div>
          ))}
        </div>
      </div>
      
    </>

        
    )
}


export default AyatPage;
