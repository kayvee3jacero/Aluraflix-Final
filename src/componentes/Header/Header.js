import React, { useState } from "react";
import "./Header.css";
import Formulario from "../Formulario/Formulario";

function Header() {
    const [showForm, setShowForm] = useState(false);

    const handleButtonClick = () => {
        setShowForm(true);
    };

    const handleHomeClick = () => {
        setShowForm(false);
    };

    return (
        <div>
            <header className="header">
                <img
                    src="/img/logoaluraflix.png"
                    alt="Logo AluraFlix"
                    className="header-logo"
                />
                <button className="button" onClick={handleButtonClick}>
                    Nuevo Video
                </button>
                <button className="button" onClick={handleHomeClick}>
                    Home
                </button>
                
            </header>


            <main className="main-content">
                {showForm ? (
                    <Formulario />
                ) : (
                    <h1 class name="saludo">Bienvenido a AluraFlix</h1>
                )}
            </main>
        </div>
    );
}

export default Header;

