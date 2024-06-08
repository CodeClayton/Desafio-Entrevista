import './identity.css'

export default function Identity(){
    return(
        <>
        <div className="indetity">
            <div className="identityItem">
                <div className="imgIdentity"  style={{backgroundImage: "url(/img/identidade/missao.png)"}}>
                    <img src="/img/identidade/fundo-identidade.png" className="basePhoto" />
                </div>
                    <div>
                        <h3>Missão</h3>
                        <p>Promover a transformação humana, desenvolvendo competências e habilidades por meio de educação com propósito e tecnologia.</p>
                    </div>
            </div>

            <div className="identityItem">
                <div className="imgIdentity"  style={{backgroundImage: "url(/img/identidade/visao.png)"}}>
                    <img src="/img/identidade/fundo-identidade.png" className="basePhoto" />
                </div>
                    <div>
                        <h3>Visão</h3>
                        <p>Ser uma instituição educacional de referência no Brasil, reconhecida pela excelência de seus cursos, alunos e profissionais.</p>
                    </div>
            </div>

            <div className="identityItem">
                <div className="imgIdentity"  style={{backgroundImage: "url(/img/identidade/valores.png)"}}>
                    <img src="/img/identidade/fundo-identidade.png" className="basePhoto" />
                </div>
                    <div>
                        <h3>Valores</h3>
                        <p>Excelência e qualidade, ética e honestidade, transformação social, autonomia responsável.</p>
                    </div>
            </div>
        </div>
        </>
    )
}