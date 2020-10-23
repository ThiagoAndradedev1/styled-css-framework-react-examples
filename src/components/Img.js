import React from 'react';
import Images from "styled-css-framework-react/core/Images";

const Img = () => {
    return (    
        <div style={{marginTop: "25px", textAlign: "center"}}>
        <h1 style={{ color: "#e53170", paddingBottom: "25px", paddingTop: "25px" }}>Images</h1>
         <h1 style={{  color: "#fff", paddingBottom: "55px" }}>Circular and Rounded</h1>
         <Images src={'https://cdn.meutimao.com.br/_upload/noticia/2020/10/22/mantuan-marca-o-primeiro-gol-do-corinthians-na_j1941w.jpg'} />
         <Images style={{ marginLeft: "15px" }} rounded src={'https://cdn.meutimao.com.br/_upload/noticia/2020/10/22/mantuan-marca-o-primeiro-gol-do-corinthians-na_j1941w.jpg'} />
         <h1 style={{  color: "#fff", paddingTop: "55px" }}>Sizes</h1>
         <h3 style={{  color: "#fff", paddingTop: "35px" }}>Small - Medium - Big - Large</h3>
         <div style={{ paddingTop: "35px", display: "inline-block" }}>
         <Images small src={'https://cdn.meutimao.com.br/_upload/noticia/2020/10/22/mantuan-marca-o-primeiro-gol-do-corinthians-na_j1941w.jpg'} />
         <Images style={{ marginLeft: "45px" }} medium src={'https://cdn.meutimao.com.br/_upload/noticia/2020/10/22/mantuan-marca-o-primeiro-gol-do-corinthians-na_j1941w.jpg'} />
         <Images style={{ marginLeft: "45px" }} big src={'https://cdn.meutimao.com.br/_upload/noticia/2020/10/22/mantuan-marca-o-primeiro-gol-do-corinthians-na_j1941w.jpg'} />
         <Images style={{ marginLeft: "45px" }} large src={'https://cdn.meutimao.com.br/_upload/noticia/2020/10/22/mantuan-marca-o-primeiro-gol-do-corinthians-na_j1941w.jpg'} />
         </div>
        </div>
    )
}

export default Img