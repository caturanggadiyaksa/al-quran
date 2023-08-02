import React, { useState } from 'react';
import FileBookmark from '../BookmarkComp/FileBookmark';

// import { Link } from 'react-router-dom';

const Ayat = ({ judul, arti, asma, nomor }) => {

  const [showBookmark, setShowBookmark] = useState(false);

  function handleClick() {
    setShowBookmark(true);
  }

  function closeModal() {
    setShowBookmark(false);
  }
  

  return (
    <>
      <div className="w-full mx-auto my-4">
        <div className="">
          {/* <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" /> */}
          <div className=" px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
            
            <div className='flex flex-col justify-center items-center'>
              <button className="play-btn py-2">
                <i className="fa-regular fa-play" />
              </button>
             
              <i key={nomor} className="fa-regular fa-bookmark py-2" onClick={handleClick}/>
            </div>


            <div className="space-y-2 w-full">
              <div className='grid grid-cols-2 gap-4 place-content-betwee'>
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-violet-500 text-white" alt="Avatar">
                  <p>{ nomor }</p>
                </div>
                <p style={{ fontFamily: 'LPMQ IsepMisbah', textAlign: 'right' }} className="text-slate-800 pb-6 text-3xl">
                  {judul}
                </p>
              </div>
              <p
                style={{ fontFamily: 'LPMQ IsepMisbah', textAlign: 'left' }}
                dangerouslySetInnerHTML={{ __html: arti }}
                className="pb-1 block text-slate-800 group-hover:text-indigo-400 transition duration-200"
              />
              <p style={{ fontFamily: 'LPMQ IsepMisbah', textAlign: 'left' }} className="text-slate-800">
                {asma}
              </p>
            </div>
          </div>
        </div>
      </div>
      


      {showBookmark && (
        <div>
           <div className="fixed inset-0 backdrop-blur h-screen"></div>
           <div className="w-full fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
         
            <div className="bg-white p-4 rounded-lg shadow-lg">
            
              <FileBookmark data={closeModal} />
            
            </div>
          </div>
        </div>
        
      )}

    </>
    
  );
};

export default Ayat;
