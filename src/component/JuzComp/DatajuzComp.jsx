import React from 'react';
import { Link } from 'react-router-dom';

const DatajuzComp = ({ surahNumber, judul, arti, asma, verseData}) => {
  
  return (
    <>
      <Link to={`/${surahNumber}/${verseData}`} key={surahNumber}>
            <div className="bg-gray-100 p-4 rounded-lg border -inset-1 mb-4 mx-4">
              <div className="flex flex-row items-center justify-center">
                <div className="flex items-center justify-center w-9 h-8 rounded-full bg-violet-500 text-white" alt="Avatar">
                  <p className="text-sm">{surahNumber}</p>
                </div>
                <div className="w-full flex items-center justify-end text-sm ml-4">
                  <div className="w-[70%]">
                    <div>
                      <p>{judul}</p>
                    </div>
                    <div>
                      <p>{arti}</p>
                    </div>
                  </div>
                  <div className="w-[30%] text-right" style={{ fontFamily: 'LPMQ IsepMisbah' }}>
                    <div className="flex flex-col justify-end items-center">
                      <div>
                        <p className=' text-lg'>{asma}</p>
                      </div>
                      <div>
                        <p><span className='mx-2'>Ayat</span>{verseData}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      </Link>   
    </>
  );
};

export default DatajuzComp;
