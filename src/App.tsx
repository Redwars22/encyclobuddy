import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import LeftBar from './components/LeftBar/LeftBar';
import ContentArea from './components/ContentArea/ContentArea';

function App() {
  const getURLParams = () => {
    const URL = window.location;
    const URLParams = window.location.split("/");

    if (URLParams.length > 0) {
      const params = URLParams[1].split("&&");

      return {
        article: params[0],
        lang: params[1]
      }
    }

    return {
      article: "Aranha",
      lang: "pt"
    };
  }

  const URLParams = getURLParams();

  return (
    <div className="App" style={{
      display: "grid",
      gridTemplateColumns: "20% 80%"
    }}>
      <LeftBar />
      <ContentArea 
        url={URLParams.article} 
        font={'monospace'} 
        size={'1rem'} 
        theme={'light'} 
        language={URLParams.lang} />
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
