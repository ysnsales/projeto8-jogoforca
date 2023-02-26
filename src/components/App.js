import Jogo from "./Jogo"
import Letras from "./Letras"
import Palavras from "../palavras"
import Chute from "./Chute"
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
    const [disabled, setdisabled] = useState(true)
    const [chute, setChute] = useState("");
    
    function EscolherPalavra() {
        const randomIndex = Math.floor(Math.random() * Palavras.length);
        let novaPalavra = (Palavras[randomIndex]);
        setPalavraEscolhida(novaPalavra);
        setPalavraMostrada((novaPalavra.split("")).map(() => " _ "));
        setdisabled(false)

        setImagensErro(imagens[0])
        setContadorErro(0)
        setLetrasClicadas([])
        setcor("black")
        setChute("")
        document.querySelector('.input').value='';

    }


    function ConfereLetra(letra) {
        console.log(palavraEscolhida)
        setLetrasClicadas([...letrasClicadas, letra])

        if (palavraEscolhida.includes(letra)) {
            for (let i = 0; i < palavraEscolhida.length; i++) {
                if (palavraEscolhida[i] === letra) {
                    setPalavraMostrada(palavraMostrada.slice(palavraMostrada[i] = letra));
                }
            }

        } else {
            setImagensErro(imagens[contadorErro + 1])
            setContadorErro(contadorErro + 1);
        }

        FimDeJogo();

    }

    function FimDeJogo() {
        if (contadorErro === 5) {
            setcor("red")
            setPalavraMostrada(palavraEscolhida)
            setdisabled(true)
        } else if (palavraMostrada.join('') === palavraEscolhida) {
            setcor("green");
            setPalavraMostrada(palavraEscolhida);
            setdisabled(true)
        }

    }

    function Chutar(chute) {
        setChute(chute.target.value);

    }

    function EnviarChute () {
        if (chute===palavraEscolhida) {
            setcor("green");
            setPalavraMostrada(palavraEscolhida);
            setdisabled(true)
        }else {
            setImagensErro(imagens[6])
            setcor("red")
            setPalavraMostrada(palavraEscolhida)
            setdisabled(true)

        }
        
    }

    return (
        <>
            <Jogo EscolherPalavra={EscolherPalavra}
                palavraMostrada={palavraMostrada}
                imagensErro={imagensErro}
                cor={cor} />

            <Letras ConfereLetra={ConfereLetra}
                alfabeto={alfabeto}
                letrasClicadas={letrasClicadas}
                disabled={disabled} />

            <Chute Chutar={Chutar}
                EnviarChute={EnviarChute}
                disabled={disabled}/>

        </>
    )
}