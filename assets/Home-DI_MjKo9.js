const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/react-CXPRs1FJ.js","assets/index-DMUKw7bp.js","assets/index-DlUup_MI.css"])))=>i.map(i=>d[i]);
import{r as c,j as r,_ as w}from"./index-DMUKw7bp.js";function h(i){const d=()=>typeof window<"u"&&"matchMedia"in window?window.matchMedia(i).matches:!1,[s,m]=c.useState(d);return c.useEffect(()=>{if(typeof window>"u"||!("matchMedia"in window))return;const t=window.matchMedia(i),n=o=>m(o?.matches??t.matches);if(n(),typeof t.addEventListener=="function")return t.addEventListener("change",n),()=>t.removeEventListener("change",n);if(typeof t.addListener=="function")return t.addListener(n),()=>t.removeListener(n)},[i]),s}const g=c.lazy(()=>w(()=>import("./react-CXPRs1FJ.js").then(i=>i.r),__vite__mapDeps([0,1,2])));function y(){const i=h("(min-width: 641px)"),d=h("(min-width: 769px)"),s=h("(min-width: 1025px)"),m=()=>`
        你好，我是 Wendy，${s?"":"<br>"}
        是名「前端訓練家」！<br><br>
        歡迎來到我的冒險回憶島，<br>
        這裡收藏著${s?"":"<br>"}我收服的寶可夢與旅程紀錄！<br><br>
        我目前正在尋找新的冒險夥伴，<br>
        如果你也正巧在找前端夥伴，<br>
        且對我的旅程有興趣，${i?"":"<br>"}歡迎與我聯絡！
    `.trim(),t=l=>l.split(/<br><br>\s*/i).map(e=>e.trim()).filter(Boolean),n=m(),o=t(n),p=l=>{let e=l;d?e=e.typeString(n):o.forEach((a,u)=>{const f=u===o.length-1;e=e.typeString(a),e=f?e.pauseFor(2e3):e.pauseFor(1500).deleteAll(100)}),e.callFunction(()=>{const a=document.querySelector(".Typewriter__cursor");a&&(a.style.display="none")}).start()};return r.jsxs("div",{className:"home-main",children:[r.jsx("div",{className:"home-text",children:r.jsx(c.Suspense,{fallback:null,children:r.jsx(g,{onInit:p})})}),r.jsx("img",{loading:"lazy",src:"/react-project/home_person.png",alt:"home-page-image"})]})}export{y as default};
