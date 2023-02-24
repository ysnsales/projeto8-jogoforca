import Jogo from "./Jogo"
import Letras from "./Letras"
import Palavras from "../palavras"
import { useRef, useState } from "react"


let contadorErros = 0;

export default function App() {

    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const imagens = ["assets/forca0.png", "assets/forca1.png", "assets/forca2.png", "assets/forca3.png", "assets/forca4.png", "assets/forca5.png", "assets/forca6.png"]

    const [palavraEscolhida, setPalavraEscolhida] = useState("");
    const [palavraMostrada, setPalavraMostrada] = useState("");
    const [imagensErro, setImagensErro] = useState(imagens[0]);

    const [cor, setcor] = useState("black")
    //const [isDisabled, setIsDisabled] = useState(false);


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
        //setIsDisabled(true);

        if (palavraEscolhida.includes(letra)){
            let indiceLetra  = palavraEscolhida.indexOf(letra);
            setPalavraMostrada(palavraMostrada.slice(palavraMostrada[indiceLetra] = letra));
            

        }else {
            contadorErros = contadorErros + 1;
            console.log("contador= " + contadorErros)

            setImagensErro(imagens[contadorErros])

            if (contadorErros===6){
                setcor("red")
                setPalavraMostrada(palavraEscolhida)
            }
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
            //disabled={isDisabled}
            />
            
        </>
            )
}