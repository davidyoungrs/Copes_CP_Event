import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        // Scroll the window to top
        window.scrollTo(0, 0);

        // Also scroll the main content area container if it handles its own scrolling
        const contentArea = document.querySelector('.content-area');
        if (contentArea) {
            contentArea.scrollTo(0, 0);
        }
    }, [pathname]);

    return null;
}
