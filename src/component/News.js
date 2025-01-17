import React, { useEffect, useState } from 'react';
import '../App.css';

import navernews from '../img/네이버뉴스.png'
import loading from '../img/진행중.gif'


function NoticeTile({news: notice, index}){

  const onNoticeClickHandler=()=>{
      const noticeLink = "https://kartdrift.nexon.com/" + notice.link;
      window.open(noticeLink, '_blank');
  }


return(
  <div>
  <div className='NoticeTile' onClick={onNoticeClickHandler}>
    <div className='index'>
      Notice
    </div>
      <div className='noticeTitle'>
        {notice.title}
      </div>
      <div className='date'>
          {notice.date}
      </div>

  </div>
  </div>
)
}

function NewsTile({news, index}){

    const onNoticeClickHandler=()=>{
        const noticeLink = news.link;
        window.open(noticeLink, '_blank');
    }

    function formatPubDate(pubDate) {
      // Date 객체를 생성합니다.
      const date = new Date(pubDate);
      
      // 년, 월, 일, 시간, 분을 추출합니다.
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 1을 더합니다.
      const day = String(date.getDate()).padStart(2, '0');
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      
      // 포맷팅된 문자열을 반환합니다.
      return `${year}.${month}.${day} ${hours}:${minutes}`;
  }


  return(
    <div>
    <div className='NewsTile' onClick={onNoticeClickHandler}>
      <div className='index'>
        News
      </div>
        <div className='newsbox'>
          <div className='newsTitle'>
            {news.title}
          </div>
          <div className='newsContext'>
            {news.description}
          </div>
        </div>
        <div className='date'>
            {formatPubDate(news.pubDate)}
        </div>

    </div>
    </div>
  )
}



  function NoticeTable({ setKartRank, setKartImg }) {
      const [isLoaded, setIsLoaded] = useState(false);
      const [noticeDatas, setNoticeData] = useState([]);
    
      async function fetchGameRankings() {
        try {
    
          const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
          const response = await fetch(proxyUrl+'https://kartdrift.nexon.com/kartdrift/ko/news/announcement/list');
          const html = await response.text();

          console.log('받아온html: ', html);
      
          // HTML에서 게임 이름 추출
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, 'text/html');
      

          // 공지사항 제목 선택
          const newsTitleElements = doc.querySelectorAll('.tit');
          const dateElements = doc.querySelectorAll('.date');

          console.log('date', dateElements)


          const data = [];

          newsTitleElements.forEach((nameElement, index) => {
            const newsTitle = nameElement.textContent.trim();
            const anchorElement = nameElement.closest('a'); // 가장 가까운 a 태그 찾기
            const href = anchorElement ? anchorElement.getAttribute('href') : null;
            const date = dateElements[index] ? dateElements[index].textContent.trim() : null;

            data.push({ title: newsTitle, link: href , date:date});
            console.log(data);
          });

          // 상태 업데이트
          setNoticeData(data);
          setIsLoaded(true);

      
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
          <div>
            <p>카트라이더: 드리프트 홈페이지 공지사항입니다.</p>

            <div className='GameRankTable'>
                  {noticeDatas.map((newsData, index) => (
                  <NoticeTile key={index} news = {newsData} index = {index}/>
                ))}
            </div>
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


  function NewsTable({ setKartRank, setKartImg }) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [noticeDatas, setNoticeData] = useState([]);

    // API 호출 함수
    const fetchGameRankings = async () => {
        const query = '카트라이더 드리프트'; // 검색어를 설정합니다
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        const api_url = `https://openapi.naver.com/v1/search/news?query=${encodeURIComponent(query)}`;
        const client_id = 'nnCgbcezBwb4rWRPNkHZ'; // 여기에 네이버 클라이언트 ID를 넣으세요
        const client_secret = 'wclNY9gdA2'; // 여기에 네이버 클라이언트 시크릿을 넣으세요

        try {
            const response = await fetch(proxyUrl+api_url, {
                headers: {
                    'X-Naver-Client-Id': client_id,
                    'X-Naver-Client-Secret': client_secret
                }
            });

            if (response.ok) {
                const data = await response.json();
                console.log('받아온 뉴스',data)
                setNoticeData(data.items); // 데이터의 구조에 따라 적절히 수정할 수 있습니다
                setIsLoaded(true);
            } else {
                console.error('API 호출 실패:', response.status);
            }
        } catch (error) {
            console.error('오류 발생:', error);
        }
    };

    useEffect(() => {
        fetchGameRankings();
    }, []);

    if (isLoaded) {
        return (
            <div>
                <p>네이버 뉴스에서 제공하고 있는 카트라이더: 드리프트 관련 뉴스입니다.</p>

                <div className='GameRankTable'>
                    {noticeDatas.map((newsData, index) => (
                        <NewsTile key={index} news={newsData} index={index} />
                    ))}
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <>Powered by <img src={navernews} alt="Naver News" style={{ width: "100px", marginLeft:"7px"}} /></>
                </div>

            </div>
        );
    } else {
        return (
            <div className='loading'>
                <img src={loading} alt="Loading" style={{ width: '300px' }} />
                <div>데이터를 불러오고 있어요 🔄</div>
            </div>
        );
    }
} 
  
  
  function News() {
    const [activeTab, setActiveTab] = useState('notices'); // 탭 상태를 관리합니다.
    const [kartRank, setKartRank] = useState(false);
    const [kartImg, setKartImg] = useState("");
  
    var gameData = {
      'name': '카트라이더 드리프트',
      'icon': kartImg,
    }
  
    return (
      <div className='tileCss OurGameRank'>
        <h1>최신 소식들을 확인해보세요.</h1>
        
        {/* 탭 버튼들 */}
        <div className='tabs'>
          <button 
            className={activeTab === 'notices' ? 'active' : ''} 
            onClick={() => setActiveTab('notices')} style={{marginRight:'10px'}}>
            공지사항
          </button>
          <button 
            className={activeTab === 'news' ? 'active' : ''} 
            onClick={() => setActiveTab('news')}>
            뉴스
          </button>
        </div>
        
        {/* 탭 내용 */}
        <div className='tab-content'>
          {activeTab === 'notices' && (
              <div>
                <NoticeTable setKartRank={setKartRank} setKartImg={setKartImg} />
              </div>
            )}
          {activeTab === 'news' && (
            <div>
              <NewsTable/>
            </div>
          )}

        </div>
      </div>  
    );
  }

  export default News;