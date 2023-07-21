import React from 'react';
import './SurahPage.css';
import Card from '../../component/card/card';


class SurahPage extends React.Component {

  constructor(props) {
    super(props);

    // Setel state awal jika komponen Anda memiliki state
    this.state = {
      // nilai state awal Anda di sini
      surah: []
    };
  }

    componentDidMount() {
      const apiKey = 'lcjYVLBQPueQNxivzTEeRgV7Kj9LN44NFg8chnal'; // Ganti YOUR_API_KEY dengan API key yang diberikan oleh penyedia API Anda
      const apiUrl = 'http://127.0.0.1:8000/api/quran';
      
      fetch(apiUrl, {
        headers: {
          'API-Key': apiKey
        }
      })

      .then(res => res.json())
      .then(data => {
        // Lakukan sesuatu dengan data yang diterima dari API
        this.setState({
          surah: data
        })
        console.log(data);
      })
      
      .catch(error => {
        // Tangani kesalahan jika ada
        console.error('Error:', error);
      });
    }
    
    
    render() {
        return (
          <>
            <div className="min-h-screen bg-gray-50 flex flex-col justify-center relative overflow-hidden sm:py-12 dark:bg-gray-800">
              <div className="grid grid-cols-4 gap-4 justify-center mx-4">
              {/* <Router>
             
              <Routes>
                <Route path="/:surah_number" element={<AyatPage />} />
              </Routes> */}

             
              {this.state.surah.map((surah) => (
                <Card key={surah.id} judul={surah.name} arti={surah.arti} asma={surah.asma} surahNumber={surah.id} />
              ))}
            {/* </Router> */}
                  
             
              
              </div>
            </div>
           
          </>
            
        );
    }
}

export default SurahPage;