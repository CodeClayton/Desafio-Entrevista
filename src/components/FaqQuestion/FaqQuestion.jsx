import './faqQuestion.css'

export default function FaqQuestion(props){
    return(
        <>
        <div className="faqItem">
            <p className="textFaq">{props.name}</p>
            <i className="bi bi-x-square"></i>
        </div>
        </>
    )
}