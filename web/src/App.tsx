import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import React, { Suspense } from 'react';
const Projects = React.lazy(() => import('./pages/Projects'));
const Resume = React.lazy(() => import('./pages/Resume'));
import './i18n';
import { AuthProvider } from './services/authContext';
import { ThemeProvider } from './services/themeContext';
import Header from './components/Header';

function App() {
  return (
    <ThemeProvider>
        <AuthProvider>
          <Router>
            <Header />
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/resume" element={<Resume />} />
              </Routes>
            </Suspense>
          </Router>
        </AuthProvider>
      </ThemeProvider>
  );
}

export default App;
