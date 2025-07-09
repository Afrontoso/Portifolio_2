import React from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import { AppProvider } from './context/AppContext';

function App() {
  return (
    <AppProvider>
      <div className="container mx-auto p-4 lg:p-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <Sidebar />
          <MainContent />
        </div>
      </div>
    </AppProvider>
  );
}

export default App;