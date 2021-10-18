import React, { useState } from 'react';
import image from './assets/illustration.png';
import './App.scss';
import Header from './components/Header';
import Forms from './layout/Forms';

function App() {
  const [done, setDone] = useState<boolean>(false);
  return (
    <div className="App">
      <section className={`side-section ${done ? 'done' : ''}`}>
        <img src={image} alt="buy-food illustration" />
        {done && (
          <div className="complete">
            registration completed <span>&#10004;</span>
          </div>
        )}
      </section>
      <section className="main-section">
        <Header />
        <Forms onComplete={() => setDone((value) => !value)} />
      </section>
    </div>
  );
}

export default App;
