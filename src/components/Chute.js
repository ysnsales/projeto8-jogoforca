export default function Chute(props){
    return (
        <div className="Chute">
        <p>Já sei a palavra</p>
        <input disabled={props.disabled} className="input" onChange={chute => props.Chutar(chute)} ></input>
        <button onClick={props.EnviarChute}>Chutar</button>
        </div>
    )

}
