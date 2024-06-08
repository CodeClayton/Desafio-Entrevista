import GraduationLink from '../GraduationLink/GraduationLink'
import './graduation.css'

export default function Graduation(){
    return(
        <>
        <div className='graduation'>
            <h3>Graduação</h3>
            <div className="containerGraduations">
                <div className="graduationBox">
                    <GraduationLink name="Administração" />
                    <GraduationLink name="Análise e Desenvolvimento de Sistemas"/>
                    <GraduationLink name="Artes Visuais"/>
                    <GraduationLink name="Arquitetura e Urbanismo"/>
                    <GraduationLink name="Biblioteconomia"/>
                    <GraduationLink name="Ciência da Computação"/>
                    <GraduationLink name="Ciências Biológicas"/>
                    <GraduationLink name="Ciências Contábeis"/>
                    <GraduationLink name="Ciências Sociais"/>
                    <GraduationLink name="Educação Especial"/>
                </div>

                <div className="graduationBox">
                    <GraduationLink name="Bacharelado em Educação Física"/>
                    <GraduationLink name="Licenciatura em Educação Física"/>
                    <GraduationLink name="Ensino Religioso"/>
                    <GraduationLink name="Empreendedorismo"/>
                    <GraduationLink name="Engenharia Ambiental e Sanitária"/>
                    <GraduationLink name="Engenharia Civil"/>
                    <GraduationLink name="Engenharia de Controle e Automação"/>
                    <GraduationLink name="Engenharia de Produção"/>
                    <GraduationLink name="Engenharia Elétrica"/>
                    <GraduationLink name="Engenharia Mecânica"/>
                </div>

                <div className="graduationBox">
                    <GraduationLink name="Filosofia"/>
                    <GraduationLink name="Física"/>
                    <GraduationLink name="Geografia"/>
                    <GraduationLink name="Geoprocessamento"/>
                    <GraduationLink name="Gestão Ambiental"/>
                    <GraduationLink name="Gestão de Cidades Inteligentes"/>
                    <GraduationLink name="Gestão de Recursos Humanos"/>
                    <GraduationLink name="Gestão Financeira"/>
                    <GraduationLink name="Gestão Pública"/>
                    <GraduationLink name="História"/>
                </div>

                <div className="graduationBox">
                    <GraduationLink name="Bacharelado em Letras-Libras"/>
                    <GraduationLink name="Licenciatura em Letras-Libras"/>
                    <GraduationLink name="Letras-Português"/>
                    <GraduationLink name="Letras-Português e Espanhol"/>
                    <GraduationLink name="Letras-Português e Inglês"/>
                    <GraduationLink name="Logística"/>
                    <GraduationLink name="Marketing"/>
                    <GraduationLink name="Matemática"/>
                    <GraduationLink name="Pedagogia"/>
                    <GraduationLink name="Processos Gerenciais"/>
                </div>

                <div className="graduationBox">
                    <GraduationLink name="Psicopedagogia"/>
                    <GraduationLink name="Publicidade e Propaganda"/>
                    <GraduationLink name="Química"/>
                    <GraduationLink name="Segurança no Trabalho"/>
                    <GraduationLink name="Serviço Social"/>
                    <GraduationLink name="Serviços Jurídicos e Notariais"/>
                    <GraduationLink name="Sistemas de Telecomunicações"/>
                    <GraduationLink name="Sistemas para Internet"/>
                    <GraduationLink name="Sistemas de Informação"/>
                    <GraduationLink name="Teologia"/>
                </div>
            </div>
            </div>
        </>
    )
}