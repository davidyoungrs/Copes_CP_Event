import { useLocation, useNavigate } from 'react-router-dom';
import { Bell, User, ArrowLeft, Search } from 'lucide-react';

export default function Header() {
    const location = useLocation();
    const navigate = useNavigate();
    const path = location.pathname;

    if (path === '/home') {
        return (
            <header className="app-header home-header flex justify-between items-center w-full">
                <div style={{ width: '24px' }}></div> {/* Spacer for alignment */}
                <div className="actions flex items-center gap-4">
                    <Bell size={24} color="var(--text-secondary)" />
                    <div className="user-avatar flex justify-center items-center" style={{ width: '32px', height: '32px', borderRadius: '50%', border: '2px solid #2D88FF' }}>
                        <User size={18} color="#2D88FF" />
                    </div>
                </div>
            </header>
        );
    }

    if (path === '/schedule') {
        return (
            <header className="app-header schedule-header flex justify-between items-center w-full">
                <div style={{ width: '24px' }}></div> {/* Spacer for alignment */}
                <Bell size={24} color="var(--text-secondary)" />
            </header>
        );
    }

    if (path === '/discover') {
        return (
            <header className="app-header discover-header flex justify-between items-center w-full">
                <div style={{ width: '40px' }}></div> {/* Placeholder for centering */}
                <h1 style={{ fontSize: '1.25rem', margin: 0 }}>Discover Houston</h1>
                <button className="search-btn">
                    <Search size={24} color="var(--text-primary)" />
                </button>
            </header>
        );
    }

    // Fallback
    return (
        <header className="app-header">
            <h1>Celeros App</h1>
        </header>
    );
}
