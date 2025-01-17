import React, { useEffect, useState } from 'react';
import '../App.css';

import 스피드전 from "../img/스피드전.png"
import 아이템전 from "../img/아이템전.png"

// 스피드 티어 이미지
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

//아이템 티어 이미지
import 노란장갑_다섯손가락 from "../img/아이템티어이미지/노란장갑 다섯손가락.webp";
import 노란장갑_네손가락 from "../img/아이템티어이미지/노란장갑 네손가락.webp";
import 노란장갑_세손가락 from "../img/아이템티어이미지/노란장갑 세손가락.webp";
import 노란장갑_두손가락 from "../img/아이템티어이미지/노란장갑 두손가락.webp";
import 노란장갑_한손가락 from "../img/아이템티어이미지/노란장갑 한손가락.webp";
import 초록장갑_다섯손가락 from "../img/아이템티어이미지/초록장갑 다섯손가락.webp";
import 초록장갑_네손가락 from "../img/아이템티어이미지/초록장갑 네손가락.webp";
import 초록장갑_세손가락 from "../img/아이템티어이미지/초록장갑 세손가락.webp";
import 초록장갑_두손가락 from "../img/아이템티어이미지/초록장갑 두손가락.webp";
import 초록장갑_한손가락 from "../img/아이템티어이미지/초록장갑 한손가락.webp";
import 파랑장갑_다섯손가락 from "../img/아이템티어이미지/파랑장갑 다섯손가락.webp";
import 파랑장갑_네손가락 from "../img/아이템티어이미지/파랑장갑 네손가락.webp";
import 파랑장갑_세손가락 from "../img/아이템티어이미지/파랑장갑 세손가락.webp";
import 파랑장갑_두손가락 from "../img/아이템티어이미지/파랑장갑 두손가락.webp";
import 파랑장갑_한손가락 from "../img/아이템티어이미지/파랑장갑 한손가락.webp";
import 빨강장갑_다섯손가락 from "../img/아이템티어이미지/빨강장갑 다섯손가락.webp";
import 빨강장갑_네손가락 from "../img/아이템티어이미지/빨강장갑 네손가락.webp";
import 빨강장갑_세손가락 from "../img/아이템티어이미지/빨강장갑 세손가락.webp";
import 빨강장갑_두손가락 from "../img/아이템티어이미지/빨강장갑 두손가락.webp";
import 빨강장갑_한손가락 from "../img/아이템티어이미지/빨강장갑 한손가락.webp";
import 검은장갑_다섯손가락 from "../img/아이템티어이미지/검은장갑 다섯손가락.webp";
import 검은장갑_네손가락 from "../img/아이템티어이미지/검은장갑 네손가락.webp";
import 검은장갑_세손가락 from "../img/아이템티어이미지/검은장갑 세손가락.webp";
import 검은장갑_두손가락 from "../img/아이템티어이미지/검은장갑 두손가락.webp";
import 검은장갑_한손가락 from "../img/아이템티어이미지/검은장갑 한손가락.webp";
import 무지개장갑_다섯손가락 from "../img/아이템티어이미지/무지개장갑 다섯손가락.webp";
import 무지개장갑_네손가락 from "../img/아이템티어이미지/무지개장갑 네손가락.webp";
import 무지개장갑_세손가락 from "../img/아이템티어이미지/무지개장갑 세손가락.webp";
import 무지개장갑_두손가락 from "../img/아이템티어이미지/무지개장갑 두손가락.webp";
import 무지개장갑_한손가락 from "../img/아이템티어이미지/무지개장갑 한손가락.webp";





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
  }
  else if(tier.name==='무지개장갑 한손가락'){
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
                85501점 이상
              </div>
  
          </div>
      </div>
    )
  }
  else{
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


function ResultBox({inputScore, speedTiers, itemTiers, mode}){
    const [message, setMessage] = useState('현재 등급전 점수를 입력해주세요.');
  
    useEffect(()=>{
      if (inputScore === ''){
        setMessage("현재 등급전 점수를 입력해주세요.");
        return;
      }
      if(mode ==='스피드'){
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
    }else if(mode === '아이템'){
      for (let i = 0; i < itemTiers.length; i++) {
        const currentRank = itemTiers[i];
        const nextRank = itemTiers[i + 1];
        
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
    }
      
    }, [inputScore]);
    
    if(mode === '스피드'){
    return(
      <div className='resultbox speed'>
        {message}
      </div>
    )
  }
  if(mode === '아이템'){
    return(
      <div className='resultbox item'>
        {message}
      </div>
    )
  }
  }
  
  function CalculateTier(){
    const [inputScore, setInputScore] = useState();
    const [mode, setMode] = useState('스피드');

  
    const handleChange = (event) => {
      setInputScore(event.target.value);
    };
  
    const MenuComponent = () => {
      const [isMenuOpen, setIsMenuOpen] = useState(false);
    
      const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };
    
      const onClickSpeed = () => {
        setMode('스피드');
        toggleMenu();
        setInputScore('');
      };
      
      const onClickItem = () => {
        setMode('아이템');
        toggleMenu();
        setInputScore('');
      };
    
      return (
        <div style={{ position: 'relative' }}> {/* 메뉴 위치를 버튼 바로 아래로 설정 */}
          <button onClick={toggleMenu}>아이템/스피드 모드 설정</button>
          <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
            <div className="menu-content">
              <p onClick={onClickSpeed}>스피드 등급전</p>
              <p onClick={onClickItem}>아이템 등급전</p>
            </div>
          </div>
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

    const itemTiers = [
      { name: "노란장갑 다섯손가락", maxPoints: 100, imgSrc: 노란장갑_다섯손가락 },
      { name: "노란장갑 네손가락", maxPoints: 120, imgSrc: 노란장갑_네손가락 },
      { name: "노란장갑 세손가락", maxPoints: 170, imgSrc: 노란장갑_세손가락 },
      { name: "노란장갑 두손가락", maxPoints: 260, imgSrc: 노란장갑_두손가락 },
      { name: "노란장갑 한손가락", maxPoints: 420, imgSrc: 노란장갑_한손가락 },
      { name: "초록장갑 다섯손가락", maxPoints: 660, imgSrc: 초록장갑_다섯손가락 },
      { name: "초록장갑 네손가락", maxPoints: 990, imgSrc: 초록장갑_네손가락 },
      { name: "초록장갑 세손가락", maxPoints: 1430, imgSrc: 초록장갑_세손가락 },
      { name: "초록장갑 두손가락", maxPoints: 1990, imgSrc: 초록장갑_두손가락 },
      { name: "초록장갑 한손가락", maxPoints: 2700, imgSrc: 초록장갑_한손가락 },
      { name: "파랑장갑 다섯손가락", maxPoints: 3560, imgSrc: 파랑장갑_다섯손가락 },
      { name: "파랑장갑 네손가락", maxPoints: 4590, imgSrc: 파랑장갑_네손가락 },
      { name: "파랑장갑 세손가락", maxPoints: 5810, imgSrc: 파랑장갑_세손가락 },
      { name: "파랑장갑 두손가락", maxPoints: 7230, imgSrc: 파랑장갑_두손가락 },
      { name: "파랑장갑 한손가락", maxPoints: 8870, imgSrc: 파랑장갑_한손가락 },
      { name: "빨강장갑 다섯손가락", maxPoints: 10740, imgSrc: 빨강장갑_다섯손가락 },
      { name: "빨강장갑 네손가락", maxPoints: 12870, imgSrc: 빨강장갑_네손가락 },
      { name: "빨강장갑 세손가락", maxPoints: 15260, imgSrc: 빨강장갑_세손가락 },
      { name: "빨강장갑 두손가락", maxPoints: 17930, imgSrc: 빨강장갑_두손가락 },
      { name: "빨강장갑 한손가락", maxPoints: 20900, imgSrc: 빨강장갑_한손가락 },
      { name: "검은장갑 다섯손가락", maxPoints: 25000, imgSrc: 검은장갑_다섯손가락 },
      { name: "검은장갑 네손가락", maxPoints: 30500, imgSrc: 검은장갑_네손가락 },
      { name: "검은장갑 세손가락", maxPoints: 36600, imgSrc: 검은장갑_세손가락 },
      { name: "검은장갑 두손가락", maxPoints: 43200, imgSrc: 검은장갑_두손가락 },
      { name: "검은장갑 한손가락", maxPoints: 50500, imgSrc: 검은장갑_한손가락 },
      { name: "무지개장갑 다섯손가락", maxPoints: 58300, imgSrc: 무지개장갑_다섯손가락 },
      { name: "무지개장갑 네손가락", maxPoints: 66700, imgSrc: 무지개장갑_네손가락 },
      { name: "무지개장갑 세손가락", maxPoints: 75800, imgSrc: 무지개장갑_세손가락 },
      { name: "무지개장갑 두손가락", maxPoints: 85500, imgSrc: 무지개장갑_두손가락 },
      { name: "무지개장갑 한손가락", maxPoints: Number.MAX_SAFE_INTEGER, imgSrc: 무지개장갑_한손가락 }
    ];
    
    
  // 배경 이미지 URL을 설정합니다.
  const getBackgroundImage = (mode) => {
    switch (mode) {
      case '스피드':
        return `url(${스피드전})`; // 스피드전 이미지 URL
      case '아이템':
        return `url(${아이템전})`; // 아이템전 이미지 URL
      default:
        return `url(${스피드전})`; // 기본 이미지 URL
    }
  };
  
    return(
      <div className='tileCss CalculateTier'  >
        <h1>
          다음 티어까지 몇 점 남았지?
        </h1>
        <div style={{ backgroundImage: getBackgroundImage(mode), backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', padding:'1%', paddingBottom:'3%' }}>
          <div>
            <h2>{mode} 등급전</h2>
            {mode==='스피드' ? (<p>짜릿한 주행감을 극대화한 스피드전!<br/>멋진 드리프트와 부스터를 활용해 누구보다 빠르게 달려보세요.</p>) : mode==='아이템'?(<p>승패를 예측할 수 없는 아이템전!<br/>상황에 맞는 아이템과 캐릭터 스킬을 활용해 전략적인 플레이를 즐겨보세요.</p>) : null}
          </div>
          <div style={{display: 'flex', justifyContent:'center'}}>
            <div className='TierTable'>
              {mode === '스피드' ? (
                speedTiers.map((tier, index) => (
                  <TierTile key={index} tier={tier} />
                ))
              ) : mode === '아이템' ? (
                itemTiers.map((tier, index) => (
                  <TierTile key={index} tier={tier} />
                ))
              ) : null}
            </div>
          </div>
        </div>

        <div className="input-group">
          <input type='text' onChange={handleChange}></input>
          <MenuComponent/>
        </div>
        <ResultBox inputScore={inputScore} speedTiers={speedTiers} itemTiers={itemTiers} mode = {mode} />
      </div>
    )
  }
  
  
  export default CalculateTier;