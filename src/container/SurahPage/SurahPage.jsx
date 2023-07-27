import React from 'react';
import './SurahPage.css';
import Card from '../../component/card/card';
import BarComp from '../../component/BarComp/BarComp';

class SurahPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      surah: null,
      isLoading: true,
    };
  }

    componentDidMount() {
      const apiKey = 'lcjYVLBQPueQNxivzTEeRgV7Kj9LN44NFg8chnal'; // Ganti YOUR_API_KEY dengan API key yang diberikan oleh penyedia API Anda
      const apiUrl = 'https://api-quran.tretasoft.com/api/quran';
      

      // Check if data exists in Local Storage
      const storedQuranData = localStorage.getItem('surah');

      if (storedQuranData) {
        // If data exists, parse and use it
        this.setState({
          surah: JSON.parse(storedQuranData),
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

          localStorage.setItem('surah', JSON.stringify(data));
          this.setState({
            surah: data,
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
      const { surah, isLoading } = this.state;
        return (
          <>          
           <BarComp />

              {isLoading ? (
                <div>Loading...</div>
              ) : surah ? (
                // Render Quran data here
                <div className="min-h-screen bg-gray-50 flex flex-col justify-center relative overflow-hidden sm:py-8 dark:bg-gray-800">
                  <div className=" grid grid-cols-1 gap-1 justify-center mx-4 md:grid md:grid-cols-2 md:gap-2 xl:grid xl:grid-cols-3 xl:gap-3">
             
                   {this.state.surah.map((surah) => (
                      <Card key={surah.id} judul={surah.name} arti={surah.arti} asma={surah.asma} surahNumber={surah.id} />
                    ))}

                   
                  </div>
                </div>
              ) : (
                <div>Data not available.</div>
              )}
             
        
                  
             
              
             
           
          </>
            
        );
    }
}

export default SurahPage;