export default function Letras(props) {
    return (
        <div className="Letras">
            {props.alfabeto.map((letra) => <button data-test="letter" 
            key={letra} 
            disabled={props.letrasClicadas.includes(letra)}
            onClick={() => props.ConfereLetra(letra)}
            >{letra.toUpperCase()}
            </button>)}
        </div>
    )
}