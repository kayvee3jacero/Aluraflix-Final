import React from "react";
import "./Video.css";

const Video = ({ video }) => {
    return (
        <div className="video">
            <div className="encabezado">
                <img src={video.imagen} alt={video.titulo} />
            </div>
            <div className="info">
                <h4>{video.titulo}</h4>
                <p>{video.descripcion}</p>
            </div>
        </div>
    );
};

export default Video;
