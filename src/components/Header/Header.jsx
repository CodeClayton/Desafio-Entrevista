'use client'

import React, { useState, useEffect } from 'react';
import './header.css';
import Button from '../Button/Button';

export default function Header() {
    const [theme, setTheme] = useState('');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isHeaderOpen, setIsHeaderOpen] = useState(false);

    function toggleTheme() {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    }

    function toggleMenu() {
        setIsHeaderOpen(!isHeaderOpen);
        if (isHeaderOpen) {
            setIsHeaderOpen(false);
        } else if (isMenuOpen) {
            setIsMenuOpen(false);
        }
    }

    function toggleNavTop() {
        setIsMenuOpen(!isMenuOpen);
        if (isHeaderOpen) {
            setIsHeaderOpen(false);
        } else if (isMenuOpen) {
            setIsMenuOpen(false);
        }
    }

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, []);

    useEffect(() => {
        if (theme === 'dark') {
            document.body.classList.add('darkTheme');
        } else {
            document.body.classList.remove('darkTheme');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <>
            <nav className="navTopBar">
                <a className="navLink" href="#">Graduação</a>
                <a className="navLink" href="#">Segunda Graduação</a>
                <a className="navLink" href="#">Pós-Graduação</a>
                <a className="navLink" href="#">Disciplinas isoladas</a>
                <a className="navLink" href="#">Cursos Grátis</a>
                <a className="navLink" href="#">Bolsas de estudo</a>
                <i className="bi bi-circle-half" id='toggleTheme' onClick={toggleTheme}></i>
            </nav>
            <nav className="navMobile">
                <i className={`bi bi-chevron-down ${isMenuOpen ? 'active' : ''}`} id='toggleMenuIcon' onClick={toggleNavTop}></i>
                <a href='/'>
                    <img src='/img/logo.png' className='logoMob' ></img>
                </a>
                <i  className="bi bi-circle-half"  onClick={toggleTheme} id='toggleThemeMob' ></i>
            </nav>
            <div className={`containerNavMob ${isMenuOpen ? 'active' : ''}`}>
                <a className="navLink" href="#">Graduação</a>
                <a className="navLink" href="#">Segunda Graduação</a>
                <a className="navLink" href="#">Pós-Graduação</a>
                <a className="navLink" href="#">Disciplinas isoladas</a>
                <a className="navLink" href="#">Cursos Grátis</a>
                <a className="navLink" href="#">Bolsas de estudo</a>
            </div>
            <header>
                <a href='/'>
                    <img src='/img/logo.png' className='logo'></img>
                </a>
                <div className="searchBox">
                    <i className="bi bi-search"></i>
                    <input className='inputBox' type="text" placeholder='Pesquise por um curso'/>
                </div>

                <a href='#' className='headerLink'>
                    Nossas Áreas <i className="bi bi-chevron-down"></i>
                </a>

                <a href='#' className='headerLink'>Vidas Transformadas</a>
                <a href='#' className='headerLink'>Blog</a>
                <a href='#' className='headerLink'>FAQ</a>

                <Button name="Já sou Aluno"/>
            </header>

            <div className="headerMob">
                <div className="hamburguerMenu" onClick={toggleMenu}>
                    <div className={`bar ${isHeaderOpen ? 'bar1' : ''}`}></div>
                    <div className={`bar ${isHeaderOpen ? 'bar2' : ''}`}></div>
                    <div className={`bar ${isHeaderOpen ? 'bar3' : ''}`}></div>
                </div>
                <div className="searchBox Mob">
                    <i className="bi bi-search"></i>
                    <input className='inputBox Mob' type="text" placeholder='Pesquise por um curso'/>
                </div>
            </div>
            <div className={`containerHeaderMob ${isHeaderOpen ? 'activeHeader' : ''}`}>
                <a href='#' className='headerLink'>
                    Nossas Áreas <i className="bi bi-chevron-down"></i>
                </a>

                <a href='#' className='headerLink'>Vidas Transformadas</a>
                <a href='#' className='headerLink'>Blog</a>
                <a href='#' className='headerLink'>FAQ</a>
            </div>
        </>
    )
}
