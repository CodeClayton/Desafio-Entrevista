import './socialMedia.css'

export default function SocialMedia(){
    return(
        <>
            <div className="socialMedia">
                <div className="social">
                    <h3>Siga nossa faculdade:</h3>
                    <div className="containerIcons">
                        <i className="bi bi-facebook"></i>
                        <i className="bi bi-instagram"></i>
                        <i className="bi bi-youtube"></i>
                    </div>
                </div>
                <div className="downloadApp">
                    <h3>Baixe nosso App:</h3>
                    <div className="containerApps">
                        <img src="/img/app/googlePlay.png" alt="Link Google Play" className='appGooglePlay' />
                        <img src="/img/app/IosStore.png" alt="Link IOS Store" className='appIosStore'/>
                    </div>
                </div>
                <div className="mecVerification">
                    <h3>Consulte aqui o cadastro da instituição no Sistema e-MEC</h3>
                    <img src="/img/consulta-cadastro.png" alt="qr code consulta e-MEC" className='mecVerifyImg'/>
                </div>
            </div>
            <div className="containerKnowMore">
                <div className="knowMore">
                    <h3>Saiba mais da Faculdade Única</h3>
                    <div className="containerCourses">
                        <div className="course">
                            <h4>Pós-Graduação</h4>
                            <p>Ver nossos cursos</p>
                        </div>
                        <div className="course">
                            <h4>Segunda Graduação</h4>
                            <p>Ver nossos cursos</p>
                        </div>
                        <div className="course">
                            <h4>Disciplinas Isoladas</h4>
                            <p>Ver nossos cursos</p>
                        </div>
                        <div className="course">
                            <h4>Cursos Livres</h4>
                            <p>Ver nossos cursos</p>
                        </div>
                    </div>
            </div>
            </div>
            <div className="others">
                <a href="#">Teste vocacional</a>
                <a href="#">Seja um embaixador</a>
                <a href="#">Fale com a gente</a>
                <a href="#">Quem somos</a>
                <a href="#">Privacidade</a>
                <a href="#">Quem somos</a>
                <a href="#">Termos de uso</a>
                <a href="#">Trabalhe Conosco</a>
            </div>
        </>
    )
}