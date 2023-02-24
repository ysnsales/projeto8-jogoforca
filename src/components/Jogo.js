
export default function Jogo(props){
    
    return (
        <div className="Jogo">
        <img src="assets/forca0.png" alt="forca0" />

        <div>
        <button onClick={props.EscolherPalavra}>Escolher Palavra</button>
        <p>{(props.palavraMostrada)}</p>
        </div>
        </div>
    )
}