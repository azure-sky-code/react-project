import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/index.css'
import App from '@/App.jsx'

// 根節點掛載 React 18+ 的 root，在嚴格模式下渲染應用
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>
);
