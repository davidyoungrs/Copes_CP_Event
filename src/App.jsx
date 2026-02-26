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
          </Routes>
        </main>
        <BottomNav />
      </div>
    </Router>
  );
}

export default App;
