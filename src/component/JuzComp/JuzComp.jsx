import React from 'react';
import DatajuzComp from './DatajuzComp';
import { Link } from 'react-router-dom';

const JuzComp = () => {
    const collectedData = JSON.parse(localStorage.getItem('collectedData'));

    // Mengelompokkan data berdasarkan nomor juz
    const groupedData = {};
    collectedData.forEach((item) => {
        if (!groupedData[item.juzNumber]) {
            groupedData[item.juzNumber] = [];
        }
        groupedData[item.juzNumber].push(item);
    });

    return (
        <div className='flex flex-wrap'>
            {Object.keys(groupedData).map((juzNumber) => (
                <div key={juzNumber} className='w-[33%] p-4'>
                    <div className="min-h-[240px] bg-white rounded-lg border border-gray-300 hover:border-blue-500 transition">
                        <div className='flex justify-between mb-2 mx-6 p-2 items-center'>
                            <h2 className="text-xl font-semibold ">Juz <span>{juzNumber}</span></h2>
                            <Link to={`/juz/${juzNumber}`} >
                                <p>Baca Juz</p>
                            </Link>
                            
                        </div>
                        
                        {groupedData[juzNumber].map((item, index) => (
                            <DatajuzComp
                                key={index}
                                judul={item.judul}
                                arti={item.arti}
                                asma={item.asma}
                                surahNumber={item.nomorSurah}
                                verseData={item.verseData}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default JuzComp;
