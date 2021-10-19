import React from 'react';
import './App.css';
import './index.css';

const api = {
  key: 'b88c97ba7ed736121b9d4c9442253be8',
  base: 'https://api.openweathermap.org/data/2.5/',
};

function App() {
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="Search..." />
        </div>
        <div className="location-box">
          <div className="location">New York City, US</div>
          <div className="date"></div>
        </div>
      </main>
    </div>
  );
}

export default App;
