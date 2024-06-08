import Button from "../Button/Button";
import FaqQuestion from "../FaqQuestion/FaqQuestion";
import Graduation from "../Graduation/Graduation";
import Identity from "../Identity/Identity";
import SliderAchivements from "../SliderAchivements/SliderAchivements";
import SliderDep from "../SliderDep/SliderDep";
import SloganBar from "../SloganBar/SloganBar";
import SocialMedia from "../SocialMedia/SocialMedia";
import './mainContent.css'

export default function MainContent(){
    return (
        <>
            <main>
                <img src="/img/body-img.png" className="imgBody"></img>

                <SloganBar text="Criando Hoje o seu Amanhã"/>

                <div className="content">

                    <div className="aboutUs">
                        <h2>perfeita para você</h2>
                        <p>Há mais de 22 anos, a Faculdade Única transforma vidas por meio da educação. Com base na ética e na responsabilidade social, com um preço justo e acessível, utilizamos a tecnologia e a inovação para ampliar as possibilidades de ensino de milhares de alunos espalhados por todo o país.</p>
                    </div>
                    <div className="awards">

                        <div className="awardItem">
                            <img src="/img/awardsImg/diploma.png" className="awardImg"/>
                            <p className="textAward">+ de 489 mil Alunos certificados</p>
                        </div>

                        <div className="awardItem">
                            <img src="/img/awardsImg/brasil.png" className="awardImg"/>
                            <p className="textAward">+ de 250 Polos em todo Brasil</p>
                        </div>

                        <div className="awardItem">
                            <img src="/img/awardsImg/curso-online.png" className="awardImg"/>    
                            <p className="textAward">+ de 900 cursos em diversas modalidades de ensino</p>
                        </div>
                    </div>

                    <div className="yourTomorrow">
                        <div className="textTomorrow">
                            <h2>Construa seu amanhã conosco</h2>
                            <p>Com foco em inovação e qualidade, seja nos cursos presenciais ou online, utilizamos as mais modernas tecnologias para uma comunicação mais eficiente e eficaz entre professor e aluno, destinados à formação de profissionais qualificados, capazes de transformar a realidade socioeconômica do país.</p>
                        </div>
                        <div>
                            <img src="/img/notebook-aluno.png" alt="notebbok com aluno" className="notebookImage"/>
                        </div>
                    </div>

                    <div className="achievements">
                        <h2>Abra novas portas para o seu futuro</h2>
                        <SliderAchivements />
                    </div>

                    <div className="containerIdentity">
                        <h2>Mais que educação, uma transformação</h2>
                        <Identity />
                    </div>
                </div>
                <div className="journeys">
                        <h2>Sua jornada é Única</h2>
                        <p>Escolha a melhor modalidade para você</p>
                        <div className="courses">
                            <div className="courseItem item1">
                                <h3>Graduação</h3>

                                <Button name="Saiba Mais"/>
                            </div>
                            <div className="courseItem item2">
                                <h3>Pós Online</h3>

                                <Button name="Saiba Mais"/>
                            </div>
                            <div className="courseItem item3">
                                <h3>Segunda Graduação</h3>

                                <Button name="Saiba Mais"/>
                            </div>
                            <div className="courseItem item4">
                                <h3>Disciplinas Isoladas</h3>

                                <Button name="Saiba Mais"/>
                            </div>
                        </div>
                </div>

                <div className="depoiments">
                <div className="fill">
                        <SliderDep />
                    </div>
                </div>
                <div className="faq">
                    <h2>Perguntas Frequentes</h2>
                    <FaqQuestion name="O que é a Graduação?" />
                    <FaqQuestion name="Como funciona a Graduação EaD?" />
                    <FaqQuestion name="Por que fazer o EaD?" />
                    <FaqQuestion name="Qual faculdade EaD escolher?" />
                    <FaqQuestion name="Qual curso EaD fazer?" />
                    <FaqQuestion name="Quem faz EaD pode fazer mestrado?" />
                    <FaqQuestion name="Quem faz faculdade EaD tem formatura?" />
                </div>

                <Graduation />
                <SocialMedia />
            </main>
        </>
    )
}