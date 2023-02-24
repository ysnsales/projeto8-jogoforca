import Jogo from "./Jogo"
import Letras from "./Letras"
import Palavras from "../palavras"
import { useRef, useState } from "react"

export default function App() {

    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    const [palavraEscolhida, setPalavraEscolhida] = useState("")
    const [palavraMostrada, setPalavraMostrada] = useState("")

    

    function EscolherPalavra (){
        
        const randomIndex = Math.floor(Math.random() * Palavras.length);
        let novaPalavra = (Palavras[randomIndex]);
        setPalavraEscolhida(novaPalavra)
        setPalavraMostrada((novaPalavra.split("")).map(() => "_ "))

        console.log(randomIndex)
        
    }

    console.log(palavraEscolhida)
    console.log(palavraMostrada)

    function ConfereLetra(letra){
        console.log(letra);
        if (palavraEscolhida.includes(letra)){
            let indiceLetra  = palavraEscolhida.indexOf(letra);
            //let trocarLetra = (palavraMostrada[indiceLetra]);
            //setPalavraMostrada(palavraMostrada[indiceLetra] = letra);
            //palavraMostrada[indiceLetra] = letra

            setPalavraMostrada(palavraMostrada.splice(palavraMostrada[indiceLetra] = letra));
            //console.log("letra" + trocarLetra)
        }

    }

    return (
        <>
            <Jogo EscolherPalavra={EscolherPalavra} palavraEscolhida={palavraEscolhida} palavraMostrada={palavraMostrada} />
            <Letras ConfereLetra={ConfereLetra} alfabeto={alfabeto}/>
            
        </>
            )
}