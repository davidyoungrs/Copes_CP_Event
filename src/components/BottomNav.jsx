import { useLocation, useNavigate } from 'react-router-dom';
import { Home, Calendar, Map, User } from 'lucide-react';

export default function BottomNav() {
    const location = useLocation();
    const navigate = useNavigate();

    const navItems = [
        { id: 'home', label: 'Home', icon: Home, path: '/home' },
        { id: 'schedule', label: 'Schedule', icon: Calendar, path: '/schedule' },
        { id: 'discover', label: 'Discover', icon: Map, path: '/discover' },
        { id: 'profile', label: 'Profile', icon: User, path: '/profile' }
    ];

    return (
        <nav className="bottom-nav flex justify-between items-center w-full">
            {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                    <button
                        key={item.id}
                        className={`nav-item flex flex-col items-center justify-center ${isActive ? 'active' : ''}`}
                        onClick={() => navigate(item.path)}
                    >
                        <item.icon size={24} className="nav-icon" />
                        <span className="nav-label">{item.label}</span>
                    </button>
                );
            })}
        </nav>
    );
}
