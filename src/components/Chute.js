export default function Chute(props){
    return (
        <div className="Chute">
        <p>Já sei a palavra</p>
        <input data-test="guess-input" disabled={props.disabled} className="input" onChange={chute => props.Chutar(chute)} ></input>
        <button data-test="guess-button" onClick={props.EnviarChute}>Chutar</button>
        </div>
    )

}
