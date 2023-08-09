import React from 'react';
import StorageSurah from './StorageSurah';
import BarComp from '../../component/BarComp/BarComp';
class SurahPage extends React.Component {

 
    render() {
     
        return (
          <>          
            <BarComp surah='/' juz='/juz' bookmark='/bookmark' />

              
            
                <StorageSurah />

                   
              {/* </div>
            </div> */}
          </>
            
        );
    }
}

export default SurahPage;