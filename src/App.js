import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IntroAnimation from "./components/IntroAnimation";
import SelectionScreen from "./components/SelectionScreen";
import ProfileSelector from "./components/ProfileSelector";
import DomainDashboard from "./components/DomainDashboard";
import AboutMe from "./components/AboutMe";
import Navigation from "./components/Navigation";
import ContactCenter from "./components/ContactCenter";

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [currentView, setCurrentView] = useState('selection'); // 'selection', 'portfolio', 'about', 'profiles', 'domain', 'contact'
  const [selectedDomain, setSelectedDomain] = useState(null);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  const handleSelectOption = (option) => {
    if (option === 'portfolio') {
      setCurrentView('profiles');
    } else if (option === 'about') {
      setCurrentView('about');
    } else if (option === 'contact') {
      setCurrentView('contact');
    }
  };

  const handleSelectDomain = (domain) => {
    setSelectedDomain(domain);
    setCurrentView('domain');
  };

  const handleBackToProfiles = () => {
    setCurrentView('profiles');
    setSelectedDomain(null);
  };

  const handleBackToSelection = () => {
    setCurrentView('selection');
    setSelectedDomain(null);
  };

  const handleNavigateToContact = () => {
    setCurrentView('contact');
  };

  const handleNavigateHome = () => {
    setCurrentView('selection');
    setSelectedDomain(null);
  };

  if (showIntro) {
    return <IntroAnimation onComplete={handleIntroComplete} />;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <div className="relative">
          {/* Only show navigation on certain screens */}
          {(currentView !== 'selection') && (
            <Navigation 
              onNavigateHome={handleNavigateHome}
              onNavigateContact={handleNavigateToContact}
              currentView={currentView}
            />
          )}
          
          {currentView === 'selection' && (
            <SelectionScreen onSelectOption={handleSelectOption} />
          )}
          
          {currentView === 'about' && (
            <AboutMe onBack={handleBackToSelection} />
          )}
          
          {currentView === 'profiles' && (
            <ProfileSelector onSelectDomain={handleSelectDomain} />
          )}
          
          {currentView === 'domain' && selectedDomain && (
            <DomainDashboard 
              domain={selectedDomain} 
              onBack={handleBackToProfiles} 
            />
          )}
          
          {currentView === 'contact' && (
            <ContactCenter onBack={handleBackToSelection} />
          )}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
