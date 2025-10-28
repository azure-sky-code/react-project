import React from 'react';

interface ComingSoonProps {
    image?: string;
    message?: string;
}

const ComingSoon: React.FC<ComingSoonProps> = ({ 
    image = `${import.meta.env.BASE_URL}/wait.png`, 
    message = '此頁面建置中，敬請期待！' 
}) => {
    return (
        <div className="coming-soon">
            <img loading="lazy" src={image} alt="建置中" />
            <p>{message}</p>
        </div>
    );
};

export default ComingSoon;