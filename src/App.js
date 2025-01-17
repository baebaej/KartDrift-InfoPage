import React, { useEffect, useState } from 'react';
import './App.css';

import YoutubeLive from './component/YoutubeLive';
import OurGameRank from './component/OurGameRank';
import RankGameDday from './component/RankGameDday';
import CalculateTier from './component/CalculateTier';
import News from './component/News';

import logo from './img/사이트로고.png';
import loading from './img/진행중.gif';


function Sidebar(){
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleClickMenu1=()=>{
    window.open("https://now.nexon.com/service/kd-live?page=8c36d678-41cb-4303-b63e-17d66b781071", '_blank');
    setIsSidebarOpen(!isSidebarOpen);

  }
  const handleClickMenu2=()=>{
    window.open("https://mcoupon.nexon.com/kartdrift", '_blank');
    setIsSidebarOpen(!isSidebarOpen);

  }
  const handleClickMenu3=()=>{
    window.open("https://cs.nexon.com/HelpBoard/Nexon?gamecode=348", '_blank');
    setIsSidebarOpen(!isSidebarOpen);

  }
  const handleClickMenu4=()=>{
    window.open("https://kartrideresports.nexon.com/Main/Index", '_blank');
    setIsSidebarOpen(!isSidebarOpen);

  }
  const handleClickMenu5=()=>{
    window.open("https://kartdrift.nexon.com/kartdrift/ko/guide/gameguide/view?threadId=2512984", '_blank');
    setIsSidebarOpen(!isSidebarOpen);

  }
  const handleClickMenu6=()=>{
    window.open("https://kartdrift.nexon.com/kartdrift/ko/media/artwork", '_blank');
    setIsSidebarOpen(!isSidebarOpen);

  }
  const handleClickMenu7=()=>{
    window.open("https://www.n2o.studio/", '_blank');
    setIsSidebarOpen(!isSidebarOpen);

  }
  const handleProxy=()=>{
    window.open("https://cors-anywhere.herokuapp.com/corsdemo", '_blank');
    setIsSidebarOpen(!isSidebarOpen);

  }
  const handleClickHomePage=()=>{
    window.open("https://kartdrift.nexon.com/kartdrift/ko/main", '_blank');
    setIsSidebarOpen(!isSidebarOpen);

  }
  const handleClickMenuRacingPass=()=>{
    window.open("https://kartdrift.nexon.com/kartdrift/ko/guide/gameguide/view?threadId=2512984", '_blank');
    setIsSidebarOpen(!isSidebarOpen);

  }
  const handleClickMenuNewBie=()=>{
    window.open("https://kartdrift.nexon.com/kartdrift/ko/guide/gameguide/view?threadId=2500051", '_blank');
    setIsSidebarOpen(!isSidebarOpen);

  }
  const handleClickMenuCharacter=()=>{
    window.open("https://kartdrift.nexon.com/kartdrift/ko/guide/gameguide/view?threadId=2500013", '_blank');
    setIsSidebarOpen(!isSidebarOpen);

  }
  const handleClickMenuKartBody=()=>{
    window.open("https://kartdrift.nexon.com/kartdrift/ko/guide/gameguide/view?threadId=2490274", '_blank');
    setIsSidebarOpen(!isSidebarOpen);

  }
  const handleClickMenuTrack=()=>{
    window.open("https://kartdrift.nexon.com/kartdrift/ko/guide/gameguide/view?threadId=2490269", '_blank');
    setIsSidebarOpen(!isSidebarOpen);

  }

  return (
    <div>
      <header className="App-header">
        <button onClick={toggleSidebar}>메뉴</button>
        <span className="image-container">
          <img src={logo} alt="Logo" style={{width:'170px'}}/>
        </span>

        <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
          <ul>
            <li onClick={toggleSidebar}>메뉴 닫기</li>
            <li onClick={handleProxy}>프록시 설정하기</li>
            <li >--------------------------------</li>
            <li onClick={handleClickHomePage}>카트라이더: 드리프트 홈페이지</li>
            <li onClick={handleClickMenuNewBie}>초보자 가이드</li>
            <li onClick={handleClickMenuRacingPass}>레이싱 패스 가이드</li>
            <li onClick={handleClickMenuCharacter}>캐릭터 스킬 도감</li>
            <li onClick={handleClickMenuKartBody}>카트바디 도감</li>
            <li onClick={handleClickMenuTrack}>트랙 도감</li>


            <li onClick={handleClickMenu6}>아트웍</li>
            <li >--------------------------------</li>
            <li onClick={handleClickMenu3}>고객센터</li>
            <li onClick={handleClickMenu1}>확률 정보</li>
            <li onClick={handleClickMenu2}>카트 쿠폰 사용</li>
            <li >--------------------------------</li>
            <li onClick={handleClickMenu4}>카트라이더 e-sports</li>
            <li onClick={handleClickMenu7}>니트로 스튜디오</li>


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
        <News/>
      </div>
    </div>
  )

}

export default App;
