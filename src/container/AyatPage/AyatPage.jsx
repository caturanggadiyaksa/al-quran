import React, { useEffect, useState } from 'react';
import Ayat from '../../component/ayat/ayat';
import { useParams } from 'react-router-dom';
import NotFound from '../NotFound';
import LoaderComp from '../../component/LoaderComp/LoaderComp';



const AyatPage = () => {
  const { surah_number } = useParams();
  const [surah, setSurah] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if data exists in Local Storage
    const storedQuranData = localStorage.getItem('surah');

    if (storedQuranData) {
      // If data exists, parse and use it
      setSurah(JSON.parse(storedQuranData));
    }

    setLoading(false); // Always set loading to false after attempting to fetch data
  }, []);

  // Tambahkan pengecekan apakah `surah_number` adalah angka
  // Jika tidak, tampilkan halaman "not found"
  const isValidSurahNumber = !isNaN(parseInt(surah_number));
  if (!isValidSurahNumber) {
    return <NotFound />; // Pastikan Anda memiliki komponen NotFound yang sesuai diimpor di sini
  }

  return (
    <>
      <div className='min-h-screen lg:pl-[12rem] xl:pl-[16rem] overflow-hidden bg-gray-50 dark:bg-gray-800'>
        <div className='m-4 pt-[6rem]'>
          {loading ? (
            <LoaderComp />
          ) : surah.length > 0 ? (
            surah.map((surahItem) => (
              <div key={surahItem.id}>
                <h2 className='m-4 text-xl font-semibold text-gray-800 dark:text-gray-100'>
                  {surahItem.id === parseInt(surah_number) ? surahItem.name : null}
                </h2>
                {surahItem.id === parseInt(surah_number)
                  ? surahItem.ayats.map((ayat) => (
                      <Ayat key={ayat.id} judul={ayat.isi_ayat} arti={ayat.translation} asma={ayat.text} nomor={ ayat.ayat_number } />
                    ))
                  : null}
              </div>
            ))
          ) : (
            <div>Data not available.</div>
          )}
        </div>
      </div>
    </>
  );
};

export default AyatPage;
