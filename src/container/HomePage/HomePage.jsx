import React from "react";
import SurahPage from "../SurahPage/SurahPage";
import Navbar from "../../component/navbar/navbar";
import AyatPage from "../AyatPage/AyatPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


class HomePage extends React.Component {

    render() {
        return (
            <>
             

                <div>
                    <Navbar />
                </div>

                <Router>
         
                    <Routes>
                    
                        <Route path="/" element={<SurahPage />} />
                        <Route path="/:surah_number" element={<AyatPage />}  />
                    
                       
                    </Routes>
                </Router>
               
            </>
        );
    }

}

export default HomePage;