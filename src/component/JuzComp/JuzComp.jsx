import React from 'react';
import DatajuzComp from './DatajuzComp';

// import { Link } from 'react-router-dom';

const JuzComp = ({ judul, arti, asma, surahNumber, totalAyat, no_juz }) => {

    return (
        <>
       
                    <div className="bg-white p-4 rounded-lg border hover:border-blue-500 transition">
                        <h2 className="text-xl font-semibold mb-2">Juz <span>{ no_juz}</span></h2>
                        <DatajuzComp judul={judul} arti={arti} asma={asma} surahNumber={surahNumber} totalAyat={totalAyat} />
                    </div>
               

       
           

        </>
    )
}

export default JuzComp;