import React, { useEffect, useState} from 'react';
import Ayat from '../../component/ayat/ayat';
import { useParams } from 'react-router-dom';
import NotFound from '../NotFound';
// import SidebarPage from '../SidebarPage/SidebarPage';
const AyatPage = () => {

  const { surah_number } = useParams();
 
  const [surah, setSurah] = useState([]);

  useEffect(() => {
    const apiKey = 'lcjYVLBQPueQNxivzTEeRgV7Kj9LN44NFg8chnal';
    const apiUrl = 'https://api-quran.tretasoft.com/api/quran';

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

 
    // Tambahkan pengecekan apakah `surah_number` adalah angka
    // Jika tidak, tampilkan halaman "not found"
    const isValidSurahNumber = !isNaN(parseInt(surah_number));
    if (!isValidSurahNumber) {
      return <NotFound />; // Pastikan Anda memiliki komponen NotFound yang sesuai diimpor di sini
    }

    return (
      
      <>
      {/* <SidebarPage /> */}
      <div className='min-h-screen lg:pl-[12rem] xl:pl-[16rem] overflow-hidden bg-gray-50 dark:bg-gray-800'>
        <div className='m-4 pt-[6rem]'>
          {surah.map((surahItem) => (
            <div key={surahItem.id}>
              <h2 className='m-4 text-xl font-semibold text-gray-800 dark:text-gray-100'>{surahItem.id === parseInt(surah_number) ? surahItem.name : null}</h2>
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
