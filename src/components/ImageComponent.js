import React from 'react';
import Image from "styled-css-framework-react/core/Images";

const ImageComponent = () => {
    return (    
        <div style={{marginTop: "25px", textAlign: "center"}}>
        <h1 style={{ color: "#e53170", paddingBottom: "25px", paddingTop: "25px" }}>Images</h1>
         <h1 style={{  color: "#fff", paddingBottom: "55px" }}>Circular and Rounded</h1>
         <Image src={'https://cdn.meutimao.com.br/_upload/noticia/2020/10/22/mantuan-marca-o-primeiro-gol-do-corinthians-na_j1941w.jpg'} />
         <Image style={{ marginLeft: "15px" }} rounded src={'https://cdn.meutimao.com.br/_upload/noticia/2020/10/22/mantuan-marca-o-primeiro-gol-do-corinthians-na_j1941w.jpg'} />
         <h1 style={{  color: "#fff", paddingTop: "55px" }}>Sizes</h1>
         <h3 style={{  color: "#fff", paddingTop: "35px" }}>Small - Medium - Big - Large</h3>
         <div style={{ paddingTop: "35px", display: "inline-block" }}>
         <Image small src={'https://cdn.meutimao.com.br/_upload/noticia/2020/10/22/mantuan-marca-o-primeiro-gol-do-corinthians-na_j1941w.jpg'} />
         <Image style={{ marginLeft: "5px" }} medium src={'https://cdn.meutimao.com.br/_upload/noticia/2020/10/22/mantuan-marca-o-primeiro-gol-do-corinthians-na_j1941w.jpg'} />
         <Image style={{ marginLeft: "5px" }} big src={'https://cdn.meutimao.com.br/_upload/noticia/2020/10/22/mantuan-marca-o-primeiro-gol-do-corinthians-na_j1941w.jpg'} />
         <Image style={{ marginLeft: "5px" }} large src={'https://cdn.meutimao.com.br/_upload/noticia/2020/10/22/mantuan-marca-o-primeiro-gol-do-corinthians-na_j1941w.jpg'} />
         </div>
        </div>
    )
}

export default ImageComponent