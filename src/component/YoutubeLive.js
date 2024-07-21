import React, { useEffect, useState } from 'react';
import '../App.css';

import logo from '../img/logo.png'
import loading from '../img/진행중.gif'


function VideoTile({video}){

  const videolink = "https://www.youtube.com/watch?v=" + video.videoId;
  console.log(videolink)

  const handleButtonClick = () => {
    window.open(videolink, '_blank');
};

  return(
    <div>
    <div className='VideoTile' onClick={handleButtonClick}>
      <div className='thumbnail'>
        <img src={video.thumbnails.high} style={{width:'100%', maxHeight:'400px'}}></img>
      </div>
      <div className='videoinfo'>
        <div className='videoTitle'>
          {video.title}
        </div>
        <div className='videoUploader'>
          {video.channelTitle} | {video.publishedAt}
        </div>

      </div>
    </div>
    </div>
  )
}


function YoutubeTable() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [youtubeVideos, setGameNames] = useState([]);
  
    async function fetchGameRankings() {
      try {
          // API 요청 URL
          const apiUrl = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=%EC%B9%B4%ED%8A%B8%EB%9D%BC%EC%9D%B4%EB%8D%94&key=AIzaSyBlbFCuZUA3cRZbZhqAU4TOoWSFnYFoSbM';
  
          // 데이터를 받아오는 함수
          async function fetchYouTubeData(url) {
              try {
                  const response = await fetch(url);
                  if (!response.ok) {
                      throw new Error('Network response was not ok ' + response.statusText);
                  }
                  const data = await response.json();
                  return data;
              } catch (error) {
                  console.error('There has been a problem with your fetch operation:', error);
              }
          }
  
          // 필요한 정보를 추출하는 함수  
          function extractTitlesAndThumbnails(response) {
              if (response && response.items && response.items.length > 0) {
                  return response.items.map(item => {
                      const { title, thumbnails, channelTitle, publishedAt } = item.snippet;
                      const videoId = item.id.videoId;
                      return {
                          title,
                          thumbnails: {
                              default: thumbnails.default.url,
                              medium: thumbnails.medium.url,
                              high: thumbnails.high.url
                          },
                          channelTitle,
                          publishedAt,
                          videoId,
                      };
                  });
              }
              return [];
          }
  
          // 데이터 요청 및 제목과 썸네일 추출
          async function main() {
              const data = await fetchYouTubeData(apiUrl);
              const titlesAndThumbnails = extractTitlesAndThumbnails(data);
              console.log(titlesAndThumbnails);
  
                    // 상태 업데이트
              setGameNames(titlesAndThumbnails);
              setIsLoaded(true);
          }
  
          // 함수 호출
          main();
  
    
      } catch (error) {
        console.error('Error fetching youtube videos:', error);
        return [];
      }
    }
  
    useEffect(() => {
      fetchGameRankings();
  
    },[]);
  
    if (isLoaded) {
      return (
        <div className='YoutubeTable'>
            {youtubeVideos.map((video, index) => (
              <VideoTile key={index} video = {video}/>
            ))}
        </div>  
      );
    } else {
      return(
        <div className='loading'>
          <img src={loading} style={{width:'300px'}}></img>
          <div>유튜브에서 볼 거리 가져오는 중 📺🎥</div>
      </div>
      )
    }
  }


  
  function YoutubeLive(){
    const [kartRank, setKartRank] = useState(false);
  
    return(
      <div className='tileCss OurGameRank'>
        <h2>
          최신 유튜브 영상을 만나보세요
        </h2>
        <p>현재 유튜브에 업로드된 카트라이더 드리프트 관련 최신 영상입니다.</p>
        <div>
          <YoutubeTable/>
        </div>
      </div>
    )
  }
  

  export default YoutubeLive;