import React, { useEffect, useState } from 'react';
import './App.css';


function Sidebar(){
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };


  return (
    <div>
      <header className="App-header">
        <button onClick={toggleSidebar}>메뉴</button>
        <img src='logo.png'></img>

        <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
          <ul>
            <li>배우기</li>
            <li>도감</li>
            <li>FAQ</li>
            <li onClick={toggleSidebar}>메뉴 닫기</li>
          </ul>
        </div>
      </header>
    </div>
  );
}


function GameRankTable({ setKartRank }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [gameNames, setGameNames] = useState([]);

  async function fetchGameRankings() {
    try {

      const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
      const response = await fetch(proxyUrl+'https://www.gamemeca.com/ranking.php');
      const html = await response.text();
  
      // HTML에서 게임 이름 추출
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
  
      // 게임 이름을 포함한 요소를 선택
      const gameNameElements = doc.querySelectorAll('.game-name a');
  
      const names = [];
      gameNameElements.forEach(element => {
        const gameName = element.textContent.trim();
        names.push(gameName);
      });
  
      // 상태 업데이트
      setGameNames(names);
      setIsLoaded(true);
  
      // 카트라이더 드리프트의 순위 설정
      names.forEach((gameName, index) => {
        if (gameName === '카트라이더 드리프트') {
          setKartRank(index + 1);
        }
      });
  
      return names;
    } catch (error) {
      console.error('Error fetching game rankings:', error);
      return [];
    }
  }

  useEffect(() => {
    fetchGameRankings();

  },[]);

  if (isLoaded) {
    return (
      <div className='GameRankTable'>

        <ul>
          {gameNames.map((gameName, index) => (
            <li key={index}>{index + 1}. {gameName}</li>
          ))}
        </ul>
      </div>
    );
  } else {
    return(
    <p>
      <img src="/진행중.gif" style={{width:'300px'}}></img>
      데이터를 불러오는 중이에요!...
    </p>
    )
  }
}



function OurGameRank(){
  const [kartRank, setKartRank] = useState(false);

  return(
    <div className='tileCss OurGameRank'>
      <h2>
        현재 우리 게임 순위는?
      </h2>
      <p>현재 게임메카에서 제공하고 있는 게임 순위 데이터입니다.</p>
      <div>
        <GameRankTable setKartRank = {setKartRank}/>
        {kartRank &&<p><strong>{kartRank}위</strong> 카트라이더 드리프트</p>}
      </div>
    </div>
  )
}


function RankGameDday(){
  const [startDay, setStartDay] = useState(new Date('2024-05-16'));
  const [endDay, setEndDay] = useState(new Date('2024-08-15'));
  const [remainDay, setRemainDay] = useState(0);


  useEffect(()=>{
    var diff = endDay - new Date();
    var diffDay = Math.ceil(diff / (1000 * 60 * 60 * 24));
    setRemainDay(diffDay);
  })

  return(
    <div className='tileCss RankGameDday'>
      <h2>
        2nd 등급전 진행 중!
      </h2>
      <div>
        <><strong>시즌 시작일</strong> </><>{startDay.toLocaleDateString()}</><br/><br/>
        <><strong>시즌 종료일</strong> </><>{endDay.toLocaleDateString()} 오전 8시 59분 (UTC +9)</><br/><br/>
        <><strong>남은 날짜</strong> </><>D-{remainDay}</>
      </div>
    </div>
  )
}



function ResultBox({inputScore, speedTiers}){
  const [message, setMessage] = useState('현재 등급전 점수를 입력해주세요.');

  useEffect(()=>{
    if (inputScore == ''){
      setMessage("현재 등급전 점수를 입력해주세요.");
      return;
    }
    for (const rank of speedTiers) {
      if(inputScore<rank.maxPoints){
        setMessage(rank.name);
        break;
      }
    }
  }, [inputScore]);
  

  return(
    <div className='resultbox'>
      {message}
    </div>
  )
}

function CalculateTier(){
  const [inputScore, setInputScore] = useState();

  const handleChange = (event) => {
    setInputScore(event.target.value);
  };

  const MenuComponent = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    return (
      <div>
        <button onClick={toggleMenu}>메뉴 보이기/숨기기</button>
        {isMenuOpen && (
          <div className="menu">
            <p>메뉴 아이템 1</p>
            <p>메뉴 아이템 2</p>
            <p>메뉴 아이템 3</p>
          </div>
        )}
      </div>
    );
  };

  const speedTiers = [
    { name: "브론즈3", maxPoints: 120 },
    { name: "브론즈2", maxPoints: 270 },
    { name: "브론즈1", maxPoints: 620 },
    { name: "실버3", maxPoints: 1240 },
    { name: "실버2", maxPoints: 2180 },
    { name: "실버1", maxPoints: 3500 },
    { name: "골드3", maxPoints: 5260 },
    { name: "골드2", maxPoints: 7500 },
    { name: "골드1", maxPoints: 10280 },
    { name: "플래티넘3", maxPoints: 13630 },
    { name: "플래티넘2", maxPoints: 17600 },
    { name: "플래티넘1", maxPoints: 22230 },
    { name: "다이아몬드3", maxPoints: 27570 },
    { name: "다이아몬드2", maxPoints: 33660 },
    { name: "다이아몬드1", maxPoints: 40530 },
    { name: "마스터3", maxPoints: 48230 },
    { name: "마스터2", maxPoints: 56790 },
    { name: "마스터1", maxPoints: 66260 },
    { name: "그랜드마스터3", maxPoints: 76650 },
    { name: "그랜드마스터2", maxPoints: 88030 },
    { name: "그랜드마스터1", maxPoints: Number.MAX_SAFE_INTEGER } // '88031 이상'을 나타내는 데 사용될 수 있는 충분히 큰 숫자
  ];


  return(
    <div className='tileCss CalculateTier'>
      <h2>
        다음 티어까지 몇 점 남았지?
      </h2>
      <div>
      <ul>
          {speedTiers.map((tier, index) => (
            <li key={index}>{tier.name} : {tier.maxPoints}점 이하</li>
          ))}
        </ul>
      </div>
      <div className="input-group">
        <input type='text' onChange={handleChange}></input>
        <button>스피드/아이템<br/>설정</button>
      </div>
      <ResultBox inputScore={inputScore} speedTiers={speedTiers} />
    </div>
  )
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
      </div>
    </div>
  )

}

export default App;
