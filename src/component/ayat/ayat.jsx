import React from 'react';

// import { Link } from 'react-router-dom';

const Ayat = ({ judul, arti, asma }) => {


  return (
    <>
      <div className="w-full mx-auto my-4">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
          <div className="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
            <div className="space-y-2 w-full">
              <p style={{ fontFamily: 'LPMQ IsepMisbah', textAlign: 'right' }} className="text-slate-800 pb-6 text-3xl">
                {judul}
              </p>
              <p
                style={{ fontFamily: 'LPMQ IsepMisbah', textAlign: 'right' }}
                dangerouslySetInnerHTML={{ __html: arti }}
                className="pb-1 block text-slate-800 group-hover:text-indigo-400 transition duration-200"
              />
              <p style={{ fontFamily: 'LPMQ IsepMisbah', textAlign: 'right' }} className="text-slate-800">
                {asma}
              </p>
            </div>
          </div>
        </div>
      </div>


    </>
    
  );
};

export default Ayat;
