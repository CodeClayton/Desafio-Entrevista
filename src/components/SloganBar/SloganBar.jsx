import './sloganBar.css'

export default function SloganBar(props){
    return(
        <>
            <div className='sloganBar'>
                <h2>{props.text}</h2>
            </div>
            
        </>
    )
}