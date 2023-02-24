
export default function Jogo(props){
    
    return (
        <div className="Jogo">
        <img src={props.imagensErro} alt={props.imagensErro} />

        <div>
        <button onClick={props.EscolherPalavra}>Escolher Palavra</button>
        <p style={{color:props.cor}}>{(props.palavraMostrada) }</p>
        </div>
        </div>
    )
}