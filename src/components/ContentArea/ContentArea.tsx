import { useState, useEffect } from "react";
import { IContent } from "../../types/types";
import "./contentarea.css";

export default function ContentArea(props: IContent){
    const [content, setContent] = useState("");
    const [hasFailed, setHasFailed] = useState<boolean>(false);

    useEffect(() => {
      async function getArticle() {
        try {
          const content = await fetch(`https://${props.language}.wikipedia.org/api/rest_v1/page/html/${props.url}`);
  
        const res = await content.text();
        document.getElementById("content-area")!.innerHTML = res;
        } catch(err){
          setHasFailed(true);
        }
      }
  
      getArticle();
    })
    
    return(
        <div id="content-area" className="content-area" style={{
            fontFamily: props.font,
            fontSize: props.size
        }}>
          {hasFailed && <div className="error-page">
            <span style={{
              fontSize: "10rem",
              color: "red"
            }}>
              <i className="bi bi-emoji-frown"></i>
            </span>
            <h2>There was en error while fetching the article</h2>
            <p>Please make sure the article exists.</p>
            <p>If you haven't searched for one yet, use the search bar on the left of this page.</p>
          </div>}
        </div>
    )
}