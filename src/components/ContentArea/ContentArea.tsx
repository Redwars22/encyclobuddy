import { useState, useEffect } from "react";
import { IContent } from "../../types/types"

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
        }}>
          {hasFailed && <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent:"center"
          }}>
            <span style={{
              fontSize: "10rem"
            }}>😕</span>
            <h2>There was en error while fetching the article</h2>
            <p>Please make sure the article exists. If you haven't searched for one yet, use the search bar on the left of this page.</p>
          </div>}
        </div>
    )
}