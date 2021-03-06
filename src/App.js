import React from 'react';
import {Route, Switch} from 'react-router-dom'
import './App.css';
import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";
import { MovieDetailPageContainer } from './components/MovieDetailPage/MovieDetailPageContainer';
import { MainPage } from './components/MainPage';


function App() {
    return (
        <div>
            <Header/>
            <div className='wrapper'>
                <Switch>
                    <Route exact path="/"> <MainPage /> </Route>
                    <Route path="/movie/:id"> <MovieDetailPageContainer /> </Route>
                </Switch>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
