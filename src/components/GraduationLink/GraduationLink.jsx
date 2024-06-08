import './linkGraduation.css'

export default function GraduationLink(props){
    return(
        <>
            <a href={props.link} className="linkGraduation">{props.name}</a>
        </>
    )
}