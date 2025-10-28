# WD's Website

🔗 [Live Demo](https://azure-sky-code.github.io/react-project/)<br>
`🏗️ 網站仍在建置中，持續更新中`

> 使用 **React + Vite** 建立的個人網站，用於展示作品集與個人資訊。<br>
> 因為喜歡 **寶可夢**，整體設計概念以此為靈感，並結合 **AI 工具** 生成部分素材。

## 功能特色
- 🎨 **RWD 響應式設計** — 兼容桌機與行動裝置  
- ⚡ **Vite 快速開發體驗** — 即時更新與極速編譯  
- 🧪 **Vitest 單元測試** — 提升程式穩定性  
- 🧑‍💻 **TypeScript 型別安全** — 降低維護成本  

## 技術棧
- React 19  
- React Router DOM 7  
- TypeScript  
- Vite 7  
- Vitest 4  
- ESLint 9  

## 開發指令
```bash
# 安裝依賴
npm install

# 開發模式（啟動本地伺服器）
npm run dev

# 建置專案（輸出至 dist/）
npm run build

# 執行單元測試
npm run test

# 程式碼檢查
npm run lint

# 預覽建置結果
npm run preview

# 部署至 GitHub Pages
npm run deploy
```

## 專案結構
```
src/
├── components/           # 共用元件
│   └── NavBar.tsx
├── hooks/                # 自定義 Hooks（含單元測試）
│   ├── useMediaQuery.ts
│   └── useMediaQuery.test.ts
├── pages/                # 頁面元件
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Home.tsx
│   ├── Portfolio.tsx
│   └── portfolio/
│       ├── Work1.tsx
│       ├── Work2.tsx
│       └── Work3.tsx
├── App.tsx               # 主應用程式（路由設定）
├── main.tsx              # 專案入口
├── app.css               # 全域樣式（元件相關）
├── index.css             # 全域樣式（基礎、字體、動畫）
└── vite-env.d.ts         # Vite 型別宣告
```