import Typewriter from 'typewriter-effect';
import { useMediaQuery } from '@/hooks/useMediaQuery';

function Home() {
    const baseWidth = useMediaQuery('(min-width: 641px)');
    const mediumWidth = useMediaQuery('(min-width: 769px)');
    const largeWidth = useMediaQuery('(min-width: 1025px)');

    const getContent = (): string => `
        你好，我是 Wendy，${!largeWidth ? '<br>' : ''}
        是名「前端訓練家」！<br><br>
        歡迎來到我的冒險回憶島，<br>
        這裡收藏著${!largeWidth ? '<br>' : ''}我收服的寶可夢與旅程紀錄！<br><br>
        我目前正在尋找新的冒險夥伴，<br>
        如果你也正巧在找前端夥伴，<br>
        且對我的旅程有興趣，${!baseWidth ? '<br>' : ''}歡迎與我聯絡！
    `.trim();

    const getSegments = (text: string): string[] =>
        text
          .split(/<br><br>\s*/i)
          .map((s) => s.trim())
          .filter(Boolean);
    
    const content = getContent();
    const segments = getSegments(content);

    const handleTypewriter = (typewriter: any) => {
        let chain = typewriter;

        if (!mediumWidth) {
            segments.forEach((segment, i) => {
                const isLast = i === segments.length - 1;
                chain = chain.typeString(segment);
                chain = isLast
                    ? chain.pauseFor(2000)
                    : chain.pauseFor(1500).deleteAll(100);
            });
        } else {
            chain = chain.typeString(content);
        }

        chain
            .callFunction(() => {
            const cursor = document.querySelector('.Typewriter__cursor') as HTMLElement | null;
                if (cursor) cursor.style.display = 'none';
            })
            .start();
    };

    return (
        <div className="home-main" >
            <div className="home-text">
                <Typewriter onInit={handleTypewriter} />
            </div>
            <img
                src={`${import.meta.env.BASE_URL}home_person.png`}
                alt="home-page-image"
            />
        </div>
    );
}
  
export default Home;
