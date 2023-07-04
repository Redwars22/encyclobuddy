import { useState, useEffect } from "react";
import { IContent } from "../../types/types"

export default function ContentArea(props: IContent){
    const [content, setContent] = useState("");

    useEffect(() => {
      async function getArticle() {
        try {
          const content = await fetch(`https://${props.language}.wikipedia.org/api/rest_v1/page/html/${props.url}`);
  
        const res = await content.text();
        document.getElementById("content-area")!.innerHTML = res;
        } catch(err){
          window.alert(err);
        }
      }
  
      getArticle();
    })
    return(
        <div id="content-area" style={{
            height: "calc(100vh - 3rem)",
            maxHeight: "calc(100vh - 5rem)",
            padding: "2.5rem",
            paddingLeft: "5rem",
            paddingRight: "5rem",
            overflow: "auto",
            textAlign: "left",
            fontFamily: props.font,
            fontSize: props.size
        }}></div>
    )
}