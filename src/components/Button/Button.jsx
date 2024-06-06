import './button.css'

export default function Button(props){
    return(
        <button 
        className="buttonLink"
        onClick={props.onClick}>
            {props.name}
        </button>
    )
}