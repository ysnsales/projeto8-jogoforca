import { useState } from "react"
import Palavras from "./Palavras"

export default function Jogo(){

    const randomIndex = Math.floor(Math.random() * Palavras.length);
    const randomPalavra = Palavras[randomIndex];
    console.log(randomPalavra)

    const [palavraEscolhida, setPalavraEscolhida] = useState("")
    function EscolherPalavra (){

        setPalavraEscolhida((randomPalavra.split("")).map(() => "_ "))
        
    }
    
    return (
        <div class="Jogo">
        <img src="assets/forca0.png" alt="forca0" />

        <div>
        <button onClick={EscolherPalavra}>Escolher Palavra</button>
        <p>{palavraEscolhida}</p>
        </div>
        </div>
    )
}