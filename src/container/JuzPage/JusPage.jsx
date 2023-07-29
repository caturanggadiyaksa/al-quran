import React from 'react';
import BarComp from '../../component/BarComp/BarComp';
import JuzComp from '../../component/JuzComp/JuzComp';
import LoaderComp from '../../component/LoaderComp/LoaderComp';
class JuzPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      juz: null,
      surah: null,
      isLoading: true,
    };
  }

    componentDidMount() {
      const apiKey = 'lcjYVLBQPueQNxivzTEeRgV7Kj9LN44NFg8chnal'; 
      const apiUrl = 'http://127.0.0.1:8000/api/juz';
      

      // Check if data exists in Local Storage
      const storedJuzData = localStorage.getItem('juz');
      const storedSurahData = localStorage.getItem('surah');
      
      if (storedJuzData) {
        // If data exists, parse and use it
        this.setState({
          juz: JSON.parse(storedJuzData),
          surah: JSON.parse(storedSurahData),
          isLoading: false,
        
        });
       
      } else {
        fetch(apiUrl, {
          headers: {
            'API-Key': apiKey
          }
        })
  
        .then(res => res.json())
        .then(data => {

          localStorage.setItem('juz', JSON.stringify(data));
          this.setState({
            juz: data,
            isLoading: false,
          });
    
       
          
          
        })
        
        .catch(error => {
          // Tangani kesalahan jika ada
          console.error('Error:', error);
        });

      }
     
    }

   
    
    
    
    render() {
      const { juz, isLoading } = this.state;
        return (
            <>          
            
              <BarComp surah='/' juz='/juz' bookmark='/bookmark' />

              {
                isLoading ? (
                  <LoaderComp />
                ) : juz ? (
                  <div className='w-full mx-4'>
                    <div className='flex flex-wrap items-center justify-center pb-4 gap-6'>
                      
                      {
                        juz.map((juz) => (
                          
                          <div key={juz.id} className='w-[30%]'>
                      
                            <JuzComp  no_juz={juz.juz_number} surahNumber={juz.verse_mapping} />
                          </div>
                        ))
                      }
                      
                    </div>
                  </div>
                  
                  
                ) :  (
                  <div>Data not available.</div>
                )
              }
             
             
                
            </>
            
        );
    }
}

export default JuzPage;