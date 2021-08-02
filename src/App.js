import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {LandingPageContainer} from "./components/LandingPage/LandingPageContainer"
import {Footer} from "./components/Footer/Footer";


function App() {
    return (
        <div>
            <Header/>
            <div className='wrapper'>
                <Navbar/>
                <LandingPageContainer />
            </div>
            <Footer/>
        </div>
    );
}

export default App;
