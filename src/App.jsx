import React from 'react';
//import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import RightSidebar from './components/RightSidebar';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <Navbar /> */}
      <div className="flex flex-1">
        <RightSidebar />
        <MainContent />
        <Sidebar />
        
      </div>
    </div>
  );
}

export default App;
