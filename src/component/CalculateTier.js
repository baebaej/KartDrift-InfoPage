import React, { useEffect, useState } from 'react';
import '../App.css';

import logo from '../img/logo.png'
import loading from '../img/진행중.gif'

// speedTiers.js
import 브론즈3 from "../img/스피드티어이미지/브론즈3.webp";
import 브론즈2 from "../img/스피드티어이미지/브론즈2.webp";
import 브론즈1 from "../img/스피드티어이미지/브론즈1.webp";
import 실버3 from "../img/스피드티어이미지/실버3.webp";
import 실버2 from "../img/스피드티어이미지/실버2.webp";
import 실버1 from "../img/스피드티어이미지/실버1.webp";
import 골드3 from "../img/스피드티어이미지/골드3.webp";
import 골드2 from "../img/스피드티어이미지/골드2.webp";
import 골드1 from "../img/스피드티어이미지/골드1.webp";
import 플래티넘3 from "../img/스피드티어이미지/플래티넘3.webp";
import 플래티넘2 from "../img/스피드티어이미지/플래티넘2.webp";
import 플래티넘1 from "../img/스피드티어이미지/플래티넘1.webp";
import 다이아몬드3 from "../img/스피드티어이미지/다이아몬드3.webp";
import 다이아몬드2 from "../img/스피드티어이미지/다이아몬드2.webp";
import 다이아몬드1 from "../img/스피드티어이미지/다이아몬드1.webp";
import 마스터3 from "../img/스피드티어이미지/마스터3.webp";
import 마스터2 from "../img/스피드티어이미지/마스터2.webp";
import 마스터1 from "../img/스피드티어이미지/마스터1.webp";
import 그랜드마스터3 from "../img/스피드티어이미지/그랜드마스터3.webp";
import 그랜드마스터2 from "../img/스피드티어이미지/그랜드마스터2.webp";
import 그랜드마스터1 from "../img/스피드티어이미지/그랜드마스터1.webp";


function TierTile({tier, index}){

  if(tier.name==='그랜드마스터1'){
    return(
      <div>
          <div className='TierTile'>
            <div className='tierimg'>
                <img src={tier.imgSrc} style={{width:'30px'}}></img>
              </div>
            <div className='tiername'>
              {tier.name}
            </div>
  
              <div className='tierpoints'>
                88031점 이상
              </div>
  
          </div>
      </div>
    )
  }else{
  return(
    <div>
        <div className='TierTile'>
          <div className='tierimg'>
              <img src={tier.imgSrc} style={{width:'30px'}}></img>
            </div>
          <div className='tiername'>
            {tier.name}
          </div>

            <div className='tierpoints'>
              {tier.maxPoints}점 이하
            </div>

        </div>
    </div>
  )
}
}


function ResultBox({inputScore, speedTiers}){
    const [message, setMessage] = useState('현재 등급전 점수를 입력해주세요.');
  
    useEffect(()=>{
      if (inputScore == ''){
        setMessage("현재 등급전 점수를 입력해주세요.");
        return;
      }
      for (let i = 0; i < speedTiers.length; i++) {
        const currentRank = speedTiers[i];
        const nextRank = speedTiers[i + 1];
        
        if (inputScore <= currentRank.maxPoints) {
          if (nextRank) {
            // 다음 티어가 존재하는 경우
            setMessage(`현재 티어 '${currentRank.name}'이고, 다음 티어 '${nextRank.name}'까지 ${currentRank.maxPoints - inputScore + 1}점 남았습니다.`);
          } else {
            // 다음 티어가 없는 경우
            setMessage(`현재 티어 '${currentRank.name}'입니다. 더 이상 티어가 없습니다.`);
          }
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
      { name: "브론즈3", maxPoints: 120, imgSrc: 브론즈3 },
      { name: "브론즈2", maxPoints: 270, imgSrc: 브론즈2 },
      { name: "브론즈1", maxPoints: 620, imgSrc: 브론즈1 },
      { name: "실버3", maxPoints: 1240, imgSrc: 실버3 },
      { name: "실버2", maxPoints: 2180, imgSrc: 실버2 },
      { name: "실버1", maxPoints: 3500, imgSrc: 실버1 },
      { name: "골드3", maxPoints: 5260, imgSrc: 골드3 },
      { name: "골드2", maxPoints: 7500, imgSrc: 골드2 },
      { name: "골드1", maxPoints: 10280, imgSrc: 골드1 },
      { name: "플래티넘3", maxPoints: 13630, imgSrc: 플래티넘3 },
      { name: "플래티넘2", maxPoints: 17600, imgSrc: 플래티넘2 },
      { name: "플래티넘1", maxPoints: 22230, imgSrc: 플래티넘1 },
      { name: "다이아몬드3", maxPoints: 27570, imgSrc: 다이아몬드3 },
      { name: "다이아몬드2", maxPoints: 33660, imgSrc: 다이아몬드2 },
      { name: "다이아몬드1", maxPoints: 40530, imgSrc: 다이아몬드1 },
      { name: "마스터3", maxPoints: 48230, imgSrc: 마스터3 },
      { name: "마스터2", maxPoints: 56790, imgSrc: 마스터2 },
      { name: "마스터1", maxPoints: 66260, imgSrc: 마스터1 },
      { name: "그랜드마스터3", maxPoints: 76650, imgSrc: 그랜드마스터3 },
      { name: "그랜드마스터2", maxPoints: 88030, imgSrc: 그랜드마스터2 },
      { name: "그랜드마스터1", maxPoints: Number.MAX_SAFE_INTEGER, imgSrc: 그랜드마스터1 }
    ];
    
  
  
    return(
      <div className='tileCss CalculateTier'>
        <h2>
          다음 티어까지 몇 점 남았지?
        </h2>
        <div className='TierTable'>
            {speedTiers.map((tier, index) => (
              <TierTile tier = {tier}/>
            ))}
        </div>
        <div className="input-group">
          <input type='text' onChange={handleChange}></input>
          <button>스피드/아이템<br/>설정</button>
        </div>
        <ResultBox inputScore={inputScore} speedTiers={speedTiers} />
      </div>
    )
  }
  
  
  export default CalculateTier;