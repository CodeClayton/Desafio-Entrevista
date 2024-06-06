import './header.css'
import Button from '../Button/Button'

export default function Header(){

    return(
        <>
            <nav className="navTopBar">
                <a className="navLink" href="#">Graduação</a>
                <a className="navLink" href="#">Segunda Graduação</a>
                <a className="navLink" href="#">Pós-Graduação</a>
                <a className="navLink" href="#">Disciplinas isoladas</a>
                <a className="navLink" href="#">Cursos Grátis</a>
                <a className="navLink" href="#">Bolsas de estudo</a>
                <i className="bi bi-circle-half"></i>
            </nav>
            <header>
                <a href='/'>
                    <img src='/img/logo.png' className='logo'></img>
                </a>
                <div className='searchBox'>
                    <i class="bi bi-search"></i>
                    <p className='textSearchBox'>Pesquise por um curso</p>
                </div>

                <a href='#' className='headerLink'>
                    Nossas Áreas <i class="bi bi-chevron-down"></i>
                </a>

                <a href='#' className='headerLink'>Vidas Transformadas</a>
                <a href='#' className='headerLink'>Blog</a>
                <a href='#' className='headerLink'>FAQ</a>

                <Button name="Já sou Aluno"/>
            </header>
        </>
    )

}