import React from 'react';
import { Link } from 'react-router-dom';

const DatajuzComp = ({ judul, arti, asma, surahNumber, totalAyat }) => {

    return (
        <>
            <Link to={`/${surahNumber}`}>
                <div className="bg-gray-100 p-4 rounded-lg border -inset-1 pb-4">
                
                    <div className='flex flex-row items-center justify-center'>
                        <div className=" flex items-center justify-center w-9 h-8 rounded-full bg-violet-500 text-white" alt="Avatar">
                            <p className='text-sm'>{ surahNumber }</p>
                        </div>

                        <div className='w-full flex items-center justify-end text-sm '>
                            <div className='w-[70%]  ml-4'>
                                <div className=''>
                                    <p> {judul}</p>
                                </div>
                                <div className=''>
                                    <p> {arti}</p>
                                </div>
                            </div>


                            <div className='w-[30%] text-right' style={{ fontFamily: 'LPMQ IsepMisbah'}}>
                                <div className='flex flex-col justify-end items-center'>
                                    <div className=''>
                                        <p>{ asma }</p>
                                    </div>
                                    <div className=''>
                                        <p>{ totalAyat }</p>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                

                </div>
            </Link>
        

        </>
    )
}

export default DatajuzComp;