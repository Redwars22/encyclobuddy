import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import LeftBar from './components/LeftBar/LeftBar';
import ContentArea from './components/ContentArea/ContentArea';

function App() {
  const [open, setOpen] = useState<boolean>(true);
  return (
    <div className="App" style={{
      display: "grid",
      gridTemplateColumns: open ? "20% 80%" : "100%"
    }}>
      {open && <LeftBar />}
      <div>
        <div><button onClick={() => {
          setOpen(!open)
        }}>
          {open ? "✖" : "➕"}
        </button></div>
        <ContentArea url={'Aranha'} font={'monospace'} size={'2rem'} theme={'light'} />
      </div>
    </div>
  );
}

export default App;
