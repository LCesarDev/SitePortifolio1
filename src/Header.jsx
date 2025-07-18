import React from "react";
import {useNavigate } from "react-router-dom";
import './Header.css';

function Header() {
    const navigate = useNavigate();

    return(
        <header className="header-home">
            <img className="logo" src="/Ativo 4.png" alt="Logo da empresa" onClick={()=> navigate("/")} />
            
            <nav className="nav-menu" aria-label="Menu principal">
                <button className="home-button" onClick={()=> navigate("/")}>Home</button>
                
                <ul className="nav-links">
                    <li><button className="nav-button" onClick={()=> navigate("/Jogos")}>Jogos</button></li>
                    <li><button className="nav-button" onClick={()=> navigate("/Loja")}>Loja</button></li>
                    <li><button className="nav-button" onClick={()=> navigate("/Sobre")}>Sobre</button></li>
                    <li><button className="nav-button" onClick={()=> navigate("/Contato")}>Contato</button></li>
                </ul>
                <ul className="auth-buttons">
                    <li><button className="auth-button" onClick={()=> navigate("/Cadastrar")}>Cadastrar</button></li>
                    <li><button className="auth-button" onClick={()=> navigate("/Entrar")}>Entrar</button></li>
                </ul>
            </nav>
    </header>
    );

}

export default Header;