'use client'

import './header.css'
import React, { useState, useEffect } from 'react';
import Button from '../Button/Button';

export default function Header() {

    const [theme, setTheme] = useState('light');

    function toggleTheme() {
        setTheme(prevTheme => {
            const newTheme = prevTheme === 'light' ? 'dark' : 'light';
            return newTheme;
        });
    }

    useEffect(() => {
        console.log(theme);
        if (theme === 'dark') {
            document.body.classList.add('darkTheme');
        } else {
            document.body.classList.remove('darkTheme');
        }
        
        localStorage.setItem('theme', theme);
    }, [theme]);

    return(
        <>
            <nav className="navTopBar">
                <a className="navLink" href="#">Graduação</a>
                <a className="navLink" href="#">Segunda Graduação</a>
                <a className="navLink" href="#">Pós-Graduação</a>
                <a className="navLink" href="#">Disciplinas isoladas</a>
                <a className="navLink" href="#">Cursos Grátis</a>
                <a className="navLink" href="#">Bolsas de estudo</a>
                <i className="bi bi-circle-half" id='togleTheme' onClick={toggleTheme}></i>
            </nav>
            <nav className="navMobile">
                <i className="bi bi-chevron-down"></i>
                <a href='/'>
                    <img src='/img/logo.png' className='logoMob' ></img>
                </a>
                <i  className={`bi bi-circle-half ${theme === 'dark' ? 'darkTheme' : ''}`} id='togleThemeMob' ></i>
            </nav>
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
                <div className="hamburguerMenu">
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <div className="searchBox Mob">
                    <i className="bi bi-search"></i>
                    <input className='inputBox Mob' type="text" placeholder='Pesquise por um curso'/>
                </div>
            </div>
        </>
    )

}