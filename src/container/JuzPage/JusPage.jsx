import React from 'react';
import BarComp from '../../component/BarComp/BarComp';
import StorageJuz from '../../component/JuzComp/StorageJuz';
import HandleJuz from '../../component/JuzComp/HandleJuz';
import JuzComp from '../../component/JuzComp/JuzComp';
class JuzPage extends React.Component {
    
    render() {
      
        return (
            <>          
            
              <BarComp surah='/' juz='/juz' bookmark='/bookmark' />

             
                  <div className='w-full'>
                    <div className=''>
                      <StorageJuz />
                      <HandleJuz />
                     
                        <JuzComp />
                     
                      
                    </div>
                  </div>
                  
               
             
             
                
            </>
            
        );
    }
}

export default JuzPage;