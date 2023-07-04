import React from "react";

export default function LeftBar() {
    const [args, setArgs] = React.useState<{
        query: string;
        lang: string
    }>({
        query: "",
        lang: ""
    });

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
            <hr>
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
            <hr>
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
                <select name="" id="" value="1rem">
                    <option value="">0.75rem</option>
                    <option value="1rem">1rem</option>
                    <option value="">1.25rem</option>
                    <option value="">1.50rem</option>
                    <option value="">1.75rem</option>
                    <option value="">2rem</option>
                </select>
                <select name="" id="" value="sans-serif">
                    <option value="serif">Serif</option>
                    <option value="sans-serif">Sans Serif</option>
                    <option value="monospace">Monospace</option>
                </select>
            </div>
            <hr>
            <div style={{
                color: "darkslategray",
                textDecoration: "none",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem"
            }}>
            <a href="http://">Ver Original</a>
            <a href="http://">Sobre</a>
            <a href="http://">Ajuda</a>
            </div>
        </div>
    )
}