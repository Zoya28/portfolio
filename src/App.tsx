import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { ProjectDetail } from './components/ProjectDetail';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import { ScrollManagerProvider } from './components/ScrollManager';

const App = () => {
  return (
    <ScrollManagerProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={
              <div className="min-h-screen bg-black text-white overflow-x-hidden">
                <Navigation />
                <Hero />
                <About />
                <Projects />
                <Experience />
                <Contact />
                <footer className="py-6 px-4 border-t-2 border-purple-500/30 bg-black">
                  <div className="max-w-7xl mx-auto text-center">
                    <p className="text-cyan-400 font-mono text-xs mt-2">
                      © 2025 Zoya Qureshi.ALL RIGHTS ARE RESERVED.
                    </p>
                  </div>
                </footer>
              </div>
            }
          />
          <Route path="/projects/:id" element={<ProjectDetail />} />
        </Routes>
      </Router>
    </ScrollManagerProvider>
  );
};

export default App;
