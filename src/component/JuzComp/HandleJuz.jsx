import React from "react";

const HandleJuz = () => {
  const dataSurahLocalStorage = JSON.parse(localStorage.getItem('surah'));
  const dataJuzLocalStorage = JSON.parse(localStorage.getItem('juz'));

  if (!dataSurahLocalStorage || !dataJuzLocalStorage) {
    // Handle the case when dataSurahLocalStorage is not available
    console.log('Data "surah & juz" not found in localStorage.');
    return null;
  }

  const collectedData = [];

  dataJuzLocalStorage.forEach((item) => {
    const verseMapping = item.verse_mapping;
    const juzNumber = item.juz_number;

    for (const key in verseMapping) {
      if (verseMapping.hasOwnProperty(key)) {
        const nomorSurah = key;
        const verseData = verseMapping[key];

        // Cari data surah dari dataSurahLocalStorage berdasarkan nomorSurah
        const surahData = dataSurahLocalStorage.find((surahItem) => surahItem.surah_number === parseInt(nomorSurah));

        if (surahData) {
          const asma = surahData.asma;
          const judul = surahData.name;
          const arti = surahData.arti;

          const collectedItem = {
            nomorSurah,
            verseData,
            asma,
            judul,
            arti,
            juzNumber,
          };

          collectedData.push(collectedItem);
        }
      }
    }
  });

  // Simpan collectedData ke dalam localStorage
  localStorage.setItem('collectedData', JSON.stringify(collectedData));
  return null;
};

export default HandleJuz;
