import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ judul, arti, asma, surahNumber }) => {
  return (
    <>
      <Link to={`/${surahNumber}`}>
        <div className="w-full mx-auto mt-3">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
            <div className="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
            <div className="flex items-center">
                { asma }
            </div>
              <div className="space-y-2">
                <p className="text-slate-800">
                  {judul}
                </p>
                <p
                  
                  className="block text-indigo-400 group-hover:text-slate-800 transition duration-200"
                >
                  {arti}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
    
  );
};

export default Card;
