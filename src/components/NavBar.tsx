import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav className="header-nav">
            <Link to="/about">關於我</Link>
            <Link to="/portfolio">作品集</Link>
            <Link to="/contact">聯絡我</Link>
        </nav>
    );
}

export default NavBar;
