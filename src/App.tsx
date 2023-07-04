import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import LeftBar from './components/LeftBar/LeftBar';
import ContentArea from './components/ContentArea/ContentArea';

function App() {
  return (
    <div className="App" style={{
      display: "grid",
      gridTemplateColumns: open ? "20% 80%" : "100%"
    }}>
      <LeftBar />
        <ContentArea url={'Aranha'} font={'monospace'} size={'1rem'} theme={'light'} />
    </div>
  );
}

export default App;

/*
{open ? "✖" : "➕"}
        <div><button onClick={() => {
          setOpen(!open)
        }}>
*/
