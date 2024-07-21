import React, { useEffect, useState } from 'react';
import '../App.css';

import logo from '../img/logo.png'
import loading from '../img/진행중.gif'


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
          <strong>남은 날짜</strong>
      <span style={{ color: 'red', fontWeight: 'bold', marginLeft: '20px' }}>
        D-{remainDay}
      </span>          </div>
      </div>
    )
  }

  export default RankGameDday;