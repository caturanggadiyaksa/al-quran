import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ judul, arti, asma, surahNumber, totalAyat }) => {
  return (
    <>
      <Link to={`/${surahNumber}`}>
        <div className="w-full mx-auto mt-3">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              <div className="relative px-4 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-2">
                <div className='flex items-center'>
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-violet-500 text-white" alt="Avatar">
                  <p>{ surahNumber }</p>
                </div>


                </div>
               
                
                <div className='w-[70%] flex items-center'>
                  <div className="space-y-2 pl-2">
                      <p className="text-slate-800">
                        {judul}
                      </p>
                      <p
                        
                        className="text-sm block text-indigo-400 group-hover:text-slate-800 transition duration-200"
                      >
                        {arti}
                      </p>
                  </div>
                </div>

                <div style={{ fontFamily: 'LPMQ IsepMisbah'}} className=" flex items-center justify-end">
                  <div className="space-y-2">
                    <div className=" flex items-center justify-center text-md">
                      <p>{ asma }</p>
                    </div>
                    <div className=" flex items-center justify-center text-sm">
                      <p className='text-indigo-400 '>{ totalAyat } <span>Ayat</span></p>
                    
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

export default Card;
