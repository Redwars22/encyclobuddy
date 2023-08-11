import React from "react";
import "./leftbar.css";

export default function LeftBar() {
    const [args, setArgs] = React.useState<{
        query: string;
        lang: string;
        fontSize: string;
        fontStyle: string;
        theme:  "light" | "creme" | "dark" | "darkest";
    }>({
        query: "",
        lang: "en",
        fontSize: "1rem",
        fontStyle: "serif",
        theme: "light"
    });

    const changeProperties = (key: "font-size" | "font-style" | "theme", value: string) => {
        if(key === "font-size")
            document.getElementById("content-area")!.style.fontSize = value;
        
        if(key === "font-style")
            document.getElementById("content-area")!.style.fontFamily = value;

        if(key === "theme"){
            switch(value){
                case "light":
                    document.getElementById("content-area")!.style.backgroundColor = "#fff";
                    document.getElementById("content-area")!.style.color = "#474747";
                    break;
                case "creme":
                    document.getElementById("content-area")!.style.backgroundColor = "#feecc8";
                    document.getElementById("content-area")!.style.color = "#474747";
                    break;
                case "dark":
                    document.getElementById("content-area")!.style.backgroundColor = "#0f131c";
                    document.getElementById("content-area")!.style.color = "#fff";
                    break;
                case "darkest":
                    document.getElementById("content-area")!.style.backgroundColor = "#000";
                    document.getElementById("content-area")!.style.color = "#fff";
                    break;
            }   
        }
    }

    return (
        <div className="left-bar">
            <img width="50px" src="https://cdn1.iconfinder.com/data/icons/education-filled-outline-8/64/Education-Filled_17-256.png" />
            <h1 style={{
                fontFamily: "serif",
                color: "lightgrey"
            }}>EncycloBuddy</h1>
            <p style={{
                color: "lightgrey"
            }}>
                An alternative Wikipedia client developed by AndrewNation.
            </p>
            <hr/>
            <div>
                <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Type here to open an article" 
                    value={args.query} 
                    onChange={(e) => setArgs((s)=>({
                        ...s,
                        query: e.target.value
                    }))}
                    />
                <button onClick={() => window.location.href = `https://encyclobuddy.vercel.app/${args.query}&&${args.lang}`}>Search</button>
            </div>
            <hr/>
            <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem"
            }}>
                <select name="" id="" value={args.lang} onChange={(e)=> setArgs((s)=>({
                    ...s,
                    lang: e.target.value
                }))}>
                    <option value="en">English</option>
                    <option value="pt">Português</option>
                    <option value="la">Latina</option>
                </select>
                <select name="" id="" value={args.fontSize} onChange={(e)=>{
                    changeProperties("font-size", e.target.value);
                    setArgs((s)=>({
                        ...s,
                        fontSize: e.target.value
                    }))
                }}>
                    <option value="0.75">0.75rem</option>
                    <option value="1rem">1rem</option>
                    <option value="1.25rem">1.25rem</option>
                    <option value="1.50rem">1.50rem</option>
                    <option value="1.75rem">1.75rem</option>
                    <option value="2rem">2rem</option>
                </select>
                <select name="" id="" value={args.fontStyle} onChange={(e)=>{
                    changeProperties("font-style", e.target.value);
                    setArgs((s)=>({
                        ...s,
                        fontStyle: e.target.value
                    }))
                }}>
                    <option value="serif">Serif</option>
                    <option value="sans-serif">Sans Serif</option>
                    <option value="monospace">Monospace</option>
                </select>
                <select name="" id="" value={args.theme} onChange={(e)=>{
                    changeProperties("theme", e.target.value);
                    setArgs((s)=>({
                        ...s,
                        theme: e.target.value as "light"
                    }))
                }}>
                    <option value="light">Light</option>
                    <option value="creme">Creme</option>
                    <option value="dark">Dark</option>
                    <option value="darkest">Darkest</option>
                </select>
            </div>
            <hr/>
            <div style={{
                color: "darkslategray",
                textDecoration: "none",
                display: "flex",
                gap: "0.5rem",
                justifyContent: "center"
            }}>
                <button onClick={() => 
                    window.location.href = `https://${args.lang}.wiktionary.org/wiki/{args.query}`
                }>
                    <i className="bi bi-eye"></i>
                </button>
                <button onClick={() => 
                    window.location.href = ``
                }>
                    <i className="bi bi-info-circle"></i>
                </button>
                <button onClick={() => 
                    window.location.href = `https://andrewnationdev.vercel.app/docs/projects/encyclobuddy`
                }>
                    <i className="bi bi-question-diamond"></i>
                </button>
            </div>
        </div>
    )
}