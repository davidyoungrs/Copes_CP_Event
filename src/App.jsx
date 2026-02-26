import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import HomeScreen from './screens/HomeScreen';
import ScheduleScreen from './screens/ScheduleScreen';
import DiscoverScreen from './screens/DiscoverScreen';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="content-area">
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<HomeScreen />} />
            <Route path="/schedule" element={<ScheduleScreen />} />
            <Route path="/discover" element={<DiscoverScreen />} />
            {/* Fallback for unbuilt screens like Profile */}
            <Route path="/profile" element={
              <div style={{ padding: '2rem', textAlign: 'center' }}>
                <h2>Profile Concept</h2>
                <p style={{ color: 'var(--text-secondary)' }}>Coming soon...</p>
              </div>
            } />
          </Routes>
        </main>
        <BottomNav />
      </div>
    </Router>
  );
}

export default App;
