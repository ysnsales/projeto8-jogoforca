import Jogo from "./Jogo"
import Letras from "./Letras"
import Palavras from "../palavras"
import { useRef, useState } from "react"


export default function App() {

    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const imagens = ["assets/forca0.png", "assets/forca1.png", "assets/forca2.png", "assets/forca3.png", "assets/forca4.png", "assets/forca5.png", "assets/forca6.png"]

    const [palavraEscolhida, setPalavraEscolhida] = useState("");
    const [palavraMostrada, setPalavraMostrada] = useState("");
    const [imagensErro, setImagensErro] = useState(imagens[0]);
    const [contadorErro, setContadorErro] = useState(0)

    const [letrasClicadas, setLetrasClicadas] = useState([])

    const [cor, setcor] = useState("black")
    

    function EscolherPalavra (){
        
        const randomIndex = Math.floor(Math.random() * Palavras.length);
        let novaPalavra = (Palavras[randomIndex]);
        setPalavraEscolhida(novaPalavra);
        setPalavraMostrada((novaPalavra.split("")).map(() => "_ "));
        
    }

    console.log(palavraEscolhida)
    console.log(palavraMostrada)

    function ConfereLetra(letra){
        console.log(letra)
        
        setLetrasClicadas([...letrasClicadas, letra])
        console.log(letrasClicadas)
        console.log(letrasClicadas.length)
        console.log(palavraEscolhida.length)
        console.log(palavraMostrada.join(''))

        if (palavraEscolhida.includes(letra)){
            for (let i=0; i<palavraEscolhida.length; i++) {
                if (palavraEscolhida[i]===letra){
                    setPalavraMostrada(palavraMostrada.slice(palavraMostrada[i] = letra));
        }}

        }else {
            setContadorErro(contadorErro + 1);
            console.log("contador= " + contadorErro)
            setImagensErro(imagens[contadorErro+1])
        }

        FimDeJogo();

    }

    function FimDeJogo(){
            if (contadorErro===5){
                setcor("red")
                setPalavraMostrada(palavraEscolhida)
            }else if (palavraMostrada.join('')===palavraEscolhida){
                setcor("green");
                setPalavraMostrada(palavraEscolhida);
            }

    }

    return (
        <>
            <Jogo EscolherPalavra={EscolherPalavra}
             palavraMostrada={palavraMostrada} 
             imagensErro={imagensErro}
             cor={cor}/>

            <Letras ConfereLetra={ConfereLetra} 
            alfabeto={alfabeto}
            letrasClicadas={letrasClicadas}
            />
            
        </>
            )
}