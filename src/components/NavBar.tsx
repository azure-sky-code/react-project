import { Link, useLocation } from 'react-router-dom';

function NavBar() {
    const location = useLocation();
    
    const navItems = [
        { path: '/about', label: '關於我' },
        { path: '/portfolio', label: '作品集', isActive: (path: string) => path === '/portfolio' || path.startsWith('/portfolio/') },
        { path: '/contact', label: '聯絡我' }
    ];

    const getActiveClass = (item: any) => {
        const isActive = item.isActive 
            ? item.isActive(location.pathname) 
            : location.pathname === item.path;
        return isActive ? 'active' : '';
    };

    return (
        <nav className="header-nav">
            {navItems.map((item) => (
                <Link 
                    key={item.path}
                    to={item.path} 
                    className={getActiveClass(item)}
                >
                    {item.label}
                </Link>
            ))}
        </nav>
    );
}

export default NavBar;