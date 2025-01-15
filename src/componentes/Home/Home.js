import React, { useState } from "react";
import "./Home.css";

const Home = () => {
    const [videos, setVideos] = useState([
        {
            categoria: "Front End",
            videos: [
                { id: 1, titulo: "Equipo Front End #AluraMás", img: "https://i.ytimg.com/vi/rpvrLaBQwgg/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDTEwGUL2wxW5XA2ktCOnOWkCM6Dg", descripcion: "¿Estás empezando tus estudios de Programación? ¿Te interesa todo lo que es la creación de Páginas Web Desarrollo de Softwares? ¿O estás pensando en cambiar de carrera y entrar a la maravillosa area de tecnología?" },
                { id: 2, titulo: "Cómo volverse un desarrollador Front End #AluraTips", img: "https://i.ytimg.com/vi/-Ou5c3A225k/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBKrjq2bpC7s80isGkf5W2apL1VbA", descripcion: "Terminé mis estudios, ¿y ahora? ¿Cómo puedo entrar al mercado laboral? ¿Cómo encontrar un trabajo front end? En este video nuestra instructor Barbara nos da algunos consejos para las personas que desean entrar en el área del desarrollo web." },
                
            ]
        },
        {
            categoria: "Back End",
            videos: [
                { id: 4, titulo: "Desmistificando el Back-End", img: "https://i.ytimg.com/vi/LLt7FreeHfQ/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLA6o1bvB4H0az0dX4MxFZ4WihW-DQ", descripcion: "¿Qué es backend?  ¿Por qué debería comenzar mi carrera con backend? ¿Cuáles son las skills necesarias para ser un buen desarrollador backend? ¿Qué hace un desarrollador backend en su dia a dia laboral? Esas y otras preguntas serán respondidas en este evento, en el que vamos a hablar con Maria Fernanda Ferreira y Diego Arguelles dos programadores Back End e Instructores de Alura." },
                { id: 5, titulo: "Explorando el poder del Back-End en el Desarrollo Web", img: "https://i.ytimg.com/vi/Z024LSCMqFk/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBzPCMrCKPZfyT8LifZdwaf_MEHew", descripcion: "¿Quieres saber más? Ve nuestros cursos." },
                
            ]
        },
        {
            categoria: "Innovación y Gestión",
            videos: [
                { id: 7, titulo: "¿Qué son las Soft Skills?", img: "https://i.ytimg.com/vi/vhwspfvI52k/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCD59Zlms8sWXb59qDSrP8u9Gs1zg", descripcion: "¿Qué son las Softskills y por qué es tan importante desarrollarlas para posicionarse en el mercado laboral? En este video de Alura Tips, Pri Stuani nos habla de las habilidades más buscadas por las empresas en sus profesionales y cómo las Soft Skills te ayudan en el día a día." },
                { id: 8, titulo: "7 Soft Skills más deseadas por las empresas #AluraMás", img: "https://i.ytimg.com/vi/_-9grhDhxiU/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCLRkXzV1Kcg5BObJuxs4ERysv8RA", descripcion: "Seguro que ya escuchaste hablar sobre las Soft Skills, pero ¿sabes cuáles son las 7 más buscadas por las empresas? Quédate en este video con nosotros que vamos a explicarte la importancia de estas habilidades y porque son tan requeridas en el mercado laboral." },
                
            ]
        }
    ]);
    
    const [modalVisible, setModalVisible] = useState(false);
    const [videoEditado, setVideoEditado] = useState(null);

    const eliminarVideo = (id) => {
        const nuevaLista = videos.map((categoria) => {
            const nuevaCategoria = { ...categoria };
            nuevaCategoria.videos = nuevaCategoria.videos.filter((video) => video.id !== id);
            return nuevaCategoria;
        });
        setVideos(nuevaLista);
    };

    const editarVideo = (id) => {
        const video = videos
            .flatMap((categoria) => categoria.videos)
            .find((video) => video.id === id);
        setVideoEditado(video);
        setModalVisible(true);
    };

    const guardarEdicion = () => {
        setVideos((prevVideos) =>
            prevVideos.map((categoria) => ({
                ...categoria,
                videos: categoria.videos.map((video) =>
                    video.id === videoEditado.id ? videoEditado : video
                ),
            }))
        );
        setModalVisible(false);
    };

    const manejarCambio = (e) => {
        const { name, value } = e.target;
        setVideoEditado({ ...videoEditado, [name]: value });
    };

    return (
        <div className="home">
            <h1>Lista de Videos</h1>
            <div className="videos">
                {videos.map((categoria) => (
                    <div key={categoria.categoria} className={`categoria ${categoria.categoria.replace(/\s+/g, '-').toLowerCase()}`}>
                        <h1>{categoria.categoria}</h1>
                        <div className="videos-list">
                            {categoria.videos.map((video) => (
                                <div key={video.id} className="video-card">
                                    <img src={video.img} alt={video.titulo} className="video-img" />
                                    <h2>{video.titulo}</h2>
                                    <p>{video.descripcion}</p>
                                    <div className="video-actions">
                                        <button
                                            className="boton editar"
                                            onClick={() => editarVideo(video.id)}
                                        >
                                            Editar
                                        </button>
                                        <button
                                            className="boton eliminar"
                                            onClick={() => eliminarVideo(video.id)}
                                        >
                                            Eliminar
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/*Edición*/}
            {modalVisible && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Editar Video</h2>
                        <label>
                            Título:
                            <input
                                type="text"
                                name="titulo"
                                value={videoEditado.titulo}
                                onChange={manejarCambio}
                            />
                        </label>
                        <label>
                            Descripción:
                            <textarea
                                name="descripcion"
                                value={videoEditado.descripcion}
                                onChange={manejarCambio}
                            />
                        </label>
                        <div className="modal-actions">
                            <button className="boton guardar" onClick={guardarEdicion}>
                                Guardar
                            </button>
                            <button className="boton cerrar" onClick={() => setModalVisible(false)}>
                                Cancelar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;








