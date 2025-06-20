import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import WebcamView from './components/WebcamView';
import History from './pages/History';

// Main App component that handles routing and layout
function App() {
  return (
    <>
      <BrowserRouter>
        {/* Navigation Bar */}
        <nav className='bg-green-500 text-white p-4 flex justify-between'>
          <Link to="/" className='font-bold'>Emotion-Based Music Recommender</Link>
          <Link to="/history">History</Link>
        </nav>

        {/* App Routes */}
        <Routes>
          <Route path='/' element={<WebcamView />} />
          <Route path='/history' element={<History />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;