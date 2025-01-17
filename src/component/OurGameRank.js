import React, { useEffect, useState } from 'react';
import '../App.css';

import gamemeca from '../img/게임메카.gif'
import loading from '../img/진행중.gif'


function GameTile({game, index}){


  return(
    <div>
    <div className='GameTile'>
      <div className='rank'>
        {index+1}
      </div>
        <div className='gameimg'>
          <img src={game.icon} style={{width:'100px'}}></img>
        </div>
        <div className='gamename'>
          {game.name}
        </div>

    </div>
    </div>
  )
}



function GameRankTable({ setKartRank, setKartImg }) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [gameDatas, setGameData] = useState([]);
  
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
        const gameIconElements = doc.querySelectorAll('.game-icon');

        const data = [];

        gameNameElements.forEach((nameElement, index) => {
          const gameName = nameElement.textContent.trim();
          const iconSrc = gameIconElements[index]?.src.trim() || '';

          data.push({ name: gameName, icon: iconSrc });
        });

        // 상태 업데이트
        setGameData(data);
        setIsLoaded(true);
    
        // 카트라이더 드리프트의 순위 설정
        data.forEach((game, index) => {
          if (game.name === '카트라이더 드리프트') {
            setKartRank(index);
            console.log('이미지경로:', game.icon)
            setKartImg(game.icon);
          }
        });
    
        return data;
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
              {gameDatas.map((gameData, index) => (
              <GameTile key={index} game = {gameData} index = {index}/>
            ))}
        </div>
      );
    } else {
      return(
      <div className='loading'>
        <img src={loading} style={{width:'300px'}}></img>
        <div>데이터를 불러오고 있어요 🔄</div>
      </div>
      )
    }
  }
  
  
  
  function OurGameRank(){
    const [kartRank, setKartRank] = useState(false);
    const [kartImg, setKartImg] = useState("");

    var gameData = {
      'name':'카트라이더 드리프트',
      'icon':kartImg,
    }

  
    return(
      <div className='tileCss OurGameRank'>
        <h1>
          우리 게임 순위는?
        </h1>
        
        <p>현재 게임메카에서 제공하고 있는 주간 게임 순위 데이터입니다. 매주 수요일에 업데이트됩니다.</p>
        <div>
          <GameRankTable setKartRank = {setKartRank} setKartImg = {setKartImg}/>
          {kartRank &&<GameTile game = {gameData} index = {kartRank}/>}
        </div>
        <div style={{ display: "flex", alignItems: "center", marginTop:'15px'}}>
          <>Powered by <img src={gamemeca} alt="GameMecaLogo" style={{ width: "100px", marginLeft:"7px"}} /></> 
        </div>
        

      </div>
    )
  }
  

  export default OurGameRank;