import React, { useEffect, useState } from 'react';
import './App.css';

import YoutubeLive from './component/YoutubeLive';
import OurGameRank from './component/OurGameRank';
import RankGameDday from './component/RankGameDday';
import CalculateTier from './component/CalculateTier';

import logo from './img/logo.png';
import loading from './img/진행중.gif';


function Sidebar(){
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleClick=()=>{
    alert('아직 준비중인 기능입니다.');
  }

  return (
    <div>
      <header className="App-header">
        <button onClick={toggleSidebar}>메뉴</button>
        <span class="image-container">
          <img src={logo} alt="Logo" />
        </span>

        <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
          <ul>
            <li onClick={toggleSidebar}>메뉴 닫기</li>
            <li onClick={handleClick}>배우기</li>
            <li onClick={handleClick}>도감</li>
            <li onClick={handleClick}>FAQ</li>
          </ul>
        </div>
      </header>
    </div>
  );
}




function App() {

  return(
    <div className="App">
      <div className='HeaderFrame'>
        <Sidebar/>
      </div>
      <div className='ContentFrame'>
        <OurGameRank/>
        <RankGameDday/>
        <CalculateTier/>
        <YoutubeLive/>
      </div>
    </div>
  )

}

export default App;
