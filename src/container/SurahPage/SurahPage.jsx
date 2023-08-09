import React from 'react';
import StorageSurah from './StorageSurah';
import BarComp from '../../component/BarComp/BarComp';
class SurahPage extends React.Component {

 
    render() {
     
        return (
          <>          
            <BarComp surah='/' juz='/juz' bookmark='/bookmark' />

              
            <div className="min-h-screen bg-gray-50 flex flex-col justify-center relative overflow-hidden sm:py-8 dark:bg-gray-800">
              <div className=" grid grid-cols-1 gap-1 justify-center mx-4 md:grid md:grid-cols-2 md:gap-2 xl:grid xl:grid-cols-3 xl:gap-3">
             
                <StorageSurah />

                   
              </div>
            </div>
          </>
            
        );
    }
}

export default SurahPage;