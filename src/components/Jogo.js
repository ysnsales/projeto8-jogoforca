export default function Jogo(props){    
    return (
        <div className="Jogo">
        <img data-test="game-image" src={props.imagensErro} alt={props.imagensErro} />

        <div>
        <button data-test="choose-word" onClick={props.EscolherPalavra}>Escolher Palavra</button>
        <p data-test="word" style={{color:props.cor}}>{(props.palavraMostrada) }</p>
        </div>
        </div>
    )
}