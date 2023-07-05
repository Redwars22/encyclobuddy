import React from "react";

export default function LeftBar() {
    const [args, setArgs] = React.useState<{
        query: string;
        lang: string;
        fontSize: string;
        fontStyle: string;
        theme:  "light" | "creme" | "dark" | "darkest";
    }>({
        query: "",
        lang: "",
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
        <div style={{
            backgroundColor: "#d6d6d6",
            height: "calc(100vh - 2rem)",
            padding: "1rem"
        }}>
            <img width="50px" src="https://cdn1.iconfinder.com/data/icons/education-filled-outline-8/64/Education-Filled_17-256.png" />
            <h1 style={{
                fontFamily: "serif",
                color: "#5e5e5e"
            }}>EncycloBuddy</h1>
            <p>
                An alternative Wikipedia client developed by AndrewNation.
            </p>
            <hr/>
            <div>
                <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Digite o título do artigo" 
                    value={args.query} 
                    onChange={(e) => setArgs((s)=>({
                        ...s,
                        query: e.target.value
                    }))}
                    />
                <button onClick={() => window.location.href = `https://encyclobuddy.vercel.app/${args.query}&&${args.lang}`}>Pesquisar</button>
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
                flexDirection: "column",
                gap: "0.5rem"
            }}>
            <a href="http://">Ver Original</a>
            <a href="">Sobre</a>
            <a href="https://andrewnationdev.vercel.app/docs/projects/encyclobuddy">Ajuda</a>
            </div>
        </div>
    )
}