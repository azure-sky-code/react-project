import Typewriter from 'typewriter-effect';

function Home() {
    return (
        <div className="home-main" >
            <img src={`${import.meta.env.BASE_URL}home_person.png`} alt="home-page-image" />
            <div className="home-text">
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .typeString('你好，我是 Wendy，是名「前端訓練家」！<br/><br/>')
                            .pauseFor(800)
                            
                            .typeString('歡迎來到我的冒險回憶島，<br/>')
                            .typeString('這裡收藏著我收服的寶可夢與旅程紀錄！<br/><br/>')
                            .pauseFor(800)
                            
                            .typeString('我目前正在尋找新的冒險夥伴，<br/>')
                            .typeString('如果你也正巧在找前端夥伴，<br/>')
                            .typeString('且對我的旅程有興趣，歡迎與我聯絡！')
                            .pauseFor(1000)
                            .callFunction(() => {
                                const cursor = document.querySelector('.Typewriter__cursor');
                                if (cursor) cursor.style.display = 'none';
                            })
                            .start()
                    }}
                />
            </div>
        </div>
    );
}
  
export default Home;