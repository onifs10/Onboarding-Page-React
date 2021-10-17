import React from 'react';
import image from './assets/illustration.png';
import './App.scss';
import Header from './components/Header';
import Forms from './layout/Forms';

function App() {
    return (
        <div className="App">
            <section className="side-section">
                <img src={image} alt="buy-food illustration" />
            </section>
            <section className="main-section">
                <Header />
                <Forms />
            </section>
        </div>
    );
}

export default App;
