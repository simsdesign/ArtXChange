import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { Submit } from './pages/Submit';
import { Gallery } from './pages/Gallery';
import { Artists } from './pages/Artists';
import { LEDDisplays } from './pages/LEDDisplays';
import { Guidelines } from './pages/Guidelines';
import { Advertisement } from './pages/Advertisement';
import { Events } from './pages/Events';
import { Newsletter } from './pages/Newsletter';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { Accessibility } from './pages/Accessibility';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import { Enforcement } from './pages/Enforcement';
import { Dashboard } from './pages/Dashboard';
import { Profile } from './pages/Profile';
import { AccountTypes } from './pages/AccountTypes';
import { GraffitiMap } from './pages/GraffitiMurals';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/submit" element={<Submit />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/artists" element={<Artists />} />
            <Route path="/displays" element={<LEDDisplays />} />
            <Route path="/guidelines" element={<Guidelines />} />
            <Route path="/advertisement" element={<Advertisement />} />
            <Route path="/events" element={<Events />} />
            <Route path="/newsletter" element={<Newsletter />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/accessibility" element={<Accessibility />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/enforcement" element={<Enforcement />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/account-types" element={<AccountTypes />} />
            <Route path="/graffiti-map" element={<GraffitiMap />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;