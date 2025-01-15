import React, { useState } from "react";
import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaOpciones from "../ListaOpciones";   
import Boton from "../Boton";

const Formulario = () => {
    
    const [Titulo, actualizarTitulo] = useState("")
    const [Imagen, actualizarImagen] = useState("")
    const [Video, actualizarVideo] = useState("")
    const [Descripcion, actualizarDescripcion] = useState("")
    const [Categoria, actualizarCategoria] = useState("")
    
    const manejarEnvio = (e) => {
        e.preventDefault();
        console.log("Formulario enviado");
        let datosAEnviar = {
            Titulo: Titulo,
            Imagen: Imagen,
            Video: Video,
            Descripcion: Descripcion
        }
    };

    return (
        <section className="formulario">
            <form onSubmit={manejarEnvio}>
                <h2>Crear Tarjeta</h2>
                <CampoTexto 
                titulo="Titulo" 
                placeholder="Ingresa un título" 
                required={true} 
                valor={Titulo} 
                actualizarValor={actualizarTitulo} />
                <ListaOpciones 
                valor = {Categoria} 
                actualizarCategoria= {actualizarCategoria} 
                required={true} />
                <CampoTexto 
                titulo="Imagen" 
                placeholder="El enlace es obligatorio" 
                required={true} 
                valor={Imagen} 
                actualizarValor={actualizarImagen} />
                <CampoTexto 
                titulo="Video" 
                placeholder="Ingrese el enlace del video" 
                required={true} 
                valor={Video} 
                actualizarValor={actualizarVideo} />
                <CampoTexto 
                titulo="Descripcion" 
                placeholder="¿De qué trata este video?" 
                required={true} 
                valor={Descripcion} 
                actualizarValor={actualizarDescripcion} />
                <Boton>
                    Guardar
                </Boton>
            </form>
        </section>
    );
};

export default Formulario;
